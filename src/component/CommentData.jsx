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
    }, [getUserData, currentAccount]);
    
        console.log('inside object map', props.comment);
    
    return (
      <div className="text-white  mb-[1rem]" > 
    
      <div className="flex  flex-col">
        <div className="flex ">
          <img className="h-[2rem] w-auto rounded-full" src="https://cdn.discordapp.com/attachments/1177493315898314792/1184072438695338046/image.png?ex=658aa464&is=65782f64&hm=633b38526fb6b6da794465b600fb96b51339200700063e89bf541465c40aec95&" alt="" />
          <div> user</div>
          </div>
      </div>
      </div>
    )
    
 
}

export default CommentData;
