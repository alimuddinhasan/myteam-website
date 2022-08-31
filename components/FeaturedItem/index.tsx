import React from "react";

interface IFeaturedItemProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeaturedItem({
  description,
  icon,
  title,
}: IFeaturedItemProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-3 items-center">
      <img src={icon} alt="featured-icon" />
      <div className="flex flex-col items-center lg:items-start gap-3">
        <h2 className="text-light-coral font-bold text-sm">{title}</h2>
        <p className="text-center lg:text-left text-white text-xs leading-6">
          {description}
        </p>
      </div>
    </div>
  );
}
