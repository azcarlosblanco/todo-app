import React from "react";
import { useSelector } from "react-redux";
import { Spinner } from "reactstrap";

const Loader = ({ children }) => {
  const { isLoading } = useSelector(state => state.loaderReducer)
  
  return (
  <>
    {isLoading && (
      <div className="d-flex justify-content-center mt-5">
        <Spinner color="primary" />
      </div>
    )}
    {children}
  </>)
};

export default Loader
