import React, { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const register = (event) => {
    event.preventDefault();
    fetch("/djangoapp/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
  };

  return (
    <main className="container">
      <h1>Sign-up</h1>
      <form onSubmit={register}>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" type="text" placeholder="Username" value={form.username} onChange={handleChange} />

        <label htmlFor="first_name">First Name</label>
        <input id="first_name" name="first_name" type="text" placeholder="First Name" value={form.first_name} onChange={handleChange} />

        <label htmlFor="last_name">Last Name</label>
        <input id="last_name" name="last_name" type="text" placeholder="Last Name" value={form.last_name} onChange={handleChange} />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" placeholder="Email" type="email" value={form.email} onChange={handleChange} />

        <label htmlFor="password">Password</label>
        <input id="password" name="password" placeholder="Password" type="password" value={form.password} onChange={handleChange} />

        <button className="btn btn-primary" type="submit">Register</button>
      </form>
    </main>
  );
};

export default Register;
