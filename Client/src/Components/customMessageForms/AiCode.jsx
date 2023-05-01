import { usePostAiCodeMutation } from "@/state/api";
import React, { useState } from "react";
import MessageFormUI from "./MessageFormUI";
import CustomMessageList from "../customMessageList/customMessagelist";

const AiCode = ({ props, activeChat }) => {
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState("");
  const [triggerCode] = usePostAiCodeMutation();
  const handleChange = (e) => setMessage(e.target.value);
  let form =null;
  const handleSubmit = async () => {
    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", `${Math.floor(Math.random() * 1000)}+00:00`);
    const at = attachment ? [{ blob: attachment, file: attachment.name }] : [];
    
     form = {
      attachments: at,
      created: date,
      sender_username: props.username,
      text:message,
      activeChatId: activeChat.id,
    };

    props.onSubmit(form);
    triggerCode(form);
    setMessage("");
    setAttachment("");
  };
  <CustomMessageList message={form} />
  return (
    <> 
 <MessageFormUI
      
      setAttachment={setAttachment}
      message={message}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
    
    
    </>
  );
};

export default AiCode;



// import { usePostAiCodeMutation } from "@/state/api";
// import React, { useState } from "react";
// import MessageFormUI from "./MessageFormUI";


// import axios from 'axios';

// const AiCode = ({ props, activeChat }) => {
//   const [message, setMessage] = useState("");
//   const [attachment, setAttachment] = useState("");
//   const [triggerCode] = usePostAiCodeMutation();
//   const [botResponse, setBotResponse] = useState(""); // Add state for bot response

//   const handleChange = (e) => setMessage(e.target.value);

//   const handleSubmit = async () => {
//     const date = new Date()
//       .toISOString()
//       .replace("T", " ")
//       .replace("Z", `${Math.floor(Math.random() * 1000)}+00:00`);
//     const at = attachment ? [{ blob: attachment, file: attachment.name }] : [];
    
//     const form = {
//       attachments: at,
//       created: date,
//       sender_username: props.username,
//       text:message,
//       activeChatId: activeChat.id,
//     };

//     // Send user message to API endpoint
//     props.onSubmit(form);

//     // Trigger code generation with OpenAI
//     const response = await triggerCode(form);

//     // Send bot response to API endpoint and update UI
//     const botMessage = response.data.text;
//     await axios.post(
//       `https://api.chatengine.io/chats/${activeChat.id}/messages/`,
//       { text: botMessage },
//       {
//         headers: {
//           "Project-ID":  import.meta.env.PROJECT_ID,
//           "User-Name":   import.meta.env.BOT_USER_NAME,
//           "User-Secret": import.meta.env.BOT_USER_SECRET,
//         },
//       }
//     );
//     setBotResponse(botMessage);

//     setMessage("");
//     setAttachment("");
//   };

//   return (
//     <MessageFormUI
//       setAttachment={setAttachment}
//       message={message}
//       handleChange={handleChange}
//       handleSubmit={handleSubmit}
//       botResponse={botResponse} // Pass bot response to UI component
//     />
//   );
// };

// export default AiCode;




















































// import { usePostAiCodeMutation } from "@/state/api";
// import React, { useState } from "react";
// import MessageFormUI from "./MessageFormUI";
// import { MessageList } from "react-chat-engine-advanced";
// import CodeSnippet from "./CodeSnip";

// const AiCode = ({ props, activeChat }) => {
//   const [message, setMessage] = useState("");
//   const [attachment, setAttachment] = useState("");
//   const [triggerCode] = usePostAiCodeMutation();

//   const handleChange = (e) => setMessage(e.target.value);

//   const handleSubmit = async () => {
//     const date = new Date()
//       .toISOString()
//       .replace("T", " ")
//       .replace("Z", `${Math.floor(Math.random() * 1000)}+00:00`);
//     const at = attachment ? [{ blob: attachment, file: attachment.name }] : [];
    
//     const form = {
//       attachments: at,
//       created: date,
//       sender_username: props.username,
//       text:message,
//       activeChatId: activeChat.id,
//     };

//     props.onSubmit(form);
//     triggerCode(form);
//     setMessage("");
//     setAttachment("");
//   };

//   const renderChatBubble = (chat, index, allChats) => {
//     // Check if chat is sent by current user
//     const isMyMessage = chat?.sender?.username === props.username;

//     // Add custom styling for chat bubbles
//     const bubbleStyle = {
//       backgroundColor: isMyMessage ? "#3366FF" : "#EBEBEB",
//       color: isMyMessage ? "#FFFFFF" : "#000000",
//       borderRadius: "20px",
//       padding: "10px",
//       marginBottom: "10px",
//       maxWidth: "70%",
//       display: "flex",
//       flexDirection: "column",
//     };

