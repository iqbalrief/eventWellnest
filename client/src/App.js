
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login"
import Company from "./pages/Company"
import Vendor from './pages/Vendor';
import Event from './pages/Event';
import FormAddEvent from './component/form/formEvent';
import Approve from './pages/Approve';
import FormApprove from './component/form/formApprove';
import List from './component/vendor/List';





function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Login />} path='/' />
      <Route element={<Company />} path='/company' />
      <Route element={<Vendor />} path='/vendor' />
      <Route element={<Event />} path='/event' />
      <Route element={<FormAddEvent />} path='/create-event' />
      <Route element={<Approve />} path='/approve' />
      <Route element={<FormApprove />} path='/create-approve' />
      <Route element={<List />} path='/vendor/:id' />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
