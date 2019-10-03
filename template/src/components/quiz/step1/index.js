import React, { useContext } from 'react';
import { QuizContext } from '../context';
import { FormGroup, Label, Input } from 'reactstrap';

const Step1 = () => {
  const { person, handleChange } = useContext(QuizContext);

  return (
    <div>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          value={person.name}
          onChange={handleChange}
          placeholder="What's your name?" />
      </FormGroup>
    </div>
  )
};

export default Step1;