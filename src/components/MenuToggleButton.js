import React from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default function MenuToggleButton(props) {
  const { open, setOpen } = props;

  return (
    <StyledToggleButton open={open} onClick={() => setOpen(!open)}>
      <IconButton aria-label="Open menu" component="span">
        <MenuIcon />
      </IconButton>
    </StyledToggleButton>
  );
}

const StyledToggleButton = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 769px) {
    display: none !important;
  }

  .MuiIconButton-colorPrimary {
    color: #0d0d0d;
  }
`;
