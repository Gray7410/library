import NavBar from "./app/components/ui/navBar";
import "./App.css";
import AddBook from "./app/layouts/addBook";
import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
} from "react-router-dom";
import BooksList from "./app/layouts/booksList";
import EditBook from "./app/layouts/editBook";
import history from "./app/utils/history";
import BooksOutlet from "./app/layouts/booksOutlet";

function App() {
  return (
    <>
      <HistoryRouter history={history}>
        <NavBar />
        <Routes>
          <Route path="books" element={<BooksOutlet />}>
            <Route path="add" element={<AddBook />} />
            <Route path=":bookId" element={<EditBook />} />
          </Route>
          <Route exact index element={<BooksList />} />
        </Routes>
      </HistoryRouter>
    </>
  );
}

export default App;
