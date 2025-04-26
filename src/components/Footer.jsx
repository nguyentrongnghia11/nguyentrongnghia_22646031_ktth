import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-4">
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; 2025 Đại học Công nghiệp TP. Hồ Chí Minh. All rights reserved.</p>
            {/* Thêm thông tin liên hệ, mạng xã hội,... nếu cần */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;