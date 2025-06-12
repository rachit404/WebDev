import { CircleX, LayoutGrid, Table2 } from "lucide-react";
type TableControlsProps = {
  isGrid: boolean;
  setIsGrid: (value: boolean) => void;
};

const TableControls: React.FC<TableControlsProps> = ({ isGrid, setIsGrid }) => {
  return (
    <>
      <div className="flex items-center min-h-10 min-w-48 justify-between w-full px-5 pt-9 pb-5">
        {/* Left Filter Tabs */}
        <div className="inline-flex rounded-lg border-2 border-[#D5D7DA] text-sm font-semibold overflow-hidden text-[#252B37]">
          <button className="px-4 py-2.5 hover:bg-[#FAFAFA] ">All</button>
          <button className="px-4 py-2.5 hover:bg-[#FAFAFA] border-[#D5D7DA] border-l-2 border-r-2">
            Live
          </button>
          <button className="px-4 py-2.5 hover:bg-[#FAFAFA] ">Virtual</button>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          {/* View Toggle Icons */}
          <div className="flex rounded-md border overflow-hidden text-[#A4A7AE]">
            <button
              className={`p-2  ${
                !isGrid ? "text-[#535862]" : ""
              } hover:text-[#535862]`}
              onClick={() => setIsGrid(false)}
            >
              <Table2 size={18} className="text-inherit" />
            </button>
            <button
              className={`p-2 ${
                isGrid ? "text-[#535862]" : ""
              } hover:text-[#535862] border-l border-[#A4A7AE]`}
              onClick={() => setIsGrid(true)}
            >
              <LayoutGrid size={18} className="text-inherit" />
            </button>
          </div>

          {/* Exit All */}
          <button className="flex items-center gap-2 text-[#D92D20] border-2 border-[#F04438] px-3 py-2 rounded-lg text-sm font-semibold">
            <CircleX size={20} />
            Exit All
          </button>
        </div>
      </div>
    </>
  );
};

export default TableControls;
