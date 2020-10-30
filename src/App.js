import React from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import NavBar from './components/NabBar';
import BookContextProvider from './contexts/BookContext';


function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
