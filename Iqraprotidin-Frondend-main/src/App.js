import "./App.css";
import "animate.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./Iqra_Protidin/Pages/Home/Home";
import Navbar from "./Iqra_Protidin/Pages/Shared/Navbar/Navbar";
import Footer from "./Iqra_Protidin/Pages/Shared/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import EPaperContainer from "./Iqra_Protidin/Pages/EPaper/EPaperContainer/EPaperContainer";
import NotFound from "./Iqra_Protidin/Pages/NotFound/NotFound";
import Dashboard from "./Iqra_Protidin/Pages/Dashboard/Dashboard";
import National from "./Iqra_Protidin/Pages/Category/National/National";
import Politics from "./Iqra_Protidin/Pages/Category/Politics/Politics";
import Accident from "./Iqra_Protidin/Pages/Category/Accident/Accident";
import Entertainment from "./Iqra_Protidin/Pages/Category/Entertainment/Entertainment";
import Education from "./Iqra_Protidin/Pages/Category/Education/Education";
import HealthAndMedical from "./Iqra_Protidin/Pages/Category/HealthAndMedical/HealthAndMedical";
import IslamicLife from "./Iqra_Protidin/Pages/Category/IslamicLife/IslamicLife";
import AllOverCountry from "./Iqra_Protidin/Pages/Category/AllOverCountry/AllOverCountry";
import Sports from "./Iqra_Protidin/Pages/Category/Sports/Sports";
import Others from "./Iqra_Protidin/Pages/Category/Others/Others";
import Agriculture from "./Iqra_Protidin/Pages/Category/Agriculture/Agriculture";
import NewsDetails from "./Iqra_Protidin/Pages/NewsDetails/NewsDetails";
import AllNewsMain from "./Iqra_Protidin/Pages/HomeContainer/AllNewsMain/AllNewsMain";
import AllVideos from "./Iqra_Protidin/Pages/HomeContainer/AllVideos/AllVideos";
import AdminLogin from "./Iqra_Protidin/AdminLogin/AdminLogin";
import AuthContext from "./Iqra_Protidin/Context/AuthContext";
import AdminRoute from "./Iqra_Protidin/AdminRoutes/AdminRoute";
import DashboardRoute from "./Iqra_Protidin/DashboardRoute/DashboardRoute";
import Preloader from "./Iqra_Protidin/Preloader/Preloader";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

function App() {
  let location = window.location.pathname;

  const [preloader, setPreloader] = useState([]);

  useEffect(() => {
    fetch("https://server.eiqraprotidin.com/allnews")
      .then((res) => res.json())
      .then((data) => setPreloader(data));
  }, []);

  const [loading, setLoading] = useState(false);

  // Set Preloader Timing
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <AuthContext className="App" sx={{ overflowX: "hidden" }}>
      <Helmet>
        <title>ইকরা প্রতিদিন</title>
        <meta
          property="og:image"
          content="https://i.ibb.co/6s8Dc1N/300375281-501355718661040-8852605997729506088-n-1.jpg"
        />
        <meta
          name="description"
          content="সত্য প্রকাশে আপোষহীন, দৈনিক ইকরা প্রতিদিন"
        />
      </Helmet>
      {preloader.length === 0 && loading ? (
        <Preloader />
      ) : (
        <Router>
          <Box
            sx={
              (location === "/e-paper" && { display: "none" }) ||
              (location === "/admin" && { display: "none" }) ||
              (location === "/admin/dashboardHome" && { display: "none" }) ||
              (location === "/admin/addNews" && { display: "none" }) ||
              (location === "/admin/addVideo" && { display: "none" }) ||
              (location === "/admin/ePaper" && { display: "none" }) ||
              (location === "/admin/manageEPaper" && { display: "none" }) ||
              (location === "/admin/news" && { display: "none" }) ||
              (location === "/admin/drafts" && { display: "none" }) ||
              (location === "/adminLogin" && { display: "none" }) ||
              (location === "/admin/categories" && { display: "none" }) ||
              (location === "/admin/locations" && { display: "none" }) ||
              (location === "/admin/panelUsers" && { display: "none" }) ||
              (location === "/admin/ads" && { display: "none" }) ||
              (location === "/admin/settings" && { display: "none" })
            }
          >
            <Navbar />
          </Box>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/allNewsMain" element={<AllNewsMain />} />
            <Route path="/allVideos" element={<AllVideos />} />
            <Route path="category/national" element={<National />} />
            <Route path="category/politics" element={<Politics />} />
            <Route path="category/accident" element={<Accident />} />
            <Route path="category/entertainment" element={<Entertainment />} />
            <Route path="category/education" element={<Education />} />
            <Route
              path="category/healthAndMedical"
              element={<HealthAndMedical />}
            />
            <Route path="category/islamicLife" element={<IslamicLife />} />
            <Route path="category/agriculture" element={<Agriculture />} />
            <Route
              path="category/allOverCountry"
              element={<AllOverCountry />}
            />
            <Route path="category/sports" element={<Sports />} />
            <Route path="category/others" element={<Others />} />

            <Route
              path="adminLogin"
              element={
                <DashboardRoute>
                  <AdminLogin />
                </DashboardRoute>
              }
            />

            <Route path="news/:uniqueID" element={<NewsDetails />} />
            <Route path="/e-paper" element={<EPaperContainer />} />
            <Route
              path="admin/*"
              element={
                <AdminRoute>
                  <Dashboard />
                </AdminRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Box
            sx={
              (location === "/admin" && { display: "none" }) ||
              (location === "/admin/dashboardHome" && { display: "none" }) ||
              (location === "/admin/addNews" && { display: "none" }) ||
              (location === "/admin/addVideo" && { display: "none" }) ||
              (location === "/admin/ePaper" && { display: "none" }) ||
              (location === "/admin/manageEPaper" && { display: "none" }) ||
              (location === "/admin/news" && { display: "none" }) ||
              (location === "/admin/drafts" && { display: "none" }) ||
              (location === "/admin/categories" && { display: "none" }) ||
              (location === "/adminLogin" && { display: "none" }) ||
              (location === "/admin/locations" && { display: "none" }) ||
              (location === "/admin/panelUsers" && { display: "none" }) ||
              (location === "/admin/ads" && { display: "none" }) ||
              (location === "/admin/settings" && { display: "none" })
            }
          >
            <Footer />
          </Box>
        </Router>
      )}
    </AuthContext>
  );
}

export default App;
