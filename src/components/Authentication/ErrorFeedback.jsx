// @flow
import React from "react";

type Props = {
  errorMessage: String
};

const ErrorFeedback = (props: Props) => (
  <div className="invalid-feedback">{props.errorMessage}</div>
);

export default ErrorFeedback;
