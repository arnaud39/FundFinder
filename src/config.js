// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "./components/LearningOptions/LearningOptions";
import WelcomeUser from "./components/Welcome/Welcome";
import Additional from "./components/AdditionalInfos/Additional";
import WhatPurpose from "./components/WhatPurpose/WhatPurpose";
import LinkList from "./components/LinkList/LinkList";


const welcomeMessage = "Hi, I am Fundfinder, powered by artificial intelligence. I will guide you to success by helping you with your next loan. Feel free to ask any question";

const config = { 
  botName: "fundFinder",
  initialMessages: [createChatBotMessage(welcomeMessage, {
    widget: "welcomeUser",
  }
  )
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
     widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "welcomeUser",
     widgetFunc: (props) => <WelcomeUser {...props} />,
    },
    {
      widgetName: "additionalInfo",
     widgetFunc: (props) => <Additional {...props} />,
    },
    {
      widgetName: "whatPurpose",
     widgetFunc: (props) => <WhatPurpose {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
  ],
}

export default config
