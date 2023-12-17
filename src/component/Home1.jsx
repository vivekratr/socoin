import PostCard from "./PostCard";
import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";
import Popup from "./Popup";
import "reactjs-popup/dist/index.css";
import PostComponent from "./PostComponent";
import axios from "axios";
import SendPost from "./SendPost";
import Alert from "@mui/material/Alert";

const Home1 = () => {
  const navigate = useNavigate();
  const [commentOpen, setCommentOpen] = useState(false);
  const [userBal, setUserBal] = useState(0);
  const [likess, setLikess] = useState(477);
  const [isRegister, setIsRegister] = useState(1);
  // const [interestTab,setInterestTab] = useState(false);
  const [regUsername, setRegUsername] = useState("");
  const [regName, setRegName] = useState("");
  const [num, setNum] = useState(0);
  const [file, setFile] = useState(null);
  const [cid, setCid] = useState(null);
  const [url, setUrl] = useState(null);
  const [spin, setSpin] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [fillForm, setFillForm] = useState(true);
  const [userData, setUserData] = useState([]);
  const [isPost, setIsPost] = useState(false);
  const [transactionCount, setTransactionCount] = useState(0);
  const [allPost, setAllPost] = useState([]);
  const [allSequencePost, setAllSequencePost] = useState([]);
  const [postIndex, setPostIndex] = useState(0);
  const [allPrivatePost, setAllPrivatePost] = useState([]);
  const [userPrivatePost, setUserPrivatePost] = useState([]);
  const [isLogout, setIsLogout] = useState(0);
  const [rewardLikes, setRewardLikes] = useState(0);
  const [rewardComments, setRewardComments] = useState(0);
  const [countBuyCoin, setCountBuyCoin] = useState(1);
  const [isBuyCoinModal, setIsBuyCoinModal] = useState(false);
  const [isAlertSuccess, setIsAlertSuccess] = useState(false);
  const [successAlertContent, setSuccessAlertContent] = useState("");
  const [isAlertInfo, setIsAlertInfo] = useState(false);

  const handleIncrement = () => {
    setCountBuyCoin((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (countBuyCoin > 1) {
      setCountBuyCoin((prevCount) => prevCount - 1);
    }
  };

  // Function to handle file change
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const showSuccessPopup = (successMessage) => {
    console.log("ShowSuccess", successMessage);
    setSuccessAlertContent(successMessage);
    setIsAlertSuccess(true);
    setTimeout(() => {
      setIsAlertSuccess(false);
    }, 5000);
  };

  const interests = [
    "Sports",
    "Web 3.0",
    "Hackathon",
    "Politics",
    "Startup",
    "Arts",
    "Cars",
    "Technology",
    "Drama",
    "Business",
    "Games",
    "Entertainment",
  ];

  const handleNext = () => {
    setPostIndex((prevIndex) => (prevIndex + 1) % allPost.length);
  };

  const handlePrev = () => {
    setPostIndex((prevIndex) =>
      prevIndex === 0 ? allPost.length - 1 : prevIndex - 1
    );
  };

  const handleInterestClick = (interest) => {
    const index = selectedInterests.indexOf(interest);
    if (index === -1) {
      setSelectedInterests([...selectedInterests, interest]);
    } else {
      setSelectedInterests(selectedInterests.filter((_, i) => i !== index));
    }
  };
  // Function to handle image upload
  const handleUpload = async () => {
    if (!file) {
      console.error("No file selected.");
      return;
    }
    console.log("spin activated");

    const formData = new FormData();
    formData.append("file", file);
    console.log("file", formData);

    try {
      const response = await axios.post(
        "https://api.nft.storage/upload",
        formData,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDRCOWM5Q0UwQmE3NENiRjA4QkJlZjIwNDMzZEUwYjczNzUxNjI4RTgiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY5ODUwNDQ1NzM3MywibmFtZSI6IkZ1bmRFVEgifQ.JxTH4iRtScscfmb9mvZqhSqF9MKs2b0JJS2yof7hzF4`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setCid(response.data.value.cid);

      console.log("NFT Storage response:", response.data.value.cid);
    } catch (error) {
      console.error("Error uploading to NFT Storage:", error);
    }
  };

  useEffect(() => {
    if (cid) {
      setUrl(`https://${cid}.ipfs.nftstorage.link/${file.name}`);
    }
  }, [cid, file]);

  console.log("num", num, "type", typeof num);
  function handleUsername(e) {
    console.log("handleusername", e.target.value);
    setRegUsername(e.target.value);
  }
  function handleName(e) {
    console.log("handleusername", e.target.value);
    setRegName(e.target.value);
  }

  const imgLinks = [
    "https://cdn.discordapp.com/attachments/1148598201314725913/1164977604483371068/image.png?ex=65452cf1&is=6532b7f1&hm=89fd657197685f46d1a5b5f8e88e9a0ed71f85854024cba35069197b1a10e1a7&",
    "https://cdn.discordapp.com/attachments/1148598201314725913/1164977580626153592/image.png?ex=65452ceb&is=6532b7eb&hm=711bb8f7cf53910f9ddf7eb6c079fc1f6d02046545a025cea182e49b53347a97&",
    "https://cdn.discordapp.com/attachments/1148598201314725913/1164977560195702884/image.png?ex=65452ce6&is=6532b7e6&hm=71ac448a37bb1692b9550d5f2037f118bf7b2804d384de88583866d4828a7fcb&",
    "https://cdn.discordapp.com/attachments/1148598201314725913/1164977456139223040/image.png?ex=65452ccd&is=6532b7cd&hm=630f816d2cd6a0a323af298284eb3a1896e0e4e93ecb91b1e632c547603b4170&",
    "https://cdn.discordapp.com/attachments/1148598201314725913/1164977453094162442/image.png?ex=65452ccd&is=6532b7cd&hm=5e5bb5f5c37ebcedf3339a9a162112e29c54f79942748654aa43ca375b5ec269&",
    "https://cdn.discordapp.com/attachments/1148598201314725913/1164977098146975744/image.png?ex=65452c78&is=6532b778&hm=74ca2b0fcb94ef05c6e65fc5e7f56e31a1b513d70f717e260c318b6e55be914e&",
  ];
  const {
    checkIfWalletIsConnected,
    ConnectWallet,
    currentAccount,
    isNewUser,
    createUser,
    createPost,
    likePost,
    getUserData,
    userPost,
    userDatar,
    createPrivatePost,
    getAllPost,
    refresh,
    getUserPost,
    getAllPrivatePost,
    getUserPrivatePost,
    getRewardStatus,
    buyCoin,
  } = useContext(Context);
  const handleConnectWallet = async () => {
    await ConnectWallet();
  };

  const getBal = async () => {
    console.log("currentAccount useeffect", currentAccount);
    if (currentAccount) {
      const bal = await getUserData(currentAccount);
      const post = await getAllPost();
      const privatePost = await getAllPrivatePost();
      const userPrivate = await getUserPrivatePost(currentAccount);
      const _reward = await getRewardStatus(currentAccount);
      console.log("reward score", Number(_reward));

      const _tempLike = Math.floor(_reward / 1000);
      const _tempComment = _reward % 1000;

      console.log("reward score ceil", _tempLike, " comment", _tempComment);
      setRewardComments(_tempComment);
      setRewardLikes(_tempLike);

      //  const login =async ()=>{num= await isNewUser()} ;
      //  login();
      // let num= await isNewUser();
      setNum(Number(bal.user_id));
      setUserPrivatePost(userPrivate);
      console.log("userPrivate", userPrivate);
      const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
      };
      setAllPost(shuffleArray(post));
      console.log("postData,", allPost);
      setAllPrivatePost(privatePost);

      setAllSequencePost(post);
      console.log("sequence post", allSequencePost);

      // setAllPost(post)
      console.log("numm", num, "type", typeof num);

      console.log("refresh", refresh);
      if (!num) {
        //  const create = async()=>{
        //    await createUser('tt',1);
        //  }
        //  create();

        setIsRegister(0);

        // navigate("/register");
      }
      console.log("bal", Number(bal.token));
      setUserBal(Number(bal.token));
      setUserData(bal);
      console.log("bal", bal);
      // userPost();
    }
  };
  useEffect(() => {
    if (currentAccount === "" && isLogout == 0) {
      ConnectWallet();
    }
    console.log("running the useeffect");
    getBal();
  }, [currentAccount, refresh, num]);
  return (
    <div className="bg-black h-full">
      <div className="flex h-[100vh]">
        {/* alert success */}
        <div
          className={`absolute z-20 ml-[34rem] mt-10 ${
            isAlertSuccess ? "flex" : "hidden"
          }`}
        >
          <Alert severity="success">{successAlertContent}</Alert>
        </div>
        {/* alert success end */}
        {/* alert info */}
        <div
          className={`absolute z-20 ml-[34rem] mt-10 ${
            isAlertInfo ? "flex" : "hidden"
          }`}
        >
          <Alert severity="info">Waiting for Metamask...</Alert>
        </div>
        {/* alert info end */}
        {/* spinner */}
        <div
          className={` absolute   items-center justify-center h-full w-full  z-50  ${
            spin ? "flex" : "hidden"
          }`}
        >
          <div role="status">
            <svg
              aria-hidden="true"
              class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        {/* spinner end */}
        {/* buycoin  */}
        <div
          className={` top-0 left-0 w-full h-full z-10 backdrop-filter backdrop-blur-sm ${
            isBuyCoinModal ? "fixed" : "hidden"
          } `}
        >
          <div className="absolute left-[30rem] top-[7rem] mx-auto z-10 flex flex-col items-center justify-center min-h-[70vh] ">
            <div className="relative w-full h-[259px] text-left text-sm text-black font-inter">
              <div
                onClick={() => {
                  setIsBuyCoinModal(false);
                }}
                className="relative top-11 cursor-pointer hover:animate-bounce left-[10rem] z-10"
              >
                <img
                  className="h-4 ml-[13rem]"
                  src="https://cdn.discordapp.com/attachments/1184864067295395960/1185694131050266624/image.png?ex=65908ab5&is=657e15b5&hm=dd19c0374df3b041ce7e6c32b2dc440560f7d6011fd005de55719fe5c59412f9&"
                  alt=""
                />
              </div>
              <div className="absolute top-[30px] h-[17rem] left-[140px] rounded-2xl [background:linear-gradient(180.13deg,_#202020,_#181818)] box-border w-[271px]  overflow-hidden border-t-[2px] border-solid border-[#282828] border-r-[1px] border-l-[1px]">
                <img
                  className="absolute top-[13px] left-[50px] w-[128.45px] h-[135.89px] object-cover"
                  alt=""
                  src="   https://cdn.discordapp.com/attachments/1184864067295395960/1185642599332192307/image.png?ex=65905ab7&is=657de5b7&hm=71c7d9bab26434a937493f7b7ebc1d5622601814306a96ae565828467e900eb7&"
                />
                <img
                  className="absolute top-[10px] left-[60px] w-[174.96px] h-[178.22px] object-cover"
                  alt=""
                  src="https://cdn.discordapp.com/attachments/1184864067295395960/1185641928847527936/image.png?ex=65905a17&is=657de517&hm=652d84dd8d1a39a6d6ea2850e469a17fb054c4a708f566aab57bc6428afdcb0e&"
                />
                <div
                  onClick={async () => {
                    await buyCoin(
                      countBuyCoin,
                      setSpin,
                      showSuccessPopup,
                      setIsAlertInfo
                    );
                  }}
                  className="absolute cursor-pointer top-[174px] left-[147px] rounded-md [background:linear-gradient(106.75deg,_#fdd835,_#fff_49.15%,_#ffd000)] box-border w-[103px] h-[41px] overflow-hidden border-t-[1px] border-solid border-cornsilk border-r-[1px] border-l-[1px]"
                >
                  <div className="absolute top-[12px] left-[18px] font-medium">
                    Buy Coins
                  </div>
                </div>

                <div className="absolute top-[174px] left-[24px] rounded-md bg-white box-border w-[103px] h-[41px] overflow-hidden border-t-[1px] border-solid border-gainsboro border-r-[1px] border-l-[1px]">
                  <div className="absolute top-[12px] left-[45px] font-semibold">
                    {countBuyCoin}
                  </div>
                  <img
                    className="absolute cursor-pointer top-[11px] left-[70px] w-[19px] h-[19px] overflow-hidden object-cover"
                    alt=""
                    src="     https://cdn.discordapp.com/attachments/1184864067295395960/1185645863620579388/image.png?ex=65905dc2&is=657de8c2&hm=1a7bb3548d029c6448ddc1acc93872fd4414f13a225919fa8a57f280d4526dfc&"
                    onClick={handleIncrement}
                  />
                  <img
                    className="absolute top-[12px] cursor-pointer left-[10px] w-[19px] h-[18px] overflow-hidden object-cover"
                    alt=""
                    src="   https://cdn.discordapp.com/attachments/1184864067295395960/1185645933438971944/image.png?ex=65905dd2&is=657de8d2&hm=d19e79ee3cb4775a71d1934bddd314bf468c9fecc807534b9f4ceb23e3f66790&"
                    onClick={handleDecrement}
                  />
                </div>
                <p className="text-white text-[0.7rem] absolute left-5 top-[15rem]">
                  {" "}
                  <span className="underline">
                    {0.01 * countBuyCoin} ETH
                  </span>{" "}
                  will be Deducted form your account
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* buycoin end */}
        {/* post modal */}
        <div
          className={` top-0 left-0 w-full h-full z-40 backdrop-filter backdrop-blur-sm ${
            isPost ? "fixed" : "hidden"
          } `}
        >
          <div className="absolute left-[30rem] top-[7rem] mx-auto z-10 flex flex-col items-center justify-center min-h-[70vh] ">
            <SendPost
              close={setIsPost}
              spin={setSpin}
              count={setTransactionCount}
            />
          </div>
        </div>

        {/* post modal end */}
        {/* register modal */}
        <div
          className={`fixed top-0 left-0 w-full h-full z-10 backdrop-filter backdrop-blur-sm ${
            isRegister === 0 && num === 0 && currentAccount !== ""
              ? "block"
              : "hidden"
          }`}
        >
          <div
            // style={containerStyle}
            className={` absolute left-[37rem] top-[10rem] mx-auto z-10 flex flex-col items-center justify-center min-h-[50vh] ${
              isRegister === 0 && num === 0 && currentAccount !== ""
                ? "block"
                : "hidden"
            }`}
          >
            <div className="bg-black p-5  border-t-[2px] border-solid border-gray1 border-r-[1px] border-l-[1px] rounded-2xl max-w-md text-center">
              <div className={`${fillForm ? "block" : "hidden"}`}>
                <div className="text-white text-lg text-left font-bold max-w-[434px] mb-4">
                  Join now
                </div>
                <div className="text-white text-left text-sm font-bold max-w-[434px] mb-4">
                  Explore the world and earn rewards
                </div>
                <div className="relative rounded  bg-white w-full h-[2.69rem] overflow-hidden text-left text-[0.88rem] text-gray-400 font-inter">
                  <input
                    type="text"
                    className="w-full h-max pt-4 pl-5 p-2 text-black font-bold bg-transparent outline-none"
                    placeholder="Name"
                    onChange={handleName}
                  />
                </div>
                <div className="relative rounded mt-5 bg-white w-full h-[2.69rem] overflow-hidden text-left text-[0.88rem] text-gray-400 font-inter">
                  <input
                    type="text"
                    className="w-full h-max pt-4 pl-5  p-2 text-black font-bold bg-transparent outline-none"
                    placeholder="Username"
                    onChange={handleUsername}
                  />
                </div>

                {/* profile upload */}
                {/* File input component using Flowbite */}
                <link
                  rel="stylesheet"
                  href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css"
                />
                <div className="max-w-2xl mt-3 mx-auto">
                  <label
                    className="block mb-2 text-sm text-left font-medium text-white dark:text-gray-300"
                    htmlFor="file_input"
                  >
                    Upload Profile
                  </label>
                  <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="file_input"
                    type="file"
                    onChange={async (e) => {
                      await handleFileChange(e);
                    }}
                    accept="image/*" // Restrict to only image files
                  />
                  <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
                </div>
                <div
                  onClick={async () => {
                    setSpin(true);
                    await handleUpload();
                    setSpin(false);

                    setFillForm(false);
                  }}
                  className="relative mt-4 mx-auto rounded-[97px] bg-cornflowerblue box-border w-[9rem] h-[2.31rem] overflow-hidden text-left text-[0.88rem] text-white font-inter border-t-[1px] border-solid border-lightskyblue border-r-[1px] border-l-[1px]"
                >
                  <div className="text-center relative top-2 font-medium">
                    Next
                  </div>
                </div>
              </div>

              <div className={`p-5  ${fillForm ? "hidden" : "block"}`}>
                <div>
                  <div className="relative text-[1.38rem] font-semibold font-inter text-white text-left">
                    Select your Interests
                  </div>
                  <div className="relative my-3 text-[0.75rem] font-inter text-white text-left">
                    Explore the world and earn rewards
                  </div>
                </div>
                <div
                  className="grid grid-cols-4 gap-4 "
                  style={{ columnGap: "20px" }}
                >
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      onClick={() => handleInterestClick(interest)}
                      className={`rounded-[21px] min-w-fit bg-white box-border w-full overflow-hidden flex flex-row items-center justify-center py-[0.44rem] px-[2.25rem] text-left text-[0.88rem] text-black font-inter border-[1px] border-solid border-gray-400  p-2 ${
                        selectedInterests.includes(interest)
                          ? "bg-blue-500 text-white"
                          : ""
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
                <button className="border mt-[20px] border-[color:var(--gray-600,#4B5563)] bg-white w-[127px] self-center px-5 py-2.5 rounded-3xl">
                  <div
                    onClick={async () => {
                      // console.log(regUsername);
                      const resultString = interests.join(",");
                      const obj1 = {
                        name: regName,
                        username: regUsername,
                        url: url,
                        interests: resultString,
                      };
                      console.log(
                        `Name:${regName}, Username: ${regUsername} , url : ${url} interests: ${selectedInterests}`
                      );
                      console.log("obj1:", obj1);

                      await createUser(
                        obj1,
                        setSpin,
                        showSuccessPopup,
                        setIsAlertInfo
                      );

                      setIsRegister(1);
                    }}
                    className="text-black text-sm font-medium self-center"
                  >
                    Continue
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* register modal end */}

        {/* options */}
        <div className="flex flex-col min-w-[20.25rem] h-full bg-black items-center justify-around border-r-[1px] border-solid border-gray-700 box-border">
          <div className="flex ">
            <img
              className="relative bottom-[3rem] w-full h-[9.25rem] object-cover"
              src="https://cdn.discordapp.com/attachments/1177492390949441610/1183783874153680966/image.png?ex=658997a5&is=657722a5&hm=14a6d7aa3bb675c16e9b5d4b8c83d33a278313a173fc5904d709aa60cdcd8d48&"
              alt=""
            />
          </div>

          <div className="relative bottom-[5rem] w-full flex  items-start justify-center  ">
            <div className="flex flex-col gap-[2.25rem] text-left text-[1.25rem] text-white font-inter">
              <div
                onClick={() => {
                  navigate("/home1");
                }}
                className="flex flex-row  cursor-pointer items-center justify-start gap-[0.63rem]"
              >
                <img
                  className="relative bottom-[0.2rem] w-[1.31rem] h-[1.31rem] overflow-hidden shrink-0"
                  alt=""
                  src="https://cdn.discordapp.com/attachments/1177493315898314792/1184069163149426688/image.png?ex=658aa157&is=65782c57&hm=b3e917cf7d418c2b76b3310202154b605793f6e57e3f21bb591d706a26f0305e&"
                />
                <div className="relative font-medium ">Home</div>
              </div>
              <div
                onClick={() => {
                  navigate("/notifications");
                }}
                className="flex flex-row hover:opacity-50 cursor-pointer items-center justify-start gap-[0.63rem]"
              >
                <img
                  className="relative w-[1rem] h-[1.19rem]"
                  alt=""
                  src="https://cdn.discordapp.com/attachments/1177493315898314792/1184069785865171014/image.png?ex=658aa1eb&is=65782ceb&hm=dadb492ce11b1f2b9b06b98152270e097702aaa581d1de59d339ebcdba8924fa&"
                />
                <div
                  onClick={() => {
                    navigate("/notifications");
                  }}
                  className="relative font-medium"
                >
                  Notifications
                </div>
              </div>
              <div
                onClick={() => {
                  navigate("/messages");
                }}
                className="flex flex-row hover:opacity-50 cursor-pointer items-center justify-start gap-[0.63rem]"
              >
                <img
                  className="relative w-[1.06rem] h-[1rem]"
                  alt=""
                  src="https://cdn.discordapp.com/attachments/1177493315898314792/1184069837249593365/image.png?ex=658aa1f8&is=65782cf8&hm=7476237b6fb89bdbebae10a3771913532a001efdbe6b3220e545a2a6b857fa19&"
                />
                <div className="relative font-medium">Messages</div>
              </div>
              <div
                onClick={() => {
                  if (num === 1) {
                    navigate("/communities");
                  }
                }}
                className="flex flex-row hover:opacity-50 cursor-pointer items-start justify-start gap-[0.63rem]"
              >
                <img
                  className="relative w-[1.25rem] h-[1.19rem]"
                  alt=""
                  src="https://cdn.discordapp.com/attachments/1177493315898314792/1184070090631675944/image.png?ex=658aa234&is=65782d34&hm=cbd1ac4ff02e23412a1fbc94566b279be521568e7d8bdb10bc865f6052f3d969&"
                />
                <div className="relative  font-medium">Communities</div>
              </div>
              {/* <div className="flex flex-row items-start justify-start gap-[0.63rem]">
<img className="relative w-[1.25rem] h-[1.25rem]" alt="" src="https://cdn.discordapp.com/attachments/1177493315898314792/1184069996142415983/image.png?ex=658aa21e&is=65782d1e&hm=0ce679d0e2e97dd09997ae88aa90f3cd824d6d5ab5263d9948b64fa0db0bd636&" />
<div className="relative font-medium">Profile</div>
</div> */}
            </div>

            <div></div>
          </div>

          <div
            onClick={() => {
              if (num === 1) {
                setIsPost(true);
              }
            }}
            className="relative rounded-[97px] bg-cornflowerblue box-border w-[13rem] h-[3.06rem] overflow-hidden text-left text-[1.25rem] text-white font-inter border-t-[1px] border-solid border-lightskyblue border-r-[1px] border-l-[1px]"
          >
            <div className="absolute py-[0.81rem] px-[5.13rem] font-semibold">
              Post
            </div>
          </div>

          <div
            onClick={() => {
              if (num === 1) {
                navigate("/profile");
              }
            }}
            className={`cursor-pointer  relative w-[12rem] h-[2.25rem] text-left text-[1rem] text-white font-inter ${
              userData.length > 1 ? "" : "hidden"
            }`}
          >
            <b className="absolute top-[0rem] left-[2.56rem]">
              {userData.name}
            </b>
            <div className="absolute top-[1.31rem] left-[2.5rem] text-[0.75rem] text-colours-gray-500">
              @{userData.username}.dso
            </div>
            <div className="absolute top-[0rem] left-[0rem] rounded-[69px] bg-white w-[2.06rem] h-[2.06rem] overflow-hidden">
              <img
                className="absolute top-[0rem] left-[0rem] rounded-[30px] w-[2.25rem] h-[2.25rem] object-cover"
                alt=""
                src={userData.profile}
              />
            </div>
            <img
              onClick={() => {
                if (num === 1) {
                  navigate("/profile");
                }
              }}
              className=" hover:opacity-50  absolute cursor-pointer top-[0rem] left-[11.75rem] w-[1.5rem] h-[1.5rem] overflow-hidden"
              alt=""
              src="https://cdn.discordapp.com/attachments/1177493315898314792/1184074199577415741/image.png?ex=658aa608&is=65783108&hm=49441e880ec9e668ecd4fb83e21c896b03b202d851882189adb757ce47dd3e6f&"
            />
          </div>
          <a href="https://dsocial.gitbook.io/dsocial/">
            <div className="absolute top-[37.5rem] left-[0.5rem]">
              <img
                className="w-[45px] h-[45px]"
                src="https://cdn.discordapp.com/attachments/1184864067295395960/1185768064957042849/image.png?ex=6590cf91&is=657e5a91&hm=84c157e2d696e4249b182ad84fcf48f519e7efe0f4ec500e4e7921448d2c3259&"
                alt=""
              />
            </div>
          </a>
        </div>
        {/* options end */}

        {/* mid portion */}
        <div className="flex flex-col min-w-[48.138rem] max-w-max bg-black border-r-[1px] border-solid border-gray-700 box-border">
          <div className="h-[5.75rem] w-full] flex items-center justify-center border-b-[1px] border-solid border-gray-700 box-border">
            <div className="relative mx-auto my-auto rounded-[67px] bg-colours-gray-900 w-[39.375rem] h-[2.75rem] overflow-hidden text-left text-[1rem] text-gray font-inter ">
              <input
                type="text"
                class="absolute text-white top-[0rem] left-[4.06rem] bg-transparent font-medium border-none focus:bg-transparent hover:bg-transparent outline-none"
                placeholder="Search"
              />
              <img
                className="absolute top-[0.75rem] left-[2.13rem] w-[1.19rem] h-[1.19rem] overflow-hidden"
                alt=""
                src="https://cdn.discordapp.com/attachments/1177493315898314792/1184078012669501510/image.png?ex=658aa995&is=65783495&hm=9f770576644efc3f8eccaf92aae7308b731a06ed7ac8a6e87f06211be40c03c1&"
              />
            </div>
          </div>
          <div className="flex items-center justify-start left-5  space-x-4 transition-all duration-500 ease-in-out  relative w-full top-[2rem]">
            <img
              id="arrow1"
              onClick={handlePrev}
              className="relative mr-5  w-[3.625rem] hover: h-[3.63rem] overflow-hidden"
              alt=""
              src="https://cdn.discordapp.com/attachments/1177493315898314792/1184104350436560906/image.png?ex=658ac21c&is=65784d1c&hm=3285308a6c83a4d8205ea999e393be2c3fd9d017d80e021cf1a96e6bd8e96d7d&"
            />

            {/* {
  allPost.map( (p,i) => {
    // const d = await getUserData(p[4]);

    return (
      <PostCard
      key={p+i}
        keys={p[4]}
        // profile={d[2]}
        // name={d[0]}
        // username={d[1]}
        desc={p[1]}
        post={p[5]}
        like={Number(p[3])}
        hash={p[2]}
      />
    );
  }
)} */}
            {allPost.length > 0 && (
              <PostCard
                keys={allPost[postIndex][4]}
                key={allPost[postIndex].id}
                desc={allPost[postIndex][1]}
                post={allPost[postIndex][5]}
                like={Number(allPost[postIndex][3])}
                hash={allPost[postIndex][2]}
                index={
                  (() => {
                    let foundIndex = null;
                    allSequencePost.forEach((m, i) => {
                      if (m[1] === allPost[postIndex][1]) {
                        foundIndex = i;
                      }
                    });
                    return foundIndex; // Return the found index
                  })() // Call the function here to get the index value
                }
              />
            )}
            {/* <PostCard  /> */}
            <img
              id="arrow2"
              onClick={handleNext}
              className="relative ml-5  w-[3.625rem] hover: h-[3.63rem] overflow-hidden rotate-180"
              alt=""
              src="https://cdn.discordapp.com/attachments/1177493315898314792/1184104350436560906/image.png?ex=658ac21c&is=65784d1c&hm=3285308a6c83a4d8205ea999e393be2c3fd9d017d80e021cf1a96e6bd8e96d7d&"
            />
          </div>
        </div>
        {/* mid portion  end*/}

        {/* wallet section */}
        <div className="flex flex-col w-full bg-black">
          <div className="flex w-full justify-around h-[5.75rem] items-center">
            <div
              title="Buy Coins"
              onClick={() => {
                setIsBuyCoinModal(true);
              }}
              className="relative cursor-pointer rounded-md [background:linear-gradient(106.75deg,_#fdd835,_#fff_49.15%,_#ffd000)] box-border  h-[2.563rem] w-[8.438rem] overflow-hidden text-left text-[0.88rem] text-black font-inter border-t-[1px] border-solid border-cornsilk border-r-[1px] border-l-[1px]"
            >
              <div
                title="Buy Coins"
                className="absolute top-[0.75rem] left-[1.38rem] font-medium"
              >
                {userBal | 0} coins
              </div>
              <img
                className="absolute top-[0.5rem] left-[5.5999rem] w-[1.65rem] h-[1.74rem] object-cover"
                alt=""
                src="https://cdn.discordapp.com/attachments/1177493315898314792/1184074100763795456/image.png?ex=658aa5f0&is=657830f0&hm=56f437a8feb464628765049711c4cf1d08f05c532a8972598d0b44065b616292&"
              />
            </div>

            {num === 0 ? (
              <div
                onClick={handleConnectWallet}
                className="relative rounded-lg hover:bg-violet-400 transition-transform transform hover:scale-75 bg-blueviolet box-border w-[9.875rem] h-[2.56rem] overflow-hidden text-left text-[1rem] text-white font-inter border-t-[1px] border-solid border-mediumslateblue border-r-[1px] border-l-[1px]"
              >
                <div className="absolute top-[0.69rem] left-[0.69rem] font-medium">
                  Connect to wallet
                </div>
              </div>
            ) : (
              <div
                onClick={() => {
                  setIsLogout(1);
                  window.location.reload();
                }}
                className="relative rounded-lg hover:bg-violet-400 transition-transform transform hover:scale-75 bg-blueviolet box-border w-[9.875rem] h-[2.56rem] overflow-hidden text-left text-[1rem] text-white font-inter border-t-[1px] border-solid border-mediumslateblue border-r-[1px] border-l-[1px]"
              >
                <div className="text-center relative top-2 font-medium">
                  Logout
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-start ml-10 mt-4">
            <div className="relative rounded-2xl [background:linear-gradient(180.13deg,_#202020,_#181818)] box-border w-[16.938rem] h-[23.69rem] overflow-hidden text-left text-[0.88rem] text-white font-inter border-t-[2px] border-solid border-grayz border-r-[1px] border-l-[1px]">
              <b className="absolute top-[1.13rem] left-[1.06rem] text-[1.13rem]">
                linkup with
              </b>
              <div className="absolute top-[5.13rem] left-[3.81rem] text-[1rem] font-medium">
                Amit Sinha
              </div>
              <div className="absolute top-[9.44rem] left-[3.81rem] text-[1rem] font-medium">
                Ravi Shastri
              </div>
              <div className="absolute top-[13.75rem] left-[3.81rem] text-[1rem] font-medium">
                Shubham Kumar
              </div>
              <div className="absolute top-[18.06rem] left-[3.81rem] text-[1rem] font-medium">
                Shruti Singh
              </div>
              <div className="absolute top-[6.31rem] left-[3.81rem] text-colours-gray-500">
                @amitsinha.dso
              </div>
              <div className="absolute top-[10.63rem] left-[3.81rem] text-colours-gray-500">
                @ravi.dso
              </div>
              <div className="absolute top-[14.94rem] left-[3.81rem] text-colours-gray-500">
                @shubham.dso
              </div>
              <div className="absolute top-[19.25rem] left-[3.81rem] text-colours-gray-500">
                @shrutisingh.dso
              </div>
              <img
                alt="e"
                src="https://cdn.discordapp.com/attachments/1177493315898314792/1184072438695338046/image.png?ex=658aa464&is=65782f64&hm=633b38526fb6b6da794465b600fb96b51339200700063e89bf541465c40aec95&"
                className="absolute top-[5.13rem] left-[1.06rem] rounded-lg bg-white w-[2.25rem] h-[2.25rem] overflow-hidden"
              />
              <img
                alt="e"
                src="    https://cdn.discordapp.com/attachments/1177493315898314792/1184834164336377937/image.png?ex=658d69cd&is=657af4cd&hm=4e6452341bbbbd4598264cbca53b144ed7be7af2da805f001f8895c10f260968&"
                className="absolute top-[9.44rem] left-[1.06rem] rounded-lg bg-white w-[2.25rem] h-[2.25rem] overflow-hidden"
              />
              <img
                alt="e"
                src="https://cdn.discordapp.com/attachments/1177493315898314792/1184072438695338046/image.png?ex=658aa464&is=65782f64&hm=633b38526fb6b6da794465b600fb96b51339200700063e89bf541465c40aec95&"
                className="absolute top-[13.75rem] left-[1.06rem] rounded-lg bg-white w-[2.25rem] h-[2.25rem] overflow-hidden"
              />
              <img
                alt="e"
                src="  https://cdn.discordapp.com/attachments/1177493315898314792/1184834239817072710/image.png?ex=658d69df&is=657af4df&hm=dc1aded63d23ca814306fb6874df8735201fab2e025c1dda33a892fb1a416c01&"
                className="absolute top-[18.06rem] left-[1.06rem] rounded-lg bg-white w-[2.25rem] h-[2.25rem] overflow-hidden"
              />
              <img
                className="absolute top-[5.06rem] left-[12.94rem] rounded-lg w-[2.38rem] h-[2.38rem] overflow-hidden"
                alt=""
                src="https://cdn.discordapp.com/attachments/1177493315898314792/1184074670744551474/image.png?ex=658aa678&is=65783178&hm=c7bd009be31c8353e4371ee931a7146052b94e697a9529a6997619afe2c153ad&"
              />
              <img
                className="absolute top-[9.38rem] left-[12.94rem] rounded-lg w-[2.38rem] h-[2.38rem] overflow-hidden"
                alt=""
                src="https://cdn.discordapp.com/attachments/1177493315898314792/1184074670744551474/image.png?ex=658aa678&is=65783178&hm=c7bd009be31c8353e4371ee931a7146052b94e697a9529a6997619afe2c153ad&"
              />
              <img
                className="absolute top-[13.69rem] left-[12.94rem] rounded-lg w-[2.38rem] h-[2.38rem] overflow-hidden"
                alt=""
                src="https://cdn.discordapp.com/attachments/1177493315898314792/1184074670744551474/image.png?ex=658aa678&is=65783178&hm=c7bd009be31c8353e4371ee931a7146052b94e697a9529a6997619afe2c153ad&"
              />
              <img
                className="absolute top-[18rem] left-[12.94rem] rounded-lg w-[2.38rem] h-[2.38rem] overflow-hidden"
                alt=""
                src="https://cdn.discordapp.com/attachments/1177493315898314792/1184074670744551474/image.png?ex=658aa678&is=65783178&hm=c7bd009be31c8353e4371ee931a7146052b94e697a9529a6997619afe2c153ad&"
              />
              <div className="absolute top-[21.88rem] left-[1.06rem] font-medium text-cornflowerblue">
                Show More
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl [background:linear-gradient(180.13deg,_#202020,_#181818)] ml-10 mt-4 box-border w-[16.938rem] h-[11.13rem] overflow-hidden text-left text-[1rem] text-gray-50 font-inter ">
            <b className="absolute top-[0.94rem] left-[1.31rem] text-[1.13rem] text-white">
              {" "}
              Bounty
            </b>
            <div
              className={`absolute top-[3.94rem] left-[1rem] rounded-6xs ${
                rewardLikes >= 1 ? "bg-green-500" : "bg-[#2a2a2a]"
              } box-border w-[15rem] h-[2.19rem] overflow-hidden border-t-[1px] border-solid border-dimgray`}
            >
              <div className="absolute top-[0.5rem] left-[0.rem] font-medium">
                Complete {rewardLikes}/1 Like
              </div>
              <img
                className="absolute top-[0.44rem] left-[13rem] w-[1.38rem] h-[1.38rem] overflow-hidden"
                alt=""
                src="https://cdn.discordapp.com/attachments/1177493315898314792/1184074424589234247/image.png?ex=658aa63d&is=6578313d&hm=2b6b6c395d7c9522dca53ed54c6b3bd6c9ec744cfa4550da8112ffd872e6a66d&"
              />
            </div>
            <div
              className={`absolute top-[7.25rem] left-[1rem] rounded-6xs ${
                rewardComments >= 10 ? "bg-green-500" : "bg-[#2a2a2a]"
              }  box-border w-[15rem] h-[2.19rem] overflow-hidden border-t-[1px] border-solid border-dimgray`}
            >
              <div className="absolute top-[0.5rem] left-[0.5rem] font-medium">
                Complete {rewardComments}/10 Comments
              </div>
              <img
                className="absolute top-[0.44rem] left-[13rem] w-[1.38rem] h-[1.38rem] overflow-hidden"
                alt=""
                src="https://cdn.discordapp.com/attachments/1177493315898314792/1184074424589234247/image.png?ex=658aa63d&is=6578313d&hm=2b6b6c395d7c9522dca53ed54c6b3bd6c9ec744cfa4550da8112ffd872e6a66d&"
              />
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
  );
};

export default Home1;
