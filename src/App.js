import { Container } from "react-bootstrap";
import { NavBar } from "./component/NavBar";
import { MovieList } from "./component/MovieList";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MovieDetails } from "./component/MovieDetails";
// import { useDispatch, useSelector } from 'react-redux'

function App() {

  return (
    <div className="font color-body">
      <NavBar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>

      </Container>
    </div>
  );
}

export default App;
