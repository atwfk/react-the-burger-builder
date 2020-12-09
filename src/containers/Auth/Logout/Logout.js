import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";

const logout = (props) => {
  useEffect(() => {
    props.onLogut();
  }, []);

  return <Redirect to="/" />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogut: () => dispatch(actions.logout()),
  };
};

export default connect(null, mapDispatchToProps)(logout);
