import React from 'react';
import { SafeAreaView, View } from 'react-native';
import styled from 'styled-components/native';
import Button from './components/Button';

const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const ButtonWrapper = styled(View)`
  width: 80%;
  align-items: center;
`;

const App = () => {
  const handleOpen = () => {
    console.log('문희 열립니다.');
  };

  const handleClose = () => {
    console.log('문희 닫힙니다.');
  };

  const handleChangePassword = () => {
    console.log('비밀번호가 바뀌었습니다.');
  };

  return (
    <Container>
      <ButtonWrapper>
        <Button title="문 열기" onPress={handleOpen} />
        <Button title="문 닫기" onPress={handleClose} />
        <Button title="비밀번호 변경" onPress={handleChangePassword} />
      </ButtonWrapper>
    </Container>
  );
};

export default App;