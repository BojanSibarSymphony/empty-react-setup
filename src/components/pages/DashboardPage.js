import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";

const DashboardPage = ({ isConfirmed }) => (
  <div>{!isConfirmed && <ConfirmEmailMessage />}</div>
);

DashboardPage.protoTypes = {
  isConfirmed: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed
  };
}

export default connect(mapStateToProps)(DashboardPage);
