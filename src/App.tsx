import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <h1>This is the home page</h1>
      <Link to='/login'>Login</Link>
    </div>
  );
}

export default App;
