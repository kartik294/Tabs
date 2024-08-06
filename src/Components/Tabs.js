import { useState } from "react";
import "./Tabs.css";
export default function Tabs({ tabsData, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentTabIndex(index);
    if (onChange) {
      onChange(index);
    }
  };
  return (
    <div className="tabs">
      <div className="tabs__container">
        {tabsData.map((tab, index) => {
          return (
            <button
              className={`${currentTabIndex === index ? "active" : ""}`}
              onClick={() => handleClick(index)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="tabs__content">{tabsData[currentTabIndex].content}</div>
    </div>
  );
}
