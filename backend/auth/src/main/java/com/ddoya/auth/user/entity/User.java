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

@Getter
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
    private LocalDate lastAttendanceDate;

    @Column(name = "NICKNAME")
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

    public User(
        @NotNull String oauthId,
        @NotNull @Size(max = 100) String name,
        @NotNull @Size(max = 512) String email,
        @Size(max = 512) String profileImageUrl,
        Role role
    ) {
        this.oAuthId = oauthId;
        this.name = name;
        this.email = email != null ? email : "NO_EMAIL";
        this.profileImageUrl = profileImageUrl != null ? profileImageUrl : "";
        this.role = role;
    }
}
