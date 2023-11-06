import { useAddInformationHook } from "@/hooks/sign/useSignUpHook";
import {
  StyledAddInformation,
  StyledAddInforamtionSubmitButton,
  StyledAddInformationCodeContainer,
  StyledAddInformationLabel,
  StyledAddInformationNickname,
  StyledAddInformationProfileContainer,
  StyledAddInformationProfileImg,
  StyledAddInformationWrapper,
  StyledAddInformationErrorMessage,
} from "./AddInformation.styled";
import Lang from "@/pages/mypage/components/lang";

const AddInformation = () => {
  const {
    formData,
    inputFileRef,
    image,
    handleChange,
    handleImageClick,
    submitJoin,
    errors,
  } = useAddInformationHook();

  // s3 업로드
  // const handleImageChange = async (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     try {
  //       const imageFormData = new FormData();
  //       imageFormData.append("image", file);
  //       // 파일 s3에 올려서 설정
  //       const response = await fileAxios.post("INVITATION", imageFormData);
  //       setImage(response.data.result[0].uploadImageUrl);
  //       setFormData({
  //         ...formData,
  //         profileImage: response.data.result[0].uploadImageUrl,
  //       });
  //     } catch (error) {
  //       console.error("이미지 api 오류", error);
  //     }
  //   }
  // };

  return (
    <StyledAddInformation>
      <StyledAddInformationProfileContainer>
        <StyledAddInformationProfileImg
          src={image ? image : "/logo.svg"}
          alt="profile"
          onClick={handleImageClick}
        />
        <input
          type="file"
          // onChange={handleImageChange}
          ref={inputFileRef}
          style={{ display: "none" }}
          accept="image/*"
        />
      </StyledAddInformationProfileContainer>

      <form onSubmit={submitJoin}>
        <hr />
        <StyledAddInformationWrapper>
          <StyledAddInformationCodeContainer>
            <StyledAddInformationLabel>
              닉네임
              <StyledAddInformationNickname
                required
                value={formData.nickName}
                placeholder="이름을 작성해주세요"
                onChange={handleChange}
                $error={!!errors.nickName}
                $filled={!!formData.nickName}
              />
            </StyledAddInformationLabel>
            {errors.nickName && (
              <StyledAddInformationErrorMessage>
                {errors.nickName}
              </StyledAddInformationErrorMessage>
            )}
          </StyledAddInformationCodeContainer>
          <Lang />
        </StyledAddInformationWrapper>
        <StyledAddInforamtionSubmitButton
          disabled={Object.keys(errors).length > 0}
        >
          추가정보 입력
        </StyledAddInforamtionSubmitButton>
      </form>
    </StyledAddInformation>
  );
};
export default AddInformation;
