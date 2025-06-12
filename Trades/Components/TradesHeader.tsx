// src/components/TradesHeader.tsx
import { FC } from "react";
import { tabs } from "../constantsTrades.ts";

interface TradesHeaderProps {
  activeTab: string;
  setActiveTab: (label: string) => void;
}

const TradesHeader: FC<TradesHeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-full px-[10px] ">
      {/* Title */}
      <h1 className="mt-[30px]  text-4xl font-semibold text-gray-900 dark:text-white ">
        Trades
      </h1>

      {/* Tabs */}
      <div className=" mt-5 flex space-x-6 border-b border-gray-200 dark:border-gray-700">
        {tabs.map((tab) => {
          const isActive = tab.label === activeTab;
          return (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`relative pb-2 text-sm font-semibold transition-all duration-100 ease-in-out
                ${
                  isActive
                    ? "text-[#7F56D9]  border-b-2 border-[#7F56D9]"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                }`}
            >
              {tab.label}

              {isActive && tab.count !== undefined && (
                <span className="ml-2 inline-flex items-center justify-center rounded-full bg-[#F9F5FF] border-[1px] border-[#E9D7FE]  px-2.5 py-0.5 text-xs font-semibold text-[#6941C6] transition-all ease-in-out">
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TradesHeader;
