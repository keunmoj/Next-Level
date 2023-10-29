package com.ddoya.song.song.service;

import com.ddoya.song.common.Entity.Artist;
import com.ddoya.song.common.Entity.SongProblem;
import com.ddoya.song.common.dto.SongDto;
import com.ddoya.song.common.service.SingleSongService;
import com.ddoya.song.song.dto.EntireSongResultDto;
import com.ddoya.song.song.dto.SongProblemResultDto;
import com.ddoya.song.song.repository.EntireSongRepository;
import com.ddoya.song.song.repository.SongProblemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SongServiceImpl implements SongService {

    @Autowired
    EntireSongRepository entireSongRepository;
    @Autowired
    SongProblemRepository songProblemRepository;
    @Autowired
    SingleSongService singleSongService;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

    @Override
    public EntireSongResultDto getEntireSongList() {
        System.out.println("-------------------- entire song service ------------------");
        System.out.println("-------------------- 노래 전체 조회 ------------------");
        List<SongProblem> entireSongList = entireSongRepository.findAll();

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

//        EntireSongResultDto entireSongResultDto = new EntireSongResultDto();
//        entireSongResultDto.setEntireSongList(entireSongList);
//        entireSongResultDto.setSongCnt(entireSongList.size());
//        entireSongResultDto.setResult(SUCCESS);
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


//        SongProblemResultDto songProblemResultDto = new SongProblemResultDto();
//        songProblemResultDto.setSongInfo(songList);
//        songProblemResultDto.setResult(SUCCESS);
        return songProblemResultDto;
    }
}
