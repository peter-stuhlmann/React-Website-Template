import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SocialMediaIcons from './SocialMediaIcons';

export default function Footer() {
  const navItems = [
    {
      title: 'Legal Notice',
      href: 'legal-notice',
    },
    {
      title: 'Privacy Policy',
      href: 'privacy-policy',
    },
  ];

  return (
    <StyledFooter>
      <SocialMediaIcons />
      <div>
        <p>&copy; 2021 Lorem ipsum</p>
        <nav>
          <ul>
            {navItems.map((navItem, index) => (
              <li key={index}>
                <Link to={navItem.href}>{navItem.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
    padding: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }

    p {
      margin: 0;

      @media (max-width: 768px) {
        margin-bottom: 15px;
      }
    }

    ul {
      margin: 0;
      padding: 0;
      display: flex;
      flex-flow: row wrap;

      li {
        list-style-type: none;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-right: 25px;

        &:last-child {
          margin-right: 0;
        }

        @media (max-width: 480px) {
          flex-flow: row wrap;
          flex: 0 0 100%;
          margin-right: 0;
        }

        a {
          justify-content: center;
          align-items: center;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: #000;
        }
      }
    }
  }
`;
