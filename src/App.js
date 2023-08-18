import React from 'react';

import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider, LightTheme } from 'baseui';
import { Button } from 'baseui/button';

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
         
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button
            onClick={() => window.open('https://reactjs.org', '_blank')}
            style={{ marginBottom: '20px' }}
          >
            Learn React
          </Button>
        </div>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;