import React from 'react';
import Emoji from 'a11y-react-emoji';
import { Container, Copyright } from './styles';
import aphelium from '../../assets/LogoSolo.png';

export default function Header() {
  return (
    <Container>
      <img src={aphelium} alt="Aphelium" />
      <Copyright>
        <span>
          Powered with <Emoji symbol="💜" label="love" /> by{' '}
          <a href="https://aphelium.com.br">Aphelium</a>
        </span>
      </Copyright>
    </Container>
  );
}
