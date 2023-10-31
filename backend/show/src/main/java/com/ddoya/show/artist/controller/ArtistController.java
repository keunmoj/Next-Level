package com.ddoya.show.artist.controller;

import com.ddoya.show.artist.dto.ArtistShowResultDto;
import com.ddoya.show.artist.dto.EntireArtistResultDto;
import com.ddoya.show.artist.service.ArtistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/show/artist")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true", allowedHeaders = "*", methods = {
        RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS,
        RequestMethod.HEAD })
public class ArtistController {

    @Autowired
    ArtistService artistService;

    @GetMapping("/all")
    public ResponseEntity<EntireArtistResultDto> getArtistList() {
        System.out.println("-------------------- entire artist service ------------------");
        System.out.println("-------------------- 연예인 전체 조회 ------------------");
        EntireArtistResultDto entireArtistResultDto = artistService.getArtistList();
        System.out.println("결과 = " + entireArtistResultDto);
        return ResponseEntity.ok().body(entireArtistResultDto);
    }

    @GetMapping("/clip/{artist_id}")
    public ResponseEntity<ArtistShowResultDto> getArtistShow(@PathVariable(name = "artist_id") int artistId) {
        System.out.println("-------------------- artist service ------------------");
        System.out.println("-------------------- 연예인의 출연 클립 조회 ------------------");
        ArtistShowResultDto artistShowResultDto = artistService.getArtistShow(artistId);
        System.out.println("결과 = " + artistShowResultDto);
        return ResponseEntity.ok().body(artistShowResultDto);
    }
}
