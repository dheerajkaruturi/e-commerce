import React, { Fragment } from "react";
import Header from "../Header/header";
import Navigation from "../Navigation/navigation";
import Main from "../Main/main";

const home = () => {
  return (
    <Fragment>
      <Header></Header>
      <Navigation></Navigation>
      <Main></Main>
    </Fragment>
  );
};

export default home;
