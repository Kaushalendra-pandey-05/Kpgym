import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import{Box} from '@mui/material'

import { exerciseOptions,fetchData,youtubeOptions } from '../utils/fetchData'
import Detail from '../component/Detail.jsx'
import ExerciseVideos from '../component/ExerciseVideos.jsx'
import SimilarExercises from '../component/SimilarExercises.jsx'
 
function ExerciseDetail() {
const [exerciseDetail,setExerciseDetail]=useState({})
const[exerciseVideos,setExerciseVideos]= useState([]);
const [targetMuscleExercises,setTargetMuscleExercises]=useState([])
const [equipmentExercises,setequipmentExercises]=useState([])
const {id}=useParams();

 useEffect(()=>{
  const fetchExercisesData=async()=>{
    const exerciseDbUrl='https://exercisedb.p.rapidapi.com';
    const youtubeSearchUrl='https://youtube-search-and-download.p.rapidapi.com';
    const exerciseDetailData=await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions);
  setExerciseDetail(exerciseDetailData);
const exerciseVideoData=await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions);
  setExerciseVideos(exerciseVideoData.contents)

  const targetMuscleExerciseData=await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions);
   
setTargetMuscleExercises(targetMuscleExerciseData)

  const equipmentExercisesData=await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions);
 
  setequipmentExercises(equipmentExercisesData)

  }
  fetchExercisesData();
 },[id]);


  return (
    <Box>
      <Detail exercisesDetail={exerciseDetail} />    
        <ExerciseVideos exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
        />
      <SimilarExercises
      targetMuscleExercises={targetMuscleExercises}
      equipmentExercises={equipmentExercises}
      />
      </Box>
  )
}

export default ExerciseDetail