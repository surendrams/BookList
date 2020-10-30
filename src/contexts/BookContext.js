// import React, { createContext, useState } from 'react';
import React, { createContext, useReducer, useEffect } from 'react';
import { bookRedcuer } from '../reducers/bookReducer';
// import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext()

const BookContextProvider = (props) => {
    // const [books, setBooks] = useState([
    //     { title: 'Mahabharatam', author: 'Vyasa', id: 1 },
    //     { title: 'Ramayanam', author: 'Valmiki', id: 2 },
    // ])

    // const addBook = (title, author) => {
    //     setBooks([...books, { title, author, id: uuidv4()}])
    // }

    // const removeBook = (id) => {
    //     setBooks(books.filter( book => book.id !== id))
    // }

    const [books, dispatch] = useReducer(bookRedcuer, [], () => {
        const localData = localStorage.getItem('MyBooks');
        return localData ? JSON.parse(localData) : [];
    });
    
    useEffect(() => {
        localStorage.setItem('MyBooks', JSON.stringify(books))
    }, [books])

    return (  
        // <BookContext.Provider value={{ books, addBook, removeBook }}>
        <BookContext.Provider value={{ books, dispatch }}>
            { props.children }
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;
