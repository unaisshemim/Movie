import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import Stack from "@mui/material/Stack";
import {Link } from "react-router-dom";
import "./productList.scss";
import {useDispatch} from 'react-redux'
import { setCurrentId } from "../../redux/productRedux";

export default function   MediaCard({ value }) {
  
  const dispatch=useDispatch()

const handleClick=()=>{
  dispatch(setCurrentId(value.id))
}
 
  
  

    
   


    
   
  return (  
   <div className="card-container" >

    <Card sx={{ maxWidth: 345 }}  onClick={()=>{handleClick()}}>
     <Link to="/product/:id">
      <div  className="card-image">

      <CardMedia
        component="img"
        height="140"
        image={`https://image.tmdb.org/t/p/original${value.backdrop_path}`}
        alt="green iguana"
       
        />
        </div>
       
        </Link>
        <div className="card-description"> 

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {value.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Stack spacing={2} style={{display:"flex" ,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
            <span style={{fontSize:"20px",fontWeight:"700",marginTop:"14px"}} className="card-rating">{value.vote_average}</span>
            <StarIcon className="rating-star" fontSize="large" style={{color:"gold"}}/>
            <span className="card-rating card-date">{value.release_date}</span>
          </Stack>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
        </div>
    </Card>
    <div className="overlay"></div>
        </div>
      
  );
}
