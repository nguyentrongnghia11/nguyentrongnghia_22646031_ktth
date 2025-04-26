import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';
import { BiHome, BiSearch } from 'react-icons/bi';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#c8d2dc' }} className="shadow-sm">
      <Container fluid>
        <Navbar.Brand href="#">
          <BiHome size={24} className="me-2" color="navy" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>

            <NavDropdown title="GIỚI THIỆU" id="navbarScrollingDropdown1">
              <NavDropdown.Item href="#gioithieu1">Thông tin chung</NavDropdown.Item>
              <NavDropdown.Item href="#gioithieu2">Lịch sử hình thành</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="ĐÀO TẠO" id="navbarScrollingDropdown2">
              <NavDropdown.Item href="#daotao1">Chương trình Đại học</NavDropdown.Item>
              <NavDropdown.Item href="#daotao2">Chương trình Sau đại học</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="TUYỂN SINH" id="navbarScrollingDropdown3">
              <NavDropdown.Item href="#tuyensinh1">Thông tin tuyển sinh</NavDropdown.Item>
              <NavDropdown.Item href="#tuyensinh2">Đăng ký xét tuyển</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="NGHIÊN CỨU" id="navbarScrollingDropdown4">
              <NavDropdown.Item href="#nghiencuu1">Đề tài nghiên cứu</NavDropdown.Item>
              <NavDropdown.Item href="#nghiencuu2">Công bố khoa học</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="SINH VIÊN" id="navbarScrollingDropdown5">
              <NavDropdown.Item href="#sinhvien1">Hoạt động sinh viên</NavDropdown.Item>
              <NavDropdown.Item href="#sinhvien2">Học bổng - Việc làm</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="GIẢNG VIÊN" id="navbarScrollingDropdown6">
              <NavDropdown.Item href="#giangvien1">Thông tin giảng viên</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="VĂN BẰNG" id="navbarScrollingDropdown7">
              <NavDropdown.Item href="#vanbang1">Tra cứu văn bằng</NavDropdown.Item>
            </NavDropdown>

          </Nav>

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Tìm kiếm."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">
              <BiSearch />
            </Button>
          </Form>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
