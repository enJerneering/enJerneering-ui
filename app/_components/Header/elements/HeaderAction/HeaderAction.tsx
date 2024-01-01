"use client";

import React from "react";
import useRedirect from "@/_hooks/useRedirect";
import Button from "@/_components/Button";

interface HeaderActionProps {
  btnPrimaryLabel: string;
  btnSecondaryLabel: string;
  btnPrimaryUrl: string;
  btnSecondaryUrl: string;
}

const HeaderAction: React.FC<HeaderActionProps> = ({
  btnPrimaryLabel,
  btnSecondaryLabel,
  btnPrimaryUrl,
  btnSecondaryUrl,
}) => {
  const { handleRedirect } = useRedirect();

  return (
    <div className="flex items-center gap-4">
      <Button
        label={btnPrimaryLabel}
        iconLeft={<i className="pi pi-bolt"></i>}
        onClick={() => handleRedirect(btnPrimaryUrl)}
      />
      <Button
        color="secondary"
        label={btnSecondaryLabel}
        onClick={() => handleRedirect(btnSecondaryUrl)}
      />
    </div>
  );
};

export default HeaderAction;
