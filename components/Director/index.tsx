import React, { Fragment, useState } from "react";
import Button from "../Button";

interface IDirectorProps {
  avatar: string;
  name: string;
  positon: string;
  quote: string;
  socials: {
    twitter: string;
    linkedin: string;
  };
}

export default function Director({
  avatar,
  name,
  positon,
  quote,
  socials,
}: IDirectorProps) {
  const [showQuote, setShowQuote] = useState(false);

  const generateButtonClases = () => {
    if (showQuote) {
      return "rotate-45 bg-rapture-blue";
    }
    return "bg-light-coral";
  };

  return (
    <div className="bg-sacramento-state-green relative mb-10 px-10">
      <div className="flex flex-col items-center py-10 mb-5">
        {!showQuote && (
          <img
            className="w-24 rounded-full border-2 mb-5"
            src={avatar}
            alt="director-avatar"
          />
        )}
        <h2 className="text-rapture-blue text-sm font-bold text-center">
          {name}
        </h2>
        {!showQuote && (
          <p className="italic font-medium text-white text-center">{positon}</p>
        )}
        {showQuote && (
          <Fragment>
            <p className="font-medium text-white text-center my-5">
              &quot;{quote}&quot;
            </p>
            <div className="flex justify-center gap-5">
              <Button icon="assets/icon-twitter.svg" isFlat />
              <Button icon="assets/icon-linkedin.svg" isFlat />
            </div>
          </Fragment>
        )}
      </div>

      <Button
        className={`${generateButtonClases()} w-14 h-14 flex justify-center items-center rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2`}
        isFlat
        icon="/assets/icon-cross.svg"
        dataTestid="button-plus"
        onClick={() => setShowQuote(!showQuote)}
      />
    </div>
  );
}