//     return (
//       <div style={bubbleStyle}>
//         {chat?.attachments?.length > 0 && (
//           <img
//             src={chat.attachments[0].file}
//             alt="attachment"
//             className="message-image"
//             style={{ marginBottom: "10px" }}
//           />
//         )}
//         <div>{chat.message}</div>
//       </div>
//     );
//   };

//   const renderChatText = (chat) => {
//     // Add custom styling for chat text
//     const textStyle = {
//       color: "#000000",
//       fontSize: "14px",
//       fontWeight: "normal",
//       fontStyle: "normal",
//       textAlign: "left",
//     };
  
//     if (chat?.sender?.username !== props.username) {
//       // Render incoming messages as code snippets
//       return <div style={textStyle}><CodeSnippet message={chat.text} /></div>;
//     }
  
//     // Render outgoing messages as regular text
//     return <div style={textStyle}>{chat.text}</div>;
//   };

//   return (
//     <div>
//       <MessageList
//         chatList={props.chatList}
//         activeChat={activeChat}
//         renderChatBubble={renderChatBubble}
//         renderChatText={renderChatText}
//       />
//       <MessageFormUI
//         setAttachment={setAttachment}
//         message={message}
//         handleChange={handleChange}
//         handleSubmit={handleSubmit}
//       />
//     </div>
//   );
// };

// export default AiCode;

// import { usePostAiCodeMutation } from "@/state/api";
// import React, { useState } from "react";
// import MessageFormUI from "./MessageFormUI";
// import { MessageList } from "react-chat-engine-advanced";
// import MyMessage from "./myMessage";
// import TheirMessage from "./theirMessage";

// const AiCode = ({ props, activeChat }) => {
//   const [message, setMessage] = useState("");
//   const [attachment, setAttachment] = useState("");
//   const [triggerCode] = usePostAiCodeMutation();

//   const handleChange = (e) => setMessage(e.target.value);

//   const handleSubmit = async () => {
//     const date = new Date()
//       .toISOString()
//       .replace("T", " ")
//       .replace("Z", `${Math.floor(Math.random() * 1000)}+00:00`);
//     const at = attachment ? [{ blob: attachment, file: attachment.name }] : [];
    
//     const form = {
//       attachments: at,
//       created: date,
//       sender_username: props.username,
//       text:message,
//       activeChatId: activeChat.id,
//     };

//     props.onSubmit(form);
//     triggerCode(form);
//     setMessage("");
//     setAttachment("");
//   };

//   const renderMessages = () => {
//     const keys = Object.keys(messages);

//     return keys.map((key, index) => {
//         const message = messages[key];
//         const lastMessageKey = index === 0 ? null : keys[index - 1];
//         const isMyMessage = userName === message.sender.username;

//         return (
//             <div key={`msg_${index}`} style={{ width: "100%" }}>
//                 <div className="message-block">
//                     {isMyMessage ? (
//                         <MyMessage message={message} />
//                     ) : (
//                         <TheirMessage
//                             message={message}
//                             lastMessage={messages[lastMessageKey]}
//                         />
//                     )}
//                 </div>
//                 <div
//                     className="read-receipts"
//                     style={{
//                         marginRight: isMyMessage ? "18px" : "0px",
//                         marginLeft: isMyMessage ? "0px" : "68px",
//                     }}
//                 >
//                     {renderReadReceipts(message, isMyMessage)}
//                 </div>
//             </div>
//         );
//     });
// };

//   return (
//     <div >
//        <div className="message-block">
//                         {isMyMessage ? (
//                             <MyMessage message={message} />
//                         ) : (
//                             <TheirMessage
//                                 message={message}
//                                 lastMessage={messages[lastMessageKey]}
//                             />
//                         )}
//                     </div>
//                     <div
//                         className="read-receipts"
//                         style={{
//                             marginRight: isMyMessage ? "18px" : "0px",
//                             marginLeft: isMyMessage ? "0px" : "68px",
//                         }}
//                     >
//                         {renderReadReceipts(message, isMyMessage)}
//                     </div>
//       <MessageFormUI
//         setAttachment={setAttachment}
//         message={message}
//         handleChange={handleChange}
//         handleSubmit={handleSubmit}
//       />
//     </div>
//   );
// };

// export default AiCode;

// const Styles={
//   messageBubble: {
//     borderRadius: '10px',
//     padding: '10px',
//     marginBottom: '10px',
//   },
  
//   messageBubbleSender :{
//     backgroundColor: '#f4a26'
//   },
  
//   messageBubbleReceiver :{
//     backgroundColor: '#8d8dcf'
//   }
// }
