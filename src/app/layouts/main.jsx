import Container from "@mui/material/Container";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import BooksList from "../components/booksList";
import { loadBooks } from "../store/library";

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBooks());
    window.addEventListener("storage", () => {
      dispatch(loadBooks());
    });
  }, []);
  return (
    <>
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
        <BooksList />
      </Container>
    </>
  );
};

export default Main;
