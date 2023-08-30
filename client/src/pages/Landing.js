import React from "react";
import { Logo } from "../components/index";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            It's not only writers who can benefit from this free online tool. If
            you're a programmer who's working on a project where blocks of text
            are needed, this tool can be a great way to get that. It's a good
            way to test your programming and that the tool being created is
            working well.
          </p>
          <Link to="/" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="picture" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
