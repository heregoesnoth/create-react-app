import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const Context = createContext({});

export const Provider = props => {

  const {
    person: initialPerson,
    children
  } = props;

  const [person, setPerson] = useState(initialPerson);
  const [user, setUser] = useState('Lucas');

  const handleChange = event => {
    const { name, value } = event.target
    setPerson({ ...person, [name]: value })
  }

  const quizContext = {
    person,
    setPerson,
    handleChange,
    user,
    setUser,
  };

  // pass the value in provider and return
  return <Context.Provider value={quizContext}>{children}</Context.Provider>;
};

export const { Consumer } = Context;

Provider.propTypes = {
  person: PropTypes.object
};

Provider.defaultProps = {
  person: {}
};
