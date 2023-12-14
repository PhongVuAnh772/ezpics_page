import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import React, { useEffect } from "react";
import HomePage from "./components/home/HomePage";
import Login from "./components/auth/login/Login";
import Dashboard from "./components/home/Dashboard/Dashboard";
import ForYouPage from "./components/home/ForYou/ForYouPage";
import SignUp from "./components/auth/signup/SignUp";
import Download from "./components/home/download/DownloadIOS";
import { useSelector } from "react-redux";
import Category from "./components/home/category/Category";
import RemoveBackground from "./components/home/remove/RemoveBackground";
import RequireAuth from "./components/auth/RequireAuth";
import InformationPersonal from "./components/information/InformationPersonal";
import PageSatisfied from "./components/page-satisfied/PageSatisfied";
import Contact from "./components/contact/Contact";
import Project from "./components/project/Project";
import Recommended from "./components/project/components/Recommended";
function App() {
  const authentication = useSelector((state) => state.auth.authentication);
  const navigate = useNavigate();

  return (
    <Routes>
            <Route path="/download" element={<Download />} />

      <Route exact path="/" element={<HomePage />}>
        <Route path="/ordered" element={<Contact />} />

        <Route path="/category/:id" element={<Category />} />
        <Route path="/remove" element={<RemoveBackground />} />
        <Route
          path="/information"
          element={
            <RequireAuth>
              <InformationPersonal />
            </RequireAuth>
          }
        />

        <Route path="/page-satisfied" element={<PageSatisfied />} />

        <Route path="/project" element={<Project />}>
          <Route exact index path="recommend" element={<Recommended />} />
          <Route path="youtube" element={<Recommended />} />
          <Route path="cooking" element={<Recommended />} />
          <Route path="logo" element={<Recommended />} />
          <Route path="congrat" element={<Recommended />} />

          <Route path="banner" element={<Recommended />} />
          <Route path="more" element={<Recommended />} />
        </Route>

        <Route path="/" element={<Dashboard />}>
          <Route exact path="/" element={<ForYouPage />} />
          <Route exact path="/for-you" element={<ForYouPage />} />
        </Route>
        <Route
          path="/user-information"
          element={
            <RequireAuth>
              <ForYouPage />
            </RequireAuth>
          }
        />
        <Route
          path="/user-information"
          element={
            <RequireAuth>
              <ForYouPage />
            </RequireAuth>
          }
        />
        <Route
          path="/user-information/:id"
          element={
            <RequireAuth>
              <ForYouPage />
            </RequireAuth>
          }
        />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default App;
