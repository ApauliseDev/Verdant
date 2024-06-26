import React, { useState } from "react";
import {useNavigate ,Link} from 'react-router-dom'
import "../estilos/logIn.css";
import { BiSolidUser } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import "../estilos/footer.css";
import { ImOpt } from "react-icons/im";
import LayoutCatalogo from './LayoutCatalogo'
import { useDispatch } from 'react-redux';
import {guardarUsuario} from './store'; 
import {useContext} from 'react'
import {DataContext} from './DataContext'

import {MyAccount} from "./MyAccount";

var usuarios = [
  {usuario: "julian@gmail.com",contraseña: "123", nombre: "Julian" , apellido: "Alvarez", tel:"11 5145-5506"},
  { usuario: "pepe@gmail.com",contraseña: "234",nombre: "Pepe", apellido: "Gomez", tel:"11 4408-2130"},
  { usuario: "tuti@gmail.com",contraseña: "juan", nombre: "Tuti", apellido: "Sanblas", tel:"11 5145-5506"},
]




function LogIn(props) {
  const [user, setUser] = useState(""); 
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState("");
  const [action, setAction] = useState("Login");
  const [denegade,setDenegade] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {account,setAccount} = useContext(DataContext)


  const handleSubmit = (event) => {
    event.preventDefault();
    if (action === "Sign Up" ){
      setUser("")
      setContraseña("")
      setDenegade(false)
      setAction("Login");
      return;
    }
    
    const cuenta = usuarios.find(cuenta  => cuenta.usuario === user)
    console.log(cuenta)
  
    if (!cuenta) {
      setError('cuenta no encontrada');
      setDenegade(true)
      return;
    }

    if (cuenta.contraseña !== contraseña) {
      setError("Contraseña incorrecta");
      setDenegade(true)
      return;
    }
    setError("")
    setDenegade(false)
    console.log("¡LogIn exitoso");
    setAccount(cuenta)
    navigate('/LayoutCatalogo')

  
  };

  

  return (
    <div className="login">
      <div className="titulo-contenedor">
        <h1 className="titulo"> VerdanT </h1>
      </div>

      <div className="contenedorLogin">
        <div className="header-login">
          <div className="text">{action} </div>
          <div className="underline"> </div>
        </div>
        <div className="inputs">
          {action === "Login" ? (
            <div />
          ) : (
            <div className="input">
              <BiSolidUser className="iconos" />
              <input type="text" placeholder="Name" 
              />
            </div>
          )}
          <div className="input">
            <MdEmail className="iconos" />
            <input 
            type="email" 
            placeholder="Email" 
            value={user}
            onChange={(e) => setUser(e.target.value) }
            />
          </div>
          <div className="input">
            <RiLockPasswordFill className="iconos" />
            <input
             type="password" 
             placeholder="Password"
             value={contraseña}
             onChange={(e2) => setContraseña(e2.target.value) }
             />
          </div>
      
          {action=== "Login"?denegade && <p style={{color:"red"}}> {error}</p>: <></> }
        </div>
        {action === "Sign Up" ? (
          <div />
        ) : (
          <div className="forgot-password">
            Lost password? <span> Click Here!</span>{" "}
          </div>
        )}
        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            {" "}
            Sign Up{" "}
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={handleSubmit}
          >
            {" "}
            Log in{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
export default LogIn;
