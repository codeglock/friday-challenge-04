import React, { useContext } from 'react';
import { SwitchContext } from '../../context/SwitchContext';
import SecondRoom from '../SecondRoom/SecondRoom';

const MainRoom = () => {
    const { dispatch } = useContext(SwitchContext)
    return(
        <div className="room">
            <h2>ROOM A</h2>
            <button className="light-switch" onClick={() => dispatch({type: "TOGGLE"})}>Switch - A</button>

            <SecondRoom/>
        </div>
    );
};

export default MainRoom;