import React from "react";
import { BiRecycle } from "react-icons/bi";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
const Reset = ({ onreset, reDo }) => {
  return (
    <div>
      <button
        className='btn'
        onClick={onreset}
        style={{ background: "#28a745" }}
      >
        <RotateLeftIcon fontSize='large' className='reset'></RotateLeftIcon>
      </button>
      <button
        onClick={reDo}
        className='btn'
        style={{ margin: "0 -105px", background: "lightblue", color: "white" }}
      >
        <BiRecycle size='35px' />
      </button>
    </div>
  );
};

export default Reset;
