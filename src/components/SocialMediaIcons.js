import React from 'react';
import styled from 'styled-components';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function SocialMediaIcons() {
  const navItems = [
    {
      title: 'Facebook',
      href: 'https://facebook.com/',
      icon: <FacebookIcon />,
    },
    {
      title: 'Twitter',
      href: 'https://twitter.com/',
      icon: <TwitterIcon />,
    },
    {
      title: 'Instagram',
      href: 'https://instagram.com/',
      icon: <InstagramIcon />,
    },
    {
      title: 'LinkedIn',
      href: 'https://linkedin.com/',
      icon: <LinkedInIcon />,
    },
    {
      title: 'Youtube',
      href: 'https://youtube.com/',
      icon: <YouTubeIcon />,
    },
    {
      title: 'Pinterest',
      href: 'https://pinterest.com/',
      icon: <PinterestIcon />,
    },
  ];

  return (
    <SocialMediaNav>
      <ul>
        {navItems.map((navItem, index) => (
          <li key={index}>
            <a
              href={navItem.href}
              title={navItem.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              {navItem.icon}
            </a>
          </li>
        ))}
      </ul>
    </SocialMediaNav>
  );
}

const SocialMediaNav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 20px;

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
      margin-right: 19px;

      &:last-child {
        margin-right: 0;
      }

      &:hover svg {
        opacity: 0.75;
      }

      a {
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        text-decoration: none;
        color: #000;

        svg {
          color: #3d3a2c;
          transition: 0.1s;
        }
      }
    }
  }
`;
