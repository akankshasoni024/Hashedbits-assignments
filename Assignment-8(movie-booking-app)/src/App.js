import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/MovieListPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import BookingFormPage from './pages/BookingFormPage';
import ConfirmationPage from './pages/ConfirmationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        <Route path="/book/:id" element={<BookingFormPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
