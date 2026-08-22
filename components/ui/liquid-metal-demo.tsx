import React from "react";
import { LiquidMetalButton } from "./liquid-metal-button";

export const LiquidMetalDemo: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 p-8 items-center justify-center bg-slate-950 min-h-[200px]">
      <LiquidMetalButton variant="gold">
        Consult on WhatsApp
      </LiquidMetalButton>
      <LiquidMetalButton variant="silver">
        Explore 12 Modules
      </LiquidMetalButton>
      <LiquidMetalButton variant="dark">
        Build Research Plan
      </LiquidMetalButton>
    </div>
  );
};

export default LiquidMetalDemo;
