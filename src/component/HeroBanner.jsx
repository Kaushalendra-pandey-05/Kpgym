import React from 'react'
import {Box,Button,Stack,Typography } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.jpg';
function HeroBanner() {
  return (
   <Box sx={{
    mt: {lg:'212px',xs:'200px'},
    ml:{sm:'50px'} 
   }} position="relative" p="20px"
   >

<Typography color="#FF2625"
fontWeight="600" fontSize="46px"
mb="20px" mt="-80px">
  Shaktishala
</Typography>
<Typography
fontWeight="700px"
sx={{fontSize:{lg:'40px',xs:'40px'
},
// marginBottom:{lg:}
}}
mb="30px"
>
योगस्थः कुरु कर्माणि <br/>
 सङ्गं त्यक्त्वा धनञ्जय।<br/>
सिद्ध्यसिद्ध्योः समो भूत्वा<br/>
 समत्वं योग उच्यते।। <br/>
</Typography>

<Button variant="contained"
color='error' href="#exercises"
sx={{backgroundColor:'#ff2625',
    padding:'10px'
}}
>
    Explore Exercises
</Button>
<Typography
fontWeight="600"
color="#ff2625"
sx={{
    opacity:0.1,
    display:{lg:'block',xs:'none'}

}}
fontSize="200px"
mt="-60px"
ml="100px"
>
    Exercise
</Typography>
<img src={HeroBannerImage} alt="banner"
className="hero-banner-img" 
width="400" height="300"/>
   </Box>
  )
}

export default HeroBanner