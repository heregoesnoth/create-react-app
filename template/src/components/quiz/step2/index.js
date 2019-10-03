import React, { useContext } from 'react';
import { QuizContext } from '../context';
import { FormGroup, Label, Input } from 'reactstrap';
const Step2 = () => {
  const { person, handleChange } = useContext(QuizContext);

  return (
    <div>
      <FormGroup>
        <Label for="lastName">Last Name</Label>
        <Input type="text"
          name="lastName"
          id="lastName"
          value={person.lastName}
          onChange={handleChange}
          placeholder="and yours last name?" />
      </FormGroup>
    </div>
  )
};

export default Step2;