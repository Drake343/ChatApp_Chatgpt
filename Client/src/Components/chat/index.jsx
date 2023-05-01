import React from 'react'
import { 
        useMultiChatLogic,
        MultiChatSocket,
        MultiChatWindow,
} from 'react-chat-engine-advanced';
import CustomeHeader from '../customHeader'; 
import StandardMessageForm from '../customMessageForms/StandardMessageForm';
import Ai from '../customMessageForms/Ai';
import AiCode from '../customMessageForms/AiCode';
import AiAssist from '../customMessageForms/AiAssist';
import AiGrammar from '../customMessageForms/AiGrammar';
import CustomMessageList from '../customMessageList/customMessagelist';

const Chat = ({user, secret}) => {
        const chatProps=useMultiChatLogic(
                import.meta.env.VITE_PROJECT_ID,
                user,
                secret
        )
const isAiCode=chatProps.chat?.title.startsWith("AiCode_");
  return (
    <div style={{flexBasis:'100%'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} 
         style={{height:"100vh"}} 
         renderChatHeader={(chat) => 
         <CustomeHeader chat={chat}/>}


  
          renderMessageList={isAiCode ? (props) => <CustomMessageList props={props}/> : null}
         
          

         renderMessageForm={(props)=>{
                if (chatProps.chat?.title.startsWith("AiChat_")) {
            return <Ai props={props} activeChat={chatProps.chat} />;
          }
          if (chatProps.chat?.title.startsWith("AiCode_")) {
            return <AiCode props={props} activeChat={chatProps.chat} />;
          }
          if (chatProps.chat?.title.startsWith("AiAssist_")) {
            return <AiAssist props={props} activeChat={chatProps.chat} />;
          }
          if (chatProps.chat?.title.startsWith("AiGrammar_")) {
            return <AiGrammar props={props} activeChat={chatProps.chat} />;
          }

                return(
                        <StandardMessageForm props={props} activeChat={chatProps.chat} />
                )
         }}
         />
    </div>
  )
}

export default Chat
