# 포팅 매뉴얼

### 1. 개요

- ##### 프로젝트 개요
  
  - 외국인 대학 한국어 학습 플랫폼

### 2. 시스템 환경 및 구성

- ##### 프로젝트 사용 도구
  
  - 이슈관리 : JIRA
  
  - 형상관리 : Gitlab
  
  - 커뮤니케이션 : Notion, Mattermost, Discord
  
  - 디자인 : Figma
  
  - UCC : Vita

- **OS**
  - Ubuntu 20.04 LTS

- ##### Frontend
  
  - Node.js : 18.18.2
  
  - React : ^18.2.0
  
  - Vite : ^4.4.5
  
  - react-router-dom : ^6.17.0
  
  - zustand : ^4.4.3
  
  - PWA
  
  - axios : ^1.5.1

- **Backend**
  - Spring Boot : 2.7.15
  - JAVA : 11
  - MySQL : 8.0.35
  - Redis : 7.2.2
  - Docker : 24.0.6
  - Jenkins : 2.414.3
  - Nginx : 1.25.2

- ##### 외부 서비스
  
  - Google OAuth2
  
  - AWS S3

- ##### git ignore
  
  - React-Vite : .env
  
  - Spring : 설정한거 적어주세여.

## 3. 설정 파일 밒 환경변수

- .env
  
  ```
  - VITE_BASE_URL="요청하는 API 기본주소"
  
  - VITE_S3_URL="이미지 기본 주소"
  
  - VITE_GOOGLE_LOGIN_URL="구글 로그인시 사용되는 주소"
  ```

- application.yml

```sql
server:
  port: 9001

spring:
  application:
    name: gateway
  profiles:
    active: prod
  cloud:
    gateway:
      globalcors:
        cors-configurations:
          '[/**]':
            allowedOrigins:
              - "<http://localhost:5173>"
              - "<http://127.0.0.1:5173>"
              - "<http://k9e204.p.ssafy.io>"
              - "<https://k9e204.p.ssafy.io>"
            allow-credentials: true
            allowedHeaders: '*'
            allowedMethods:
              - GET
              - POST
              - PUT
              - DELETE
              - OPTIONS
      routes:
        - id: auth-service
          uri: lb://AUTH-SERVICE
          predicates:
            - Path=/login/oauth2/**, /oauth2/**, /api/auth/user/reissue

        - id: auth-service
          uri: lb://AUTH-SERVICE
          predicates:
            - Path=/api/auth/**
          filters:
            - AuthorizationHeaderFilter

        - id: service-discovery
          uri: lb://SERVICE-DISCOVERY
          predicates:
            - Path=/api/client/**
          filters:
            - AuthorizationHeaderFilter

        - id: song-service
          uri: lb://SONG-SERVICE
          predicates:
            - Path=/api/song/**, /api/ranking/**
          filters:
            - AuthorizationHeaderFilter

        - id: show-service
          uri: lb://SHOW-SERVICE
          predicates:
            - Path=/api/show/**
          filters:
            - AuthorizationHeaderFilter

        - id: drama-service
          uri: lb://drama-SERVICE
          predicates:
            - Path=/api/drama/**
          filters:
            - AuthorizationHeaderFilter

        - id: chatgpt-service
          uri: lb://CHATGPT-SERVICE
          predicates:
            - Path=/api/chatgpt/**
          filters:
            - AuthorizationHeaderFilter

        - id: evaluate-service
          uri: lb://EVALUATE-SERVICE
          predicates:
            - Path=/api/evaluate/**
          filters:
            - AuthorizationHeaderFilter

      default-filters:
        - DedupeResponseHeader=Access-Control-Allow-Origin Access-Control-Allow-Credentials

management:
  endpoints:
    web:
      exposure:
        include: "*"
```

- application-local.yml

```sql
logging:
  level:
    root: DEBUG

eureka:
  instance:
    prefer-ip-address: true
    instance-id: ${spring.application.name}:${spring.application.instance_id:${random.value}}
  client:
    register-with-eureka: true
    fetch-registry: true
    serviceUrl:
      defaultZone: <http://localhost:8761/eureka/>
```

- application-prod.yml

