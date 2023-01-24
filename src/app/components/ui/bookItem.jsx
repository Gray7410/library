import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteBook, getBooks } from "../../store/library";
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from "@mui/system";
import DeleteIcon from '@mui/icons-material/Delete';

const BookItem = () => {
    const dispatch = useDispatch()
    const books = useSelector(getBooks())
  return (<>
    {books ? books.map((book)=>{
      return(
        <Card key={book._id}>
        <CardMedia
          sx={{ height: 205, width: 145, m: "0 auto", mt:2}}
          image={book.img}
          title={book.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {book.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {book.author}
          </Typography>
          <Box sx={{display:"flex", justifyContent:"space-between", mt:2}}>
          <Link to={`/books/${book._id}`}>
            <Fab size="small" color="primary" aria-label="edit">
                <EditIcon />
            </Fab>
          </Link>
        <Fab size="small" color="primary" aria-label="edit">
            <DeleteIcon onClick={()=>dispatch(deleteBook(book._id))} />
        </Fab>
        </Box>
        </CardContent>
      </Card>
     )})
      : <h1>Нет книг :(</h1>}
    </>
  );
  

};

export default BookItem;
