import React, { useState, useContext } from 'react'
import sublinks from './data'


const linksContext = createContext();

const linksContextProvider = ({ children }) => {
  return (
    <linksProvider.provider value={data}>{children}</linksProvider.provider>
  );
};

export default linksContextProvider; 

