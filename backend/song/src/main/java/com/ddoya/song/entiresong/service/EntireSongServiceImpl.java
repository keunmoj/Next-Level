package com.ddoya.song.entiresong.service;

import com.ddoya.song.common.Entity.SongProblem;
import com.ddoya.song.entiresong.dto.EntireSongResultDto;
import com.ddoya.song.entiresong.repository.EntireSongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EntireSongServiceImpl implements EntireSongService {

    @Autowired
    EntireSongRepository entireSongRepository;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

    @Override
    public EntireSongResultDto getSongList() {
        System.out.println("-------------------- entire song service ------------------");
        System.out.println("-------------------- 노래 전체 조회 ------------------");
        List<SongProblem> songList = entireSongRepository.findAll();
        System.out.println(songList);

        EntireSongResultDto entireSongResultDto = new EntireSongResultDto();
        entireSongResultDto.setSongList(songList);
        entireSongResultDto.setSongCnt(songList.size());
        entireSongResultDto.setResult(SUCCESS);
        return entireSongResultDto;
    }



}
