package com.ddoya.song.song.service;

import com.ddoya.song.common.Entity.SongProblem;
import com.ddoya.song.song.dto.EntireSongResultDto;
import com.ddoya.song.song.repository.EntireSongRepository;
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
    public EntireSongResultDto getEntireSongList() {
        System.out.println("-------------------- entire song service ------------------");
        System.out.println("-------------------- 노래 전체 조회 ------------------");
        List<SongProblem> entireSongList = entireSongRepository.findAll();
        System.out.println(entireSongList);

        EntireSongResultDto entireSongResultDto = new EntireSongResultDto();
        entireSongResultDto.setEntireSongList(entireSongList);
        entireSongResultDto.setSongCnt(entireSongList.size());
        entireSongResultDto.setResult(SUCCESS);
        return entireSongResultDto;
    }



}
