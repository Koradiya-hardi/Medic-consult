import React, { useContext } from "react";
import FormContext from "../formContext/form.context";

export const Pg2 = () => {
  const {
   
    rPhone,
    setRPhone
  } = useContext(FormContext);
 
  return (
    <form>
      <div className="mb-3">
        <h2>Medical Registration Form</h2>
        <p>Dr.</p>
        <input 
          style={ {width:"100%"}} 
        type="file" />
        
        <p 
         style={{color: "grey", width:"50%", fontSize:"15px", marginTop:'12px'}}
        >please upload your medical proof, only<br/>
        licsened and geniune doctors are listed here.
        </p>
        {/* <label for="exampleInputEmail1" className="form-label">
          Phone
        </label>
        <input
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
        /> */}
      </div>

    </form>
  );
};
