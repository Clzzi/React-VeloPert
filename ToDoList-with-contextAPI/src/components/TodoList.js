import React from 'react';
import styled from 'styled-components';

const TodoListBlcok = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return <TodoListBlcok>todolist</TodoListBlcok>;
}

export default TodoList;
