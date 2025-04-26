import React from 'react';
import { Nav } from 'react-bootstrap';

function Sidebar() {
  return (
    <div className="bg-light p-3">
      <h5>CƠ CẤU TỔ CHỨC</h5>
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link href="#lanhdao">Lãnh đạo</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#cacphongban">Các phòng ban</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#cackhoa">Các khoa</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#cacvien">Các viện</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#cactrungtam">Các trung tâm</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#cacphanlieu">Các phân hiệu</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#doanthe">Đoàn thể</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Sidebar;