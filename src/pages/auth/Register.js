import React, { useState, useEffect } from "react";
import { auth } from "../../firebase"; 
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Register = ({ history }) => {
  const [email, setEmail] = useState(""); 
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {

  }, []);

  const handleSubmit = () => {

  };

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input 
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        autoFocus
      />
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col md-6 offset-md-3">
          <h4>Register</h4>
          {registerForm()}
        </div>
      </div>
    </div>
  );

};

export default Register;
