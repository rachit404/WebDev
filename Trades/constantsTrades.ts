import { Activity, Cloud } from "lucide-react";
export const metrics = [
  {
    type: "Live P&L",
    value: "+20,378,212.12",
    subtext: "Unrealised P&L",
    color: "text-[#079455]",
    badgeBg: "bg-[#F6FEF9]",
    badgeBorder: "border-[#AAF0C4]",
    badgeText: "text-green-700",
    icon: Activity,
  },
  {
    type: "Virtual P&L",
    value: "-26,300.13",
    subtext: "Virtual Unrealised P&L",
    color: "text-[#D92D20]",
    badgeBg: "bg-[#EFF8FF]",
    badgeBorder: "border-[#B2DDFF]",
    badgeText: "text-[#175CD3]",
    icon: Cloud,
  },
];

export const tabs = [
  { label: "Open Positions", count: 2 },
  { label: "Order History", count: 4 },
  { label: "All Signals", count: 6 },
];

export const users = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  username: `@user${i + 1}`,
  status: ["Active", "Offline", "Virtual"][i % 3],
  email: `user${i + 1}@email.com`,
  teams: [
    ["Design", "Product"],
    ["Operations", "Finance"],
    ["Software Engineering"],
  ][i % 3],
  avatarUrl: "",
}));
