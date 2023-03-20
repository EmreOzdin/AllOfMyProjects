import React, { useEffect } from 'react'

const Alert = ({ setWarning, list }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setWarning(false);
    }, 1500);
    return () => {
      clearTimeout(timeOut);
    };
  }, [list]);
  return <h2 className="text-center text-danger">Please enter an element!!</h2>;
};

export default Alert;
