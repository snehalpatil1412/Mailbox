import React from "react";
import { ReceivedMails } from "../../Pages/ReceivedMails.js"
import { SentMails } from "../../Pages/SentMails.js";

export const NavPages = () => { 

  return (
    <div>
      <ReceivedMails />
      <SentMails />
    </div>
  );
};