```sql
logging:
  level:
    root: DEBUG

eureka:
  instance:
    prefer-ip-address: true
    instance-id: ${spring.application.name}:${spring.application.instance_id:${random.value}}
  client:
    register-with-eureka: true
    fetch-registry: true
    serviceUrl:
      defaultZone: <http://eureka-container:8761/eureka/>
```

### Eureka

- application.yml

```sql
server:
  port: 8761

spring:
  application:
    name: service-discovery
  profiles:
    active: prod

management:
  endpoints:
    web:
      exposure:
        include: "*" 
```

- application-local.yml

```sql
logging:
  level:
    root: DEBUG

eureka:
  client:
    register-with-eureka: false
    fetch-registry: false
    serviceUrl:
      defaultZone: <http://localhost:8761/eureka/>
```

- application-prod.yml

```sql
logging:
  level:
    root: DEBUG

eureka:
  client:
    register-with-eureka: false
    fetch-registry: false
    serviceUrl:
      defaultZone: <http://eureka-container:8761/eureka/>
```

### Drama

- application.yml

```sql
server:
  port: 0

spring:
  application:
    name: drama-service
  profiles:
    active: prod

management:
  endpoints:
    web:
      exposure:
        include: "*"
```

- application-local.yml

```sql
spring:
  jpa:
    properties:
      hibernate:
        default_batch_fetch_size: ${chunkSize:100}
        jdbc:
          batch_size: '20'
        format_sql: 'true'
        hbm2ddl:
          import_files_sql_extractor: org.hibernate.tool.hbm2ddl.MultipleLinesSqlCommandExtractor
        dialect: org.hibernate.dialect.MySQL8Dialect
        order_updates: 'true'
        current_session_context_class: org.springframework.orm.hibernate5.SpringSessionContext
        order_inserts: 'true'
    generate-ddl: 'true'
    hibernate:
      ddl-auto: update
    show-sql: 'true'
  datasource:
    driverClassName: com.mysql.cj.jdbc.Driver
    hikari:
      data-source-properties:
        rewriteBatchedStatements: 'true'
      maximum-pool-size: '5'
      password: ${spring.datasource.password}
      username: ${spring.datasource.username}
      driver-class-name: ${spring.datasource.driver-class-name}
      jdbc-url: ${spring.datasource.url}
      pool-name: jpa-hikari-pool
    password: '1234'
    username: root
    url: jdbc:mysql://localhost:3306/ddoya?characterEncoding=UTF-8&serverTimezone=UTC

logging:
  level:
    root: DEBUG

eureka:
  instance:
    prefer-ip-address: true
    instance-id: ${spring.application.name}:${spring.application.instance_id:${random.value}}
  client:
    register-with-eureka: true
    fetch-registry: true
    service-url:
      defaultZone: <http://localhost:8761/eureka/>
```

- application-prod.yml

```sql
spring:
  jpa:
    properties:
      hibernate:
        default_batch_fetch_size: ${chunkSize:100}
        jdbc:
          batch_size: '20'
        format_sql: 'true'
        hbm2ddl:
          import_files_sql_extractor: org.hibernate.tool.hbm2ddl.MultipleLinesSqlCommandExtractor
        dialect: org.hibernate.dialect.MySQL8Dialect
        order_updates: 'true'
        current_session_context_class: org.springframework.orm.hibernate5.SpringSessionContext
        order_inserts: 'true'
    generate-ddl: 'true'
    hibernate:
      ddl-auto: update
    show-sql: 'true'
  datasource:
    driverClassName: com.mysql.cj.jdbc.Driver
    hikari:
      data-source-properties:
        rewriteBatchedStatements: 'true'
      maximum-pool-size: '5'
      password: ${spring.datasource.password}
      username: ${spring.datasource.username}
      driver-class-name: ${spring.datasource.driver-class-name}
      jdbc-url: ${spring.datasource.url}
      pool-name: jpa-hikari-pool
    password: ?
    username: ?
    url: jdbc:mysql://'domain':'port'/'schema'?characterEncoding=UTF-8&serverTimezone=UTC

logging:
  level:
    root: DEBUG

eureka:
  instance:
    prefer-ip-address: true
    instance-id: ${spring.application.name}:${spring.application.instance_id:${random.value}}
  client:
    register-with-eureka: true
    fetch-registry: true
    service-url:
      defaultZone: <http://eureka-container:8761/eureka/>
```

### Show

- application.yml

