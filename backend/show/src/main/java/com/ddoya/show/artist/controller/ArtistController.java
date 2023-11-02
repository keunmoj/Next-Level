package com.ddoya.show.artist.controller;

import com.ddoya.show.artist.dto.ArtistsResultDto;
import com.ddoya.show.artist.service.ArtistService;
import com.ddoya.show.common.dto.ShowClipsResultDto;
import com.ddoya.show.common.response.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
    public ResponseEntity<ApiResponse> getArtistList() {
        System.out.println("-------------------- show artist service ------------------");
        System.out.println("-------------------- 두번 이상 나온 연예인 조회 ------------------");
        ArtistsResultDto artists = artistService.getArtistList();

        return ResponseEntity.ok(
                ApiResponse.builder().status(HttpStatus.OK.value()).message("아티스트 조회 완료").data(artists)
                        .build());
    }

    @GetMapping("/clip/{artistId}")
    public ResponseEntity<ApiResponse> getArtistClips(@PathVariable Integer artistId) {
        System.out.println("-------------------- artist service ------------------");
        System.out.println("-------------------- 연예인의 출연 클립 조회 ------------------");
        ShowClipsResultDto showClips = artistService.getArtistsClips(artistId);

        return ResponseEntity.ok(
                ApiResponse.builder().status(HttpStatus.OK.value()).message("클립 조회 완료").data(showClips)
                        .build());
    }
}
