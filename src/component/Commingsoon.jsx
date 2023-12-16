import PostCard from "./PostCard";
import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";
import Popup from "./Popup";
import "reactjs-popup/dist/index.css";
import PostComponent from "./PostComponent";


import { FunctionComponent } from "react";

const Commingsoon: FunctionComponent = () => {
  return (
    <div className="relative rounded-[18px] bg-black w-full h-[435px] overflow-hidden text-left text-[20px] font-inter">
      <img
        className="absolute top-[24px] left-[98px] w-[348px] h-[309px] object-cover"
        alt=""
        src="/image-77@2x.png"
      />
      <b className="absolute top-[357px] left-[226px] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:0.5px_0_0_#282828,_0_0.5px_0_#282828,_-0.5px_0_0_#282828,_0_-0.5px_0_#282828]">{`Dsocial.dso `}</b>
    </div>
  );
};

export default Commingsoon;
