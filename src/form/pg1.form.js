import React, { useContext } from "react";
import FormContext from "../formContext/form.context";
import './pg1.css'

export const Pg1 = () => {
  const {
    phone,
    setPhone,
    email,
    setEmail,
    address,
    setAddress
  } = useContext(FormContext);

  return (
    <div className="main">
    <form>
      <div className="intro">
        <label htmlFor='phone' className="form-label">
          Phone number 
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          className="form-control"
          aria-describedby="emailHelp"
        />
        <p>Note: patient calls will be answered from this number</p>
      </div>
      
      <div className="part2">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="form-control"
          aria-describedby="emailHelp"
        />
        <label htmlFor="text" className="form-label">
          Street Address
        </label>
        <input 
          type="text"
          value={address}
          onChange={ (e) => {
            setAddress(e.target.value)
          }}
          className="form-control"
          aria-describedby="addresshelp"
        />
        
      </div>
    </form>
    </div>
  );
};
