package com.ddoya.song.artist.controller;

import com.ddoya.song.artist.dto.ArtistSongResultDto;
import com.ddoya.song.artist.dto.EntireArtistResultDto;
import com.ddoya.song.artist.service.ArtistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/song/artist")
public class ArtistController {

    @Autowired
    ArtistService artistService;

    @GetMapping("/all")
    public ResponseEntity<EntireArtistResultDto> getArtistList() {
        System.out.println("-------------------- entire artist service ------------------");
        System.out.println("-------------------- 가수 전체 조회 ------------------");
        EntireArtistResultDto entireArtistResultDto = artistService.getArtistList();
        System.out.println("결과 = " + entireArtistResultDto);
        return ResponseEntity.ok().body(entireArtistResultDto);
    }

    @GetMapping("/{artist_id}")
    public ResponseEntity<ArtistSongResultDto> getArtistSong(@PathVariable(name = "artist_id") int artistId) {
        ArtistSongResultDto artistSongResultDto = artistService.getArtistSong(artistId);
        System.out.println("결과 = " + artistSongResultDto);
        return ResponseEntity.ok().body(artistSongResultDto);
    }
}
