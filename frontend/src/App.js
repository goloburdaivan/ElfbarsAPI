import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import IndexComponent from "./Components/IndexComponent";
import EditElfbarComponent from "./Components/EditElfbarComponent";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexComponent />}>
          </Route>
          <Route path="/edit-elfbar/:id" element={<EditElfbarComponent />}>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
