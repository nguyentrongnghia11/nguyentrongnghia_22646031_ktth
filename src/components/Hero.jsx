import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
// import heroImage from ''; // Đảm bảo ảnh banner có trong thư mục public
// import qrCode from '/qrcode.png'; // Đảm bảo mã QR có trong thư mục public

function Hero() {
  return (
    <Container fluid className="bg-light py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={8}>
            <h1><strong style={{ fontSize: '2.5em' }}>TRẢI NGHIỆM KHÔNG GIAN THỰC TẾ ẢO</strong></h1>
            <h2><strong style={{ fontSize: '2em' }}>ĐẠI HỌC CÔNG NGHIỆP THÀNH PHỐ HỒ CHÍ MINH</strong></h2>
            <p className="lead">Đổi mới tư duy, làm chủ tương lai: đến với thực tế ảo!</p>
            <a href="https://vr.iuh.edu.vn" target="_blank" rel="noopener noreferrer">
              <strong style={{ color: 'red' }}>https://vr.iuh.edu.vn</strong>
            </a>
          </Col>
          <Col md={4} className="text-center">
            <Image src={qrCode} alt="Mã QR" fluid style={{ maxWidth: '150px' }} />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Image src={heroImage} alt="Hình ảnh IUH" fluid />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Hero;