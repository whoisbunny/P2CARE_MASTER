import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import MainLayout from "./components/MainLayout";
import Dashbord from "./pages/Dashbord";
import DoctorList from "./pages/doctor/DoctorList";
import AddDoctor from "./pages/doctor/AddDoctor";
import SearchDoctor from "./pages/doctor/SearchDoctor";
import DoctorCategory from "./pages/doctor/DoctorCategory";
import BookDoctor from "./pages/doctor/BookDoctor";
import ReviewDoctor from "./pages/ReviewDoctor";
import BlogList from "./pages/BlogList";
import BlogCategory from "./pages/BlogCategory";
import AddBlog from "./pages/AddBlog";
import BlogCatList from "./pages/BlogCatList";
import AddBlogCategory from "./pages/BlogCategory";
import Testimonial from "./pages/testimonial";
import HospitalList from "./pages/hospital/HospitalList";
import Faq from "./pages/hospital/Faq";
import HospitalBlog from "./pages/hospital/HospitalBlog";
import HospitalReview from "./pages/hospital/HospitalReview";
import AssignDoctor from "./pages/hospital/AssignDoctor";
import PatientList from "./pages/patient/PatientList";
import AddPatient from "./pages/patient/AddPatient";
import { Toaster } from "react-hot-toast";
import AddDoctorCategory from "./pages/doctor/AddDoctorCategory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/reset-password" element={<Resetpassword />} /> */}
          {/* <Route path="/forgot-password" element={<Forgotpassword />} /> */}
          <Route path="/admin" element={<MainLayout />}>
            <Route index element={<Dashbord />} />
            <Route path="all-patients" element={<PatientList />} />
            <Route path="patient" element={<AddPatient />} />
            <Route path="patient/:id" element={<AddPatient />} />
            <Route path="add-doctor" element={<AddDoctor />} />
            <Route path="all-doctors" element={<DoctorList />} />
            <Route path="search-doctor" element={<SearchDoctor />} />
            <Route path="doctor-category-list" element={<DoctorCategory />} />
            <Route path="doctor-category" element={<AddDoctorCategory />} />
            <Route path="doctor-category/:id" element={<AddDoctorCategory />} />
            <Route path="doctor-booking" element={<BookDoctor />} />
            <Route path="all-doctor-review" element={<ReviewDoctor />} />

            <Route path="all-blog" element={<BlogList />} />
            <Route path="blog-cat" element={<AddBlogCategory />} />
            <Route path="blog-cat/:id" element={<AddBlogCategory />} />
            <Route path="add-blog" element={<AddBlog />} />
            <Route path="add-blog/:id" element={<AddBlog />} />
            <Route path="testimonial" element={<Testimonial />} />
            <Route path="all-hospital" element={<HospitalList />} />
            <Route path="faq" element={<Faq />} />
            <Route path="blog-hospital" element={<HospitalBlog />} />
            <Route path="hospital/all-review" element={<HospitalReview />} />
            <Route path="assign-doctor" element={<AssignDoctor />} />

            {/* <Route path="blog-category-list" element={<BlogCatList />} /> */}
          </Route>
        </Routes>
          <Toaster/>
      </BrowserRouter>
    </>
  );
}

export default App;
