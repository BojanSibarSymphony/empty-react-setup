import React from "react";
import PropTypes from "prop-types";

const InlineError = ({ text }) => {
  return <span>{text}</span>;
};

InlineError.prototype = {
  text: PropTypes.string
};

export default InlineError;
