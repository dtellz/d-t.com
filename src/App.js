import React from "react";
import Landing from './pages/landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Landing />}></Route>
        <Route path='*' element={<Landing />}></Route>

      </Routes>
    </Router>
  );
}

export default App;
