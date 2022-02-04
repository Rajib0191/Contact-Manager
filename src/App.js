import { Routes, Route } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import { UserAuthContextProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import ContactForm from "./pages/ContactForm";
import Update from "./component/Update";
import Search from "./pages/Search";
import View from "./pages/View";


function App() {
  return (
    <div>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={
            <ProtectedRoute>
              <Contacts />
            </ProtectedRoute>
          } />
          <Route path="login" element={<LogIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="contact-form" element={
            <ProtectedRoute>
              <ContactForm />
            </ProtectedRoute>
          } />
          <Route path="update" element={
            <ProtectedRoute>
              <Update />
            </ProtectedRoute>
          } />
          <Route path="search" element={
            <ProtectedRoute>
              <Search />
            </ProtectedRoute>
          } />
          <Route path="view" element={
            <ProtectedRoute>
              <View />
            </ProtectedRoute>
          } />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
