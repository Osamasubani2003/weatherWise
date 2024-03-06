import React, { useState } from "react";
import { useFetchuserQuery } from "../../Store";
import "./style/SignInForm.css";
const SignInForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [skip, setSkip] = useState(true);
  const { data, error, isLoading } = useFetchuserQuery(
    { username: formData.username, password: formData.password },
    {
      skip,
    }
  );

  if (isLoading) {
    console.log("isLoading");
  } else if (error) {
    console.log(error);
  } else {
    sessionStorage.setItem("username", formData.username);
    console.log(data);
  }

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    sessionStorage.removeItem("username");
    setSkip((prev) => false);
  };

  const handleFormClick = () => {
    const formElement = document.getElementById("form");
    formElement.style.transform = "translateY(-5px)";
    setTimeout(() => {
      formElement.style.transform = "translateY(0)";
    }, 200);
  };

  return (
    <div className="container">
      <form
        id="form"
        onSubmit={handleSubmit}
        className="form"
        onClick={handleFormClick}
      >
        <h2 className="title">Sign In</h2>
        <label htmlFor="username" className="label">
          Username:
        </label>
        <div className="inputGroup">
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className="input"
            required
          />
        </div>
        <label htmlFor="password" className="label">
          Password:
        </label>
        <div className="inputGroup">
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className="input"
            required
          />
        </div>
        <button type="submit" className="submitButton">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
