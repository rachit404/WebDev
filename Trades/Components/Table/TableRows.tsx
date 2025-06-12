import React from "react";
import { users } from "../../constantsTrades";
import { Pen, Trash2 } from "lucide-react";

interface TableRowsProps {
  page?: number;
  selected?: number[];
  toggleSelect?: (id: number) => void;
}

const TableRows: React.FC<TableRowsProps> = ({
  page = 2,
  selected = [],
  toggleSelect,
}) => {
  const itemsPerPage = 15;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedUsers = users.slice(startIndex, endIndex);

  const teamColor = {
    Design: "bg-[#F9F5FF] text-[#6941C6]",
    Product: "bg-black text-white",
    Operations: "bg-[#F0F4FF] text-[#175CD3]",
    Finance: "bg-[#F0F4FF] text-[#175CD3]",
    "Software Engineering": "bg-[#FFF7ED] text-[#D97706]",
  };

  return (
    <tbody className="divide-y divide-[#EAECF0] bg-white">
      {displayedUsers.map((user) => (
        <tr key={user.id} className="hover:bg-gray-50">
          <td className="py-4 px-4 pr-4 whitespace-nowrap">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={selected.includes(user.id)}
                onChange={() => toggleSelect?.(user.id)}
                className="w-4 h-4 rounded border-gray-300 text-[#6941C6] focus:ring-[#6941C6]"
              />
              <div className="flex items-center gap-3">
                <img
                  src={
                    user.avatarUrl ||
                    `https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg`
                  }
                  alt={`${user.name}'s avatar`}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-[#101828]">
                    {user.name}
                  </span>
                  <span className="text-sm text-[#667085]">
                    {user.username}
                  </span>
                </div>
              </div>
            </div>
          </td>
          <td className="px-4 py-4 whitespace-nowrap ">
            <div className="py-1.5 pl-3 flex items-center gap-2 border-[#D5D7DA] border rounded-md shadow-xs">
              <div
                className={`w-2 h-2 rounded-full ${
                  user.status === "Offline" ? "bg-[#667085]" : "bg-[#12B76A]"
                }`}
              ></div>
              <span className="text-xs text-[#414651]">{user.status}</span>
            </div>
          </td>
          <td className="px-4 py-4 text-sm text-[#101828] whitespace-nowrap">
            {user.email}
          </td>
          <td className="px-4 py-4 whitespace-nowrap">
            <div className="flex gap-2">
              {user.teams.map((team, index) => (
                <span
                  key={index}
                  className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    teamColor[team as keyof typeof teamColor]
                  }`}
                >
                  {team}
                </span>
              ))}
            </div>
          </td>
          <td className="px-4 py-4 text-right whitespace-nowrap">
            <div className="flex items-center justify-end gap-2 text-[#A4A7AE]">
              <button className="p-2 hover:bg-gray-50 rounded-lg">
                <Trash2 size={16} />
              </button>
              <button className="p-2 hover:bg-gray-50 rounded-lg">
                <Pen size={16} />
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableRows;
