import React from 'react';
import Button from './components/Button';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">Button</Button>
        <Button size="medium">Button</Button>
        <Button size="small">Button</Button>
      </div>

      <div className="buttons">
        <Button color="gray" size="large">
          Button
        </Button>
        <Button color="gray" size="medium">
          Button
        </Button>
        <Button color="gray" size="small">
          Button
        </Button>
      </div>

      <div className="buttons">
        <Button color="pink" size="large">
          Button
        </Button>
        <Button color="pink" size="medium">
          Button
        </Button>
        <Button color="pink" size="small">
          Button
        </Button>
      </div>

      <div className="buttons">
        <Button color="blue" size="large" outline>
          Button
        </Button>
        <Button color="pink" size="medium" outline>
          Button
        </Button>
        <Button color="gray" size="small" outline>
          Button
        </Button>
      </div>

      <div className="buttons">
        <Button color="blue" size="large" fullWidth>
          Button
        </Button>
        <Button color="pink" size="large" fullWidth>
          Button
        </Button>
        <Button
          color="gray"
          size="large"
          fullWidth
          className="Customized-ClassName"
          onClick={() => {
            console.log('클릭');
          }}
          onMouseMove={() => {
            console.log('마우스무브');
          }}
        >
          Button
        </Button>
      </div>
    </div>
  );
}

export default App;
