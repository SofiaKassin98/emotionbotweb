import React from "react";
import { signInWithGoogle } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    const user = await signInWithGoogle();
    if (user) {
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <button onClick={handleLogin}>Iniciar con Google</button>
    </div>
  );
}
