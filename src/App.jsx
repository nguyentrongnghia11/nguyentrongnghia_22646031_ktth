import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';

import banner from '/img/banner_iuh2.jpg';
import Navigation from './components/Navigation';
// import Navigation from './components/Navigation';
// import Hero from './components/Hero';


function App() {
  return (
    <div>
      <Header />
      <Navigation></Navigation>

      <div>
        <img 
          src={banner}
          alt="Banner" 
          style={{ width: '100%', height: '200px' }} 
        />
      </div>
      
      {/* <Navigation />
      <Hero /> */}
      {/* <Container>
        <Row className="mt-3">
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={6}>
            <MainContent />
          </Col>
          <Col md={3}>
            <RightSidebar />
          </Col>
        </Row>
      </Container> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;