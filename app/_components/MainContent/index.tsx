"use client";

import React from "react";
import MainContentType1 from "./_MainContentType1";
import MainContentType2 from "./_MainContentType2";
import MainContentType3 from "./_MainContentType3";
import MainContentType4 from "./_MainContentType4";
import MainContentType5 from "./_MainContentType5";
import { MainContentData } from "./types/MainContentData";

interface MainContentProps {
  type: number;
  data: MainContentData;
}

const MainContent: React.FC<MainContentProps> = ({ type, data }) => {
  const renderMainContentComponent = (type: number) => {
    switch (type) {
      case 1:
        return <MainContentType1 data={data} />;
      case 2:
        return <MainContentType2 data={data} />;
      case 3:
        return <MainContentType3 data={data} />;
      case 4:
        return <MainContentType4 data={data} />;
      case 5:
        return <MainContentType5 data={data} />;
      default:
        throw new Error(`MainContent type ${type} is not supported`);
    }
  };

  return <>{renderMainContentComponent(type)}</>;
};

export default MainContent;
