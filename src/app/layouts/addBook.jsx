import Container from "@mui/material/Container";
import { TextField, Button, FormControl } from "@mui/material";
import { useDispatch } from "react-redux";
import { createBook } from "../store/library";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const AddBook = () => {
  const dispatch = useDispatch();
  const idBook = uuid().slice(0, 8);
  const [file, setFile] = useState(null);
  const [data, setData] = useState({
    title: "",
    author: "",
  });
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

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = () => {
    dispatch(createBook({ _id: idBook, ...data, img: file }));
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
            Загрузить обложку
            <input
              hidden
              accept=".jpg,.jpeg,.png"
              onChange={handleUpload}
              type="file"
            />
          </Button>
          <Button sx={{ mt: 2 }} variant="contained" onClick={handleSubmit}>
            Добавить
          </Button>
        </FormControl>
      </Container>
    </>
  );
};

export default AddBook;
