
import React from "react";

import "./WhatPurpose.css";


const WhatPurpose = (props) => {
  const options = [
    { text: "Personal purpose", handler: props.actionProvider.push.whatPurpose, id: 1 },
    { text: "Professional project", handler: props.actionProvider.push.whatPurpose, id: 2 },
    { text: "Other", handler: props.actionProvider.push.whatPurpose, id: 3 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="what-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="what-options-container">{optionsMarkup}</div>;
};

export default WhatPurpose;

