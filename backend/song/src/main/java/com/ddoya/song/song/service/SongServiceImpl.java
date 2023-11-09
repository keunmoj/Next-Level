package com.ddoya.song.song.service;

import com.ddoya.song.common.dto.SongDto;
import com.ddoya.song.common.entity.SongProblem;
import com.ddoya.song.common.service.SingleSongService;
import com.ddoya.song.global.client.AuthServiceClient;
import com.ddoya.song.song.dto.request.HistoryReqDto;
import com.ddoya.song.song.dto.request.SongProblemReqDto;
import com.ddoya.song.song.dto.response.ArtistDto;
import com.ddoya.song.song.dto.response.ArtistSongResultDto;
import com.ddoya.song.song.dto.response.EntireArtistResultDto;
import com.ddoya.song.song.dto.response.EntireSongResultDto;
import com.ddoya.song.song.dto.response.SongProblemResDto;
import com.ddoya.song.song.dto.response.SongProblemResultDto;
import com.ddoya.song.song.dto.response.SongProblemsResDto;
import com.ddoya.song.song.repository.ArtistSongRepository;
import com.ddoya.song.song.repository.EntireArtistRepository;
import com.ddoya.song.song.repository.EntireSongRepository;
import com.ddoya.song.song.repository.SongProblemRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class SongServiceImpl implements SongService {

    @Autowired
    EntireSongRepository entireSongRepository;
    @Autowired
    SongProblemRepository songProblemRepository;
    @Autowired
    EntireArtistRepository entireArtistRepository;
    @Autowired
    ArtistSongRepository artistSongRepository;
    @Autowired
    SingleSongService singleSongService;

    @Autowired
    AuthServiceClient authServiceClient;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

    @Override
    public EntireSongResultDto getEntireSongList() {
        List<SongProblem> entireSongList = entireSongRepository.findAllByOrderByHitDesc();

        EntireSongResultDto entireSongResultDto = new EntireSongResultDto();

        ArrayList<SongDto> songList = new ArrayList<>();

        for (SongProblem song : entireSongList) {
            SongDto songDto = singleSongService.makeSongDto(song);
            songList.add(songDto);
        }

        entireSongResultDto.setResult(FAIL);
        if (songList.size() != 0) {
            entireSongResultDto.setEntireSongList(songList);
            entireSongResultDto.setSongCnt(songList.size());
            entireSongResultDto.setResult(SUCCESS);
        }

        return entireSongResultDto;
    }

    @Override
    public SongProblemResultDto getSongInfo(int songProblemId) {
        SongProblemResultDto songProblemResultDto = new SongProblemResultDto();

        try {
            // 객체 없으면 예외를 발생시킨다.
            SongProblem songInfo = songProblemRepository.findBySongProblemId(songProblemId).orElseThrow();
            songProblemResultDto.setSongProblem(songInfo);
            songProblemResultDto.setResult(SUCCESS);
        } catch (Exception e) {
            e.printStackTrace();
            songProblemResultDto.setResult(FAIL);
        }
        System.out.println(songProblemResultDto);

        return songProblemResultDto;
    }

    public void addSongProblemScore(Integer userId, SongProblemReqDto songProblemReqDto) {
        SongProblem songProblem = songProblemRepository.findBySongProblemId(
                songProblemReqDto.getSongProblemId())
                .orElseThrow();
        songProblem.updateHit();

        ResponseEntity<Object> response = authServiceClient.addProblemHistory(
                HistoryReqDto.builder().userId(userId).songProblemReqDto(songProblemReqDto).build());
    }

    // artist
    @Override
    public EntireArtistResultDto getArtistList() {
        List<ArtistDto> artistList = entireArtistRepository.findSongArtists();
        System.out.println(artistList);

        EntireArtistResultDto entireArtistResultDto = new EntireArtistResultDto();
        entireArtistResultDto.setArtistList(artistList);
        entireArtistResultDto.setArtistCnt(artistList.size());
        entireArtistResultDto.setResult(SUCCESS);
        return entireArtistResultDto;
    }

    @Override
    public ArtistSongResultDto getArtistSong(Integer artistId) {
        List<SongProblem> songList = artistSongRepository.findByArtist_ArtistId(artistId);

        ArrayList<SongDto> songDtoList = new ArrayList<>();

        for (SongProblem song : songList) {
            SongDto songDto = singleSongService.makeSongDto(song);
            songDtoList.add(songDto);
        }

        if (songDtoList.size() != 0) {
            return ArtistSongResultDto.builder().songList(songDtoList).songCnt(songDtoList.size()).result(SUCCESS).build();
        }
        return ArtistSongResultDto.builder().result(FAIL).build();
    }

    @Override
    public SongProblemsResDto getSongClips(List<Integer> problemIds) {
        List<SongProblemResDto> songProblems = songProblemRepository.findAllBySongProblemIdIn(
            problemIds).stream().map(SongProblemResDto::new).collect(Collectors.toList());

        return new SongProblemsResDto(songProblems.size(), songProblems);
    }
}
