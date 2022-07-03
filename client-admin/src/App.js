import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import LoginAdmin from './views/LoginAdmin.js';
import Dashboard from './views/Dashboard';
import Details from './views/Detail';
import AddForm from './views/AddForm';
import Register from './views/Register';
import Shownavbar from './views/Shownavbar';
import Editform from './views/Editform';
import  RequireAuth  from "./components/requireAuth";
import Require from './components/require';
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <>
    <div className="App">
      <Routes>

        <Route path="/login" element={
        <Require>
        <LoginAdmin />
        </Require>} 
        />

        <Route path="/" element={<Shownavbar/>}>

        <Route path="" element={
        <RequireAuth>
        <Dashboard />
        </RequireAuth>
        }/>

        <Route path="add-movie" element={
        <RequireAuth>
        <AddForm />
        </RequireAuth>
        } />

        <Route path="detail/:slug" element={
        <RequireAuth>
        <Details />
        </RequireAuth>
        } />

        <Route path="register" element={<RequireAuth> <Register/> </RequireAuth>}/>

        <Route path='edit-movie/:id' element={<RequireAuth> <Editform/> </RequireAuth>}/>
        </Route>
      </Routes>
    </div>
    </>
  );
}

export default App;