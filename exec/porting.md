# 포팅 매뉴얼

### 1. 개요

- ##### 프로젝트 개요
  
  -

- ##### 프로젝트 사용 도구
  
  - 이슈관리 : JIRA
  
  - 형상관리 : Gitlab
  
  - 커뮤니케이션 : Notion, Mattermost, Discord
  
  - 디자인 : Figma
  
  - UCC : Vita

- ##### 개발환경
  
  - Node.js : 18.18.2
  
  - React : ^18.2.0
  
  - Vite : ^4.4.5
  
  - react-router-dom : ^6.17.0
  
  - zustand : ^4.4.3
  
  - PWA
  
  - axios : ^1.5.1
  
  - 여기서부터 백엔드 꺼 적어주세여
  
  - Springboot : 2.7.13
  
  - Lombok
  
  - Spring Data JPA
  
  - Spring Data Redis(lecttuce)
  
  - Spring Web
  
  - Springdoc-openapi-ui 1.6.11
  
  - Oauth2
  
  - Swagger 3.0.0
  
  - SSL
  
  - CertBot(CA Certificates)
  
  - SERVER :
  
  - DB :

- ##### 외부 서비스
  
  - Google OAuth2 : 설명
  
  - AWS S3 : 설명
  
  - 추가적인거 있으면 적어주세여.

- ##### git ignore
  
  - React-Vite : .env
  
  - Spring : 설정한거 적어주세여.

## 2. 빌드

- ##### 환경변수 형태
  
  - .env
    
    ```
    - VITE_BASE_URL="요청하는 API 기본주소"
    
    - VITE_S3_URL="이미지 기본 주소"
    
    - VITE_GOOGLE_LOGIN_URL="구글 로그인시 사용되는 주소"
    ```
  
  - application-local.yml(예시입니다.)
    
    ```
    spring:
      datasource:
        url: <MySQL DB 주소>
        username: <유저 이름>
        password: <유저 비밀번호>
        driver-class-name: com.mysql.cj.jdbc.Driver
    
      jpa:
        hibernate:
          ddl-auto: create
        properties:
          hibernate:
            show_sql: true
            format_sql: true
    
    cloud:
      aws:
        s3:
          bucket: <S3 버킷 이름>
        credentials:
          access-key: <S3 버킷 access-key>
          secret-key: <S3 버킷 secret-key>
        region:
          static: ap-northeast-2
          auto: false
        stack:
          auto: false
    ```
  
  - application-prod.yml
    
    ```
    spring:
      datasource:
        url: <MySQL DB 주소>
        username: <유저 이름>
        password: <유저 비밀번호>
        driver-class-name: com.mysql.cj.jdbc.Driver
    
      jpa:
        hibernate:
          ddl-auto: validate
        properties:
          hibernate:
            show_sql: true
            format_sql: true
      redis:
        lettuce:
          pool:
            max-active: '5'
            max-idle: '5'
            min-idle: '2'
        host: <host ip 주소>
        port: <사용할 포트 번호>
        password: <redis 비밀번호>
    
    cloud:
      aws:
        s3:
          bucket: <S3 버킷 이름>
        credentials:
          access-key: <S3 버킷 access-key>
          secret-key: <S3 버킷 secret-key>
        region:
          static: ap-northeast-2
          auto: false
        stack:
          auto: false
    ```
  
  - application-oauth.yml
    
    ```
    spring:
      security:
        oauth2:
          client:
            registration:
              kakao:
                client-id: <Kakao Developers REST API키>
                client-secret: <Kakao Developers Client Secret 코드>
                redirect-uri: <Kakao Developers에 설정한 Redirect url>
                client-authentication-method: POST
                authorization-grant-type: authorization_code
                scope:
                  - profile_nickname
                  - account_email
                  - gender
                  - profile_image
                client-name: Kakao
            provider:
              kakao:
                authorization-uri: https://kauth.kakao.com/oauth/authorize
                token-uri: https://kauth.kakao.com/oauth/token
                user-info-uri: https://kapi.kakao.com/v2/user/me
                user-name-attribute: id
    ```
  
  - application-jwt.yml
    
    ```
    jwt:
      secretKey: <설정하고자 하는 JWT secretKey>
    
      access:
        expiration: 1800000 # 30분
        header: Authorization
    
      refresh:
        expiration: 1209600000 # 2주
        header: Authorization_refresh
    ```

