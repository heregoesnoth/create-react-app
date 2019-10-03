import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button } from 'reactstrap';
import { QuizContextProvider } from '../../components/quiz/context';
import Step1 from '../../components/quiz/step1'
import Step2 from '../../components/quiz/step2'
import Result from '../../components/quiz/result'

const Quiz = () => {
  const person = { name: '', lastName: '' };
  const [activeTab, setActiveTab] = useState('1');

  return (
    <QuizContextProvider person={person}>
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink onClick={() => setActiveTab('1')}>
              Name
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => setActiveTab('2')}>
              Last Name
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => setActiveTab('3')}>
              Result
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Step1 />
          </TabPane>
          <TabPane tabId="2">
            <Step2 />
          </TabPane>
          <TabPane tabId="3">
            <Result />
          </TabPane>
        </TabContent>
        {parseInt(activeTab) < 3 ?
          <Button
            onClick={() => setActiveTab(((parseInt(activeTab)) + 1).toString())}
            color="primary">
            Next Step
          </Button>
          : ''
        }

      </div>
    </QuizContextProvider>
  )
}

export default Quiz;