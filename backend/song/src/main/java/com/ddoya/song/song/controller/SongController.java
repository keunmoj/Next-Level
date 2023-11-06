package com.ddoya.song.song.controller;

import com.ddoya.song.song.dto.response.ArtistSongResultDto;
import com.ddoya.song.song.dto.response.EntireArtistResultDto;
import com.ddoya.song.common.dto.ApiResponse;
import com.ddoya.song.song.dto.response.EntireSongResultDto;
import com.ddoya.song.song.dto.request.SongProblemReqDto;
import com.ddoya.song.song.dto.response.SongProblemResultDto;
import com.ddoya.song.song.dto.response.SongProblemsResDto;
import com.ddoya.song.song.service.SongService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

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
        return ResponseEntity.ok().body(entireSongResultDto);
    }

    @GetMapping("/problem/{song_problem_id}")
    public ResponseEntity<SongProblemResultDto> getSongProblem(@PathVariable(name = "song_problem_id") int songProblemId) {
        System.out.println("-------------------- song service ------------------");
        System.out.println("-------------------- 선택한 노래의 정보 조회 ------------------");
        SongProblemResultDto songProblemResultDto = songService.getSongInfo(songProblemId);
        return ResponseEntity.ok().body(songProblemResultDto);
    }

    @PostMapping("/problem/result")
    public ResponseEntity<ApiResponse> addSongProlemScore(HttpServletRequest httpServletRequest,
        @Valid @RequestBody SongProblemReqDto songProblemReqDto) {
        songService.addSongProblemScore(
                Integer.parseInt(httpServletRequest.getHeader("X-Authorization-Id")),
                songProblemReqDto);

        return ResponseEntity.ok(
                ApiResponse.builder().status(HttpStatus.OK.value()).message("문제 풀이 결과 등록 완료")
                        .data(null).build());
    }


    // artist
    @GetMapping("/artist/all")
    public ResponseEntity<EntireArtistResultDto> getArtistList() {
        System.out.println("-------------------- entire artist service ------------------");
        System.out.println("-------------------- 가수 전체 조회 ------------------");
        EntireArtistResultDto entireArtistResultDto = songService.getArtistList();
        return ResponseEntity.ok().body(entireArtistResultDto);
    }

    @GetMapping("/artist/{artist_id}")
    public ResponseEntity<ArtistSongResultDto> getArtistSong(@PathVariable(name = "artist_id") int artistId) {
        System.out.println("-------------------- artist song service ------------------");
        System.out.println("-------------------- 선택한 아티스트의 노래 조회 ------------------");
        ArtistSongResultDto artistSongResultDto = songService.getArtistSong(artistId);
        return ResponseEntity.ok().body(artistSongResultDto);
    }

    @GetMapping("/clips")
    ResponseEntity<Object> getSongClips(@RequestParam List<Integer> problemIds) {
        SongProblemsResDto songClipsResDto = songService.getSongClips(problemIds);

        return ResponseEntity.ok(songClipsResDto);
    }

}

