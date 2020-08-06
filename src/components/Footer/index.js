import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://mrfadul.com">
        <img src="https://mrfadul.com/img/logo2.png" alt="Logo MrFadul" style={{margin: '-13px', marginTop: '-50px'}}  />
      </a>
      {'Com '}
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" style={{marginLeft: '20px'}} />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