```sql
aserver:
  port: 0

spring:
  application:
    name: song-service
  profiles:
    active: prod

management:
  endpoints:
    web:
      exposure:
        include: "*"
```

- application-local.yml

```sql
spring:
  jpa:
    properties:
      hibernate:
        default_batch_fetch_size: ${chunkSize:100}
        jdbc:
          batch_size: '20'
        format_sql: 'true'
        hbm2ddl:
          import_files_sql_extractor: org.hibernate.tool.hbm2ddl.MultipleLinesSqlCommandExtractor
        dialect: org.hibernate.dialect.MySQL8Dialect
        order_updates: 'true'
        current_session_context_class: org.springframework.orm.hibernate5.SpringSessionContext
        order_inserts: 'true'
    generate-ddl: 'true'
    hibernate:
      ddl-auto: update
    show-sql: 'true'
  datasource:
    driverClassName: com.mysql.cj.jdbc.Driver
    hikari:
      data-source-properties:
        rewriteBatchedStatements: 'true'
      maximum-pool-size: '5'
      password: ${spring.datasource.password}
      username: ${spring.datasource.username}
      driver-class-name: ${spring.datasource.driver-class-name}
      jdbc-url: ${spring.datasource.url}
      pool-name: jpa-hikari-pool
    password: '1234'
    username: root
    url: jdbc:mysql://localhost:3306/ddoya?characterEncoding=UTF-8&serverTimezone=UTC

logging:
  level:
    root: DEBUG

eureka:
  instance:
    prefer-ip-address: true
    instance-id: ${spring.application.name}:${spring.application.instance_id:${random.value}}
  client:
    register-with-eureka: true
    fetch-registry: true
    service-url:
      defaultZone: <http://localhost:8761/eureka/>
```

- application-prod.yml

```sql
spring:
  jpa:
    properties:
      hibernate:
        default_batch_fetch_size: ${chunkSize:100}
        jdbc:
          batch_size: '20'
        format_sql: 'true'
        hbm2ddl:
          import_files_sql_extractor: org.hibernate.tool.hbm2ddl.MultipleLinesSqlCommandExtractor
        dialect: org.hibernate.dialect.MySQL8Dialect
        order_updates: 'true'
        current_session_context_class: org.springframework.orm.hibernate5.SpringSessionContext
        order_inserts: 'true'
    generate-ddl: 'true'
    hibernate:
      ddl-auto: update
    show-sql: 'true'
  datasource:
    driverClassName: com.mysql.cj.jdbc.Driver
    hikari:
      data-source-properties:
        rewriteBatchedStatements: 'true'
      maximum-pool-size: '5'
      password: ${spring.datasource.password}
      username: ${spring.datasource.username}
      driver-class-name: ${spring.datasource.driver-class-name}
      jdbc-url: ${spring.datasource.url}
      pool-name: jpa-hikari-pool
    password: ?
    username: ?
    url: jdbc:mysql://'domain':'port'/'schema'?characterEncoding=UTF-8&serverTimezone=UTC

logging:
  level:
    root: DEBUG

eureka:
  instance:
    prefer-ip-address: true
    instance-id: ${spring.application.name}:${spring.application.instance_id:${random.value}}
  client:
    register-with-eureka: true
    fetch-registry: true
    service-url:
      defaultZone: <http://eureka-container:8761/eureka/>
```

### Song

- application.yml

```sql
aserver:
  port: 0

spring:
  application:
    name: song-service
  profiles:
    active: prod

management:
  endpoints:
    web:
      exposure:
        include: "*"
```

- application-local.yml

