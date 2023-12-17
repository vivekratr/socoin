import "./App.css";
import Home from "./component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home1 from "./component/Home1";
import { SocoinProvider } from "./context/ContextProvider";
import Homi from "./component/Homi";
import Register from "./component/Register";
import MyComponent from "./component/Interest";
import Post from "./component/Post";
import PostComponent from "./component/PostComponent";
import Profile from "./component/Profile1";
import SendPost from "./component/SendPost";
import Profile1 from "./component/Profile1";
import Communities from "./component/Communities";
import Notifications from "./component/Notifications";
import Messages from "./component/Messages";
import Sendmessages from "./component/Sendmessages";
import Splinejs from "./component/Spline";
import Bruno from "./component/Bruno";
import Getstarted from "./component/Getstarted";
import NSFW from "./component/NSFW";
import Commingsoon from "./component/Commingsoon";
import Buycoins from "./component/Buycoins";
import Withdraw from "./component/Withdraw";
import Bro from "./component/Bro";
import Alerts from "./component/Alerts";
function App() {
  return ( 
    <BrowserRouter>
      <div>
        <SocoinProvider>
          <Routes>
            <Route path="/home1" element={<Home1 /*state = {state}*/ />} />
            <Route path="/home" element={<Home /*state = {state}*/ />} />
            <Route path="/homi" element={<Homi /*state = {state}*/ />} />
            <Route path="/profile" element={<Profile /*state = {state}*/ />} />
            <Route path="/alerts" element={<Alerts /*state = {state}*/ />} />

            <Route path="/buycoins" element={<Buycoins /*state = {state}*/ />} />
            <Route path="/bro" element={<Bro /*state = {state}*/ />} />

            <Route
              path="/commingsoon"
              element={<Commingsoon /*state = {state}*/ />}/>
            <Route
              path="/profile1"
              element={<Profile1 /*state = {state}*/ />}
            />

            <Route path="/post" element={<Post /*state = {state}*/ />} />
            <Route
              path="/posts"
              element={<PostComponent /*state = {state}*/ />}
            />
            <Route path="/send" element={<SendPost /*state = {state}*/ />} />
            <Route path="/nsfw" element={<NSFW /*state = {state}*/ />} />
            <Route path="/withdraw" element={<Withdraw /*state = {state}*/ />} />
            <Route
              path="/communities"
              element={<Communities /*state = {state}*/ />}
            />
            <Route
              path="/notifications"
              element={<Notifications /*state = {state}*/ />}
            />
            <Route
              path="/messages"
              element={<Messages /*state = {state}*/ />}
            />
            <Route
              path="/sendmessages"
              element={<Sendmessages /*state = {state}*/ />}
            />
            <Route path="/spline" element={<Splinejs /*state = {state}*/ />} />
            <Route path="/bruno" element={<Bruno /*state = {state}*/ />} />
            <Route
              path="/"
              element={<Getstarted /*state = {state}*/ />}
            />

            <Route
              path="/register"
              element={<Register /*state = {state}*/ />}
            />
            
            <Route
              path="/interest"
              element={<MyComponent /*state = {state}*/ />}
            />
          </Routes>
          {/* {<RegisterPage/>}  */}
        </SocoinProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
