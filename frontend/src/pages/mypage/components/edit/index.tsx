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
import Modal from "@/components/modal";

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
    isOpenModal,
    closeModal,
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
      {isOpenModal && (
        <Modal
          isDetailOpen={isOpenModal}
          closeModal={closeModal}
          modalTitle="닉네임 중복"
          modalText="다른 닉네임을 입력해주세요."
        />
      )}
    </StyledMypageEdit>
  );
};
export default MypageEdit;
