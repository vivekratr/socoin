import PostCard from "./PostCard";
import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";
import Popup from "./Popup";
import "reactjs-popup/dist/index.css";
import PostComponent from "./PostComponent";

import { FunctionComponent } from "react";

const Getstarted: FunctionComponent = () => {
  return (
    <div className="relative bg-black box-border w-full h-[800px] overflow-hidden text-left text-[16px] text-white font-inter border-[1px] border-solid border-white">
      <div className="absolute top-[600px] left-[780px] rounded-[44px] [background:linear-gradient(180.13deg,_#202020,_#181818)] box-border w-[132px] h-11 overflow-hidden border-t-[2px] border-solid border-gray border-r-[1px] border-l-[1px]">
        <div className="absolute top-[13px] left-[21px] font-medium">
          Get Started
        </div>
      </div>
      <img
        className="absolute top-[34px] left-[1600px] rounded-lg w-[45px] h-[45px] overflow-hidden object-cover"
        alt=""
        src="https://cdn.discordapp.com/attachments/1184864067295395960/1185499752985526352/image.png?ex=658fd5ae&is=657d60ae&hm=80fb47295c2221ca3040c87eaa89a559fcb9ea3d802e3022f6d9b22f00c1a9d2&"
      />
      <b className="absolute top-[450px] left-[700px] text-[23px] ">
        Decentralized Connectivity
      </b>
    </div>
  );
};

export default Getstarted;
