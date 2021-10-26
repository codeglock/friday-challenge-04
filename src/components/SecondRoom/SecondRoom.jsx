import React, { useContext } from 'react';
import { SwitchContext } from '../../context/SwitchContext';

const SecondRoom = () => {
    const { dispatch } = useContext(SwitchContext)
    return(
        <div className="room">
            <h2>ROOM B</h2>
            <button className="light-switch" onClick={() => dispatch({type: "TOGGLE"})}>Switch - B</button>
        </div>
    );
};

export default SecondRoom;