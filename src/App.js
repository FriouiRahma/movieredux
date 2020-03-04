import React from 'react';
import './App.css';
import Movielist from './components/movielist';
import Searchmov from './components/searchmov';
import AddModal from  './components/AddModal';
import Rate   from './components/Rate';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Searchmov/>
      <Movielist/>
      <AddModal />
    </div>
  );
}

export default App;
