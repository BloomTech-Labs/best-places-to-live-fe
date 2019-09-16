import React from "react";
import { Link } from "react-router-dom";
import { NavBar, NavBtn, LogoBox } from "./styled";
import moving from "../images/LMHiconcopy.png";

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }

  componentDidMount() {
    const el = document.querySelector("nav");
    this.setState({ top: el.offsetTop, height: el.offsetHeight });
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    this.state.scroll > this.state.top
      ? (document.body.style.paddingBottom = `${this.state.height}px`)
      : (document.body.style.paddingBottom = 0);
  }

  render() {
    return (
      <NavBar
        style={{ zIndex: "100" }}
        className={this.state.scroll > this.state.top ? "fixed-nav" : ""}
      >
        <Link to="/">
          <LogoBox src={moving} />
        </Link>

        <Link to="/Userlist">
          <NavBtn>Users</NavBtn>
        </Link>

        <Link to="/Login">
          <NavBtn id="loginButton">Login</NavBtn>
        </Link>

        <Link to="/Register">
          <NavBtn id="registerButton">SignUp</NavBtn>
        </Link>

        <Link to="/Maps">
          <NavBtn id="registerButton">Maps</NavBtn>
        </Link>
      </NavBar>
    );
  }
}

export default Navigation;
