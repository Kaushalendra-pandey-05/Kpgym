import React,{useState} from 'react'
import {Box} from '@mui/material';
import Exercises from '../component/Exercises';
import SearchExercises from '../component/SearchExercises';
import HeroBanner from '../component/HeroBanner';
function Home() {
  // here we use body part changes are going to reflec overallin home pagees just not in individuals;
  const [bodyPart,setBodyPart]=useState('all')
  const [exercises,setExercises]=useState([])
// console.log(bodyPart);
  return (
    <Box>
<HeroBanner/>
<SearchExercises setExercises={setExercises}
bodyPart={bodyPart}
setBodyPart={setBodyPart}
exercises={exercises}
/>
<Exercises
exercises={exercises}
setExercises={setExercises}
bodyPart={bodyPart}
// setBodyPart={setBodyPart}  
/>

    </Box>
  )
}

export default Home