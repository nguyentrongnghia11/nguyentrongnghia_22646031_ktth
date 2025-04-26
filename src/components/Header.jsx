import React from 'react';
import { Container, Nav, Row, Col, Image } from 'react-bootstrap';
import logo from '/img/logo.png'; // Đảm bảo đường dẫn logo chính xác
import './Header.css'; // Import file CSS tùy chỉnh cho Header

function Header() {
  return (
    <div className="header-wrapper">
      {/* Top Bar */}
      <div className="top-bar">
        <Container>
          <Nav className="justify-content-end">
            <Nav.Item>
              <Nav.Link href="#eoffice"><i className="bi bi-envelope me-1"></i> E-OFFICE</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#email"><i className="bi bi-envelope me-1"></i> EMAIL</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#thuvien"><i className="bi bi-book me-1"></i> THƯ VIỆN - THÔNG TIN</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#ketnoi">KẾT NỐI LIÊN KẾ</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#vn">🇻🇳</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#en">🇬🇧</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <Container>
          <Row className="align-items-center">
            <Col md="auto">
              <Image
                src={logo}
                alt="Logo IUH"
                height="60" // Điều chỉnh kích thước logo
                className="d-inline-block align-middle"
              />
            </Col>
            <Col>
              <h1 className="mb-0">
                <strong>BỘ CÔNG THƯƠNG</strong>
                <br />
                <strong>ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</strong>
              </h1>
              <p className="lead mb-0">Đổi mới tư duy, làm chủ tương lai - đến với thực tế, định hướng</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Header;