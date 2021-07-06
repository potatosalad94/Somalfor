import React from "react";
import Image from "next/image";

const WhyItem = (props) => {
  return (
    <div className="text-center p-4">
      <Image src={props.icon} width={80} height={80} alt={props.title} />
      <h4 className="mt-3 mb-2">{props.title}</h4>
      <p className="px-4">{props.text}</p>
    </div>
  );
};

export default WhyItem;
