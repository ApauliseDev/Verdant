import React from 'react'
import {useState,createContext,useEffect} from 'react'


export const DataContext = createContext()



export const  DataProvider = (props) =>{

  const [porver, setPorver] = useState(localStorage.getItem('porver')? JSON.parse(localStorage.getItem('porver')) : [])
  const [vistas, setVistas] = useState(localStorage.getItem('porver')? JSON.parse(localStorage.getItem('porver')) : [])

useEffect(()=>{
  localStorage.setItem("porver",JSON.stringify(porver))
} ,[porver] )

useEffect(()=>{
  localStorage.setItem("vistas",JSON.stringify(vistas))
} ,[vistas] )

const addToWatched = (movie) => {
  const check =  vistas.every(item => {
    return item.id !== movie.id
  })
  if(check) {
    setVistas([...vistas,movie ] )
  }else{
    alert("you already added this movie to Watched List")
  }

}


  return (
    <div>
    <DataContext.Provider value={{porver,setPorver,vistas,setVistas,addToWatched}}>
    {props.children}
    
     </DataContext.Provider>
      
    </div>
  )
}