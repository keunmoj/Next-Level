package com.ddoya.song.song.controller;

import com.ddoya.song.song.dto.EntireSongResultDto;
import com.ddoya.song.song.service.EntireSongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/song")
public class EntireSongController {

    @Autowired
    EntireSongService entireSongService;
    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

    @GetMapping("/all")
    public ResponseEntity<EntireSongResultDto> getSongList() {
        System.out.println("-------------------- entire song service ------------------");
        System.out.println("-------------------- 노래 전체 조회 ------------------");
        EntireSongResultDto entireSongResultDto = entireSongService.getEntireSongList();
        System.out.println("결과 = " + entireSongResultDto);
        return ResponseEntity.ok().body(entireSongResultDto);
    }
}

