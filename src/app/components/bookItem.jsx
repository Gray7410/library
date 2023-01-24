import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getBooks } from '../store/library';

const BookItem = () => {
    const books = useSelector(getBooks())
  return (
    {books ? 
        <Card>
        <CardMedia
          sx={{ height: 205, width: 145 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Название
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Автор
          </Typography>
          <Link to={`${book._id}/edit`}>Редактировать</Link>
          <Link to={`${book._id}/edit`}>Удалить</Link>
        </CardContent>
      </Card>
      : "ывфв"}
    
  );
};

export default BookItem;
