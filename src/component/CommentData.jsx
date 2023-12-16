import { Context } from "../context/ContextProvider";
import React, { useState, useContext, useEffect } from "react";

const CommentData =  (props) => {
    const {checkIfWalletIsConnected,ConnectWallet, currentAccount, isNewUser ,createUser,createPost,likePost,getUserData,userPost,getUserComment} =
    useContext(Context);
    
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const ll = await getUserData(currentAccount);
            setUserData(ll);
            console.log('ll', ll);
        };

        fetchData();
    }, []);
    
        console.log('inside object map', props.comment);
    
    return (
      <div className="text-white  mb-[1rem] bg-slate-500 p-4" > 
    
      <div className="flex  flex-col">
        <div className="flex gap-4">
          <img className="h-[2rem] w-auto rounded-full" src={props.comment[1]} alt="" />
          <div> {props.comment[0]}</div>
          </div>
          <div
          className="p-4 my-auto">{props.comment[2]}</div>
      </div>
      </div>
    )
    
 
}

export default CommentData;
