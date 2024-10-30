import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import './assets/css/animate.css';
// import './assets/css/flaticon.css';
// import './assets/css/font-awesome.css';
// import './assets/css/fontello.css';
// import './assets/css/main.css';
// import './assets/css/mdb.dark.min.css';
// import './assets/css/mdb.dark.min.css.map';
// import './assets/css/mdb.dark.rtl.min.css';
// import './assets/css/mdb.min.css';
// import './assets/css/mdb.min.css.map';
// import './assets/css/mdb.rtl.min.css';
// import './assets/css/megamenu.css';
// import './assets/css/prettyPhoto.css';
// import './assets/css/responsive.css';
// import './assets/css/shortcodes.css';
// import './assets/css/slick.css';
// import './assets/css/slider.css';
// import './assets/css/style.css';
// import './assets/css/themify-icons.css';
// import './assets/css/twentytwenty.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import '@fortawesome/fontawesome-free/css/all.min.css';

// import ConsultationType from './pages/ConsultationType';
// import VerifyPhone from './pages/VerifyPhone';
// import AddDetailsMedicare from './pages/AddDetailsMedicare';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/consultation-type" element={<ConsultationType />} /> */}
            {/* <Route path="/verify-phone" element={<VerifyPhone />} /> */}
            {/* <Route path="/add-details-medicare" element={<AddDetailsMedicare />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