```sql
spring:
  jpa:
    properties:
      hibernate:
        default_batch_fetch_size: ${chunkSize:100}
        jdbc:
          batch_size: '20'
        format_sql: 'true'
        hbm2ddl:
          import_files_sql_extractor: org.hibernate.tool.hbm2ddl.MultipleLinesSqlCommandExtractor
        dialect: org.hibernate.dialect.MySQL8Dialect
        order_updates: 'true'
        current_session_context_class: org.springframework.orm.hibernate5.SpringSessionContext
        order_inserts: 'true'
    generate-ddl: 'true'
    hibernate:
      ddl-auto: update
    show-sql: 'true'
  datasource:
    driverClassName: com.mysql.cj.jdbc.Driver
    hikari:
      data-source-properties:
        rewriteBatchedStatements: 'true'
      maximum-pool-size: '5'
      password: ${spring.datasource.password}
      username: ${spring.datasource.username}
      driver-class-name: ${spring.datasource.driver-class-name}
      jdbc-url: ${spring.datasource.url}
      pool-name: jpa-hikari-pool
    password: '1234'
    username: root
    url: jdbc:mysql://localhost:3306/ddoya?characterEncoding=UTF-8&serverTimezone=UTC

logging:
  level:
    root: DEBUG

eureka:
  instance:
    prefer-ip-address: true
    instance-id: ${spring.application.name}:${spring.application.instance_id:${random.value}}
  client:
    register-with-eureka: true
    fetch-registry: true
    service-url:
      defaultZone: <http://localhost:8761/eureka/>
```

- application-prod.yml

```sql
spring:
  jpa:
    properties:
      hibernate:
        default_batch_fetch_size: ${chunkSize:100}
        jdbc:
          batch_size: '20'
        format_sql: 'true'
        hbm2ddl:
          import_files_sql_extractor: org.hibernate.tool.hbm2ddl.MultipleLinesSqlCommandExtractor
        dialect: org.hibernate.dialect.MySQL8Dialect
        order_updates: 'true'
        current_session_context_class: org.springframework.orm.hibernate5.SpringSessionContext
        order_inserts: 'true'
    generate-ddl: 'true'
    hibernate:
      ddl-auto: update
    show-sql: 'true'
  datasource:
    driverClassName: com.mysql.cj.jdbc.Driver
    hikari:
      data-source-properties:
        rewriteBatchedStatements: 'true'
      maximum-pool-size: '5'
      password: ${spring.datasource.password}
      username: ${spring.datasource.username}
      driver-class-name: ${spring.datasource.driver-class-name}
      jdbc-url: ${spring.datasource.url}
      pool-name: jpa-hikari-pool
    password: ?
    username: ?
    url: jdbc:mysql://'domain':'port'/'schema'?characterEncoding=UTF-8&serverTimezone=UTC

logging:
  level:
    root: DEBUG

eureka:
  instance:
    prefer-ip-address: true
    instance-id: ${spring.application.name}:${spring.application.instance_id:${random.value}}
  client:
    register-with-eureka: true
    fetch-registry: true
    service-url:
      defaultZone: <http://eureka-container:8761/eureka/>
```

### Chatgpt

- application.yml

```sql
server:
  port: 0

spring:
  application:
    name: chatgpt-service
  profiles:
    active: prod

management:
  endpoints:
    web:
      exposure:
        include: "*"
```

- application-local.yml

```sql
spring:
  jpa:
    properties:
      hibernate:
        default_batch_fetch_size: ${chunkSize:100}
        jdbc:
          batch_size: '20'
        format_sql: 'true'
        hbm2ddl:
          import_files_sql_extractor: org.hibernate.tool.hbm2ddl.MultipleLinesSqlCommandExtractor
        dialect: org.hibernate.dialect.MySQL8Dialect
        order_updates: 'true'
        current_session_context_class: org.springframework.orm.hibernate5.SpringSessionContext
        order_inserts: 'true'
    generate-ddl: 'true'
    hibernate:
      ddl-auto: update
    show-sql: 'true'
  datasource:
    driverClassName: com.mysql.cj.jdbc.Driver
    hikari:
      data-source-properties:
        rewriteBatchedStatements: 'true'
      maximum-pool-size: '5'
      password: ${spring.datasource.password}
      username: ${spring.datasource.username}
      driver-class-name: ${spring.datasource.driver-class-name}
      jdbc-url: ${spring.datasource.url}
      pool-name: jpa-hikari-pool
    password: '1234'
    username: root
    url: jdbc:mysql://localhost:3306/ddoya?characterEncoding=UTF-8&serverTimezone=UTC

logging:
  level:
    root: DEBUG

eureka:
  instance:
    prefer-ip-address: true
    instance-id: ${spring.application.name}:${spring.application.instance_id:${random.value}}
  client:
    register-with-eureka: true
    fetch-registry: true
    service-url:
      defaultZone: <http://localhost:8761/eureka/>
```

- application-prod.yml

