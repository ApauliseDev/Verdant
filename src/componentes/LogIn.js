import React, { useState } from "react";
import "../estilos/logIn.css";
import { BiSolidUser } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import '../estilos/footer.css'
function LogIn() {



  const [action,setAction] = useState("Login");

  return (
    <div className="login" >
    <div className="titulo-contenedor"> <h1 className="titulo" > VerdanT  </h1> </div>
    

      <div className="contenedorLogin">
        <div className="header">
          <div className="text">{action} </div>
          <div className="underline"> </div>
        </div>
        <div className="inputs">
        {action === "Login"? <div/> :  <div className="input">
            <BiSolidUser className="iconos" />
            <input type="text" placeholder="Name" />
          </div>}
          <div className="input">
            <MdEmail className="iconos" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input">
            <RiLockPasswordFill className="iconos" />
            <input type="password" placeholder="Password" />
          </div>
        </div>
        {action === "Sign Up"?<div/>:<div className="forgot-password">
          Lost password? <span> Click Here!</span>{" "}
        </div>  }
        <div className="submit-container">
          <div className={action === "Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}> Sign Up </div>
          <div className={action === "Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}> Log in </div>
        </div>
      </div>
    </div>
  );
}
export default LogIn;
