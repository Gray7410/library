import Container from "@mui/material/Container";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { loadBooks } from "../store/library";

const BooksOutlet = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBooks());
  }, []);
  return (
    <>
      <Container
        maxWidth="sm"
      >
        <Outlet/>
      </Container>
    </>
  );
};

export default BooksOutlet;
