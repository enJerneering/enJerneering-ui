"use client";

import React from "react";
import HeaderType1 from "./_HeaderType1";
import HeaderType2 from "./_HeaderType2";
import HeaderType3 from "./_HeaderType3";
import HeaderType4 from "./_HeaderType4";
import HeaderType5 from "./_HeaderType5";
import { HeaderData } from "./types/HeaderData";

interface HeaderProps {
  type: number;
  data: HeaderData;
}

const Header: React.FC<HeaderProps> = ({ type, data }) => {
  const renderHeaderComponent = (type: number) => {
    switch (type) {
      case 1:
        return <HeaderType1 data={data} />;
      case 2:
        return <HeaderType2 data={data} />;
      case 3:
        return <HeaderType3 data={data} />;
      case 4:
        return <HeaderType4 data={data} />;
      case 5:
        return <HeaderType5 data={data} />;
      default:
        throw new Error(`Header type ${type} is not supported`);
    }
  };

  return <>{renderHeaderComponent(type)}</>;
};

export default Header;
