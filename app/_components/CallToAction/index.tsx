"use client";

import React from "react";
import CallToActionType1 from "./_CallToActionType1";
import CallToActionType2 from "./_CallToActionType2";
import CallToActionType3 from "./_CallToActionType3";
import CallToActionType4 from "./_CallToActionType4";
import CallToActionType5 from "./_CallToActionType5";
import { CallToActionData } from "./types/CallToActionData";

interface CallToActionProps {
  type: number;
  data: CallToActionData;
}

const CallToAction: React.FC<CallToActionProps> = ({ type, data }) => {
  const renderCallToActionComponent = (type: number) => {
    switch (type) {
      case 1:
        return <CallToActionType1 data={data} />;
      case 2:
        return <CallToActionType2 data={data} />;
      case 3:
        return <CallToActionType3 data={data} />;
      case 4:
        return <CallToActionType4 data={data} />;
      case 5:
        return <CallToActionType5 data={data} />;
      default:
        throw new Error(`CallToAction type ${type} is not supported`);
    }
  };

  return <>{renderCallToActionComponent(type)}</>;
};

export default CallToAction;
