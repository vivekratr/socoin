import PostCard from './PostCard'
import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";
import Popup from "./Popup";
import "reactjs-popup/dist/index.css";
import PostComponent from "./PostComponent";

const Profile1 = () => {
  const navigate = useNavigate();
  const [commentOpen, setCommentOpen] = useState(false);
  const [userBal, setUserBal] = useState(0);  
  const [likess, setLikess] = useState(477);
  const [isRegister,setIsRegister] =useState(1);
  const [regUsername,setRegUsername] = useState('');
  const [num, setNum] = useState(0);  



  
console.log('num',num,'type',typeof(num));
  function handleUsername(e){
    console.log('handleusername',e.target.value)
    setRegUsername(e.target.value);
  }

  const imgLinks = [
    "https://cdn.discordapp.com/attachments/1148598201314725913/1164977604483371068/image.png?ex=65452cf1&is=6532b7f1&hm=89fd657197685f46d1a5b5f8e88e9a0ed71f85854024cba35069197b1a10e1a7&",
    "https://cdn.discordapp.com/attachments/1148598201314725913/1164977580626153592/image.png?ex=65452ceb&is=6532b7eb&hm=711bb8f7cf53910f9ddf7eb6c079fc1f6d02046545a025cea182e49b53347a97&",
    "https://cdn.discordapp.com/attachments/1148598201314725913/1164977560195702884/image.png?ex=65452ce6&is=6532b7e6&hm=71ac448a37bb1692b9550d5f2037f118bf7b2804d384de88583866d4828a7fcb&",
    "https://cdn.discordapp.com/attachments/1148598201314725913/1164977456139223040/image.png?ex=65452ccd&is=6532b7cd&hm=630f816d2cd6a0a323af298284eb3a1896e0e4e93ecb91b1e632c547603b4170&",
    "https://cdn.discordapp.com/attachments/1148598201314725913/1164977453094162442/image.png?ex=65452ccd&is=6532b7cd&hm=5e5bb5f5c37ebcedf3339a9a162112e29c54f79942748654aa43ca375b5ec269&",
    "https://cdn.discordapp.com/attachments/1148598201314725913/1164977098146975744/image.png?ex=65452c78&is=6532b778&hm=74ca2b0fcb94ef05c6e65fc5e7f56e31a1b513d70f717e260c318b6e55be914e&",
  ];
  const {checkIfWalletIsConnected,ConnectWallet, currentAccount, isNewUser ,createUser,createPost,likePost,getUserData,userPost} =
    useContext(Context);
  const handleConnectWallet = async () => {
  await ConnectWallet();
  
   
   
  };

  useEffect(() => {
    const getBal = async () => {
      console.log("currentAccount useeffect", currentAccount);
      if(currentAccount){

   
        
        const bal = await getUserData(currentAccount);
        //  const login =async ()=>{num= await isNewUser()} ;
        //  login();
        // let num= await isNewUser();
         setNum( Number(bal.user_id));
         console.log('numm',num,'type',typeof(num));

      if (!num) {
      //  const create = async()=>{
      //    await createUser('tt',1);
      //  }
      //  create();
  
       setIsRegister(0);
  
        // navigate("/register");
      }
        console.log("bal", Number(bal.token));
      setUserBal( Number(bal.token));
      userPost();
    }}
    getBal();

  }, [currentAccount , createUser,num,userPost,likePost,getUserData]);
  return (
    <div className='bg-black h-full'>
     <div className='flex h-[100vh]'>
      {/* register modal */}
<div
      // style={containerStyle}
      className={`bg-white absolute left-[37rem] top-[10rem] mx-auto z-10 flex flex-col items-center justify-center min-h-[50vh] ${isRegister===0 && num===0 && currentAccount!==''?'block':'hidden'}`}
    >
      <div className="bg-white p-5 rounded-2xl max-w-md text-center">
        <div className="text-black text-lg font-semibold max-w-[434px] mb-4">
          Share your details and avail 50 Socoins for free
        </div>
        <div className="bg-violet-200 w-[283px] h-[38px] mx-auto mb-4 rounded-xl relative overflow-hidden">
          <input
            type="text"
            className="w-full h-full p-2 text-black font-bold bg-transparent outline-none"
            placeholder="Username"
            onChange={handleUsername}
          />
        </div>
        <div className="bg-violet-200 w-[283px] h-[38px] mx-auto mb-4 rounded-xl relative overflow-hidden">
          <input
            type="email"
            className="w-full h-full p-2 text-black font-bold bg-transparent outline-none"
            placeholder="Email"
          />
        </div>
        <div className="bg-violet-200 w-[283px] h-[38px] mx-auto mb-4 rounded-xl relative overflow-hidden">
          <input
            type="tel"
            className="w-full h-full p-2 text-black font-bold bg-transparent outline-none"
            placeholder="Phone Number"
          />
        </div>
        <div className="bg-violet-200 w-[283px] h-[38px] mx-auto mb-4 rounded-xl relative overflow-hidden">
          <input
            type="number"
            className="w-full h-full p-2 text-black font-bold bg-transparent outline-none"
            placeholder="Age"
          />
        </div>
        <button className="border border-[color:var(--gray-600,#4B5563)] bg-white w-[127px] self-center px-5 py-2.5 rounded-3xl">
          <div onClick={()=>{
            createUser(regUsername);
            console.log(regUsername);
            setIsRegister(1);
          }} className="text-black text-sm font-medium self-center">
            Continue
          </div>
        </button>
      </div>
    </div>
    {/* register modal end */}
 
 {/* options */}
 <div className='flex flex-col min-w-[20.25rem] h-full bg-black items-center justify-around border-r-[1px] border-solid border-gray-700 box-border'>
<div className='flex '>
<img className='relative bottom-[3rem] w-full h-[9.25rem] object-cover' src="https://cdn.discordapp.com/attachments/1177492390949441610/1183783874153680966/image.png?ex=658997a5&is=657722a5&hm=14a6d7aa3bb675c16e9b5d4b8c83d33a278313a173fc5904d709aa60cdcd8d48&" alt="" />

</div>

<div className="relative bottom-[5rem] w-full flex  items-start justify-center  ">
  <div className='flex flex-col gap-[2.25rem] text-left text-[1.25rem] text-white font-inter'>
<div className="flex flex-row items-center justify-start gap-[0.63rem]">
<img className="relative bottom-[0.2rem] w-[1.31rem] h-[1.31rem] overflow-hidden shrink-0" alt="" src="https://cdn.discordapp.com/attachments/1177493315898314792/1184069163149426688/image.png?ex=658aa157&is=65782c57&hm=b3e917cf7d418c2b76b3310202154b605793f6e57e3f21bb591d706a26f0305e&" />
<div className="relative font-medium ">Home</div>
</div>
<div className="flex flex-row items-center justify-start gap-[0.63rem]">
<img className="relative w-[1rem] h-[1.19rem]" alt="" src="https://cdn.discordapp.com/attachments/1177493315898314792/1184069785865171014/image.png?ex=658aa1eb&is=65782ceb&hm=dadb492ce11b1f2b9b06b98152270e097702aaa581d1de59d339ebcdba8924fa&" />
<div className="relative font-medium">Notifications</div>
</div>
<div className="flex flex-row items-center justify-start gap-[0.63rem]">
<img className="relative w-[1.06rem] h-[1rem]" alt="" src="https://cdn.discordapp.com/attachments/1177493315898314792/1184069837249593365/image.png?ex=658aa1f8&is=65782cf8&hm=7476237b6fb89bdbebae10a3771913532a001efdbe6b3220e545a2a6b857fa19&" />
<div className="relative font-medium">Messages</div>
</div>
<div className="flex flex-row items-start justify-start gap-[0.63rem]">
<img className="relative w-[1.25rem] h-[1.19rem]" alt="" src="https://cdn.discordapp.com/attachments/1177493315898314792/1184070090631675944/image.png?ex=658aa234&is=65782d34&hm=cbd1ac4ff02e23412a1fbc94566b279be521568e7d8bdb10bc865f6052f3d969&" />
<div className="relative font-medium">Communities</div>
</div>
{/* <div className="flex flex-row items-start justify-start gap-[0.63rem]">
<img className="relative w-[1.25rem] h-[1.25rem]" alt="" src="https://cdn.discordapp.com/attachments/1177493315898314792/1184069996142415983/image.png?ex=658aa21e&is=65782d1e&hm=0ce679d0e2e97dd09997ae88aa90f3cd824d6d5ab5263d9948b64fa0db0bd636&" />
<div className="relative font-medium">Profile</div>
</div> */}
</div>

<div>

</div>
</div>

<div className="relative rounded-[97px] bg-cornflowerblue box-border w-[13rem] h-[3.06rem] overflow-hidden text-left text-[1.25rem] text-white font-inter border-t-[1px] border-solid border-lightskyblue border-r-[1px] border-l-[1px]">
<div className="absolute py-[0.81rem] px-[5.13rem] font-semibold">Post</div>
</div>

<div className="relative w-[12rem] h-[2.25rem] text-left text-[1rem] text-white font-inter">
<b className="absolute top-[0rem] left-[2.56rem]">Amit Sinha</b>
<div className="absolute top-[1.31rem] left-[2.5rem] text-[0.75rem] text-colours-gray-500">@amitsinha.dso</div>
<div className="absolute top-[0rem] left-[0rem] rounded-[69px] bg-white w-[2.06rem] h-[2.06rem] overflow-hidden">
<img className="absolute top-[0rem] left-[0rem] rounded-[30px] w-[2.25rem] h-[2.25rem] object-cover" alt="" src="https://cdn.discordapp.com/attachments/1177493315898314792/1184072438695338046/image.png?ex=658aa464&is=65782f64&hm=633b38526fb6b6da794465b600fb96b51339200700063e89bf541465c40aec95&" />
</div>
<img className="absolute top-[0rem] left-[11.75rem] w-[1.5rem] h-[1.5rem] overflow-hidden" alt="" src="https://cdn.discordapp.com/attachments/1177493315898314792/1184074199577415741/image.png?ex=658aa608&is=65783108&hm=49441e880ec9e668ecd4fb83e21c896b03b202d851882189adb757ce47dd3e6f&" />
</div>

 </div>
 {/* options end */}


 {/* mid portion */}
 <div className='flex flex-col min-w-[48.138rem] bg-black border-r-[1px] border-solid border-gray-700 box-border'>
  <div className='h-[5.75rem] w-full] flex items-center justify-center border-b-[1px] border-solid border-gray-700 box-border'>

 <div className="relative mx-auto my-auto rounded-[67px] bg-colours-gray-900 w-[39.375rem] h-[2.75rem] overflow-hidden text-left text-[1rem] text-gray font-inter ">
{/* <input
  type="text"
  class="absolute text-white top-[0.75rem] left-[4.06rem] bg-transparent font-medium border-none focus:bg-transparent hover:bg-transparent outline-none"
  placeholder="Search"
/> */}
<img className="absolute top-[0.75rem] left-[2.13rem] w-[1.19rem] h-[1.19rem] overflow-hidden" alt="" src="https://cdn.discordapp.com/attachments/1177493315898314792/1184078012669501510/image.png?ex=658aa995&is=65783495&hm=9f770576644efc3f8eccaf92aae7308b731a06ed7ac8a6e87f06211be40c03c1&" />
</div>
  </div>
<div className='flex items-center justify-start left-5   relative w-full top-[2rem]'>


<div className="w-[1440px] h-[968px] relative bg-black border border-white">
    <div className="px-[21px] py-[11px] left-[949px] top-[148px] absolute bg-black rounded-[40px] border border-white justify-center items-center inline-flex">
        <div className="text-white text-base font-medium font-['Inter']">Edit Profile</div>
    </div>
    <div className="pl-[18px] pr-[17px] py-3 left-[832px] top-[148px] absolute bg-gradient-to-r from-yellow-300 via-white to-yellow-400 rounded-[46px] justify-center items-center inline-flex">
        <div className="text-black text-sm font-medium font-['Inter']">Buy Coins</div>
    </div>
    <div className="w-7 h-7 left-[360px] top-[42px] absolute" />
    <div className="left-[405px] top-[44px] absolute text-white text-2xl font-semibold font-['Inter']">Amit Sinha</div>
    <div className="left-[594px] top-[148px] absolute text-white text-[26px] font-bold font-['Inter']">Amit Sinha</div>
    <div className="left-[594px] top-[226px] absolute text-white text-lg font-normal font-['Inter']">UI/UX Designer | Developer | Building @fundeth</div>
    <div className="left-[594px] top-[252px] absolute text-white text-lg font-normal font-['Inter']">Designing dreams Shaping Realities</div>
    <img className="w-[185px] h-[204px] left-[383px] top-[148px] absolute rounded-[17px]" src="https://via.placeholder.com/185x204" />
    <div className="left-[594px] top-[183px] absolute text-neutral-500 text-xl font-normal font-['Inter']">@amitsinha.dso</div>
    <div className="left-[617px] top-[286px] absolute text-neutral-500 text-lg font-normal font-['Inter']">Joined September 2023</div>
    <div className="left-[621px] top-[317px] absolute text-neutral-500 text-lg font-normal font-['Inter']">Following</div>
    <div className="left-[740px] top-[317px] absolute text-neutral-500 text-lg font-normal font-['Inter']">Followers</div>
    <div className="left-[594px] top-[317px] absolute text-neutral-100 text-lg font-normal font-['Inter']">20</div>
    <div className="left-[713px] top-[317px] absolute text-neutral-100 text-lg font-normal font-['Inter']">20</div>
    <div className="w-[17px] h-[17px] left-[594px] top-[288px] absolute" />
    <div className="left-[378px] top-[471px] absolute justify-start items-start gap-7 inline-flex">
        <div className="w-[207px] h-[213px] relative">
            <img className="w-[207px] h-[213px] left-0 top-0 absolute rounded-[10px]" src="https://via.placeholder.com/207x213" />
            <div className="w-[37px] h-[18px] pl-1.5 pr-[3px] pt-px left-[161px] top-[9px] absolute bg-white rounded-[10px] justify-center items-center gap-[3px] inline-flex">
                <div className="text-black text-[8px] font-medium font-['Inter']">10</div>
                <img className="w-4 h-[17px] origin-top-left -rotate-180" src="https://via.placeholder.com/16x17" />
            </div>
        </div>
        <div className="w-[207px] h-[213px] relative">
            <img className="w-[207px] h-[213px] left-0 top-0 absolute rounded-[10px]" src="https://via.placeholder.com/207x213" />
            <div className="w-[37px] h-[18px] pl-1.5 pr-[3px] pt-px left-[161px] top-[9px] absolute bg-white rounded-[10px] justify-center items-center gap-[3px] inline-flex">
                <div className="text-black text-[8px] font-medium font-['Inter']">10</div>
                <img className="w-4 h-[17px] origin-top-left -rotate-180" src="https://via.placeholder.com/16x17" />
            </div>
        </div>
        <div className="w-[207px] h-[213px] relative">
            <img className="w-[207px] h-[213px] left-0 top-0 absolute rounded-[10px]" src="https://via.placeholder.com/207x213" />
            <div className="w-[37px] h-[18px] pl-1.5 pr-[3px] pt-px left-[161px] top-[9px] absolute bg-white rounded-[10px] justify-center items-center gap-[3px] inline-flex">
                <div className="text-black text-[8px] font-medium font-['Inter']">10</div>
                <img className="w-4 h-[17px] origin-top-left -rotate-180" src="https://via.placeholder.com/16x17" />
            </div>
        </div>
    </div>
    <div className="left-[378px] top-[472px] absolute justify-start items-start gap-6 inline-flex">
        <div className="w-[207px] h-[213px] relative">
            <img className="w-[207px] h-[213px] left-0 top-0 absolute rounded-[10px]" src="https://via.placeholder.com/207x213" />
            <div className="w-[37px] h-[18px] pl-1.5 pr-[3px] pt-px left-[161px] top-[9px] absolute bg-white rounded-[10px] justify-center items-center gap-[3px] inline-flex">
                <div className="text-black text-[8px] font-medium font-['Inter']">10</div>
                <img className="w-4 h-[17px] origin-top-left -rotate-180" src="https://via.placeholder.com/16x17" />
            </div>
        </div>
        <div className="w-[207px] h-[213px] relative">
            <img className="w-[207px] h-[213px] left-0 top-0 absolute rounded-[10px]" src="https://via.placeholder.com/207x213" />
            <div className="w-[37px] h-[18px] pl-1.5 pr-[3px] pt-px left-[161px] top-[9px] absolute bg-white rounded-[10px] justify-center items-center gap-[3px] inline-flex">
                <div className="text-black text-[8px] font-medium font-['Inter']">10</div>
                <img className="w-4 h-[17px] origin-top-left -rotate-180" src="https://via.placeholder.com/16x17" />
            </div>
        </div>
        <div className="w-[207px] h-[213px] relative">
            <img className="w-[207px] h-[213px] left-0 top-0 absolute rounded-[10px]" src="https://via.placeholder.com/207x213" />
            <div className="w-[37px] h-[18px] pl-1.5 pr-[3px] pt-px left-[161px] top-[9px] absolute bg-white rounded-[10px] justify-center items-center gap-[3px] inline-flex">
                <div className="text-black text-[8px] font-medium font-['Inter']">10</div>
                <img className="w-4 h-[17px] origin-top-left -rotate-180" src="https://via.placeholder.com/16x17" />
            </div>
        </div>
    </div>
    <div className="left-[378px] top-[712px] absolute justify-start items-start gap-6 inline-flex">
        <div className="w-[207px] h-[213px] relative">
            <img className="w-[207px] h-[213px] left-0 top-0 absolute rounded-[10px]" src="https://via.placeholder.com/207x213" />
            <div className="w-[37px] h-[18px] pl-1.5 pr-[3px] pt-px left-[161px] top-[9px] absolute bg-white rounded-[10px] justify-center items-center gap-[3px] inline-flex">
                <div className="text-black text-[8px] font-medium font-['Inter']">10</div>
                <img className="w-4 h-[17px] origin-top-left -rotate-180" src="https://via.placeholder.com/16x17" />
            </div>
        </div>
        <div className="w-[207px] h-[213px] relative">
            <img className="w-[207px] h-[213px] left-0 top-0 absolute rounded-[10px]" src="https://via.placeholder.com/207x213" />
            <div className="w-[37px] h-[18px] pl-1.5 pr-[3px] pt-px left-[161px] top-[9px] absolute bg-white rounded-[10px] justify-center items-center gap-[3px] inline-flex">
                <div className="text-black text-[8px] font-medium font-['Inter']">10</div>
                <img className="w-4 h-[17px] origin-top-left -rotate-180" src="https://via.placeholder.com/16x17" />
            </div>
        </div>
        <div className="w-[207px] h-[213px] relative">
            <img className="w-[207px] h-[213px] left-0 top-0 absolute rounded-[10px]" src="https://via.placeholder.com/207x213" />
            <div className="w-[37px] h-[18px] pl-1.5 pr-[3px] pt-px left-[161px] top-[9px] absolute bg-white rounded-[10px] justify-center items-center gap-[3px] inline-flex">
                <div className="text-black text-[8px] font-medium font-['Inter']">10</div>
                <img className="w-4 h-[17px] origin-top-left -rotate-180" src="https://via.placeholder.com/16x17" />
            </div>
        </div>
    </div>
</div>



</div>

 </div>
 {/* mid portion  end*/}

 {/* wallet section */}
 <div className='flex flex-col w-full bg-black'>

  <div className='flex w-full justify-around h-[5.75rem] items-center'>
 <div className="relative rounded-md [background:linear-gradient(106.75deg,_#fdd835,_#fff_49.15%,_#ffd000)] box-border  h-[2.563rem] w-[8.438rem] overflow-hidden text-left text-[0.88rem] text-black font-inter border-t-[1px] border-solid border-cornsilk border-r-[1px] border-l-[1px]">
<div className="absolute top-[0.75rem] left-[1.38rem] font-medium">{userBal | 0} coins</div>
<img className="absolute top-[0.5rem] left-[4.9999rem] w-[1.65rem] h-[1.74rem] object-cover" alt="" src="https://cdn.discordapp.com/attachments/1177493315898314792/1184074100763795456/image.png?ex=658aa5f0&is=657830f0&hm=56f437a8feb464628765049711c4cf1d08f05c532a8972598d0b44065b616292&" />
</div>

{num===0 ? (
<div onClick={handleConnectWallet} className="relative rounded-lg hover:bg-violet-400 transition-transform transform hover:scale-75 bg-blueviolet box-border w-[9.875rem] h-[2.56rem] overflow-hidden text-left text-[1rem] text-white font-inter border-t-[1px] border-solid border-mediumslateblue border-r-[1px] border-l-[1px]">
<div  className="absolute top-[0.69rem] left-[0.69rem] font-medium">Connect to wallet</div>
</div>

          ) : (
            <div className="relative rounded-lg hover:bg-violet-400 transition-transform transform hover:scale-75 bg-blueviolet box-border w-[9.875rem] h-[2.56rem] overflow-hidden text-left text-[1rem] text-white font-inter border-t-[1px] border-solid border-mediumslateblue border-r-[1px] border-l-[1px]">
<div   className="text-center relative top-2 font-medium">Logout</div>
</div>
        )}

 </div>

<div className="flex justify-start ml-10 mt-4">
 <div className="relative rounded-2xl [background:linear-gradient(180.13deg,_#202020,_#181818)] box-border w-[16.938rem] h-[23.69rem] overflow-hidden text-left text-[0.88rem] text-white font-inter border-t-[2px] border-solid border-grayz border-r-[1px] border-l-[1px]">
<b className="absolute top-[1.13rem] left-[1.06rem] text-[1.13rem]">linkup with</b>
<div className="absolute top-[5.13rem] left-[3.81rem] text-[1rem] font-medium">Amit Sinha</div>
<div className="absolute top-[9.44rem] left-[3.81rem] text-[1rem] font-medium">Amit Sinha</div>
<div className="absolute top-[13.75rem] left-[3.81rem] text-[1rem] font-medium">Amit Sinha</div>
<div className="absolute top-[18.06rem] left-[3.81rem] text-[1rem] font-medium">Amit Sinha</div>
<div className="absolute top-[6.31rem] left-[3.81rem] text-colours-gray-500">@amitsinha.dso</div>
<div className="absolute top-[10.63rem] left-[3.81rem] text-colours-gray-500">@amitsinha.dso</div>
<div className="absolute top-[14.94rem] left-[3.81rem] text-colours-gray-500">@amitsinha.dso</div>
<div className="absolute top-[19.25rem] left-[3.81rem] text-colours-gray-500">@amitsinha.dso</div>
<img src="https://cdn.discordapp.com/attachments/1177493315898314792/1184072438695338046/image.png?ex=658aa464&is=65782f64&hm=633b38526fb6b6da794465b600fb96b51339200700063e89bf541465c40aec95&" className="absolute top-[5.13rem] left-[1.06rem] rounded-lg bg-white w-[2.25rem] h-[2.25rem] overflow-hidden" />
<img src="https://cdn.discordapp.com/attachments/1177493315898314792/1184072438695338046/image.png?ex=658aa464&is=65782f64&hm=633b38526fb6b6da794465b600fb96b51339200700063e89bf541465c40aec95&" className="absolute top-[9.44rem] left-[1.06rem] rounded-lg bg-white w-[2.25rem] h-[2.25rem] overflow-hidden" />
<img src="https://cdn.discordapp.com/attachments/1177493315898314792/1184072438695338046/image.png?ex=658aa464&is=65782f64&hm=633b38526fb6b6da794465b600fb96b51339200700063e89bf541465c40aec95&" className="absolute top-[13.75rem] left-[1.06rem] rounded-lg bg-white w-[2.25rem] h-[2.25rem] overflow-hidden" />
<img src="https://cdn.discordapp.com/attachments/1177493315898314792/1184072438695338046/image.png?ex=658aa464&is=65782f64&hm=633b38526fb6b6da794465b600fb96b51339200700063e89bf541465c40aec95&" className="absolute top-[18.06rem] left-[1.06rem] rounded-lg bg-white w-[2.25rem] h-[2.25rem] overflow-hidden" />
<img className="absolute top-[5.06rem] left-[12.94rem] rounded-lg w-[2.38rem] h-[2.38rem] overflow-hidden" alt="" src="https://cdn.discordapp.com/attachments/1177493315898314792/1184074670744551474/image.png?ex=658aa678&is=65783178&hm=c7bd009be31c8353e4371ee931a7146052b94e697a9529a6997619afe2c153ad&" />
<img className="absolute top-[9.38rem] left-[12.94rem] rounded-lg w-[2.38rem] h-[2.38rem] overflow-hidden" alt="" src="https://cdn.discordapp.com/attachments/1177493315898314792/1184074670744551474/image.png?ex=658aa678&is=65783178&hm=c7bd009be31c8353e4371ee931a7146052b94e697a9529a6997619afe2c153ad&" />
<img className="absolute top-[13.69rem] left-[12.94rem] rounded-lg w-[2.38rem] h-[2.38rem] overflow-hidden" alt="" src="https://cdn.discordapp.com/attachments/1177493315898314792/1184074670744551474/image.png?ex=658aa678&is=65783178&hm=c7bd009be31c8353e4371ee931a7146052b94e697a9529a6997619afe2c153ad&" />
<img className="absolute top-[18rem] left-[12.94rem] rounded-lg w-[2.38rem] h-[2.38rem] overflow-hidden" alt="" src="https://cdn.discordapp.com/attachments/1177493315898314792/1184074670744551474/image.png?ex=658aa678&is=65783178&hm=c7bd009be31c8353e4371ee931a7146052b94e697a9529a6997619afe2c153ad&" />
<div className="absolute top-[21.88rem] left-[1.06rem] font-medium text-cornflowerblue">Show More</div>
</div>

</div>

<div className="relative rounded-2xl [background:linear-gradient(180.13deg,_#202020,_#181818)] ml-10 mt-4 box-border w-[16.938rem] h-[11.13rem] overflow-hidden text-left text-[1rem] text-gray-50 font-inter border-t-[2px] border-solid border-gray-200 border-r-[1px] border-l-[1px]">
<b className="absolute top-[0.94rem] left-[1.31rem] text-[1.13rem] text-white"> Bounty</b>
<div className="absolute top-[3.94rem] left-[1rem] rounded-6xs bg-gray-100 box-border w-[15rem] h-[2.19rem] overflow-hidden border-t-[1px] border-solid border-dimgray">
<div className="absolute top-[0.5rem] left-[0.81rem] font-medium">Complete 1 Like</div>
<img className="absolute top-[0.44rem] left-[12.75rem] w-[1.38rem] h-[1.38rem] overflow-hidden" alt="" src="https://cdn.discordapp.com/attachments/1177493315898314792/1184074424589234247/image.png?ex=658aa63d&is=6578313d&hm=2b6b6c395d7c9522dca53ed54c6b3bd6c9ec744cfa4550da8112ffd872e6a66d&" />
</div>
<div className="absolute top-[7.25rem] left-[1rem] rounded-6xs bg-gray-100 box-border w-[15rem] h-[2.19rem] overflow-hidden border-t-[1px] border-solid border-dimgray">
<div className="absolute top-[0.5rem] left-[0.81rem] font-medium">Complete 10 Comments</div>
<img className="absolute top-[0.44rem] left-[12.75rem] w-[1.38rem] h-[1.38rem] overflow-hidden" alt="" src="https://cdn.discordapp.com/attachments/1177493315898314792/1184074424589234247/image.png?ex=658aa63d&is=6578313d&hm=2b6b6c395d7c9522dca53ed54c6b3bd6c9ec744cfa4550da8112ffd872e6a66d&" />
</div>
</div>

{/* test
<div>

asssd
<Popup/>
</div> */}

 </div>
 {/* wallet section end*/}


     </div>
    </div>
  )
}

export default Profile1;
