import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState,useEffect } from "react";
import {useDispatch} from "react-redux";
import './filter.scss'
import { setFilterProduct,setFilterRating } from "../../redux/productRedux";

export default function SelectSmall() {
  const [date, setDate] = useState("");
  const [rating, setRating] = useState("");
  const handleDate = (event) => {
    setDate(event.target.value);
  };
  const handleRating = (e) => {
    setRating(e.target.value);
  };
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setFilterProduct({date}))
  
   
  }, [dispatch,date])
  useEffect(() => {
    dispatch(setFilterRating({rating}))
  },[dispatch,rating])
  
  
  return (
    <div className="filter-container">
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small" style={{borderColor:"white",color:'white'}}>
        <InputLabel id="demo-select-small">Date</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={date}
          label="date"
          onChange={handleDate}
          name="date"
          style={{backgroundColor:"white"}}
        >
          <MenuItem value="none">relavance</MenuItem>
          <MenuItem value={"asc"}>new-old</MenuItem>
          <MenuItem value={"dec"}>old-new</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Rating</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={rating}
          label="date"
          onChange={handleRating}
          name="rating"
          style={{backgroundColor:"white"}}
        >
          <MenuItem value={"none"}>relavance</MenuItem>
          <MenuItem value={"dec"}>high-low</MenuItem>
          <MenuItem value={"asc"}>low-high</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
