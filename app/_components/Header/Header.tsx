"use client";

import React from "react";
import HeaderType1 from "./Header_type1";
import HeaderType3 from "./Header_type3";
import HeaderType2 from "./Header_type2";
import { HeaderTypeEnum } from "@/_enum/app";

interface HeaderProps {
  type: string;
  data: App.Header;
}

const Header: React.FC<HeaderProps> = ({ type, data }) => {
  const renderHeaderComponent = (type: string) => {
    switch (type) {
      case HeaderTypeEnum.HeaderType1:
        return <HeaderType1 data={data} />;
      case HeaderTypeEnum.HeaderType2:
        return <HeaderType2 data={data} />;
      default:
        return <HeaderType3 data={data} />;
    }
  };

  return <>{renderHeaderComponent(type)}</>;
};

export default Header;
