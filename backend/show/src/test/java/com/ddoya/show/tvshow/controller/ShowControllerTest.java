package com.ddoya.show.tvshow.controller;

import static com.epages.restdocs.apispec.MockMvcRestDocumentationWrapper.document;
import static org.mockito.Mockito.doNothing;
import static org.springframework.restdocs.headers.HeaderDocumentation.headerWithName;
import static org.springframework.restdocs.headers.HeaderDocumentation.requestHeaders;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.documentationConfiguration;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.get;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.post;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.requestFields;
import static org.springframework.restdocs.payload.PayloadDocumentation.responseFields;

import com.ddoya.show.tvshow.dto.request.ShowProblemReqDto;
import com.ddoya.show.tvshow.service.TvShowService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.restdocs.RestDocumentationContextProvider;
import org.springframework.restdocs.RestDocumentationExtension;
import org.springframework.restdocs.operation.preprocess.Preprocessors;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@AutoConfigureRestDocs
@ExtendWith(RestDocumentationExtension.class)
@ActiveProfiles(profiles = {"local"})
class ShowControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @InjectMocks
    private ShowController mockShowController;

    @Mock
    private TvShowService tvShowService;

    @Test
    @DisplayName("예능 전체 조회 테스트")
    void getShowListTest() throws Exception {
        mockMvc.perform(get("/api/show/all")
                        .header("Authorization", "Bearer " + "Access-Token"))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("shows",
                        Preprocessors.preprocessRequest(Preprocessors.prettyPrint()),
                        Preprocessors.preprocessResponse(Preprocessors.prettyPrint()),
                        requestHeaders(
                                headerWithName("Authorization").description("JWT Access Token")
                        ),
                        responseFields(
                                fieldWithPath("message").type(JsonFieldType.STRING).description("결과 메시지"),
                                fieldWithPath("status").type(JsonFieldType.NUMBER).description("상태 코드"),
                                fieldWithPath("data.size").type(JsonFieldType.NUMBER).description("개수"),
                                fieldWithPath("data.shows.[].id").type(JsonFieldType.NUMBER).description("예능 아이디"),
                                fieldWithPath("data.shows.[].title").type(JsonFieldType.STRING).description("제목"),
                                fieldWithPath("data.shows.[].image").type(JsonFieldType.STRING).description("이미지")
                        )));
    }

    @Test
    @DisplayName("예능 클립 전체 조회 테스트")
    void getShowClipListTest() throws Exception {
        mockMvc.perform(
                        get("/api/show/clip/{showId}", 1)
                                .header("Authorization", "Bearer " + "Access-Token"))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("shows-clips",
                        Preprocessors.preprocessRequest(Preprocessors.prettyPrint()),
                        Preprocessors.preprocessResponse(Preprocessors.prettyPrint()),
                        requestHeaders(
                                headerWithName("Authorization").description("JWT Access Token")
                        ),
                        responseFields(
                                fieldWithPath("message").type(JsonFieldType.STRING).description("결과 메시지"),
                                fieldWithPath("status").type(JsonFieldType.NUMBER).description("상태 코드"),
                                fieldWithPath("data.size").type(JsonFieldType.NUMBER).description("개수"),
                                fieldWithPath("data.problems.[].id").type(JsonFieldType.NUMBER)
                                        .description("예능 문제 아이디"),
                                fieldWithPath("data.problems.[].title").type(JsonFieldType.STRING)
                                        .description("문제(클립) 제목"),
                                fieldWithPath("data.problems.[].hit").type(JsonFieldType.NUMBER)
                                        .description("조회수"),
                                fieldWithPath("data.problems.[].image").type(JsonFieldType.VARIES)
                                        .description("썸네일")
                        )));
    }

    @Test
    @DisplayName("문제 조회 테스트")
    void getShowProblemTest() throws Exception {

        mockMvc.perform(get("/api/show/problem/{showProblemId}", 1)
                        .header("Authorization", "Bearer " + "Access-Token"))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("show-problem",
                        Preprocessors.preprocessRequest(Preprocessors.prettyPrint()),
                        Preprocessors.preprocessResponse(Preprocessors.prettyPrint()),
                        requestHeaders(
                                headerWithName("Authorization").description("JWT Access Token")
                        ),
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
                                fieldWithPath("data.artistName").type(JsonFieldType.STRING)
                                        .description("아티스트명"),
                                fieldWithPath("data.script").type(JsonFieldType.STRING)
                                        .description("대사"),
                                fieldWithPath("data.notation").type(JsonFieldType.STRING)
                                        .description("발음"),
                                fieldWithPath("data.startTime").type(JsonFieldType.STRING)
                                        .description("대사 시작 시간"),
                                fieldWithPath("data.explain").type(JsonFieldType.STRING)
                                        .description("대사 상황 설명")
                        )));
    }

    @Test
    @DisplayName("문제 풀이 결과 등록 테스트")
    void finishShowProblemTest(RestDocumentationContextProvider restDocumentation) throws Exception {
        Map<String, Integer> body = new HashMap<>();
        body.put("showProblemId", 1);

        this.mockMvc = MockMvcBuilders.standaloneSetup(mockShowController)
                .apply(documentationConfiguration(restDocumentation)).build();

        doNothing().when(tvShowService).addShowProblemScore(1, new ShowProblemReqDto(1));

        mockMvc.perform(
                post("/api/show/problem/result")
                        .header("Authorization", "Bearer " + "Access-Token")
                        .header("X-Authorization-Id", 1)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(body)))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("show-problem",
                        Preprocessors.preprocessRequest(Preprocessors.prettyPrint()),
                        Preprocessors.preprocessResponse(Preprocessors.prettyPrint()),
                        requestHeaders(
                                headerWithName("Authorization").description("JWT Access Token")
                        ),
                        requestFields(
                                fieldWithPath("showProblemId").type(JsonFieldType.NUMBER)
                                        .description("문제 아이디")
                        ),
                        responseFields(
                                fieldWithPath("message").type(JsonFieldType.STRING).description("결과 메시지"),
                                fieldWithPath("status").type(JsonFieldType.NUMBER).description("상태 코드"),
                                fieldWithPath("data").type(JsonFieldType.NULL).description("데이터")
                        )));
    }

    @Test
    @DisplayName("최소 두 클립 이상 등장한 아티스트 조회 테스트")
    void getArtistListTest() throws Exception {

        mockMvc.perform(get("/api/show/artist/all")
                        .header("Authorization", "Bearer " + "Access-Token"))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("artist-who-appear-least-two-problem",
                        Preprocessors.preprocessRequest(Preprocessors.prettyPrint()),
                        Preprocessors.preprocessResponse(Preprocessors.prettyPrint()),
                        requestHeaders(
                                headerWithName("Authorization").description("JWT Access Token")
                        ),
                        responseFields(
                                fieldWithPath("message").type(JsonFieldType.STRING).description("결과 메시지"),
                                fieldWithPath("status").type(JsonFieldType.NUMBER).description("상태 코드"),
                                fieldWithPath("data.size").type(JsonFieldType.NUMBER).description("개수"),
                                fieldWithPath("data.artists.[].id").type(JsonFieldType.NUMBER).description("아티스트 아이디"),
                                fieldWithPath("data.artists.[].name").type(JsonFieldType.STRING).description("이름")
                        )));
    }

    @Test
    @DisplayName("아티스트의 클립 전체 조회 테스트")
    void getArtistClipsTest() throws Exception {

        mockMvc.perform(get("/api/show/artist/clip/{artistId}", 12)
                        .header("Authorization", "Bearer " + "Access-Token"))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("artists-clips",
                        Preprocessors.preprocessRequest(Preprocessors.prettyPrint()),
                        Preprocessors.preprocessResponse(Preprocessors.prettyPrint()),
                        requestHeaders(
                                headerWithName("Authorization").description("JWT Access Token")
                        ),
                        responseFields(
                                fieldWithPath("message").type(JsonFieldType.STRING).description("결과 메시지"),
                                fieldWithPath("status").type(JsonFieldType.NUMBER).description("상태 코드"),
                                fieldWithPath("data.size").type(JsonFieldType.NUMBER).description("개수"),
                                fieldWithPath("data.problems.[].id").type(JsonFieldType.NUMBER)
                                        .description("드라마 문제 아이디"),
                                fieldWithPath("data.problems.[].title").type(JsonFieldType.STRING)
                                        .description("문제(클립) 제목"),
                                fieldWithPath("data.problems.[].hit").type(JsonFieldType.NUMBER)
                                        .description("조회수"),
                                fieldWithPath("data.problems.[].image").type(JsonFieldType.VARIES)
                                        .description("썸네일")
                        )));
    }

}