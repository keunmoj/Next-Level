package com.ddoya.drama.drama.controller;

import static com.epages.restdocs.apispec.MockMvcRestDocumentationWrapper.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.get;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.responseFields;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.ddoya.drama.drama.service.DramaService;
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
public class DramaControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    private DramaService dramaService;

    @Test
    @DisplayName("드라마 전체 조회 테스트")
    void getAllDramasTest() throws Exception {

        mockMvc.perform(get("/api/drama/all"))
            .andDo(print())
            .andExpect(status().isOk())
            .andDo(document("dramas",
                Preprocessors.preprocessRequest(Preprocessors.prettyPrint()),
                Preprocessors.preprocessResponse(Preprocessors.prettyPrint()),
                responseFields(
                    fieldWithPath("message").type(JsonFieldType.STRING).description("결과 메시지"),
                    fieldWithPath("status").type(JsonFieldType.NUMBER).description("상태 코드"),
                    fieldWithPath("data.size").type(JsonFieldType.NUMBER).description("개수"),
                    fieldWithPath("data.dramas.[].id").type(JsonFieldType.NUMBER)
                        .description("드라마 아이디"),
                    fieldWithPath("data.dramas.[].title").type(JsonFieldType.STRING)
                        .description("제목")
                )));
    }

    @Test
    @DisplayName("드라마 클립 전체 조회 테스트")
    void getAllDramaClipsTest() throws Exception {

        mockMvc.perform(get("/api/drama/clip/{dramaId}", 1))
            .andDo(print())
            .andExpect(status().isOk())
            .andDo(document("dramas-clips",
                Preprocessors.preprocessRequest(Preprocessors.prettyPrint()),
                Preprocessors.preprocessResponse(Preprocessors.prettyPrint()),
                responseFields(
                    fieldWithPath("message").type(JsonFieldType.STRING).description("결과 메시지"),
                    fieldWithPath("status").type(JsonFieldType.NUMBER).description("상태 코드"),
                    fieldWithPath("data.size").type(JsonFieldType.NUMBER).description("개수"),
                    fieldWithPath("data.clips.[].id").type(JsonFieldType.NUMBER)
                        .description("드라마 문제 아이디"),
                    fieldWithPath("data.clips.[].title").type(JsonFieldType.STRING)
                        .description("문제(클립) 제목"),
                    fieldWithPath("data.clips.[].hit").type(JsonFieldType.NUMBER)
                        .description("조회수"),
                    fieldWithPath("data.clips.[].image").type(JsonFieldType.VARIES)
                        .description("썸네일")
                )));
    }

    @Test
    @DisplayName("아티스트의 클립 전체 조회 테스트")
    void getArtistsClipsTest() throws Exception {

        mockMvc.perform(get("/api/drama/clip/artist/{artistId}", 23))
            .andDo(print())
            .andExpect(status().isOk())
            .andDo(document("artists-clips",
                Preprocessors.preprocessRequest(Preprocessors.prettyPrint()),
                Preprocessors.preprocessResponse(Preprocessors.prettyPrint()),
                responseFields(
                    fieldWithPath("message").type(JsonFieldType.STRING).description("결과 메시지"),
                    fieldWithPath("status").type(JsonFieldType.NUMBER).description("상태 코드"),
                    fieldWithPath("data.size").type(JsonFieldType.NUMBER).description("개수"),
                    fieldWithPath("data.clips.[].id").type(JsonFieldType.NUMBER)
                        .description("드라마 문제 아이디"),
                    fieldWithPath("data.clips.[].title").type(JsonFieldType.STRING)
                        .description("문제(클립) 제목"),
                    fieldWithPath("data.clips.[].hit").type(JsonFieldType.NUMBER)
                        .description("조회수"),
                    fieldWithPath("data.clips.[].image").type(JsonFieldType.VARIES)
                        .description("썸네일")
                )));
    }

    @Test
    @DisplayName("문제 조회 테스트")
    void getDramaProblemTest() throws Exception {

        mockMvc.perform(get("/api/drama/problem/{dramaProblemId}", 1))
            .andDo(print())
            .andExpect(status().isOk())
            .andDo(document("drama-problem",
                Preprocessors.preprocessRequest(Preprocessors.prettyPrint()),
                Preprocessors.preprocessResponse(Preprocessors.prettyPrint()),
                responseFields(
                    fieldWithPath("message").type(JsonFieldType.STRING).description("결과 메시지"),
                    fieldWithPath("status").type(JsonFieldType.NUMBER).description("상태 코드"),
                    fieldWithPath("data.id").type(JsonFieldType.NUMBER).description("문제 아이디"),
                    fieldWithPath("data.title").type(JsonFieldType.STRING).description("문제 제목"),
                    fieldWithPath("data.hit").type(JsonFieldType.NUMBER).description("조회수"),
                    fieldWithPath("data.clipStartTime").type(JsonFieldType.STRING)
                        .description("시작 시간"),
                    fieldWithPath("data.clipEndTime").type(JsonFieldType.STRING)
                        .description("끝 시간"),
                    fieldWithPath("data.videoId").type(JsonFieldType.STRING)
                        .description("유튜브 영상 아이디"),
                    fieldWithPath("data.size").type(JsonFieldType.NUMBER).description("대사 수"),
                    fieldWithPath("data.scripts.[].artistName").type(JsonFieldType.STRING)
                        .description("아티스트명"),
                    fieldWithPath("data.scripts.[].scriptNumber").type(JsonFieldType.NUMBER)
                        .description("대사 번호"),
                    fieldWithPath("data.scripts.[].script").type(JsonFieldType.STRING)
                        .description("대사"),
                    fieldWithPath("data.scripts.[].notation").type(JsonFieldType.STRING)
                        .description("발음"),
                    fieldWithPath("data.scripts.[].startTime").type(JsonFieldType.STRING)
                        .description("시작 시간")
                )));
    }

}
