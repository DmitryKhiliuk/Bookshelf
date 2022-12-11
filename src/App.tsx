import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

import {AddBook} from "./Components/AddBook/AddBook";
import {MainPage} from "./Components/MainPage/MainPage";
import {BookList} from "./Components/BookList/BookList";
import {EditBook} from "./Components/EditBook/EditBook";
import backgroundImage from './assets/2423.jpg'


function App() {

    const background = {

        backgroundImage: `url(${backgroundImage} )`
    }

  return (
        <div className="App">
            <MainPage/>
            <div>
                <Routes>
                    <Route path={'/'} element={<BookList background={background}/>}/>
                    <Route path={'/add-book'} element={<AddBook background={background}/>}/>
                    <Route path={'/edit-book/:bookId'} element={<EditBook background={background}/>}/>
                </Routes>
            </div>
        </div>
  );
}

export default App;
