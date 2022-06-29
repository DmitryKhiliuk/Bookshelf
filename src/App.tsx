import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

import {AddBook} from "./Components/AddBook/AddBook";
import {MainPage} from "./Components/MainPage/MainPage";
import {BookList} from "./Components/BookList/BookList";
import {EditBook} from "./Components/EditBook/EditBook";


function App() {

  return (
    <BrowserRouter>
        <div className="App">
            <MainPage/>
            <div>
                <Routes>
                    <Route path={'/'} element={<BookList />}/>
                    <Route path={'/add-book'} element={<AddBook/>}/>
                    <Route path={'/edit-book/:bookId'} element={<EditBook />}/>
                </Routes>
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
