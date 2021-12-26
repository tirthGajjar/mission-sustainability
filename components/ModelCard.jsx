import React from "react";
import { Heading3, Paragraph, SmallParagraph } from "./Typography";

function ModelCard({ coverImage, title, subtitle, className }) {
  return (
    <div className={"flex flex-col rounded-lg shadow-lg overflow-hidden " + className}>
      <div className="flex-shrink-0">{coverImage}</div>
      <div className="flex-1 px-6 pt-6 pb-12 flex flex-col justify-between">
          <a href="#" className="block mt-2">
            <Heading3>{title}</Heading3>
            <SmallParagraph className="pt-4">{subtitle}</SmallParagraph>
          </a>
      </div>
    </div>
  );
}

export default ModelCard;
