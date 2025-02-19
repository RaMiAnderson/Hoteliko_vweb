import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';



const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

export default function CustomizedButtons({variant, color, bgColor, bgColorH, bgColorA,brdrColor, brdrColorH, textBtn, width, padding, StartIcon}) {
    const BootstrapButton = styled(Button)({
        boxShadow: 'none',
        display : "flex",
        color : color,
        width: width,
        alignItems : "center",
        justifyContent : "space-evenly",
        textTransform: 'none',
        fontSize: 16,
        padding: padding,
        lineHeight: 1.5,
        backgroundColor: bgColor,
        borderColor: brdrColor,
        fontFamily: "poppins",
        '&:hover': {
          backgroundColor: bgColorH,
          borderColor: brdrColorH,
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: bgColorA,
          borderColor: brdrColorH,
        },
        
      });
  return (
    <Stack spacing={2} direction="row">
      {/* <ColorButton variant="contained">Custom CSS</ColorButton> */}
      <BootstrapButton variant={variant} >
        {StartIcon}
        {textBtn}
      </BootstrapButton>
    </Stack>
  );
}
