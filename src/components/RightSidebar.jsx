import React from 'react';
import { Tabs, Tab, ListGroup, Button } from 'react-bootstrap';
import './RightSidebar.css'; // Import CSS cho RightSidebar

function RightSidebar() {
  const tuyenSinh = [
    { id: 1, title: "Thông báo tuyển sinh đào tạo...", date: "28-03-2025" },
    { id: 2, title: "Thông báo v/v tuyển sinh...", date: "20-03-2025" },
    // Thêm thông tin tuyển sinh
  ];

  const hopTacQuocTe = [
    { id: 3, title: "Nổi bật hoạt động...", date: "24-03-2025" },
    { id: 4, title: "Đại học Công nghiệp...", date: "19-03-2025" },
    // Thêm thông tin hợp tác quốc tế
  ];

  return (
    <Tabs defaultActiveKey="tuyensinh" id="right-sidebar-tabs" className="mb-3">
      <Tab eventKey="tuyensinh" title={<strong style={{ fontSize: '1.1em' }}>TUYỂN SINH</strong>}>
        <ListGroup variant="flush">
          {tuyenSinh.map(item => (
            <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <a href="#" className="text-decoration-none text-dark">{item.title}</a> <span className="text-muted small">{item.date}</span>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <div className="text-end mt-2">
          <Button variant="outline-secondary" size="sm">Xem tất cả <i className="bi bi-arrow-right"></i></Button>
        </div>
      </Tab>
      <Tab eventKey="hoptacquocte" title={<strong style={{ fontSize: '1.1em' }}>HỢP TÁC QUỐC TẾ</strong>}>
        <ListGroup variant="flush">
          {hopTacQuocTe.map(item => (
            <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <a href="#" className="text-decoration-none text-dark">{item.title}</a> <span className="text-muted small">{item.date}</span>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <div className="text-end mt-2">
          <Button variant="outline-secondary" size="sm">Xem tất cả <i className="bi bi-arrow-right"></i></Button>
        </div>
      </Tab>
    </Tabs>
  );
}

export default RightSidebar;