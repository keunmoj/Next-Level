package com.ddoya.song.song;

import static com.epages.restdocs.apispec.MockMvcRestDocumentationWrapper.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.get;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.responseFields;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.ddoya.song.song.service.SongServiceImpl;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.restdocs.operation.preprocess.Preprocessors;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
@AutoConfigureRestDocs
@ActiveProfiles(profiles = {"prod"})
public class SongControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    private SongServiceImpl songService;

    @Test
    @DisplayName("노래 전체 조회 테스트")
    void getSongListTest() throws Exception {

        mockMvc.perform(get("/api/song/all"))
            .andDo(print())
            .andExpect(status().isOk())
            .andDo(document("song-list",
                Preprocessors.preprocessRequest(Preprocessors.prettyPrint()),
                Preprocessors.preprocessResponse(Preprocessors.prettyPrint()),
                responseFields(
                    fieldWithPath("result").type(JsonFieldType.NUMBER).description("조회 결과 코드"),
                    fieldWithPath("songCnt").type(JsonFieldType.NUMBER).description("노래 수"),
                    fieldWithPath("entireSongList.[].songId").type(JsonFieldType.NUMBER).description("노래 번호"),
                    fieldWithPath("entireSongList.[].songTitle").type(JsonFieldType.STRING).description("제목"),
                    fieldWithPath("entireSongList.[].albumImg").type(JsonFieldType.VARIES).description("앨범 이미지"),
                    fieldWithPath("entireSongList.[].coverImg").type(JsonFieldType.VARIES)
                        .description("커버(썸네일) 이미지"),
                    fieldWithPath("entireSongList.[].artistName").type(JsonFieldType.STRING).description("가수명")
                )));
    }

    @Test
    @DisplayName("선택한 노래 조회 테스트")
    void getSongProblemTest() throws Exception {

        mockMvc.perform(get("/api/song/problem/{song_problem_id}", 1))
            .andDo(print())
            .andExpect(status().isOk())
            .andDo(document("song-problem",
                Preprocessors.preprocessRequest(Preprocessors.prettyPrint()),
                Preprocessors.preprocessResponse(Preprocessors.prettyPrint()),
                responseFields(
                    fieldWithPath("result").type(JsonFieldType.NUMBER).description("조회 결과 코드"),
                    fieldWithPath("songProblem.songProblemId").type(JsonFieldType.NUMBER).description("노래 번호"),
                    fieldWithPath("songProblem.songTitle").type(JsonFieldType.STRING).description("제목"),
                    fieldWithPath("songProblem.albumImg").type(JsonFieldType.VARIES).description("앨범 이미지"),
                    fieldWithPath("songProblem.coverImg").type(JsonFieldType.VARIES)
                        .description("커버(썸네일) 이미지"),
                    fieldWithPath("songProblem.hit").type(JsonFieldType.NUMBER).description("조회수"),
                    fieldWithPath("songProblem.script").type(JsonFieldType.STRING)
                        .description("가사"),
                    fieldWithPath("songProblem.initial").type(JsonFieldType.STRING)
                        .description("초성"),
                    fieldWithPath("songProblem.songStartTime").type(JsonFieldType.STRING)
                        .description("시작 시간"),
                    fieldWithPath("songProblem.songEndTime").type(JsonFieldType.STRING)
                        .description("끝 시간"),
                    fieldWithPath("songProblem.videoId").type(JsonFieldType.STRING)
                        .description("영상 ID"),
                    fieldWithPath("songProblem.artist.artistId").type(JsonFieldType.NUMBER)
                        .description("가수 번호"),
                    fieldWithPath("songProblem.artist.isGroup").type(JsonFieldType.NUMBER)
                        .description("그룹 여부"),
                    fieldWithPath("songProblem.artist.image").type(JsonFieldType.VARIES)
                        .description("프로필 사진 URL"),
                    fieldWithPath("songProblem.artist.groupName").type(JsonFieldType.VARIES)
                        .description("그룹명"),
                    fieldWithPath("songProblem.artist.artistName").type(JsonFieldType.STRING)
                        .description("이름")
                )));
    }

//    @Test
//    @DisplayName("게임 종료 테스트")
//    void getUserInformationTest() throws Exception {
//
//        mockMvc.perform(post("/api/song/finish/{song_problem_id}", 1))
//            .andDo(print())
//            .andExpect(status().isOk())
//            .andDo(document("song-problem-finish"));
//    }

    @Test
    @DisplayName("가수 전체 조회 테스트")
    void getArtistListTest() throws Exception {

        mockMvc.perform(get("/api/song/artist/all"))
            .andDo(print())
            .andExpect(status().isOk())
            .andDo(document("artist-list",
                Preprocessors.preprocessRequest(Preprocessors.prettyPrint()),
                Preprocessors.preprocessResponse(Preprocessors.prettyPrint()),
                responseFields(
                    fieldWithPath("result").type(JsonFieldType.NUMBER).description("조회 결과 코드"),
                    fieldWithPath("artistCnt").type(JsonFieldType.NUMBER).description("가수 수"),
                    fieldWithPath("artistList.[].artistId").type(JsonFieldType.NUMBER)
                        .description("가수 번호"),
                    fieldWithPath("artistList.[].image").optional().type(JsonFieldType.STRING)
                        .description("이미지"),
                    fieldWithPath("artistList.[].groupName").optional().type(JsonFieldType.VARIES)
                        .description("그룹명"),
                    fieldWithPath("artistList.[].artistName").type(JsonFieldType.STRING)
                        .description("가수명")
                )));
    }

    @Test
    @DisplayName("가수의 노래 조회 테스트")
    void getArtistSongTest() throws Exception {

        mockMvc.perform(get("/api/song/artist/{artist_id}", 1))
            .andDo(print())
            .andExpect(status().isOk())
            .andDo(document("artist-list",
                Preprocessors.preprocessRequest(Preprocessors.prettyPrint()),
                Preprocessors.preprocessResponse(Preprocessors.prettyPrint()),
                responseFields(
                    fieldWithPath("result").type(JsonFieldType.NUMBER).description("조회 결과 코드"),
                    fieldWithPath("songCnt").type(JsonFieldType.NUMBER).description("곡 수"),
                    fieldWithPath("songList.[].songId").type(JsonFieldType.NUMBER)
                        .description("가수 번호"),
                    fieldWithPath("songList.[].songTitle").type(JsonFieldType.STRING)
                        .description("곡명"),
                    fieldWithPath("songList.[].albumImg").type(JsonFieldType.VARIES)
                        .description("앨범 이미지"),
                    fieldWithPath("songList.[].coverImg").type(JsonFieldType.VARIES)
                        .description("커버(썸네일) 이미지"),
                    fieldWithPath("songList.[].artistName").type(JsonFieldType.STRING)
                        .description("가수명")
                )));
    }

}
