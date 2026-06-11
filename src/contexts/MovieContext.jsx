import { createContext,useState,useContext,useEffect } from "react";

const Moviecontext = createContext()

export const useMovieContext = ()=> useContext(Moviecontext)

export const MovieProvider = ({children}) =>{
    const [favorites,setFavorites]=useState([])

    useEffect(()=>{
        const storeFavs = localStorage.getItem("favorites")
        if(storeFavs) setFavorites(JSON.parse(storeFavs))
    },[])

    useEffect(()=>{
        localStorage.setItem('favorites',JSON.stringify(favorites))
    },[favorites])
    
    const addTofavorites =(movie)=>{
        setFavorites(prev=>[...prev,movie])
    }

    const removeFromFavorites = (movieId)=>{
        setFavorites(prev=>prev.filter(movie=>movie.id !== movieId))
    }

    const isFavorite = (movieId)=>{
        return favorites.some(movie=>movie.id === movieId)
    } 
   const value = {
    favorites,
    addTofavorites,
    removeFromFavorites,
    isFavorite 
   }
   return <Moviecontext.Provider value = {value}>  
    {children}
   </Moviecontext.Provider>
}