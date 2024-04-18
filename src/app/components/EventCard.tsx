"use client"
import React, { useEffect } from 'react'

import Post from '../_api/_post/post';
import EventChild from './EventChild';

const EventCard = () => {
    // const { fetchPost }: any = Post();
    //   const getItem=async ()=> {
    //     // The `fetch` function is automatically memoized and the result
    //     // is cached
    //     const res = await fetch('https://6486faf7beba6297278f99d8.mockapi.io/feed')
    //     console.log(res,'card')
    //     return res.json()
    //   }

    //   const item =  getItem() // cache MISS


    useEffect(() => {
        fetch('https://6486faf7beba6297278f99d8.mockapi.io/feed')
          .then((res) => res.json())
          .then((data) => {
          
          })
      }, [])
      
    // useEffect(() => {
    //     // try {
    //     //   fetchPost().then((response: any) => {
    //     //     if (!response?.error) {
    //     //       console.log(JSON.stringify(response),'event component');
    //     //     }
    //     //   });
    //     // } catch (e: any) {
    //     //   console.log(e, "catch error");
    //     // }
           
           
    //     const item =  getItem() // cache MISS
    //     const item1 =  getItem() // cache HIT

    //   }, []);
  return (
    <div>
        <EventChild/>
    </div>
  )
}

export default EventCard