import { useEffect, useState } from "react"




export default function ImageSlider({ url, limit }) {

    const[images,setImages]=useState([]);
    const[currentSlides,setcurrentSlides]=useState(0);
    const[errorMsg,seterrorMsg]=useState(null)
    const[loading,setloading]=useState(false);
    
    async function fetchImages(getUrl){
      try{
        
        const response=await fetch(geturl);
        const data=await response.json();

        if(data){
            setImages(data)
        }
      }catch(e){

      }

    }

    useEffect(()=>{
        if(url !=='' ) fetchImages(url)

    },[url])

    return <div className="container">


    </div>
}