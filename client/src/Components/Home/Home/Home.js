import React from "react";
import CSVForm from "../CSVForm/CSVForm";
import EmailForm from "../EmailForm/EmailForm";
import UserForm from "../User/UserForm";
import "./Home.css";
const Home = () => {
  return (
    <div className="container">
      <UserForm />
      <CSVForm />
      <EmailForm />
    </div>
  );
};

export default Home;
