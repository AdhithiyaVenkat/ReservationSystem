import Header from "./Components/layout/header/header";
import Footer from "./Components/layout/footer/footer";
import Main from "./Components/layout/main/main";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Paper from '@mui/material/Paper'
import StepForm from "./Components/reservation-page/StepForm";
import UserDetails from "./Components/userDetails/userDetails";

export function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route index element={<Main />}></Route>
          <Route path="/users" element={<UserDetails />}></Route>
          <Route path="/createReservation" element={
            <Paper variant='outlined' sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <StepForm />
          </Paper>
          }/>
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
