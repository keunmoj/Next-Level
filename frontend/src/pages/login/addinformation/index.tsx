import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

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

interface FormData {
  profileImage: any;
  nickname: string;
}

interface Errors {
  nickname?: string;
}

// 추가정보 유효성
const validate = (values: FormData): Errors => {
  let errors = {};

  if (!values.nickname) {
    errors = { ...errors, nickname: "닉네임을 입력해주세요." };
  } else if (values.nickname.length < 2 || values.nickname.length > 6) {
    errors = { ...errors, nickname: "닉네임은 2~6자로 작성해주세요." };
  } else if (!/^[a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ]{2,6}$/.test(values.nickname)) {
    errors = {
      ...errors,
      nickname: "닉네임에는 한글, 영어, 숫자만 사용할 수 있습니다.",
    };
  }
  return errors;
};

const AddInformation = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    profileImage: "",
    nickname: "",
  });
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string>("");

  // 정보 입력
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);

    const newErrors = validate(newFormData);
    setErrors(newErrors);
  };

  // 사진 변경
  const handleImageClick = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };
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

  // 회원가입
  const submitJoin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // 회원가입 요청 api
    } catch (error) {
      // console.log("회원가입 에러", error);
    }
  };

  // 추가정보 유효성 검사
  const [errors, setErrors] = useState(() => validate(formData));
  useEffect(() => {
    setErrors(validate(formData));
  }, [formData]);

  return (
    <StyledAddInformation>
      <StyledAddInformationProfileContainer>
        <StyledAddInformationProfileImg
          src={
            image ? image : `기본이미지 랜덤이미지나 전부 동일한 거 보여주거나`
          }
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

      <form
      // onSubmit={submitJoin}
      >
        <hr />
        <StyledAddInformationWrapper>
          <StyledAddInformationCodeContainer>
            <StyledAddInformationLabel>
              닉네임
              <StyledAddInformationNickname
                required
                value={formData.nickname}
                placeholder="이름을 작성해주세요"
                onChange={handleChange}
                $error={!!errors.nickname}
                $filled={!!formData.nickname}
              />
            </StyledAddInformationLabel>
            {errors.nickname && (
              <StyledAddInformationErrorMessage>
                {errors.nickname}
              </StyledAddInformationErrorMessage>
            )}
          </StyledAddInformationCodeContainer>
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
