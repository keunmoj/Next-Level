import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUp from "@/api/sign/SignUp";

interface FormData {
  profileImage?: any;
  nickname?: string;
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

export const useAddInformationHook = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({ nickname: "" });
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

  // 회원가입
  const submitJoin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // 회원가입 요청 api
      const res = await SignUp(formData);
      console.log(res);
      if (res.data.status === 200) {
        navigate("/contents");
      }
    } catch (error) {
      console.log("회원가입 에러", error);
    }
    navigate("/login");
  };

  // 추가정보 유효성 검사
  const [errors, setErrors] = useState(() => validate(formData));
  useEffect(() => {
    setErrors(validate(formData));
  }, [formData]);

  return {
    formData,
    inputFileRef,
    image,
    handleChange,
    handleImageClick,
    submitJoin,
    errors,
  };
};
