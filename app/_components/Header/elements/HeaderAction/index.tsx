"use client";

import React from "react";
import useRedirect from "@/_hooks/useRedirect";
import Button from "@/_components/Button";

interface HeaderActionProps {
  primaryLabel: string;
  secondaryLabel: string;
  primaryUrl: string;
  secondaryUrl: string;
}

const HeaderAction: React.FC<HeaderActionProps> = ({
  primaryLabel,
  secondaryLabel,
  primaryUrl,
  secondaryUrl,
}) => {
  const { handleRedirect } = useRedirect();

  return (
    <div className="flex items-center gap-4">
      <Button
        label={primaryLabel}
        iconLeft={<i className="pi pi-bolt"></i>}
        onClick={() => handleRedirect(primaryUrl)}
      />
      <Button
        color="secondary"
        label={secondaryLabel}
        onClick={() => handleRedirect(secondaryUrl)}
      />
    </div>
  );
};

export default HeaderAction;
