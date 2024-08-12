import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate("");

 //   handleLogin
 const handleLogin = async() => {
  const userInfo = {email, password};
  console.log(userInfo);

  const res = await axios.post('http://localhost:5000/api/user/login', userInfo);
  console.log(res.data.data)
  if(res.status === 200){
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Register successfully",
      showConfirmButton: false,
      timer: 1200
    });
    navigate('/chat')
    localStorage.setItem('userInfo', JSON.stringify(res.data.data));
  }
  
};


  return (
    <div className="hero bg-base-200 h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl px-8 py-6">
        {/* title */}
        <h1 className="text-center text-2xl uppercase underline">Login</h1>
        {/* form start--- */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            onChange={(e)=> setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter your email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
          onChange={(e)=> setPassword(e.target.value)}
          value={password}
            type="password"
            placeholder="Create a uniq password"
            className="input input-bordered"
            required
          />
        </div>
        <p className="mt-4 text-center">You have no account!! please <Link className="text-blue-400 underline uppercase text-xl" to="/register">Register</Link></p>
        <div className="form-control mt-6">
          <button onClick={handleLogin} className="btn btn-primary">Login</button>
        </div>
        {/* form start--- */}
      </div>
    </div>
  );
}
