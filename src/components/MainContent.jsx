import React from 'react';
import { Tabs, Tab, ListGroup } from 'react-bootstrap';

function MainContent() {
  const thongBao = [
    "Thông báo về kế hoạch nghỉ lễ 30/4 và 01/5 năm 2025",
    "(Thông báo) Tuyển sinh liên thông từ trình độ cao đẳng, trung cấp hệ chính quy năm 2023",
    "(Thông báo) Tuyển sinh đại học chính quy đợt 1 năm 2023",
    "(Thông báo) Về việc nộp học phí học kỳ 1 năm học 2023-2024",
  ];

  const tinTucSuKien = [
    "IUHers rộn ràng tham gia 'Ngày hội việc làm và kết nối doanh nghiệp năm 2023'",
    "Sinh viên Khoa Công nghệ Thông tin 'cháy' hết mình tại đêm Gala 'IT's US 2023'",
    "Hội nghị khoa học quốc tế lần thứ 12 tại IUH: 'Sustainable Manufacturing and Circular Economy'",
    "Đội tuyển IUH xuất sắc giành giải Nhất cuộc thi 'Green Venture Startup 2023' của Seedstars Vietnam",
  ];

  return (
    <Tabs defaultActiveKey="thongbao" id="main-content-tabs" className="mb-3">
      <Tab eventKey="thongbao" title={<strong style={{ fontSize: '1.1em' }}>THÔNG BÁO</strong>}>
        <ListGroup variant="flush">
          {thongBao.map((item, index) => (
            <ListGroup.Item key={index} action href="#">
              {item}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Tab>
      <Tab eventKey="tintuc" title={<strong style={{ fontSize: '1.1em' }}>TIN TỨC - SỰ KIỆN</strong>}>
        <ListGroup variant="flush">
          {tinTucSuKien.map((item, index) => (
            <ListGroup.Item key={index} action href="#">
              {item}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Tab>
    </Tabs>
  );
}

export default MainContent;