package com.ddoya.song.song.service;

import com.ddoya.song.common.entity.Artist;
import com.ddoya.song.common.entity.SongProblem;
import com.ddoya.song.common.dto.SongDto;
import com.ddoya.song.common.service.SingleSongService;
import com.ddoya.song.global.client.AuthServiceClient;
import com.ddoya.song.song.dto.request.HistoryReqDto;
import com.ddoya.song.song.dto.response.ArtistSongResultDto;
import com.ddoya.song.song.dto.response.EntireArtistResultDto;
import com.ddoya.song.song.dto.response.EntireSongResultDto;
import com.ddoya.song.song.dto.request.SongProblemReqDto;
import com.ddoya.song.song.dto.response.SongProblemResultDto;
import com.ddoya.song.song.repository.ArtistSongRepository;
import com.ddoya.song.song.repository.EntireArtistRepository;
import com.ddoya.song.song.repository.EntireSongRepository;
import com.ddoya.song.song.repository.SongProblemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
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


    AuthServiceClient authServiceClient;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

    @Override
    public EntireSongResultDto getEntireSongList() {
        System.out.println("-------------------- entire song service ------------------");
        System.out.println("-------------------- 노래 전체 조회 ------------------");
        List<SongProblem> entireSongList = entireSongRepository.findAll(Sort.by(Sort.Direction.DESC, "hit"));
        // hit 높은 순서로 정렬

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
        System.out.println("-------------------- song service ------------------");
        System.out.println("-------------------- 선택한 노래의 정보 조회 ------------------");
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
        System.out.println("-------------------- entire artist service ------------------");
        System.out.println("-------------------- 가수 전체 조회 ------------------");
        List<Artist> artistList = entireArtistRepository.findAll();
        System.out.println(artistList);

        EntireArtistResultDto entireArtistResultDto = new EntireArtistResultDto();
        entireArtistResultDto.setArtistList(artistList);
        entireArtistResultDto.setArtistCnt(artistList.size());
        entireArtistResultDto.setResult(SUCCESS);
        return entireArtistResultDto;
    }

    @Override
    public ArtistSongResultDto getArtistSong(Integer artistId) {
        System.out.println("-------------------- artist song service ------------------");
        System.out.println("-------------------- 선택한 아티스트의 노래 조회 ------------------");
        List<SongProblem> songList = artistSongRepository.findByArtist_ArtistId(artistId);

        ArtistSongResultDto artistSongResultDto = new ArtistSongResultDto();

        ArrayList<SongDto> songDtoList = new ArrayList<>();

        for (SongProblem song : songList) {
            SongDto songDto = singleSongService.makeSongDto(song);
            songDtoList.add(songDto);
        }

        artistSongResultDto.setResult(FAIL);
        if (songDtoList.size() != 0) {
            artistSongResultDto.setSongList(songDtoList);
            artistSongResultDto.setSongCnt(songDtoList.size());
            artistSongResultDto.setResult(SUCCESS);
        }
        return artistSongResultDto;
    }
}
