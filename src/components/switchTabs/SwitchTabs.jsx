import React, { useState } from "react";
import "./style.scss";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const switchTabHandler = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 100);
    onTabChange(tab, index);
  };

  return (
    <div className="switching_tabs">
      <div className="tab_items">
        {data.map((tab, index) => (
          <span
            key={index}
            className={`tab_item ${selectedTab === index ? "active" : ""}`}
            onClick={() => switchTabHandler(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span className="moving_bg" style={{ left }} />
      </div>
    </div>
  );
};

export default SwitchTabs;
