import { useState } from "react";
import TradesMetrics from "./Components/TradesMetrics";
import TradesHeader from "./Components/TradesHeader";
import TradesTable from "./Components/TradesTable";

const Trades = () => {
  const [activeTab, setActiveTab] = useState("Open Positions");
  return (
    <>
      <TradesHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="bg-[#F9F5FF]">
        <TradesMetrics />
        <TradesTable />
      </div>
    </>
  );
};

export default Trades;
