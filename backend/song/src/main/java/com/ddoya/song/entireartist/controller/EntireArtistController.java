package com.ddoya.song.entireartist.controller;

import com.ddoya.song.entireartist.dto.EntireArtistResultDto;
import com.ddoya.song.entireartist.service.EntireArtistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/song/artist")
public class EntireArtistController {

    @Autowired
    EntireArtistService entireArtistService;

    @GetMapping("/all")
    public ResponseEntity<EntireArtistResultDto> getArtistList() {
        System.out.println("-------------------- entire artist service ------------------");
        System.out.println("-------------------- 가수 전체 조회 ------------------");
        EntireArtistResultDto entireArtistResultDto = entireArtistService.getArtistList();
        System.out.println("결과 = " + entireArtistResultDto);
        return ResponseEntity.ok().body(entireArtistResultDto);
    }
}
