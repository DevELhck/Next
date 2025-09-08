import React from "react";

interface BoltCardProps {
  title: string;
  descriptions: string;
  date: string;
  image?: string;
}

const BoltCard: React.FC<BoltCardProps> = ({ title, descriptions, date, image }) => {
  return (
    <div className="flex-1 rounded bg-white shadow overflow-hidden">
      {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-4 flex flex-col gap-3">
        <span className="font-medium">{title}</span>
        <h3 className="font-bold text-lg leading-5 tracking-tight">{descriptions}</h3>
        <span className="text-sm">{date}</span>
      </div>
    </div>
  );
};

export default BoltCard;
