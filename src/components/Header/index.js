import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/Nubank_Logo.png';

import { Container, Top, Logo, Title } from './styles';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Olá Enio!</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={22} color="#FFF" />
    </Container>
  );
}
