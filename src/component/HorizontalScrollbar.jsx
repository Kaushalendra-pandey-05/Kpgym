import React,{useContext} from 'react'
import {Box,Typography} from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
// import 'react-horizontal-scrolling-menu/dist/styles.css';
import RightArrowIcon from '../assets/icons/left-arrow.png'
import LeftArrowIcon from '../assets/icons/right-arrow.png'
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';
// import { red } from '@mui/material/colors';


// const LeftArrow=()=>{
//    const {scrollPrev} =useContext(VisibilityContext);
//   return(
//     <Typography onclick={()=>scrollPrev()} 
//     className="left-arrow"> 
//       <img src={LeftArrowIcon} alt="left-arrow"
//       height="50px"
//       width="60px"
//       />
//     </Typography>
//   ); 

// };

// const LeftArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollNext()} className="left-arrow">
//       <img src={LeftArrowIcon} alt="right-arrow"
//       height="50px"
//       width="60px" />
//     </Typography>
//   );
// };

// const RightArrow = () => {
//   const { scrollPrev } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollPrev()} className="right-arrow">
//       <img src={RightArrowIcon} alt="right-arrow"
//        height="50px"
//         width="60px" />
//     </Typography>
//   );
// };
// const RightArrow=()=>{
//   const {scrollNext} =useContext(VisibilityContext);
//  return(
//    <Typography onclick={()=>scrollPrev()} 
//    className="right-arrow"> 
//      <img src={RightArrowIcon} alt="right-arrow"
//     " />
//    </Typography>
//  ); 



export default function HorizontalScrollbar({data,bodyPart,setBodyPart, isBodyParts }) {
  return (
   <ScrollMenu 
  //  LeftArrow={LeftArrow} RightArrow={RightArrow}
   >
      {
        data.map((item)=>
      (  <Box
         key={item.id || item}
         itemId={item.id || item}
         title={item.id || item}
         m="0 40px"
      >
  {isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} 
  setBodyPart={setBodyPart}
  />
  : <ExerciseCard exercise={item}/>
}
        </Box>
        )
      )}
    </ScrollMenu>
  )
}
