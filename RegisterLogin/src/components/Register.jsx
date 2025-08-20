import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Registered!\nName: ${name}\nEmail: ${email}\nRole: ${role}`);
  };

  return (
    <div className="form-container">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <h3 style={{ textAlign: "left", color: "#01579b", marginBottom: "5px" }}>
          Select your role
        </h3>
        <div className="role-selector">
          <label>
            <input
              type="radio"
              value="Seller"
              checked={role === "Seller"}
              onChange={(e) => setRole(e.target.value)}
              required
            /> Seller
          </label>
          <label>
            <input
              type="radio"
              value="Admin"
              checked={role === "Admin"}
              onChange={(e) => setRole(e.target.value)}
            /> Admin
          </label>
          <label>
            <input
              type="radio"
              value="Consumer"
              checked={role === "Consumer"}
              onChange={(e) => setRole(e.target.value)}
            /> Consumer
          </label>
          <label>
            <input
              type="radio"
              value="Distributor"
              checked={role === "Distributor"}
              onChange={(e) => setRole(e.target.value)}
            /> Distributor
          </label>
          <label>
            <input
              type="radio"
              value="Farmer"
              checked={role === "Farmer"}
              onChange={(e) => setRole(e.target.value)}
            /> Farmer
          </label>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
