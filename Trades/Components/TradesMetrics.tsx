import { FC } from "react";
import { ChartNoAxesCombined, MoreVertical } from "lucide-react";
import { metrics as cards } from "../constantsTrades";

const TradeMetrics: FC = () => {
  const handleMoreClick = (type: string) => {
    console.log(`${type} menu clicked`);
  };

  return (
    <div className="flex flex-wrap gap-10 w-full px-5 pt-9 pb-7 ">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.type}
            className="relative flex-1 min-w-[280px] rounded-se-md border border-gray-200 bg-white p-5 shadow-xs "
          >
            {/* 3 dots */}
            <button
              onClick={() => handleMoreClick(card.type)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              aria-label="More options"
            >
              <MoreVertical size={18} />
            </button>

            {/* Badge */}
            <span
              className={`inline-flex items-center gap-1 rounded-md ${card.badgeBg} ${card.badgeText} ${card.badgeBorder} border px-2 py-1 text-xs font-semibold`}
            >
              <Icon size={12} />
              {card.type}
            </span>

            {/* Value */}
            <div className={`mt-4 text-2xl font-semibold ${card.color}`}>
              {card.value}
            </div>

            {/* Subtext */}
            <div className="mt-1 text-sm text-[#535862]">{card.subtext}</div>

            {/* Chart */}
            <div className="absolute bottom-4 right-4 opacity-20">
              <ChartNoAxesCombined className={card.color} size={40} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TradeMetrics;
