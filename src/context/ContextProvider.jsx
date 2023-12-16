import React, { useEffect, useState } from "react";
import { ethers,utils } from 'ethers';
import { contractABI, contractAddress } from "../utils/constants";


export const Context = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const socoinContract = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );
    console.log("ethereum",ethereum);
    console.log(contractABI,contractAddress);
     console.log("signer",signer);
    console.log("provider",provider);
    console.log("Contract",socoinContract);
    return socoinContract;
  };


  export const SocoinProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [userDatar,setUserDatar]=useState([])
  const [refresh,setRefresh]=useState(0)
  

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        setCurrentAccount("");
        console.log("No account found");
      }
      console.log("Connected account: ", currentAccount);
 
    } catch (error) {
      console.log(error);
    }
  };

  const ConnectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

       setCurrentAccount(accounts[0]).then(

         console.log("Connected account: connected in connectWallet ", currentAccount)
       );

      // const contracts = getEthereumContract();
      // console.log("Current account under connect wallet",currentAccount);
      // const userData = await contracts.user_data(currentAccount);
      // console.log("userData",userData);


    } catch (error) {
      console.log(error);
      
    }
  };

  const isNewUser = async () => {
    try {
      if (!ethereum) return alert("Please install Phantom wallet");

      const contracts = getEthereumContract();
      console.log("contract",contracts);
      
      if(currentAccount==""){
        console.log("no account found");
        await ConnectWallet();
      }
    

        const iNewUser = await contracts.user_data(currentAccount);
        console.log("isNewUser",iNewUser);
      return 1;
      // console.log("minContribution",minContributionNumber);
    } catch (error) {
      console.log("error in isnewuser",error);
      return 0;
    }
  }
  // string memory _name,string memory _username,string memory _interest,uint _user_id,string memory _profile
  async function createUser(obj){
    try {
      if (!ethereum) return alert("Please install Phantom wallet");

      const contracts = getEthereumContract();
      const createdUser = await contracts.createUser(obj.name,obj.username,obj.interests,1,obj.url);
      console.log("createdUser",createdUser);
      // console.log("minContribution",minContributionNumber);
      alert("created");
    } catch (error) {
      console.log(error);
      console.log("error in create user");
    }
  }

  async function userPost(){
    try {
      if (!ethereum) return alert("Please install Phantom wallet");

      const contracts = getEthereumContract();
      // const userPost = await contracts.userPost(utils.getAddress(currentAccount,1));
      // console.log("userPost",userPost);
      // console.log("minContribution",minContributionNumber);
    } catch (error) {
      console.log(error);
    }
  }


  // string memory _img,uint256 _postId,string memory _description,string memory _hashtag
  async function  createPost(props){
    try {
      if (!ethereum) return alert("Please install Phantom wallet");

      const contracts = getEthereumContract();
      const createdPost = await contracts.createPost(props.file,1,props.description,props.hash);
      console.log("createdPost",createdPost);
      // console.log("minContribution",minContributionNumber);
      
      

    } catch (error) {
      props.countFunc((prev)=>{return prev+1});

      console.log(error);
    }
  }

  // string memory _img,string memory _description,uint _price,string memory _hash
  async function  createPrivatePost(props){
    try {
      if (!ethereum) return alert("Please install Phantom wallet");

      const contracts = getEthereumContract();
      const createdPost = await contracts.createPrivatePost(props.file,props.description,props.coin,props.hash);
      console.log("createdPost",createdPost);
      // console.log("minContribution",minContributionNumber);
     
    } catch (error) {
      props.countFunc((prev)=>{return prev+1});

      console.log(error);
    }
  }

 async function likePost (_postId){
    try {
      if (!ethereum) return alert("Please install Phantom wallet");

      const contracts = getEthereumContract();
      const likedPost = await contracts.like(_postId);
      console.log("likedPost",likedPost);
      setRefresh((p)=>p+1)
      alert("liked");
      // console.log("minContribution",minContributionNumber);
    } catch (error) {
      console.log(error);
    }
  }


  async function getUserData(addr){
    try {
      if (!ethereum) return alert("Please install Phantom wallet");

      const contracts = getEthereumContract();
      let userDatas;
      if(currentAccount){  
         userDatas = await contracts.user_data(utils.getAddress(addr));
        
        console.log("userData",Number(userDatas.token));
        setUserDatar(userDatas);
      return userDatas;
      }
    
      // console.log("minContribution",minContributionNumber);
    } catch (error) {
      console.log(error);
    }
  }

  async function getAllPost(){
    try {
      if (!ethereum) return alert("Please install Metamask wallet");

      const contracts = getEthereumContract();
      let userDatas;
      if(currentAccount){  
         userDatas = await contracts.getAllPost();
        
        console.log("All post",userDatas);
      
      return userDatas;
      }
    
      // console.log("minContribution",minContributionNumber);
    } catch (error) {
      console.log(error);
    }
  }

  async function getAllPrivatePost(){
    try {
      if (!ethereum) return alert("Please install Metamask wallet");

      const contracts = getEthereumContract();
      let userDatas;
      if(currentAccount){  
         userDatas = await contracts.getAllPrivatePost();
        
        console.log("All private post",userDatas);
      
      return userDatas;
      }
    
      // console.log("minContribution",minContributionNumber);
    } catch (error) {
      console.log(error);
    }
  }


  async function getUserPost(addr){
    try {
      if (!ethereum) return alert("Please install Phantom wallet");

      const contracts = getEthereumContract();
      let userDatas;
      if(currentAccount){  
         userDatas = await contracts.getPublicPosts(utils.getAddress(addr));
        
        console.log("user's post",userDatas);
      
      return userDatas;
      }
    
      // console.log("minContribution",minContributionNumber);
    } catch (error) {
      console.log(error);
    }
  }

  async function getUserPrivatePost(addr){
    try {
      if (!ethereum) return alert("Please install Phantom wallet");

      const contracts = getEthereumContract();
      let userDatas;
      if(currentAccount){  
         userDatas = await contracts.getPrivatePosts(utils.getAddress(addr));
        
        console.log("user's private post",userDatas);
      
      return userDatas;
      }
    
      // console.log("minContribution",minContributionNumber);
    } catch (error) {
      console.log(error);
    }
  }

  async function getRewardStatus(addr){
    try {
      if (!ethereum) return alert("Please install Phantom wallet");

      const contracts = getEthereumContract();
      let userDatas;
      if(currentAccount){  
         userDatas = await contracts.getRewardSuccess(utils.getAddress(addr));
        
        console.log("Reward score",userDatas);
      
      return userDatas;
      }
    
      // console.log("minContribution",minContributionNumber);
    } catch (error) {
      console.log(error);
    }
  }

  async function addComments(_index,_text){
    try {
      if (!ethereum) return alert("Please install Phantom wallet");

      const contracts = getEthereumContract();
      let userDatas;
      if(currentAccount){  
         userDatas = await contracts.addComment(_index,_text);
        
        console.log("add comment",userDatas);
        setRefresh((prev)=>prev+1);
      
      }
      window.location.reload()

      
    
      // console.log("minContribution",minContributionNumber);
    } catch (error) {
      console.log(error);
    }
  }


  async function getUserComment(num){
    try {
      if (!ethereum) return alert("Please install Phantom wallet");

      const contracts = getEthereumContract();
      let userDatas;
      if(currentAccount){  
         userDatas = await contracts.getComments(num);
        
        console.log("user's comment on post",num,"index",userDatas);
      
      return userDatas;
      }
    
      // console.log("minContribution",minContributionNumber);
    } catch (error) {
      console.log(error,"error in comment");
    }
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // await ConnectWallet();
      
      


     
  //     } catch (error) {
  //       console.error("Error in fetchData:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <Context.Provider
      value={{
        checkIfWalletIsConnected,
        ConnectWallet,
        currentAccount,
        isNewUser,
        createUser,
        createPost,
        likePost,
        getUserData,
        userPost,
        createPrivatePost,
        getEthereumContract,
        userDatar,
        addComments,
        getAllPost,
        refresh,
        setRefresh,
        getUserPost,
        getAllPrivatePost,
        getUserPrivatePost,
        getUserComment,
        getRewardStatus,
      }}
    >
      {children}
    </Context.Provider>
  );

    };