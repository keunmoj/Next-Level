import { useChatbotHook } from "@/hooks/chatbot/useChatbotHook";
import { useState } from "react";

const ChatTest = () => {
  const { getChatbot } = useChatbotHook();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    //   console.log(e.target.name.value);
    getChatbot(e.target.name.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" />
        <button type="submit">제출</button>
      </form>
    </div>
  );
};

export default ChatTest;