```
spring:
  jpa:
    properties:
      hibernate:
        default_batch_fetch_size: ${chunkSize:100}
        jdbc:
          batch_size: '20'
        format_sql: 'true'
        hbm2ddl:
          import_files_sql_extractor: org.hibernate.tool.hbm2ddl.MultipleLinesSqlCommandExtractor
        dialect: org.hibernate.dialect.MySQL8Dialect
        order_updates: 'true'
        current_session_context_class: org.springframework.orm.hibernate5.SpringSessionContext
        order_inserts: 'true'
    generate-ddl: 'true'
    hibernate:
      ddl-auto: update
    show-sql: 'true'
  datasource:
    driverClassName: com.mysql.cj.jdbc.Driver
    hikari:
      data-source-properties:
        rewriteBatchedStatements: 'true'
      maximum-pool-size: '5'
      password: ${spring.datasource.password}
      username: ${spring.datasource.username}
      driver-class-name: ${spring.datasource.driver-class-name}
      jdbc-url: ${spring.datasource.url}
      pool-name: jpa-hikari-pool
    password: ?
    username: ?
    url: jdbc:mysql://'domain':'port'/'schema'?characterEncoding=UTF-8&serverTimezone=UTC

logging:
  level:
    root: DEBUG

eureka:
  instance:
    prefer-ip-address: true
    instance-id: ${spring.application.name}:${spring.application.instance_id:${random.value}}
  client:
    register-with-eureka: true
    fetch-registry: true
    service-url:
      defaultZone: http://eureka-container:8761/eureka/

chatgpt:
  api-key: ?
```



# 4. 빌드/배포 가이드(AWS EC2)

## 1. putty 설치

(1) 제공받은 .pem 키를 puttygen를 사용해서 .ppk 파일로 변환합니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/6e6a773c-9583-4043-8313-56ec686a0a2b/db59d275-ae6b-4bd9-a01e-cec2d38ec147/Untitled.png)

(2) auth의 credential에 ppk 파일 등록합니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/6e6a773c-9583-4043-8313-56ec686a0a2b/08b9a8d2-2855-4d10-86bb-8261fadedd42/Untitled.png)

(3) 도메인주소, 포트번호 입력후 open 클릭합니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/6e6a773c-9583-4043-8313-56ec686a0a2b/35d38c85-3e20-4c0e-b2c7-1a27b3ef84f6/Untitled.png)

(4) login as : 부분에 ubuntu 입력하여 접속합니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/6e6a773c-9583-4043-8313-56ec686a0a2b/0a63e828-ff18-4ed8-9b84-acf3e35a96a8/Untitled.png)

(5) 3, 4번 과정을 한번으로 생략하는 방법입니다.

- Host Name을 다음과 같이 설정한 후 Open 합니다.
- ubuntu라는 계정으로 도메인에 접근한다는 뜻입니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/6e6a773c-9583-4043-8313-56ec686a0a2b/bf43ef6b-3f16-4818-82fc-098eca2ce355/Untitled.png)

## 2. EC2 내부에 도커 설치

