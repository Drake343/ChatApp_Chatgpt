// import React from "react";
// import { Message } from "react-chat-engine-advanced";
// function CustomMessage(props){
// return (
// <Message
//   messages={[
//     {
//       attachments: [],
//       created: '2021-07-14 01:01:00.000000+00:00',
//       custom_json: '',
//       id: 1001,
//       sender: {
//         avatar: 'https://chat-engine-assets.s3.amazonaws.com/tutorials/my-face-min.png',
//         custom_json: '',
//         first_name: 'Adam',
//         is_online: true,
//         last_name: 'La Morre',
//         username: props.sender_username
//       },
//       sender_username: 'Adam_La_Morre',
//       text: props.text
//     },
//     {
//       attachments: [],
//       created: '2021-07-14 01:02:00.000000+00:00',
//       custom_json: '',
//       id: 1002,
//       sender: {
//         avatar: null,
//         custom_json: '',
//         first_name: 'Bob',
//         is_online: true,
//         last_name: 'Baker',
//         username: 'bob_baker'
//       },
//       sender_username: 'bob_baker',
//       text: '<p>Second message</p>'
//     },
//     {
//       attachments: [],
//       created: '2021-07-14 01:03:00.000000+00:00',
//       custom_json: '',
//       id: 1003,
//       sender: '[Circular]',
//       sender_username: 'bob_baker',
//       text: '<p>Third message</p>'
//     },
//     {
//       attachments: [
//         {
//           created: '2021-08-03T00:16:52.633778Z',
//           file: 'https://chat-engine-assets.s3.amazonaws.com/tutorials/nextjs-chat-tutorial/thumb.png',
//           id: 10
//         },
//         {
//           created: '2021-08-03T00:16:59.633778Z',
//           file: 'https://chat-engine-assets.s3.amazonaws.com/click.mp3',
//           id: 11
//         }
//       ],
//       created: '2021-07-14 01:04:00.000000+00:00',
//       custom_json: '',
//       id: 1004,
//       sender: '[Circular]',
//       sender_username: 'Adam_La_Morre',
//       text: '<p>Fouth and final message</p>'
//     }
//   ]}
//   onBottomMessageHide={function noRefCheck(){}}
//   onBottomMessageShow={function noRefCheck(){}}
//   onMessageLoaderHide={function noRefCheck(){}}
//   onMessageLoaderShow={function noRefCheck(){}}
//   style={{
// //     border: '2px solid red',
//     boxShadow: '0px 0px 3px 6px rgba(0, 0, 0, 0.1)',
//     maxWidth: 'auto',
//     overflowY: 'scroll', 
//   }}
// />)
// }
// export default CustomMessage;

import { MessageList } from "react-chat-engine-advanced";

// import { MessageList } from "react-chat-engine-advanced";

// function CustomMessageList({ props, sender, receiver }) {
//   return (
//     <MessageList
//       {...props}
//       renderSender={(chat, message, lastMessage) => (
//         <div>{/* Render the sender message UI here */}</div>
//       )}
//       renderReceiver={(chat, message, lastMessage) => (
//         <div>{/* Render the receiver message UI here */}</div>
//       )}
//     />
//   );
// }

// export default CustomMessageList;

function CustomMessageList( props ) {
  const message='hello'
  return (
  <MessageList
    renderMessage={message}
  />
   
  );
}

export default CustomMessageList;