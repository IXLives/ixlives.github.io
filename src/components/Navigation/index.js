import React, { useState, useRef } from 'react';
import { Link } from '@reach/router';
import { Breakpoint } from 'react-socks';
import { TopNav, NavBurger, BurgerMenu } from '../UI/index';
import { useOnClickOutside } from '../../hooks/index';

export const NavBar = () => {
  const [isOpen, setOpen] = useState();

  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div className="nav">
      <Breakpoint desktop only>
        <TopNav>
          <ul>
            <Link to="#Home">Home</Link>
            <Link to="#About">About</Link>
            <Link to="#Projects">Projects</Link>
            <Link to="#Skills">Skills</Link>
            <Link to="#Resume">Resume</Link>
            <Link to="#Contact">Contact</Link>
          </ul>
        </TopNav>
      </Breakpoint>
      <Breakpoint tablet only>
        <TopNav>
          <ul>
            <Link to="#Home">Home</Link>
            <Link to="#About">About</Link>
            <Link to="#Projects">Projects</Link>
            <Link to="#Skills">Skills</Link>
            <Link to="#Resume">Resume</Link>
            <Link to="#Contact">Contact</Link>
          </ul>
        </TopNav>
      </Breakpoint>
      <Breakpoint mobile only>
        <TopNav ref={node}>
          <Burger isOpen={isOpen} setOpen={setOpen} />
          <div style={{ position: 'relative' }}>
            <BurgerNav isOpen={isOpen} setOpen={setOpen} />
          </div>
        </TopNav>
      </Breakpoint>
    </div>
  );
};

export const Burger = ({ isOpen, setOpen }) => {
  return (
    <NavBurger isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
      <div />
      <div />
      <div />
    </NavBurger>
  );
};

export const BurgerNav = ({ isOpen, setOpen }) => {
  return (
    <BurgerMenu isOpen={isOpen}>
      <Link to="#Home" onClick={() => setOpen(!isOpen)}>
        Home
      </Link>
      <Link to="#About" onClick={() => setOpen(!isOpen)}>
        Landlords
      </Link>
      <Link to="#Projects" onClick={() => setOpen(!isOpen)}>
        Renters
      </Link>
      <Link to="#Skills" onClick={() => setOpen(!isOpen)}>
        Features and Pricing
      </Link>
      <Link to="#Resume" onClick={() => setOpen(!isOpen)}>
        Contact
      </Link>
      <Link to="#Contact" onClick={() => setOpen(!isOpen)}>
        Login
      </Link>
    </BurgerMenu>
  );
};