- ##### 빌드하기
  
  1. Front: React-Vite
     
     1. front 폴더에 들어가기
     
     2. npm install or npm i
     
     3. npm run build
  
  2. Back: Spring
     
     1. Gradle 실행
  
  3. PWA
     
     1. 배포된 페이지 접속
     
     2. apk 다운로드

- ###### 배포하기(아래도 예시입니다. DB는 아래에 옮겨도 되고 추출한 파일 그대로 exec 폴더안에 넣고 파일명 - 설명 이렇게 적어도 됩니다.)
  
  1. Nginx 설정
  
  2. 도커
  
  3. MySQL
     
     1. 원하는 스키마명으로 스키마 생성
     
     2. DumpSsafy_first.sql 실행
        
        ```
        -- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
        --
        -- Host: 43.200.254.50    Database: ssafy
        
        -- ------------------------------------------------------
        -- Server version    8.0.34
        
        /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
        /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
        /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
        /*!50503 SET NAMES utf8 */;
        /*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
        /*!40103 SET TIME_ZONE='+00:00' */;
        /*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
        /*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
        /*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
        /*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
        
        --
        -- Table structure for table `couple`
        --
        
        DROP TABLE IF EXISTS `couple`;
        /*!40101 SET @saved_cs_client     = @@character_set_client */;
        /*!50503 SET character_set_client = utf8mb4 */;
        CREATE TABLE `couple` (
          `couple_id` bigint NOT NULL,
          `created_at` datetime(6) DEFAULT NULL,
          `updated_at` datetime(6) DEFAULT NULL,
          `couple_code` varchar(8) NOT NULL,
          `wedding_date` date DEFAULT NULL,
          PRIMARY KEY (`couple_id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
        /*!40101 SET character_set_client = @saved_cs_client */;
        
        --
        -- Table structure for table `diary`
        --
        
        DROP TABLE IF EXISTS `diary`;
        /*!40101 SET @saved_cs_client     = @@character_set_client */;
        /*!50503 SET character_set_client = utf8mb4 */;
        CREATE TABLE `diary` (
          `diary_id` bigint NOT NULL,
          `created_at` datetime(6) DEFAULT NULL,
          `updated_at` datetime(6) DEFAULT NULL,
          `content` varchar(255) DEFAULT NULL,
          `date` date DEFAULT NULL,
          `image` varchar(255) DEFAULT NULL,
          `title` varchar(255) DEFAULT NULL,
          `user_id` bigint DEFAULT NULL,
          PRIMARY KEY (`diary_id`),
          KEY `FK74rd0bn5raxejw2ukenelbdmt` (`user_id`),
          CONSTRAINT `FK74rd0bn5raxejw2ukenelbdmt` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
        /*!40101 SET character_set_client = @saved_cs_client */;
        
        --
        -- Table structure for table `hibernate_sequence`
        --
        
        DROP TABLE IF EXISTS `hibernate_sequence`;
        /*!40101 SET @saved_cs_client     = @@character_set_client */;
        /*!50503 SET character_set_client = utf8mb4 */;
        CREATE TABLE `hibernate_sequence` (
          `next_val` bigint DEFAULT NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
        /*!40101 SET character_set_client = @saved_cs_client */;
        
        --
        -- Table structure for table `invitation`
        --
        
        DROP TABLE IF EXISTS `invitation`;
        /*!40101 SET @saved_cs_client     = @@character_set_client */;
        /*!50503 SET character_set_client = utf8mb4 */;
        CREATE TABLE `invitation` (
          `invitation_id` bigint NOT NULL,
          `address` varchar(255) DEFAULT NULL,
          `bride_father_name` varchar(255) DEFAULT NULL,
          `bride_father_phone` varchar(255) DEFAULT NULL,
          `bride_mother_name` varchar(255) DEFAULT NULL,
          `bride_mother_phone` varchar(255) DEFAULT NULL,
          `bride_name` varchar(255) DEFAULT NULL,
          `bride_phone` varchar(255) DEFAULT NULL,
          `content` varchar(255) DEFAULT NULL,
          `date` date DEFAULT NULL,
          `floor` varchar(255) DEFAULT NULL,
          `groom_father_name` varchar(255) DEFAULT NULL,
          `groom_father_phone` varchar(255) DEFAULT NULL,
          `groom_mother_name` varchar(255) DEFAULT NULL,
          `groom_mother_phone` varchar(255) DEFAULT NULL,
          `groom_name` varchar(255) DEFAULT NULL,
          `groom_phone` varchar(255) DEFAULT NULL,
          `thumbnail` varchar(255) DEFAULT NULL,
          `time` time DEFAULT NULL,
          `title` varchar(255) DEFAULT NULL,
          `wedding_hall_name` varchar(255) DEFAULT NULL,
          `couple_id` bigint DEFAULT NULL,
          PRIMARY KEY (`invitation_id`),
          KEY `FK9fil2lc64dryhvtawmk5pe6lk` (`couple_id`),
          CONSTRAINT `FK9fil2lc64dryhvtawmk5pe6lk` FOREIGN KEY (`couple_id`) REFERENCES `couple` (`couple_id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
        /*!40101 SET character_set_client = @saved_cs_client */;
        
        --
        -- Table structure for table `liked`
        --
        
        DROP TABLE IF EXISTS `liked`;
        /*!40101 SET @saved_cs_client     = @@character_set_client */;
        /*!50503 SET character_set_client = utf8mb4 */;
        CREATE TABLE `liked` (
          `liked_id` bigint NOT NULL,
          `created_at` datetime(6) DEFAULT NULL,
          `review_id` bigint DEFAULT NULL,
          `user_id` bigint DEFAULT NULL,
          PRIMARY KEY (`liked_id`),
          KEY `FKej1jde2ycpdww3eapmgbifv68` (`review_id`),
          KEY `FKcc0jrw2vianbjig6suh66syiw` (`user_id`),
          CONSTRAINT `FKcc0jrw2vianbjig6suh66syiw` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
          CONSTRAINT `FKej1jde2ycpdww3eapmgbifv68` FOREIGN KEY (`review_id`) REFERENCES `review` (`review_id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
        /*!40101 SET character_set_client = @saved_cs_client */;
        
        --
        -- Table structure for table `notification`
        --
        
        DROP TABLE IF EXISTS `notification`;
        /*!40101 SET @saved_cs_client     = @@character_set_client */;
        /*!50503 SET character_set_client = utf8mb4 */;
        CREATE TABLE `notification` (
          `notification_id` bigint NOT NULL,
          `created_at` datetime(6) DEFAULT NULL,
          `content` varchar(255) DEFAULT NULL,
          `notification_type` varchar(255) DEFAULT NULL,
          `read_status` varchar(255) DEFAULT NULL,
          `title` varchar(255) DEFAULT NULL,
          `user_id` bigint DEFAULT NULL,
          PRIMARY KEY (`notification_id`),
          KEY `FKnk4ftb5am9ubmkv1661h15ds9` (`user_id`),
          CONSTRAINT `FKnk4ftb5am9ubmkv1661h15ds9` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
        /*!40101 SET character_set_client = @saved_cs_client */;
        
        --
        -- Table structure for table `reservation`
        --
        
        DROP TABLE IF EXISTS `reservation`;
        /*!40101 SET @saved_cs_client     = @@character_set_client */;
        /*!50503 SET character_set_client = utf8mb4 */;
        CREATE TABLE `reservation` (
          `reservation_id` bigint NOT NULL,
          `reserved_date` date DEFAULT NULL,
          `reserved_time` time DEFAULT NULL,
          `product_id` bigint DEFAULT NULL,
          `user_id` bigint DEFAULT NULL,
          PRIMARY KEY (`reservation_id`),
          KEY `FKgoouhtuwwm277879njd9atahw` (`product_id`),
          KEY `FKrea93581tgkq61mdl13hehami` (`user_id`),
          CONSTRAINT `FKgoouhtuwwm277879njd9atahw` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`),
          CONSTRAINT `FKrea93581tgkq61mdl13hehami` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
        /*!40101 SET character_set_client = @saved_cs_client */;
        
        --
        -- Table structure for table `review`
        --
        
        DROP TABLE IF EXISTS `review`;
        /*!40101 SET @saved_cs_client     = @@character_set_client */;
        /*!50503 SET character_set_client = utf8mb4 */;
        CREATE TABLE `review` (
          `review_id` bigint NOT NULL,
          `created_at` datetime(6) DEFAULT NULL,
          `updated_at` datetime(6) DEFAULT NULL,
          `content` varchar(255) DEFAULT NULL,
          `image` varchar(255) DEFAULT NULL,
          `like_cnt` int NOT NULL,
          `star` int NOT NULL,
          `product_id` bigint DEFAULT NULL,
          `user_id` bigint DEFAULT NULL,
          PRIMARY KEY (`review_id`),
          KEY `FKiyof1sindb9qiqr9o8npj8klt` (`product_id`),
          KEY `FK6cpw2nlklblpvc7hyt7ko6v3e` (`user_id`),
          CONSTRAINT `FK6cpw2nlklblpvc7hyt7ko6v3e` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
          CONSTRAINT `FKiyof1sindb9qiqr9o8npj8klt` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
        /*!40101 SET character_set_client = @saved_cs_client */;
        
        --
        -- Table structure for table `schedule`
        --
        
        DROP TABLE IF EXISTS `schedule`;
        /*!40101 SET @saved_cs_client     = @@character_set_client */;
        /*!50503 SET character_set_client = utf8mb4 */;
        CREATE TABLE `schedule` (
          `schedule_id` bigint NOT NULL,
          `created_at` datetime(6) DEFAULT NULL,
          `content` varchar(255) DEFAULT NULL,
          `reservation_id` bigint DEFAULT NULL,
          `scheduled_date` date DEFAULT NULL,
          `scheduled_time` time DEFAULT NULL,
          `schedule_type` varchar(255) DEFAULT NULL,
          `scheduled_by` varchar(255) DEFAULT NULL,
          `title` varchar(255) DEFAULT NULL,
          `couple_id` bigint DEFAULT NULL,
          PRIMARY KEY (`schedule_id`),
          KEY `FKka3k3mjq8da6a28wjm4d57154` (`couple_id`),
          CONSTRAINT `FKka3k3mjq8da6a28wjm4d57154` FOREIGN KEY (`couple_id`) REFERENCES `couple` (`couple_id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
        /*!40101 SET character_set_client = @saved_cs_client */;
        
        --
        -- Table structure for table `users`
        --
        
        DROP TABLE IF EXISTS `users`;
        /*!40101 SET @saved_cs_client     = @@character_set_client */;
        /*!50503 SET character_set_client = utf8mb4 */;
        CREATE TABLE `users` (
          `user_id` bigint NOT NULL,
          `created_at` datetime(6) DEFAULT NULL,
          `updated_at` datetime(6) DEFAULT NULL,
          `email` varchar(255) DEFAULT NULL,
          `fcm_token` varchar(255) DEFAULT NULL,
          `gender` varchar(255) DEFAULT NULL,
          `name` varchar(255) DEFAULT NULL,
          `nickname` varchar(255) DEFAULT NULL,
          `password` varchar(255) DEFAULT NULL,
          `phone_number` varchar(255) DEFAULT NULL,
          `profile_image` varchar(255) DEFAULT NULL,
          `refresh_token` varchar(500) DEFAULT NULL,
          `role` varchar(255) DEFAULT NULL,
          `social_id` varchar(255) DEFAULT NULL,
          `couple_id` bigint DEFAULT NULL,
          `notification_setting` varchar(20) DEFAULT 'agree',
          PRIMARY KEY (`user_id`),
          KEY `FKmr4ayf55g49na319xofm1h7bf` (`couple_id`),
          CONSTRAINT `FKmr4ayf55g49na319xofm1h7bf` FOREIGN KEY (`couple_id`) REFERENCES `couple` (`couple_id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
        /*!40101 SET character_set_client = @saved_cs_client */;
        
        --
        -- Table structure for table `wishlist`
        --
        
        DROP TABLE IF EXISTS `wishlist`;
        /*!40101 SET @saved_cs_client     = @@character_set_client */;
        /*!50503 SET character_set_client = utf8mb4 */;
        CREATE TABLE `wishlist` (
          `wishlist_id` bigint NOT NULL,
          `created_at` datetime(6) DEFAULT NULL,
          `product_id` bigint DEFAULT NULL,
          `user_id` bigint DEFAULT NULL,
          PRIMARY KEY (`wishlist_id`),
          KEY `FKqchevbfw5wq0f4uqacns02rp7` (`product_id`),
          KEY `FKtrd6335blsefl2gxpb8lr0gr7` (`user_id`),
          CONSTRAINT `FKqchevbfw5wq0f4uqacns02rp7` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`),
          CONSTRAINT `FKtrd6335blsefl2gxpb8lr0gr7` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
        /*!40101 SET character_set_client = @saved_cs_client */;
        /*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;
        
        /*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
        /*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
        /*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
        /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
        /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
        /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
        /*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
        
        -- Dump completed on 2023-08-16 23:29:35
        ```
  
  4. Redis
     
     ```
     docker pull redis
      sudo docker run -p 6379:6379 redis
     ```

- ##### 서비스 이용 방법
  
  - 구글 로그인 (간략한 설명? 아래에 FCM떄 썻던 예시입니다.)
  
  - FCM
  
  ###### - Firebase 비공개 키 생성

Spring boot에서 푸시 알림을 firebase에 요청하기 위해서는 firebase의 비공개 키 파일이 필요하다. firebase 콘솔에서 아래 절차대로 비공개 키를 생성할 수 있다.

1. 아래 링크로 firebase에 들어간다
   
   [Firebase | Google’s Mobile and Web App Development Platform](https://firebase.google.com/?hl=ko)

2. 시작하기
   
   ![Untitled](porting_assets/6d2654360cf537f5c6914652578426e19b6d22a3.png)

3. 프로젝트 추가를 누르고 프로젝트 이름을 작성하여 새로운 프로젝트를 만들어준다.
   
   ![Untitled](porting_assets/93a2e1230695f3f7ce3a751d9cd2870e7c793dd2.png)

4. 앱을 추가해준다. Blooming은 안드로이드 앱을 추가했다.
   
   ![Untitled](porting_assets/0b099070c22122bbe9c247cf81da8e4c40151715.png)

5. 이제 Android 앱에 Firebase를 추가해야 한다.
   
   1. 앱 등록 시 패키지 이름을 프로젝트의 안드로이드 앱 이름으로 맞춰주어야 한다. 이 외에는 자유롭게 작성한다.
      
      ![Untitled](porting_assets/ac3f312794de2c6780e68efde4566b59c0801cb1.png)
   
   2. 앱 등록 후 **“google-services.json”** 구성 파일은 다운하여 app 루트 디렉터리에 넣어준다.
      
      ![Untitled](porting_assets/9d7980ed2b07492abf60983814964bcf38d18a56.png)
   
   3. 공식 설명에 따라 추가해준다.
      
      ![Untitled](porting_assets/561c46af68f9f926ee847dcca4f5e62bd5f7cc2e.png)
   
   이렇게 하면 Android 앱에 Firebase 추가하는 과정은 끝이다. 콘솔로 이동한다.
   
   ![Untitled](porting_assets/79cf73134e87da4f8140bbdd08d18dc51dd18da5.png)

6. Spring boot에 FCM
   
   1. 프로젝트 설정으로 들어간다
      
      ![Untitled](porting_assets/6ac6489de736110f15855b0ec424891cd1555cae.png)
   
   2. 서비스 계정 → JAVA → 새 비공개 키 생성
      
      ![Untitled](porting_assets/f146313cc3c877d6e42bd56368cab3f32c2b3959.png)
      
      파일이 다운된다.
      
      ![Untitled](porting_assets/2af914dcc60bf24064cfe169a7dc774bd96e9074.png)
   
   3. 다운된 파일을 spring 프로젝트 > resources/firebase 하위 폴더를 만들어 넣어준다.
      
      ![Untitled](porting_assets/d102571d305908f3b6e32027139f35baa0392334.png)
   
   4. build.gradle파일의 dependency에 의존성을 추가하고 반영해준다.
      
      ![Untitled](porting_assets/04bd01bb31b68ed187dfc34731bf969c52175e15.png)
