import React from "react";

interface IContactItemProps {
  icon: string;
  label: string;
}
export default function ContactItem({ icon, label }: IContactItemProps) {
  return (
    <div className='flex items-center gap-5'>
      <img src={icon} alt='contact-item-icon' />
      <p className="font-bold text-white text-sm">{label}</p>
    </div>
  );
}
