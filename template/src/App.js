import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Container } from 'reactstrap';
import Routes from './routes';
import { AppContextProvider } from './components/app/context';


function App() {
  return (
    <AppContextProvider>
        <div>
          <Container>
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
          </Container>
        </div>
    </AppContextProvider>
  );
}

export default App;
