import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './components/Button';
import Dialog from './components/Dialog';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const palette = {
  blue: '#228be6',
  gray: '#496057',
  pink: '#f06595',
};

function App() {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  };
  const onConfirm = () => {
    setDialog(false);
  };
  const onCancle = () => {
    setDialog(false);
  };
  return (
    <ThemeProvider
      theme={{
        palette,
      }}
    >
      <>
        <AppBlock>
          <ButtonGroup>
            <Button size="large">Button</Button>
            <Button color="gray">Button</Button>
            <Button color="pink" size="small">
              Button
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size="large" outline>
              Button
            </Button>
            <Button color="gray" outline>
              Button
            </Button>
            <Button color="pink" size="small" outline>
              Button
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size="large" fullWidth>
              Button
            </Button>
            <Button color="gray" size="large" fullWidth>
              Button
            </Button>
            <Button color="pink" size="large" fullWidth>
              Button
            </Button>
          </ButtonGroup>
          <Button color="pink" size="large" fullWidth onClick={onClick}>
            삭제
          </Button>
        </AppBlock>
        <Dialog
          title="정말로 삭제하시겠습니까?"
          confirmText="삭제"
          cancleText="취소"
          onConfirm={onConfirm}
          onCancle={onCancle}
          visible={dialog}
        >
          데이터를 정말로 삭제하시겠습니까?
        </Dialog>
      </>
    </ThemeProvider>
  );
}

export default App;
