import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import session from "../../../shared/functions/session";

const renderMergedProps = (component, ...rest) => {
  const isAuthenticated = session.validateSession();

  const finalProps = Object.assign({}, ...rest);
  return isAuthenticated ? (
    React.createElement(component, finalProps)
  ) : (
    <Redirect to="/" />
  );
};

const ProtectedRoute = ({ component, ...rest }) => (
  <Route
    {...rest}
    render={(routeProps) => renderMergedProps(component, routeProps, rest)}
  />
);

ProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.elementType, PropTypes.node]),
};

export default ProtectedRoute;
