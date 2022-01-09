import React from 'react';
import Logo from './img/logo.png';

export default function Header() {
  return (
    <header>
      <img src={Logo} alt="Logo CFB Cursos" />
      <h1>CFB Cursos</h1>
    </header>
  )
}
