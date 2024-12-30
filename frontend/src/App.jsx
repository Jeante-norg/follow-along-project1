import LoginPage from './components/auth/Login';
import SignupForm from './components/auth/Signup';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      {/* <LoginPage /> */}
      {/* <SignupForm /> */}
      <Routes>
        <Route path="/" />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
