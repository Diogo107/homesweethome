import React from 'react'
import './style.scss'
import { Navbar, Nav } from 'react-bootstrap';

export default function Footer() {
  return (
         <Navbar className="footer" bg="light" expand="lg">
            <Nav className="ml-auto">
              <small>2020© h-sweet-home.herokuapp.com Develop by <a className="footer__link" href="https://github.com/Diogo107" target="_blank">Diogo</a>, <a className="footer__link" href="https://github.com/RicAz91" target="_blank">Ricardo</a> & <a className="footer__link" href="https://github.com/LukeSkyRunner" target="_blank">Luca</a></small>
            </Nav>
          </Navbar>
  )
}
