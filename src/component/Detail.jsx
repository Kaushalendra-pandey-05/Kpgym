import React from 'react'
import { Typography,Stack,Button } from '@mui/material'
import BodyPartImage from '../assets/icons/yoga.png'
import TargetImage from '../assets/icons/yoga-pose_4742563.png'
import EquipmentImage from '../assets/icons/weightlifting.png'
function Detail({
    exercisesDetail
}) {
    
    const {bodyPart,gifUrl,name,target,equipment}=exercisesDetail;

    const extraDetail=[
        {
            icon:BodyPartImage,
            name:bodyPart,
        },
        {
            icon:TargetImage,
            name:target,
        },
        {
             icon:EquipmentImage,
             name:equipment,
        }
    ]
  return (
    <Stack gap="60px"sx={{flexDirection:{lg:'row'}, p:'20px',alignItems:'center'}}>
    <img src={gifUrl} alt={name} loading='lazy' height='500px'
    width='500px'/>  
    <Stack
    sx={{gap:{lg:'35px',xs:'20px'}}}>
        <Typography variant='h3'>
            {name}
        </Typography>
        <Typography  variant='h6'>
          Exercises  Keep you strong.
         <strong> {name}{` `}</strong> is one of the best exercises to target your <strong>{target}</strong>. It will help you improve your mood and gain energy.  
        </Typography>
        {extraDetail.map((item)=>(
            <Stack key={item.name} direction="row" gap="24px" alignItems="center" >
                <Button 
                sx={{background:'#fff2db',borderRadius:'50%',width:'100px',height:'100px'}}
                >
                    <img src={item.icon} 
                    alt={bodyPart}
                    style={{width:'50px',height:'50px' }}
                    />
                </Button>
              <Typography textTransform="capitalize" variant='h5'>
                {item.name}
              </Typography>
                </Stack>
        ))}
         </Stack>   
    </Stack>
  )
}

export default Detail