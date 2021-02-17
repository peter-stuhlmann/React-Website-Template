import React from 'react';
import styled from 'styled-components';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PinterestIcon from '@material-ui/icons/Pinterest';

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
