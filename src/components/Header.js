import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

import ToggleButton from './MenuToggleButton';
import useOnClickOutside from '../helpers/useOnClickOutside';
import scrollWithOffset from '../helpers/scrollWidthOffset';
import Logo from '../assets/images/logo.svg';

export default function Header() {
  const [open, setOpen] = useState(false);

  const headerNavigation = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Projects',
      href: '/projects',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ];

  const nav = useRef();
  useOnClickOutside(nav, () => setOpen(false));

  return (
    <StyledHeader ref={nav}>
      <div>
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img src={Logo} alt="Logo" />
        </Link>
        <div>
          <Navigation open={open}>
            <ul>
              {headerNavigation.map((link) => (
                <li key={link.href}>
                  <NavHashLink
                    smooth
                    to={link.href}
                    onClick={() => setOpen(false)}
                    activeClassName="selected"
                    scroll={scrollWithOffset}
                    // activeStyle={{ color: '#0d0d0d' }}
                  >
                    {link.title}
                  </NavHashLink>
                </li>
              ))}
            </ul>
          </Navigation>
        </div>
        <ToggleButton open={open} setOpen={setOpen} />
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14),
    0px 1px 10px rgba(0, 0, 0, 0.12);
  padding: 10px 20px;

  & > div {
    display: flex;
    justify-content: space-between;

    img {
      height: 80px;
    }

    & > div {
      display: flex;
      align-items: center;
    }
  }
`;

const Navigation = styled.nav`
  @media (max-width: 768px) {
    display: ${(props) => (props.open ? 'block' : 'none')};
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    width: 250px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14),
      0px 1px 10px rgba(0, 0, 0, 0.12);
    margin-right: 0;
    overflow-y: auto;
  }

  @media (max-width: 480px) {
    width: 100%;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    align-items: center;

    li {
      margin-right: 25px;

      &:last-child {
        margin-right: 0;
      }

      &:hover a {
        color: #7dbf5e;
      }

      a {
        color: #3d403f;
        font-size: 18px;
        text-decoration: none;
      }
    }

    @media (max-width: 768px) {
      box-sizing: border-box;
      margin: 0;
      list-style-type: none;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      li {
        margin: 0;
        padding: 12px 0;

        &:first-child {
          margin-top: 50px;
        }

        &:hover a {
          color: #3d403f;
        }

        a {
          color: #3d403f;
          font-size: 18px;
          text-decoration: none;
          padding: 12px 20px;
        }
      }
    }
  }

  div:nth-child(2) {
    @media (min-width: 768px) {
      display: none;
    }

    display: flex;
    margin: 24px 24px 24px 20px;

    button {
      @media (max-width: 768px) {
        display: block;
        width: 100%;
      }
    }
  }
`;
