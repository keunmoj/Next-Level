package com.ddoya.song.song.controller;

import com.ddoya.song.song.dto.EntireSongResultDto;
import com.ddoya.song.song.dto.SongProblemResultDto;
import com.ddoya.song.song.service.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/song")
public class SongController {

    @Autowired
    SongService songService;
    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

    @GetMapping("/all")
    public ResponseEntity<EntireSongResultDto> getSongList() {
        System.out.println("-------------------- entire song service ------------------");
        System.out.println("-------------------- 노래 전체 조회 ------------------");
        EntireSongResultDto entireSongResultDto = songService.getEntireSongList();
        System.out.println("결과 = " + entireSongResultDto);
        return ResponseEntity.ok().body(entireSongResultDto);
    }

    @GetMapping("/{song_problem_id}")
    public ResponseEntity<SongProblemResultDto> getSongProblem(@PathVariable(name = "song_problem_id") int songProblemId) {
        System.out.println("-------------------- song service ------------------");
        System.out.println("-------------------- 선택한 노래의 정보 조회 ------------------");
        SongProblemResultDto songProblemResultDto = songService.getSongInfo(songProblemId);
        System.out.println("결과 + " + songProblemResultDto);
        return ResponseEntity.ok().body(songProblemResultDto);
    }

    @PostMapping("/finish/{song_problem_id}")
    public Map<String, Object> finishSongProblem(@PathVariable(name = "song_problem_id") int songProblemId) {
        System.out.println("-------------------- finish song service ------------------");
        System.out.println("-------------------- 선택한 노래 게임 완료 ------------------");

        return songService.incrementHit(songProblemId);
    }
}

