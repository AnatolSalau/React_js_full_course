import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';

function App() {
      return (
            <BrowserRouter>
                  <div className="App">
                        <Routes>
                              <Route
                                    path="/"
                                    element={
                                    <h1>
                                          Home page
                                    </h1>
                              }>
                              </Route>
                        </Routes>
                  </div>
            </BrowserRouter>
      );
}

export default App;
