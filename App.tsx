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

const App: React.FC = () => {
  const handleOpen = () => {
    console.log('Open button pressed');
  };

  const handleClose = () => {
    console.log('Close button pressed');
  };

  const handleChangePassword = () => {
    console.log('Change Password button pressed');
  };

  return (
    <Container>
      <ButtonWrapper>
        <Button title="열기" onPress={handleOpen} />
        <Button title="닫기" onPress={handleClose} />
        <Button title="비밀번호 변경" onPress={handleChangePassword} />
      </ButtonWrapper>
    </Container>
  );
};

export default App;