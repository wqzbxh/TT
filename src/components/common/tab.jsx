import React, { useState } from 'react';

const Tab = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTabIndex(tabIndex);
  };

  return (
    <div className="w-full border ">
       
      <div className="flex bg-transparent bg-gradient-to-br from-customize-blue-49 to-customize-blue-1a  transform rotate-15 rounded-sm  ">
      {/* <div className="flex bg-gradient-to-b from-customize-dark-42  to-customize-dark-19 transform rotate-15  rounded-sm  "> */}
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${
              activeTabIndex === index
                ? 'bg-white text-gray-700'
                : 'text-white'
            }  items-center justify-left  overflow-hidden  text-center py-6 px-8 w-auto hover:bg-blue-200  cursor-pointer  ${
              index === 0 ? '' : ''
            } ${
              index === tabs.length - 1 ? ' ' : ''
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
