package com.ddoya.song.artist.service;

import com.ddoya.song.artist.dto.ArtistSongResultDto;
import com.ddoya.song.artist.repository.ArtistSongRepository;
import com.ddoya.song.common.Entity.Artist;
import com.ddoya.song.artist.dto.EntireArtistResultDto;
import com.ddoya.song.artist.repository.EntireArtistRepository;
import com.ddoya.song.common.Entity.SongProblem;
import com.ddoya.song.common.dto.SongDto;
import com.ddoya.song.common.service.SingleSongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ArtistServiceImpl implements ArtistService {

    @Autowired
    EntireArtistRepository entireArtistRepository;
    @Autowired
    ArtistSongRepository artistSongRepository;
    @Autowired
    SingleSongService singleSongService;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

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
    public ArtistSongResultDto getArtistSong(int artistId) {
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

//    public SongDto makeSongDto(SongProblem song) {
//        SongDto songDto = new SongDto();
//        songDto.setSongId(song.getSongProblemId());
//        songDto.setSongTitle(song.getSongTitle());
//        songDto.setCoverImg(song.getCoverImg());
//        songDto.setAlbumImg(song.getAlbumImg());
//
//        Artist artist = song.getArtist();
//        songDto.setArtistName(artist.getArtistName());
//        return songDto;
//    }

}
