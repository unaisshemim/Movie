import React, { useEffect, useState } from "react";
import "./product.scss";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useSelector } from "react-redux";
import axios from "axios";




function Product() {
const id=useSelector((state)=>state.product.currentId)
console.log(id)
  const [movie, setMovie] = useState({});

  
  useEffect(()=>{
    window.scrollTo(0,0)
    const getProduct=async()=>{
      try {
        const res= await axios.get(`https://movie-task.vercel.app/api/movie?movieId=${id}`)
       setMovie(res.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    getProduct()
  },[id])


const {title,backdrop_path,overview,release_date,vote_average,vote_count,popularity}=movie




  const backGroundStyle = {
    background: ` linear-gradient(rgba(72, 64, 64, 0.5), rgba(84, 76, 76, 0.5)) , url(https://image.tmdb.org/t/p/original${backdrop_path})`,
    
  };




  return (
    <div className="product-main-container" style={backGroundStyle}>
      <div className="movie-detail-container">
        <div className="image-container">
          <img
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            alt=""
          />
        </div>
        <div className="detail-container">
          <div className="movie-title">
            <h1>{title}</h1>
            <span>{release_date}</span>
          </div>
          <div className="movie-description">
            <p>
              {overview}
            </p>
          </div>
          <div className="movie-rating">
         
            <div className="overall-rating">
                <StarIcon className="rating-star" fontSize="large"/>
                <div>
                    <h1>{vote_average?.toFixed(1)}/10</h1>
                    <span>{vote_count}</span>
                </div>
                </div>
            <div className="your-rating">
                <h1>Your Rating</h1>
                <div className="centering">

                <StarBorderIcon fontSize="large"  />
                <span>Rate</span>
                </div>
            </div>
            <div className="popularity">
              <h1>Popularity</h1>
              <div className="centering">
                  <TrendingUpIcon fontSize="large"/>
                  <span>{Math.ceil(popularity)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
}

export default Product;
