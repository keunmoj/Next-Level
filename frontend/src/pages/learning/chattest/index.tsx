import { useChatbotHook } from "@/hooks/chatbot/useChatbotHook";
import { useChatbotTalkingHook } from "@/hooks/chatbot/useChatbotTalkingHook";
import { useState } from "react";

const ChatTest = () => {
  const { getChatbot } = useChatbotHook();
  const { getChatTalkingbot } = useChatbotTalkingHook();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target.name.value);
    getChatTalkingbot(e.target.name.value);
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