> **도커 공식 사이트를 참고 하였습니다.** ([링크](https://docs.docker.com/engine/install/ubuntu/))

### (1) Docker 리포지토리 설정

```sql
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL <https://download.docker.com/linux/ubuntu/gpg> | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# Add the repository to Apt sources:
echo \\
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] <https://download.docker.com/linux/ubuntu> \\
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \\
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

### (2) Docker 패키지 설치

```sql
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

### (3) Docker 동작 확인

```sql
sudo docker run hello-world
```

## 3. 젠킨스 설치하기

### (1) 젠킨스 Docker pull 받기

```sql
$ sudo docker pull jenkins/jenkins:lts
```

### (2) 젠킨스 이미지 실행하기(주의)

- 젠킨스 이미지에는 도커 엔진이 설치되어 있지 않습니다.
- 또한 ec2 서버에서 올라갈 예정인 모든 서비스 컨테이너는 젠킨스를 동해 빌드 되므로 젠킨스 내부에서 실행된 컨테이너가 ec2에 실행되도록 연결시켜줘야 합니다.
- 따라서, ec2의 도커와 젠킨스를 연결시켜줘야 합니다.
  - 바인딩은 -v 라는 속성으로 가능합니다.
- 젠킨스 내부에는 docker 관련 폴더가 없기 때문에 폴더를 생성해줍니다.

```sql
sudo mkdir /home/opendocs/jenkins
```

- 젠킨스 이미지를 실행합니다.
  - v /home/opendocs/jenkins:/var/jenkins_home
    - 젠킨스 컨테이너가 죽더라도 ec2와 바인딩 되어 초기화 되지 않습니다.
  - -v /var/run/docker.sock:/var/run/docker.sock -v /usr/bin/docker:/usr/bin/docker
    - 해당 명령어를 통해 젠킨스 내부에서 docker를 사용할 수 있고 젠킨스 내부에서 실행된 컨테이너는 ec2로 연결됩니다.

```sql
sudo docker run --name jenkins -d -p 8080:8080 -p 50000:50000 -v /home/opendocs/jenkins:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock -v /usr/bin/docker:/usr/bin/docker -u root jenkins/jenkins:lts
```

## 4. MySQL 설치

- MySQL 설치하기

```sql
sudo apt install mysql-server
```

- MySQL 실행여부 확인하기

```sql
sudo systemctl status mysql
```

- MySQL 로그인하기
  - 이때 로그인 하는 root 계정은 ec2에서 mysql로 접근하는 내부 계정입니다.
  - 개발 시 로컬환경에서 ec2 서버의 3306 포트에 있는 sql로 접속해야하기 때문에 새로운 계정을 만들어주어야 합니다.

```sql
sudo mysql -u root -p
```

- 외부 접속 가능 계정 생성

```sql
CREATE USER 'root'@'%' IDENTIFIED BY '비밀번호';
```

- 생성된 계정에 권한 부여하기
  - 권한이 없으면 데이터베이스 작업이 불가능합니다.

```sql
# 권한 부여
grant all privileges on *.* to root@'%';
# 권한 확인
show grants for root@'%';
```

- 계정 권한 적용하기
  - 해당 명령어를 입력해야 권한이 적용됩니다.

```sql
FLUSH PRIVILEGES;
```

- EC2의 3306 포트를 오픈합니다.

```sql
sudo ufw allow 3306
```

- EC2 최고 권한을 부여 받아 root로 EC2에 접속합니다.

```sql
sudo su
```

- conf 파일을 수정합니다.

```sql
- `cd /etc/mysql/mysql.conf.d`
- `vi mysqld.cnf`
- `bind-address = 0.0.0.0`
- mysqlx-bind-address : 0.0.0.0
- 이후 :wq로 빠져나온다.
```

- mysql 재시작

```sql
sudo service mysql restart
```

- 기존 생성했던 계정의 비밀번호 변경하기

```sql
ALTER USER 'root'@'%' IDENTIFIED BY '새로운 비밀번호';
FLUSH PRIVILEGES;
```

## 5. Redis 설치하기

> **레디스 공식 사이트를 참고 하였습니다.** ([링크](https://redis.io/docs/install/install-redis/install-redis-on-linux/))

- 순서대로 명령어를 실행합니다.

```sql
sudo apt install lsb-release curl gpg

curl -fsSL <https://packages.redis.io/gpg> | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg

echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] <https://packages.redis.io/deb> $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

sudo apt-get update

sudo apt-get install redis
```

- ec2내에서 redis 작동 확인하기
  - 결과로 pong이 나오면 정상 작동 중인 것입니다.

```sql
sudo redis-cli ping
```

- redis는 기본적으로 6379 포트에 열리기 때문에 ec2의 6379 포트를 개방합니다.

```sql
sudo ufw allow 6379
```

## 6. nginx 설치

> **ec2에 직접 설치하지 않고 docker 이미지로 설치했습니다.**

- docker 이미지 pull 받기

```sql
sudo docker pull nginx:latest
```

- nginx 이미지 실행하기
  - 나중에 ssl을 적용해야하기 때문에 443 포트도 함께 바인딩 합니다.

```sql
sudo docker run -d -p 80:80 -p 443:443 nginx
```

## 7. SSL 적용하기

- 먼저 도커로 실행한 nginx 내부로 접근합니다.

```sql
sudo docker exec -it nginx bash
```

- 인증서 설치를 위한 Certbot Tool 설치

```sql
sudo apt update
sudo apt-get install letsencrypt -y
```

- nginx를 통한 ssl 인증서 발급

```sql
sudo apt install certbot python3-certbot-nginx
```

- 참고) nginx 설정 파일 위치
  - nginx 기본 설치 방식으로 설치했기 때문에 nginx 설치파일은 /etc/nginx/conf.d 폴더 내에 default.conf 로 존재합니다.
  - ssl 발급이 성공적으로 완료됐다면 자동으로 443 포트로 redirect한 설정 파일이 작성되어 있을 것입니다.

```sql
cd etc/nginx/conf.d
```

- nginx 재시작

```sql
sudo service nginx restart
```

- exit 명령어로 EC2로 빠져나온 후 443 포트를 개방합니다.

```sql
sudo ufw allow 443
```

- certbot은 90일의 유효기간이 있기 때문에 자동 갱신이 필요할 수 있습니다.

```sql
sudo certbot renew --dry-run
```

- default.conf 파일 내:q용

```sql
server{
    listen 80;
    listen [::]:80;
    server_name k9e204.p.ssafy.io;
    server_tokens off;
    return 301 https://$host$request_uri;
}

server{
    listen [::]:443 ssl ipv6only=on;
    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/k9e204.p.ssafy.io/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/k9e204.p.ssafy.io/privkey.pem;
    include /etc/letcencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    server_name k9e204.p.ssafy.io;

    location / {
        proxy_pass <http://k9e204.p.ssafy.io:3000>;
    }

    location /api {
        proxy_pass <http://k9e204.p.ssafy.io:9001>;
    }

    location /login/oauth2 {
        proxy_pass <http://k9e204.p.ssafy.io:9001>;
    }

    location /oauth2 {
        proxy_pass <http://k9e204.p.ssafy.io:9001>;
    }

}
```

---

# 프론트엔드/백엔드 배포 가이드

## 1. Frontend

- **default.conf**

```sql
server {
    listen 3000; 

    location / {

        root /usr/share/nginx/html; 
        index index.html index.htm; 
        try_files $uri  $uri/ /index.html; 

    }
}
```

- **Dockerfile**

```sql
FROM node:18.18.0-alpine as build
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY ./ ./
RUN npm run build
FROM nginx
EXPOSE 3000
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/dist/ /usr/share/nginx/html
```

## Backend

> **MSA 아키텍처 기반으로 배포하였습니다.**

- **AUTH-SERVICE dockerfile**

```sql
FROM openjdk:17-jdk
ARG JAR_FILE=build/libs/auth-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} auth.jar
EXPOSE 8888
ENTRYPOINT ["java", "-jar", "/auth.jar"]
```

- **Gateway dockerfile**

```sql
FROM openjdk:17-jdk
ARG JAR_FILE=build/libs/gateway-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} gateway.jar
EXPOSE 9001
ENTRYPOINT ["java", "-jar", "/gateway.jar"]
```

- **Eureka dockerfile**

```sql
FROM openjdk:17-jdk
ARG JAR_FILE=build/libs/eureka-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} eureka.jar
EXPOSE 8761
ENTRYPOINT ["java", "-jar", "/eureka.jar"]
```

- **SONG-SERVICE dockerfile**

```sql
FROM openjdk:17-jdk
ARG JAR_FILE=build/libs/song-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} song.jar
EXPOSE 8889
ENTRYPOINT ["java", "-jar", "/song.jar"]
```

- **DRAMA-SERVICE dockerfile**

```sql
FROM openjdk:17-jdk
ARG JAR_FILE=build/libs/drama-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} drama.jar
EXPOSE 8889
ENTRYPOINT ["java", "-jar", "/drama.jar"]
```

- **SHOW-SERVICE dockerfile**

```sql
FROM openjdk:17-jdk
ARG JAR_FILE=build/libs/show-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} show.jar
EXPOSE 8889
ENTRYPOINT ["java", "-jar", "/show.jar"]
```

- **CHATGPT-SERVICE dockerfile**

```sql
FROM openjdk:17-jdk
ARG JAR_FILE=build/libs/chatgpt-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} chatgpt.jar
EXPOSE 8889
ENTRYPOINT ["java", "-jar", "/chatgpt.jar"]
```

- **EVALUATE-SERVICE dockerfile**

```sql
FROM openjdk:17-jdk
ARG JAR_FILE=build/libs/evaluate-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} evaluate.jar
EXPOSE 8889
ENTRYPOINT ["java", "-jar", "/evaluate.jar"]
```
