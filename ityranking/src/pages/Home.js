import React from "react";

import LoginHome from "../components/LoginHome";
import Header from '../components/Header'

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <LoginHome/>

      </>
    );
  }
}