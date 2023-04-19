import React from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

export default function ExpandablePanel({ header, children }) {
  return (
    <div className="panelDiv">
      <div className="topArrangement">
        <div className="topArrangement">{header}</div>
        <div>
          <GoChevronLeft />
        </div>
      </div>
      {children}
    </div>
  );
}
