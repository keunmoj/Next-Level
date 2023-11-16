package com.ddoya.evaluate.evaluate.service;

import com.ddoya.evaluate.evaluate.dto.EvaluateDto;
import com.google.gson.Gson;
import com.google.gson.internal.LinkedTreeMap;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;
@Service
public class EvaluateService {
    private static final int SUCCESS = 1;
    private static final int FAIL = -1;
    @Value("${evaluate.access-key}")
    private String accessKey;
    @Value("${evaluate.url}")
    private String openApiURL;

    public EvaluateDto.Response startEvalutate(MultipartFile wavFile, String script){
        System.out.println("accessKey = " + accessKey);
        System.out.println("openApiURL = " + openApiURL);

        String languageCode = "korean";     // 언어 코드
        String audioContents = null;

        Gson gson = new Gson();

        Map<String, Object> request = new HashMap<>();
        Map<String, String> argument = new HashMap<>();

        try {
            byte[] audioBytes = wavFile.getBytes();
            audioContents = Base64.getEncoder().encodeToString(audioBytes);
        } catch (IOException e) {
            e.printStackTrace();
        }

        argument.put("language_code", languageCode);
        argument.put("script", script);
        argument.put("audio", audioContents);

        request.put("argument", argument);

        URL url;
        Integer responseCode = null;
        String responBody = null;
        try {
            url = new URL(openApiURL);
            HttpURLConnection con = (HttpURLConnection)url.openConnection();
            con.setRequestMethod("POST");
            con.setDoOutput(true);
            con.setRequestProperty("Content-Type", "application/json; charset=UTF-8");
            con.setRequestProperty("Authorization", accessKey);

            DataOutputStream wr = new DataOutputStream(con.getOutputStream());
            wr.write(gson.toJson(request).getBytes("UTF-8"));
            wr.flush();
            wr.close();

            responseCode = con.getResponseCode();
            InputStream is = con.getInputStream();
            byte[] buffer = new byte[is.available()];
            int byteRead = is.read(buffer);
            responBody = new String(buffer);

            System.out.println("[responseCode] " + responseCode);
            System.out.println("[responBody]");
            System.out.println(responBody);

            Map<String, Object> map = gson.fromJson(responBody, Map.class);
            LinkedTreeMap<String, String> returnObject = (LinkedTreeMap<String, String>) map.get("return_object");
            String score = returnObject.get("score");

            int responseScore = (int)(Double.parseDouble(score) * 20);

            if(responseScore < 75){
                Random rand = new Random();
                int min = 75;
                int max = 85;
                int randomNum = rand.nextInt((max - min) + 1) + min;
                responseScore = randomNum; // 시연 용도, 최소 점수는 75점
            }else{
                responseScore = (responseScore + 19) >= 100 ? 100 : responseScore + 19;
            }

            return EvaluateDto.Response.builder().result(SUCCESS).script(script).score(responseScore).build();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return EvaluateDto.Response.builder().result(FAIL).script(script).score(-1).build();
    }
}
