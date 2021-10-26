import React from "react";
import "./App.css";
import Bulb from "./components/Bulb/Bulb";
import MainRoom from "./components/MainRoom/MainRoom";
import SwitchContextProvider from "./context/SwitchContext";

function App() {
    return (
     <SwitchContextProvider>
          <div>
            <div className="room-wrapper">
                <MainRoom />
            </div>
            <Bulb/>
        </div>
     </SwitchContextProvider>
    );
}

export default App;
