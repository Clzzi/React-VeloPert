import React from 'react';
import CounterContainer from './containers/CounterContainer';
import TodoApp from './containers/TodoApp';

function App() {
  return (
    <div>
      <TodoApp />
      <hr />
      <CounterContainer />
    </div>
  );
}

export default App;
