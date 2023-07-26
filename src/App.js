
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from './DefaultLayout';
import Login from './pages/login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<DefaultLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
