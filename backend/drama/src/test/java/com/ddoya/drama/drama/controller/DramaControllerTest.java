package com.ddoya.drama.drama.controller;

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
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.ddoya.drama.drama.dto.request.DramaProblemReqDto;
import com.ddoya.drama.drama.service.DramaService;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.HashMap;
import java.util.Map;
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
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

@SpringBootTest
@AutoConfigureMockMvc
@AutoConfigureRestDocs
@ExtendWith(RestDocumentationExtension.class)
@ActiveProfiles(profiles = {"prod"})
public class DramaControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @InjectMocks
    private DramaController mockDramaController;

    @Mock
    private DramaService dramaService;

    @Test
    @DisplayName("드라마 전체 조회 테스트")
    void getAllDramasTest() throws Exception {

        mockMvc.perform(get("/api/drama/all")
                .header("Authorization", "Bearer " + "Access-Token"))
            .andDo(print())
            .andExpect(status().isOk())
            .andDo(document("dramas",
                Preprocessors.preprocessRequest(Preprocessors.prettyPrint()),
                Preprocessors.preprocessResponse(Preprocessors.prettyPrint()),
                requestHeaders(
                    headerWithName("Authorization").description("JWT Access Token")
                ),
                responseFields(
                    fieldWithPath("message").type(JsonFieldType.STRING).description("결과 메시지"),
                    fieldWithPath("status").type(JsonFieldType.NUMBER).description("상태 코드"),
                    fieldWithPath("data.size").type(JsonFieldType.NUMBER).description("개수"),
                    fieldWithPath("data.dramas.[].id").type(JsonFieldType.NUMBER)
                        .description("드라마 아이디"),
                    fieldWithPath("data.dramas.[].title").type(JsonFieldType.STRING)
                        .description("제목"),
                    fieldWithPath("data.dramas.[].sumOfHit").type(JsonFieldType.NUMBER)
                        .description("조회수 합"),
                    fieldWithPath("data.dramas.[].image").type(JsonFieldType.STRING)
                        .description("이미지")
                )));
    }

    @Test
    @DisplayName("드라마 클립 전체 조회 테스트")
    void getAllDramaClipsTest() throws Exception {

        mockMvc.perform(
                get("/api/drama/clip/{dramaId}", 1)
                    .header("Authorization", "Bearer " + "Access-Token"))
            .andDo(print())
            .andExpect(status().isOk())
            .andDo(document("dramas-clips",
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

    @Test
    @DisplayName("아티스트의 클립 전체 조회 테스트")
    void getArtistsClipsTest() throws Exception {

        mockMvc.perform(get("/api/drama/clip/artist/{artistId}", 23)
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

    @Test
    @DisplayName("문제 조회 테스트")
    void getDramaProblemTest() throws Exception {

        mockMvc.perform(get("/api/drama/problem/{dramaProblemId}", 1)
                .header("Authorization", "Bearer " + "Access-Token"))
            .andDo(print())
            .andExpect(status().isOk())
            .andDo(document("drama-problem",
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

    @Test
    @DisplayName("문제 풀이 결과 등록 테스트")
    void addDramaProblemScoreTest(RestDocumentationContextProvider restDocumentation)
        throws Exception {
        Map<String, Integer> body = new HashMap<>();
        body.put("dramaProblemId", 1);

        this.mockMvc = MockMvcBuilders.standaloneSetup(mockDramaController)
            .apply(documentationConfiguration(restDocumentation)).build();

        doNothing().when(dramaService).addDramaProblemScore(1, new DramaProblemReqDto(1));

        mockMvc.perform(
                post("/api/drama/problem/result")
                    .header("Authorization", "Bearer " + "Access-Token")
                    .header("X-Authorization-Id", 1)
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(objectMapper.writeValueAsString(body)))
            .andDo(print())
            .andExpect(status().isOk())
            .andDo(document("drama-problem",
                Preprocessors.preprocessRequest(Preprocessors.prettyPrint()),
                Preprocessors.preprocessResponse(Preprocessors.prettyPrint()),
                requestHeaders(
                    headerWithName("Authorization").description("JWT Access Token")
                ),
                requestFields(
                    fieldWithPath("dramaProblemId").type(JsonFieldType.NUMBER)
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
    void getLeastTwiceAppearArtistTest() throws Exception {

        mockMvc.perform(get("/api/drama/artist/least-twice")
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
                    fieldWithPath("data.artists.[].artistName").type(JsonFieldType.STRING).description("이름"),
                    fieldWithPath("data.artists.[].image").type(JsonFieldType.VARIES).description("이미지"),
                    fieldWithPath("data.artists.[].groupName").type(JsonFieldType.VARIES).description("그룹 이름")
                )));
    }

}
