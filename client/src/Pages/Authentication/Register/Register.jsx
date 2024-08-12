import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   handleRegister
  const handleRegister = () => {
    console.log(name, email, password);
  };

  return (
    <div className="hero bg-base-200 h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl px-8 py-6">
        {/* title */}
        <h1 className="text-center text-2xl uppercase underline">Register</h1>
        {/* form start--- */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Type your full name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Create a uniq password"
            className="input input-bordered"
            required
          />
        </div>
        <p className="mt-4 text-center">You have an account? please <Link className="text-blue-400 underline uppercase text-xl" to="/login">Login</Link></p>
        <div className="form-control mt-6">
          <button onClick={handleRegister} className="btn btn-primary">
            Register
          </button>
        </div>
        {/* form start--- */}
      </div>
    </div>
  );
}
