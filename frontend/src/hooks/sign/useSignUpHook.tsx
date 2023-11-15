import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUp from "@/api/sign/SignUp";
import { S3_ADDRESS } from "@/api/api";

interface FormData {
  profileImage?: any;
  nickName?: string;
}

interface Errors {
  nickName?: string;
}

// 추가정보 유효성
const validate = (values: FormData): Errors => {
  let errors = {};

  if (!values.nickName) {
    errors = { ...errors, nickName: "닉네임을 입력해주세요." };
  } else if (values.nickName.length < 2 || values.nickName.length > 8) {
    errors = { ...errors, nickName: "닉네임은 2~8자로 작성해주세요." };
  } else if (!/^[a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ]{2,8}$/.test(values.nickName)) {
    errors = {
      ...errors,
      nickName: "닉네임에는 한글, 영어, 숫자만 사용할 수 있습니다.",
    };
  }
  return errors;
};

export const useAddInformationHook = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    nickName: "",
    profileImage: "",
  });
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string>(S3_ADDRESS + "mypageDefault.svg");

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

  // 사진변경
  const handleImageChange = async (e: any) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result as string);
        };
        reader.readAsDataURL(file);

        setFormData({
          ...formData,
          profileImage: file,
        });
      } catch (error) {
        console.error("이미지 api 오류", error);
      }
    }
  };

  // 회원가입
  const submitJoin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // 회원가입 요청 api
      const res = await SignUp(formData);
      if (res.data.status === 200) {
        localStorage.setItem("accessToken", res.data.data);
        navigate("/contents");
      } else {
        navigate("/login");
      }
    } catch (error) {
      navigate("/login");
      console.log("회원가입 에러", error);
    }
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
    handleImageChange,
  };
};
