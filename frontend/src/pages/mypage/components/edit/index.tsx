import {
  StyledMypageEdit,
  StyledMypageEditTitle,
  StyledMypageEditSubmitButton,
  StyledMypageEditCodeContainer,
  StyledMypageEditLabel,
  StyledMypageEditNickname,
  StyledMypageEditProfileContainer,
  StyledMypageEditProfileImg,
  StyledMypageEditWrapper,
  StyledMypageEditErrorMessage,
} from "./Edit.styled";
import Lang from "@/pages/mypage/components/lang";
import { useUserInfoEditHook } from "@/hooks/user/useUserInfoEditHook";

const MypageEdit = () => {
  const {
    formData,
    inputFileRef,
    image,
    handleChange,
    handleImageClick,
    submitJoin,
    errors,
    handleImageChange,
  } = useUserInfoEditHook();

  return (
    <StyledMypageEdit>
      <Lang />
      <StyledMypageEditTitle>내 정보 수정</StyledMypageEditTitle>
      <StyledMypageEditProfileContainer>
        <StyledMypageEditProfileImg
          src={image}
          alt="profile"
          onClick={handleImageClick}
        />
        <input
          type="file"
          onChange={handleImageChange}
          ref={inputFileRef}
          style={{ display: "none" }}
          accept="image/*"
        />
      </StyledMypageEditProfileContainer>

      <form onSubmit={submitJoin}>
        <hr />
        <StyledMypageEditWrapper>
          <StyledMypageEditCodeContainer>
            <StyledMypageEditLabel>
              닉네임
              <StyledMypageEditNickname
                required
                value={formData.nickName}
                placeholder="이름을 작성해주세요"
                onChange={handleChange}
                $error={!!errors.nickName}
                $filled={!!formData.nickName}
              />
            </StyledMypageEditLabel>
            {errors.nickName && (
              <StyledMypageEditErrorMessage>
                {errors.nickName}
              </StyledMypageEditErrorMessage>
            )}
          </StyledMypageEditCodeContainer>
        </StyledMypageEditWrapper>
        <StyledMypageEditSubmitButton disabled={Object.keys(errors).length > 0}>
          수정하기
        </StyledMypageEditSubmitButton>
      </form>
    </StyledMypageEdit>
  );
};
export default MypageEdit;
