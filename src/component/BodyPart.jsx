import React from 'react'
import Icon from '../assets/icons/gym.png'
import { Stack,Typography} from '@mui/material'
function BodyPart({item,setBodyPart,bodyPart}) {
  return (
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={ {  
      borderTop: bodyPart===item ?'4px solid #ff2625':' ',  
    backgroundColor:'#fff',
    borderBottomLeftRadius:'30px',
    width:'400px',
    height:'330px',
    cursor:'pointer',
    gap:'20px',
}}
 onClick={()=>{
    setBodyPart(item);
    window.scrollTo({top:1800,left: 100,behavior:'smooth'})//scroll karke neeche karde rha hai 
 }
}
    >
   <img src={Icon} alt="dumbell" 
  style={{
    width:'80px'
    ,
    height:'80px'
  }}
   />
  <Typography fontSize='24px' fontWeight="bold"
  color="3A1212"
  mb="-30px"
  textTransform="capitalize"
  >
    {item}
    </Typography> 
  <Typography/>
    </Stack>
  )
}

export default BodyPart