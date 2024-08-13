export const exerciseOptions={
    method: 'GET',
    
    headers: {
      'x-rapidapi-key':"c695d77590msh889fae43389da64p110252jsn6faba68c9bc2",
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };

  // const options = {
  //   method: 'GET',
  //   hostname: 'exercisedb.p.rapidapi.com',
  //   port: null,
  //   path: '/exercises/bodyPartList',
  //   headers: {
  //     'x-rapidapi-key': 'c695d77590msh889fae43389da64p110252jsn6faba68c9bc2',
  //     'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  //   }
  // };
export const youtubeOptions={
    method: 'GET',

    headers: {
      'x-rapidapi-key': '8be0459fd5msh19d10724e550f47p12ab42jsn204f11831280',
      'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
// };



export const fetchData=async(url,options)=>{
    const response=await fetch(url,options);
    const data= await response.json()
    return data;
}