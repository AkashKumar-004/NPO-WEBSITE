import Navbar from "./Navbar/Usernav";
import About from "./Components/About"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Login/Login";
import Signup from "./Login/Signup";
import Contact from "./Components/Contact";
import Dashboard from "./Navbar/Adminnav";
import Education from "./Services/Eduction";
import Food from "./Services/Food";
import Shelter from "./Services/Shelter";
import Services from "./Components/Services";
import EducationDetails from "./Adminpages/Educationdetails";
import EducationForm from "./Forms/Educationform";
import FoodForm from "./Forms/Foodform";
import ShelterForm from "./Forms/Shelterform";
import FoodDetails from "./Adminpages/Fooddetails";
import Querydetails from "./Adminpages/querydetails";
import ShelterDetails from "./Adminpages/Shelterdetails";
import UserList from "./Adminpages/Userdetail";
import Donation from "./Components/Donation";
export default function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/dash" element={<Dashboard/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/Food" element={<Food/>}/>
          <Route path="/Shelter" element={<Shelter/>}/>
          <Route path="/Services" element={<Services/>}/>
          <Route path="/donation" element={<Donation/>}/>
          {/* form */}
          <Route path="/education/add" element={<EducationForm/>} />
          <Route path="/education/edit/:id" element={<EducationForm/>} />
          <Route path="/food/add" element={<FoodForm/>} />
          <Route path="/food/edit/:id" element={<FoodForm/>} />
          <Route path="/shelter/add" element={<ShelterForm/>} />
          <Route path="/shelter/edit/:id" element={<ShelterForm/>} />
          {/* admin */}
          <Route path="/educationdetail" element={<EducationDetails/>} />
          <Route path="/Fooddetail" element={<FoodDetails/>}/>
          <Route path="/querydetail" element={<Querydetails/>}/>
          <Route path="/shelterdetail" element={<ShelterDetails/>}/>
          <Route path="/userlist" element={<UserList/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}