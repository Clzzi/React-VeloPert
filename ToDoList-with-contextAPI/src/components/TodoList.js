import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlcok = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return <TodoListBlcok>
    <TodoItem text="컴포넌트 스타일링" done={true} />
    <TodoItem text="컨텍스트 만들기이" done={true} />
    <TodoItem text="프로젝트 생성하기" done={false} />
    <TodoItem text="프로젝트 생성하기" done={true} />
    <TodoItem text="프로젝트 생성하기" done={true} />
  </TodoListBlcok>;
}

export default TodoList;
