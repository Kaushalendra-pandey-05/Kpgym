import React from 'react'
import {Box,Stack,Typography} from '@mui/material'
import Logo from '../assets/images/Logo.png'

function Fotter() {
  return (
   <Box mt="80px" bgcolor="#fff3f4">
    <Stack gap="40px" alignItems="center"
    px="40px" pt="24px"
    >
      <img src={Logo} alt="logo" width="100px" height="100px"/>
      <Typography varaiant="h5" pb="40px">
        Just for learning Process 

      </Typography>


    </Stack>
    
   </Box>
  )
}

export default Fotter