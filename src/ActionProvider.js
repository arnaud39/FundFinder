// ActionProvider starter code
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.messageList = {
      additionalInfo: "I am designed to help humans.",
      whereInvesting: "Great, friend. Where",
      nearestBank: "According to my data, you are at a short distance away these banks.",
      nearestBankNext: "With whom would you like to get in touch afterwards ?",
      amoutOfMoney: "Amazing ! Now, let's go down to business. Can you tell me how much money you need?",
      tooLow: "Considering your needs, I can redirect you to an instant loan offer.",
      socialConnect: "I need to gather some infos. To faster the process, you can connect with these social media. I'll get the information I need if you agree",
      errorSocialConnect: "I am sorry, there was an error. Could you connect again ?",
      sucessCheck: "It is all good! Let's check together that the information I've retrieved is the right one."
    
    }
    this.widgetsList = {
      test: "test"
    }

    this.push = this.objectMap(this.messageList, this.mapFunction);
  }


  objectMap = (obj, fn) =>
  Object.fromEntries(
    Object.entries(obj).map(
      ([k, v], i) => [k, fn(v, k, i)]
    )
  )

  mapFunction = el => () => {
    let greetingMessage = this.createChatBotMessage(el);
    this.updateChatbotState(greetingMessage);
  }



  /*push = (messageTo) => {
    console.log(messageTo);
    const greetingMessage = this.createChatBotMessage(messageTo);
    this.updateChatbotState(greetingMessage);
  }*/
  test() {
    const mst = this.createChatBotMessage(this.messageList.nearestBank, {
      widget: "learningOptions",
    }
    );
    this.updateChatbotState(mst);
  }
  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Javascript:",
      {
        widget: "javascriptLinks",
      }
    );

    this.updateChatbotState(message);
  };

  chooseInvestment() {
    const choiceMessage = this.createChatBotMessage("Hi, I'm here to help. What do you want to learn?", {
      widget: "learningOptions",
    });
    this.updateChatbotState(choiceMessage);

  }

  updateChatbotState(message) {
 
    // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
     
        
       this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message]
        }))
      }

}

export default ActionProvider;
