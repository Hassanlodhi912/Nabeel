import React from "react";
import ErrorMessage from "./ErrorMessage";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/action/Index";
export default function Signup() {
 const hassan = useSelector((state)=>state.loginReducer.hassan)
  const dispatch = useDispatch()
  const [fname, setFName] = useState();
  const [lname, setLName] = useState();
  const [email, setEmail] = useState();
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    fname == null || lname == null || email == null
      ? setError(true)
      : setError(false);


    {error && dispatch(
        login(

          {
            firstName: fname,
            lastName: lname,
            email: email,

          }
        )
      )
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "120px",
        padding: "10px",
        borderStyle: "solid",
        border: "2px",
      }}
    >
      <h1 style={{ textAlign: "center" }}> BASIC REGISTRATION FORM</h1>
      {error && <ErrorMessage>Please fill all the field</ErrorMessage>}
      <input
        onChange={(e) => {
          setFName(e.target.value);
        }}
        placeholder="Please Enter a First Name"
        style={{
          // display: "-flexbox",
          flexDirection: "column",

          margin: "10px 0px 10px 350px",
          height: "40px",
          width: "400px",
          alignItems: "center"
        }}
      />
      <input
        onChange={(e) => {
          setLName(e.target.value);
        }}
        placeholder="Please Enter a Last Name"
        style={{
          margin: "10px 0px 10px 350px",
          height: "40px",
          width: "400px",
        }}
      />
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Please Enter an Email"
        style={{
          margin: "10px 0px 10px 350px",
          height: "40px",
          width: "400px",
        }}
      />
      <button
        onClick={handleSubmit}
        type="button"
        style={{
          fontSize: "4vh",
          margin: "10px 0px 10px 350px",
          height: "40px",
          width: "400px",
          backgroundColor: "green",
        }}
      >
        {" "}
        Submit
      </button>
      {
         hassan && 
        <button
        onClick={handleSubmit}
        type="button"
        style={{
          fontSize: "4vh",
          margin: "10px 0px 10px 350px",
          height: "40px",
          width: "400px",
          backgroundColor: "green",
        }}
      >
        Login In?
      </button>
      
    }
    </div>
  );
}