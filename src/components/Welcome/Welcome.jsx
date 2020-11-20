
import React from "react";

import "./Welcome.css";

const WelcomeUser = (props) => {
  const options = [
    { text: "Hi Fundfinder !", handler: props.actionProvider.push.whatPurpose, id: 1 },
    { text: "Tell me more", handler: props.actionProvider.push.additionalInfo, id: 2 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="welcome-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="welcome-options-container">{optionsMarkup}</div>;
};

export default WelcomeUser;

