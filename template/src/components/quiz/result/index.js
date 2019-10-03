import React, { useContext } from 'react';
import { QuizContext } from '../context';

const Result = () => {
  const { person } = useContext(QuizContext);

  return (
    <div>
      <p>Hello {person.name} {person.lastName}</p>
    </div>
  )
};

export default Result;