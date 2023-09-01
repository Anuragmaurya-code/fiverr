import React, { useState,useRef, useEffect, } from 'react'
import './Gigs.scss';
import GigCard from '../../components/gigCard/GigCard.jsx'
import newRequest from '../../utils/newRequest';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { useLocation } from 'react-router-dom';
import Reviews from '../../components/reviews/Reviews';
const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");
  const minRef=useRef()
  const maxRef=useRef()
  const {search}=useLocation()
  
  
  const { isLoading, error, data,refetch } = useQuery({// runs when the page is rendered
    queryKey: ['gigs'],
    queryFn: () =>
      newRequest
      .get(
        `/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`)
      .then((res)=>{return res.data})
  })
  useEffect(()=>{
    refetch()
  },[sort])//whenever sort is changed refect is donr
  
  const apply=()=>{
    refetch()
    console.log(minRef.current.value)
    console.log(maxRef.current.value)
  }
  const reSort=(type)=>{
    setSort(type)
    setOpen(false)
  }
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">FIVER {" >"} GRAPHIC DESIGN</span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with fiver's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budged</span>
            <input type="text" placeholder='min' ref={minRef}/>
            <input type="text" placeholder='max' ref={maxRef}/>
            <button onClick={apply}>Apply</button>
          
          </div>
          <div className="right">
            <div className="sortBy">SortBy</div>
            <div className="sortType">{sort==="sales"? "Best Selling" : "Newest"}</div>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && <div className="rightMenu">
              { sort === "sales" ? <span onClick={()=>reSort("createdAt")}>Newest</span>
              :
              <span  onClick={()=>reSort("sales")}>Best Selling</span>}
            </div>}
          </div>
        </div>
        <div className="cards">
          {isLoading? "Loading...":error?"Something went wrong ": data.map((gig)=>
            {return <GigCard key={gig._id} item={gig}/>}
          )}
        </div>
      </div>
    </div>
  )
}

export default Gigs
