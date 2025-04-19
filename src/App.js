import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddMinumanForm from './components/AddMinumanForm';
import MinumanList from './components/MinumanList';
import { MinumanProvider } from './context/MinumanContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <MinumanProvider>
      <Router>
        <div className="container mt-5">
          <h1 className="text-center mb-4">Daftar Minuman Sehat</h1>
          <Routes>
            <Route path="/" element={<MinumanList />} />
            <Route path="/tambah" element={<AddMinumanForm />} />
          </Routes>
          <ToastContainer position="top-right" autoClose={3000} />
        </div>
      </Router>
    </MinumanProvider>
  );
}

export default App;
