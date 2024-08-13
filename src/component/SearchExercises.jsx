import React,{useEffect,useState} from 'react'
import {Box,Button,Stack,TextField,Typography} from '@mui/material';

import { exerciseOptions,fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
function SearchExercises({
    setExercises,bodyPart,setBodyPart
}) {
    // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    const[search,setSearch]=useState('')
 
    // const [exercises,setExercises]=useState([])
    const [bodyParts,setBodyParts]=useState([])
    useEffect(()=>{
    const fetchExercisesData=async()=>{
        const bodyPartsData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
        );
        setBodyParts(['all',...bodyPartsData]);

    }
    fetchExercisesData();
    },[])


// async means this function will take some time to complet and most of the case we will fetch api here and we will handle when we click on buttton data 
const handleSearch= async()=>{
     if(search){
        const exerciseData=await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=800',exerciseOptions);
        // console.log(exerciseData);

    const searchedExercises=exerciseData.filter((exercise)=>
      exercise.name.toLowerCase().includes(search)
      ||exercise.target.toLowerCase().includes(search)
      ||exercise.equipment.toLowerCase().includes(search)
      ||exercise.bodyPart.toLowerCase().includes(search)
    );
    setSearch('');
    setExercises(searchedExercises);
     }
     window.scrollTo({top:1800,left: 100,behavior:'smooth'})
}


  return (
   <Stack alignItems="center" mt="37px" justifyContent="center" p="20px" >
    <Typography
    fontWeight={700} 
    sx={{fontSize:{lg:'44px',xs:'30px'}}}
    mb="50px" textAlign="center"
    >
    Awesome Exercises You <br/>
    Should Know
    </Typography>
    <Box position="relative" mb="72px">
        <TextField //we do it because we want search bar here which we will get from material ui
        sx={{
            input:{
                fontWeight:'700',
                border:'none',borderRadius:'4px'
            },
            width:{lg:'800px'
            ,xs:'340px'
         },
         backgroundColor:'#fff',
         borderRadius:'40px'

         
        }}
        height="76px"
        value={search}
        onChange={(e)=>setSearch(e.target.value.toLowerCase())}//e.target.value retrieves the current value of the input field.ok bhai 
        placeholder='Search Exercises'
        type='text'
         />
 
    <Button className="search-btn"
    sx={{
        bgcolor:'#FF2625',
        color:'#fff',
        textTransform:'none',
        width:{lg:'175px',xs:'85px'},
        height:"56px",
        fontSize:  {lg:'16px',xs:'12px'},
        positin:"absolute",//button come right side of the search bar
        right:'0'//check here 
    }}
    onClick={handleSearch}
   
   
   >
         Search
    </Button>

    </Box>


<Box sx={{position:'relatvie',width:'100%',p:'20px'}}>
  <HorizontalScrollbar data={bodyParts}
  bodyPart={bodyPart}
  setBodyPart={setBodyPart}
  isBodyParts
  />
</Box>
   </Stack>
  )
}

export default SearchExercises