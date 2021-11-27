import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import Home from '../routes/Home';
import Detail from '../routes/Detail';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" exact element={<Home />}></Route>
                <Route path="/:id" element={<Detail />}></Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
