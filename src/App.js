// // import logo from './logo.svg';
// import './App.css';
// import HomePage from './components/HomePage.jsx';
// import BooksListing from './pages/BooksListing';
// import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
// import PageNotFound from './components/PageNotFound';
// import globalStyles from './styles/globalStyles';
// import Form from './components/Form';
// import { ThemeProvider } from '@emotion/react';
// import { createTheme } from '@mui/material';
// import Login from './pages/Login';
// import { ToastContainer } from 'react-toastify';
// import { createContext } from 'react';
// import AuthWrapper from './context/authContext';
// import Header from './components/Header';
// export const UserData = createContext();

// function App() {

//   const theme = createTheme({

//     components: {
//       MuiButton: {
//         styleOverrides: {
//           root: {
//             backgroundColor: 'green'
//           },
//         },
//       },
//     },
//   });


//   return (

//     <div>
//       <ThemeProvider theme={theme} sx={{ color: 'red' }}>


//         <BrowserRouter>
//           <AuthWrapper>
//             {/* <div>
//            <img src={logo} alt='logo'></img>
//        </div> */}
//             <div
//               // className='navbar'

//               style={globalStyles.navbar}
//             // style={{
//             //   padding: 10,
//             //   dispaly: "flex",
//             //   justifyContent: "space-between",
//             //   border: 'red',
//             //   background: 'red',
//             //   width: 120,

//             // }}
//             >
//               {/* <NavLink to="/">Home</NavLink>
//               <NavLink to="/BookList">Books</NavLink>
//               <NavLink to="/form">Form</NavLink> */}
//               <Header/>
//             </div>
//             <Routes>


//               <Route path='/' element={<Login />}></Route>
//               <Route path='/home' element={<HomePage username={'harsg'} />}></Route>
//               <Route path='/form' element={<Form />}></Route>
//               <Route path='*' element={<PageNotFound />}></Route>
//             </Routes>
//           </AuthWrapper>
//         </BrowserRouter>

//         <ToastContainer />
//       </ThemeProvider>



//     </div>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Name from "./components/Name";
import Price from "./components/Price";
import Form from "./components/Form";
import { ToastContainer } from "react-toastify";
import Register from "./components/Form"
import Header from "./components/Header";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import BooksListing from"./pages/BooksListing";
import AuthWrapper from "./context/authContext";


function App() {
  const bookName = "Rich Dad Poor Dad";
  const bookPrice = 175;
  return (
    <div id="main">
      <Router>
        <AuthWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Form />} />
          <Route path="/" element={<HomePage />} />
          <Route path='/bookList' element={<BooksListing />}></Route>

          <Route path="/book-name" element={<Name name={bookName} />} />
          <Route path="/book-price" element={<Price price={bookPrice} />} />
          {/* <Route path="/form" element={<Form />} /> */}
         
        </Routes>
        <Footer />
        <ToastContainer />
        </AuthWrapper>
      </Router>
    </div>
  );
}

export default App;
