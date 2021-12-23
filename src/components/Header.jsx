import React from 'react';
import './Header.css';
import logo from './logo.png'

export default function Header() {
  return(
    <header>
      <img src={logo} alt="Logo" class="logo"/>
      <nav>
        <a href="#">Comunidade Lakabot</a>
        <a href="#">Tutorial</a>
        <a href="#">Open Source</a>
        <a href="#">Comandos</a>
      </nav>
    </header>
  )
}