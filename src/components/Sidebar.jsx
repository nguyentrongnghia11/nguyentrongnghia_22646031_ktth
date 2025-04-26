import React from 'react';
import { Nav } from 'react-bootstrap';
import './Sidebar.css'; // Import CSS cho Sidebar

function Sidebar() {
  return (
    <div className="bg-light p-3">
      <h5>CƠ CẤU TỔ CHỨC</h5>
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link href="#lanhdao"><i className="bi bi-chevron-right me-2"></i> Lãnh đạo</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#cacphongban"><i className="bi bi-chevron-right me-2"></i> Các phòng ban</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#cackhoa"><i className="bi bi-chevron-right me-2"></i> Các khoa</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#cacvien"><i className="bi bi-chevron-right me-2"></i> Các viện</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#cactrungtam"><i className="bi bi-chevron-right me-2"></i> Các trung tâm</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#cacphanlieu"><i className="bi bi-chevron-right me-2"></i> Các phân hiệu</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#doanthe"><i className="bi bi-chevron-right me-2"></i> Đoàn thể</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Sidebar;