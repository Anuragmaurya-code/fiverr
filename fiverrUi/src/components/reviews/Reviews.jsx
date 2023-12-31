import React from 'react'
import './Reviews.scss'
import Review from '../review/Review'
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
const Reviews = ({ gigId }) => {
  const { isLoading, error, data } = useQuery({// runs when the page is rendered
    queryKey: ['reviews'],
    queryFn: () =>
      newRequest
        .get(
          `/reviews/${gigId}`)
        .then((res) => { return res.data })
  });
  console.log(data)
  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {isLoading ? "loading" : error ? "something went wrong " :
      data.map((review)=><Review key={review._id} review={review}/>)}
      
    </div>
  )
}

export default Reviews