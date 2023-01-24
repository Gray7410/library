import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import BookItem from "../components/ui/bookItem";
import { getBooks, loadBooks } from '../store/library';

const BooksList = () => {
    const books = useSelector(getBooks())
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadBooks());
    }, []);
  return (<>
  <Container
        maxWidth="md"
        sx={{
          mt: 2,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "20px",
          alignItems: "center",
        }}
      >
    {books ? <BookItem/> : <h1>Нет книг :(</h1>}
    </Container></>
  );
  

};

export default BooksList;
