package com.ddoya.auth.user.entity;

import com.ddoya.auth.common.entity.BaseEntity;
import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

@Getter
@DynamicInsert
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "USER")
public class User extends BaseEntity {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "OAUTH_ID")
    private String oAuthId;

    @Column(name = "NAME", length = 100)
    @Size(max = 100)
    private String name;

    @Column(name = "LANGUAGE")
    @Enumerated(EnumType.STRING)
    private Language language;

    @Column(name = "SCORE")
    private Integer score;

    @Column(name = "LAST_ATTENDANCE_DATE")
    @ColumnDefault("1970-01-01")
    private LocalDate lastAttendanceDate;

    @Column(name = "CONSECUTIVE_ATTENDANCE_DAYS")
    @ColumnDefault("0")
    private Integer consecutiveAttendanceDays;

    @Column(name = "NICKNAME", unique = true)
    @Size(max = 100)
    private String nickName;

    @Column(name = "EMAIL", length = 512)
    @NotNull
    @Size(max = 512)
    private String email;

    @Column(name = "PROFILE_IMAGE_URL", length = 512)
    @Size(max = 512)
    private String profileImageUrl;

    @Enumerated(EnumType.STRING)
    private Role role;

    public void updateNickName(String nickName) {
        this.nickName = nickName;
    }

    public void updateLanguage(Language language) {
        this.language = language;
    }

    public void updateProfileImage(String profileImageUrl) {
        this.profileImageUrl = profileImageUrl;
    }

    public void plusScore(Integer score) {
        this.score += score;
    }

    public void updateLastAttendanceDate(LocalDate attendanceDate) {
        this.lastAttendanceDate = attendanceDate;
    }

    public void initConsecutiveAttendanceDays() {
        this.consecutiveAttendanceDays = 0;
    }

    public void increaseConsecutiveAttendanceDays() {
        this.consecutiveAttendanceDays += 1;
    }

    public void updateRole(Role role) {
        this.role = role;
    }

    public User(
        @NotNull String oauthId,
        @NotNull @Size(max = 100) String name,
        @NotNull @Size(max = 512) String email,
        Role role
    ) {
        this.oAuthId = oauthId;
        this.name = name;
        this.score = 0;
        this.email = email != null ? email : "NO_EMAIL";
        this.role = role;
    }
}
