import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Components/Context/AuthProvider";
import AddCourse from "./Components/DashBoard/AddCourse/AddCourse";
import Admin from "./Components/DashBoard/Admin/Admin";
import AllCourses from "./Components/DashBoard/AllCourses/AllCourses";
import Dashboard from "./Components/DashBoard/Dashboard/Dashboard";
import DashboardHome from "./Components/DashBoard/DashboardHome/DashboardHome";
import ManageOrder from "./Components/DashBoard/ManageOrder/ManageOrder";
import PaymentDash from "./Components/DashBoard/PaymentDash/PaymentDash";
import Review from "./Components/DashBoard/Review/Review";
import UserOrders from "./Components/DashBoard/UserOrder/UserOrders";
import BLogDetails from "./Components/HomePage/BLogDetails/BLogDetails";
import ExploreBlogs from "./Components/HomePage/ExploreBlogs/ExploreBlogs";
import Home from "./Components/HomePage/Home/Home";
import NotFound from "./Components/HomePage/NotFound/NotFound";
import PrivateRoute from "./Components/Private/PrivateRoute";
import Login from "./Components/Registation/Login";
import SignUp from "./Components/Registation/SignUp";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/home" element={<Home />}></Route>

            <Route
              path="/explore-blogs"
              element={
                <PrivateRoute>
                  <ExploreBlogs />
                </PrivateRoute>
              }
            />
            <Route
              path="/blogs/:id"
              element={
                <PrivateRoute>
                  <BLogDetails />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route
                path="/dashboard/home"
                element={
                  <PrivateRoute>
                    <DashboardHome />
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path="/dashboard/admin"
                element={
                  <PrivateRoute>
                    <Admin />
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path="/dashboard/manageOrders"
                element={
                  <PrivateRoute>
                    <ManageOrder />
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path="/dashboard/courses"
                element={
                  <PrivateRoute>
                    <AllCourses />
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path="/dashboard/userOrders"
                element={
                  <PrivateRoute>
                    <UserOrders />
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path="/dashboard/addCourse"
                element={
                  <PrivateRoute>
                    <AddCourse />
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path="/dashboard/review"
                element={
                  <PrivateRoute>
                    <Review />
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path="/dashboard/payment"
                element={
                  <PrivateRoute>
                    <PaymentDash />
                  </PrivateRoute>
                }
              ></Route>
            </Route>

            <Route path="/signUp" element={<SignUp />} />
            <Route path="/logIn" element={<Login />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
