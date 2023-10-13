import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
const API_KEY='2w1xX6FOr95ZoGlKsQVbVQEk3IHMCbms';
// const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
// const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
    const[gif,setGif]=useState('');

    const[loading,setLoading]=useState('false');

    async function fetchData(tag){
        setLoading(true);
        const {data}=await axios.get(tag?`${url}&tag=${tag}`:url);
        const imageSource=data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }
    useEffect(()=>{
        fetchData('car');
    },[])
    return {gif,loading,fetchData}

}

export default useGif
