package com.ddoya.song.common.entity;

import lombok.Cleanup;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "email")
    private String email;

    @Column(name = "name")
    private String name;

    @Column(name = "language")
    private String language;

    @Column(name = "score")
    private Integer score;

    @Column(name = "last_attendance_date")
    private LocalDateTime lastAttendanceDate;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "modified_at")
    private LocalDateTime modifiedAt;

    @Column(name = "nickname")
    private String nickname;

    @Column(name = "oauth_id")
    private String oauthId;

    @Column(name = "profile_image_url")
    private String profileImageUrl;

    @Column(name = "role")
    private String role;

    @Column(name = "consecutive_attendance_days")
    private String consecutiveAttendanceDays;
}
