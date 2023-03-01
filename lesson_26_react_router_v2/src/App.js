import {BrowserRouter, Routes, Route, HashRouter} from "react-router-dom";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import About from "./components/About";
import NotFound from "./components/NotFound";
import MainLayout from "./layouts/MainLayout";
import './App.css';
import Patients from "./components/Patients";
import Patient from "./components/Patient";

function App() {
      return (
            <HashRouter>
                  <div className="App">
                        <Routes>
                              <Route path="/" element={<MainLayout/>}>
                                    <Route index element={<Home/>}/>
                                    <Route path="about" element={<About/>}/>
                                    <Route path="contacts" element={<Contacts/>}/>
                                    <Route path="patients" element={<Patients/>}/>
                                    <Route path="patients/:slug" element={<Patient/>}/>
                                    <Route path="*" element={<NotFound/>}/>
                              </Route>
                        </Routes>
                  </div>
            </HashRouter>
      );
}

export default App;
