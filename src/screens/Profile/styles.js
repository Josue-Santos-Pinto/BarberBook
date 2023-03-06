import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #63c2d1;
  padding: 5px 10px;
`;
export const HeaderArea = styled.View`
  height: 50px;
  justify-content: center;
  padding: 0 20px;
`;
export const HeaderTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const InputArea = styled.View`
  width: 100%;
  height: 60px;
  background-color: #83d6e3;
  flex-direction: row;
  border-radius: 30px;
  padding-left: 30px;
  align-items: center;
  margin-bottom: 15px;
`;
export const InputName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #268596;
`;
export const InputItem = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #268596;
  margin-left: 16px;
`;
export const SendInfoButton = styled.TouchableOpacity`
  background-color: ${(props) => props.color};
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
`;
export const SendInfoButtonText = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
`;
