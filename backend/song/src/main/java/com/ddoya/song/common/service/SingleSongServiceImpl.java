package com.ddoya.song.common.service;

import com.ddoya.song.common.entity.Artist;
import com.ddoya.song.common.entity.SongProblem;
import com.ddoya.song.common.dto.SongDto;
import org.springframework.stereotype.Service;

@Service
public class SingleSongServiceImpl implements SingleSongService{

    // 노래 제목, 가수명 등 필요한 정보만 담기 위함
    // artist, song에서 모두 사용하므로 common에 작성
    @Override
    public SongDto makeSongDto(SongProblem song) {
        SongDto songDto = new SongDto();
        songDto.setSongId(song.getSongProblemId());
        songDto.setSongTitle(song.getSongTitle());
        songDto.setCoverImg(song.getCoverImg());
        songDto.setAlbumImg(song.getAlbumImg());

        Artist artist = song.getArtist();
        songDto.setArtistName(artist.getArtistName());
        return songDto;
    }


}
