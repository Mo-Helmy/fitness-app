import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: 'center' }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: '20px', xs: '16px' } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    >
      Copyright © {new Date().getFullYear()} All rights reserved | This project
      is made with{' '}
      <span style={{ color: 'tomato', fontWeight: 'bold', fontSize: '24px' }}>
        ♡
      </span>{' '}
      by{' '}
      <a
        href="https://mohelmy-portfolio.vercel.app/"
        style={{ color: 'tomato', fontWeight: 'bold' }}
        target="_blank"
        rel="noreferrer"
      >
        Mo.Helmy
      </a>
    </Typography>
  </Box>
);

export default Footer;
