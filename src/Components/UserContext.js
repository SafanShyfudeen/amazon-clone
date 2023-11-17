import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//emailValidation
export const emailValidation = email => {
  const emailRegex = /^[^\s@]+@[^\s@]+$/;
  return emailRegex.test(email)
}

// passwordValidation
export const passwordValidation = password => {
  const passwordRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  return passwordRegex.test(password)
}

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);

 