package com.ddoya.song.artist;

import static com.epages.restdocs.apispec.MockMvcRestDocumentationWrapper.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.get;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.responseFields;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.ddoya.song.artist.service.ArtistServiceImpl;
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
public class ArtistControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    private ArtistServiceImpl artistService;

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
                    fieldWithPath("artistList.[].artistId").type(JsonFieldType.NUMBER).description("가수 번호"),
                    fieldWithPath("artistList.[].isGroup").type(JsonFieldType.NUMBER).description("그룹 여부"),
                    fieldWithPath("artistList.[].image").type(JsonFieldType.VARIES).description("이미지"),
                    fieldWithPath("artistList.[].groupName").optional().type(JsonFieldType.VARIES).description("그룹명"),
                    fieldWithPath("artistList.[].artistName").type(JsonFieldType.STRING).description("가수명")
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
                    fieldWithPath("songList.[].songId").type(JsonFieldType.NUMBER).description("가수 번호"),
                    fieldWithPath("songList.[].songTitle").type(JsonFieldType.STRING).description("곡명"),
                    fieldWithPath("songList.[].albumImg").type(JsonFieldType.VARIES).description("앨범 이미지"),
                    fieldWithPath("songList.[].coverImg").type(JsonFieldType.VARIES)
                        .description("커버(썸네일) 이미지"),
                    fieldWithPath("songList.[].artistName").type(JsonFieldType.STRING).description("가수명")
                )));
    }

}
