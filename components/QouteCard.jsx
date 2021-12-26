import Image from "next/image";
import React from "react";
import { Heading3, SmallParagraph } from "./Typography";
import ShriShyamSundarPaliwal from "../public/images/ShriShyamSundarPaliwal.png";

const QouteCard = () => {
  return (
    <div className="pt-20 relative bg-gradient-to-tl from-yellow-50 rounded-t-lg aspect-[464/542] max-w-[464px] flex flex-col justify-between">
      <Heading3 className="max-w-sm font-normal mx-auto font-sans text-gray-600 leading-relaxed">
        &quot;Everyone knows whats the right thing to do. We need to find enough
        courage to just do it.&quot;
      </Heading3>
      <div className="flex justify-between items-center">
        <div className="space-y-3 pr-5 pl-8 max-w-[239px]">
          <Heading3>Shri Shyam Sundar Paliwal</Heading3>
          <SmallParagraph>
            Padma Shri awardee for bringing reformational environental and
            social changes in his village Piplantri, Rajasthan
          </SmallParagraph>
        </div>
        <Image
          src={ShriShyamSundarPaliwal}
          className="rounded-l-xl"
          alt=""
          height="240"
          width="173"
          layout="fixed"
        />
      </div>
    </div>
  );
};

export default QouteCard;
