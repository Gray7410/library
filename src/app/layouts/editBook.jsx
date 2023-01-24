import Container from "@mui/material/Container";
import { TextField, Button, FormControl } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getBookById, updateBook } from "../store/library";
import { useState } from "react";
import { useParams } from "react-router-dom";

const EditBook = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { bookId } = params;
  const currentBook = useSelector(getBookById(bookId));
  const [file, setFile] = useState(currentBook.img);
  const [data, setData] = useState({
    title: currentBook.title,
    author: currentBook.author,
  });
  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleUpload = (e) => {
    let image = e.target.files[0];
    console.log(image);
    if (image) {
      let reader = new FileReader();
      reader.onloadend = () => {
        console.log(reader.result);
        setFile(reader.result);
      };
      reader.readAsDataURL(image);
    }
  };

  const handleSubmit = () => {
    dispatch(updateBook({ ...currentBook, ...data }));
  };

  return (
    <>
      <Container maxWidth="sm">
        <FormControl
          sx={{
            mt: 2,
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "15px",
          }}
        >
          <TextField
            id="standard-basic"
            name="author"
            label="Автор"
            value={data.author}
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            name="title"
            label="Название"
            value={data.title}
            variant="standard"
            onChange={handleChange}
          />
          <Button variant="contained" component="label">
            Изменить обложку
            <input
              hidden
              accept=".jpg,.jpeg,.png"
              onChange={handleUpload}
              type="file"
            />
          </Button>
          <Button sx={{ mt: 2 }} variant="contained" onClick={handleSubmit}>
            Сохранить
          </Button>
        </FormControl>
      </Container>
    </>
  );
};

export default EditBook;
