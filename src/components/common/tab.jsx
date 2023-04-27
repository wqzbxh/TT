import React, { useState } from 'react';

const Tab = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTabIndex(tabIndex);
  };

  return (
    <div className="w-full border  shadow-lg">
      <div className="flex">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${
              activeTabIndex === index
                ? 'bg-white text-gray-700'
                : 'bg-gray-100 text-gray-600'
            } py-2 px-4 w-40 cursor-pointer  ${
              index === 0 ? '' : ''
            } ${
              index === tabs.length - 1 ? 'rounded-r-lg' : ''
            } transition-colors duration-200 ease-in-out`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="p-4 bg-white rounded-b-lg">
        {tabs[activeTabIndex].content}
      </div>
    </div>
  );
};

export default Tab;
