import { useState } from "react";
import { useNavigate, Outlet, Link } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { AiOutlineDashboard, AiOutlineUser } from "react-icons/ai";

import { PiGearBold, PiTimerBold } from "react-icons/pi";
import { FaBloggerB, FaClipboardList } from "react-icons/fa";
import { Layout, Menu, Button, theme, Flex } from "antd";

const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();
  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <h2 className="py-3 fs-5 text-white text-center">
              {" "}
              <span className="sm-logo">P2C</span>
              <span className="lg-logo">P2CARE</span>
            </h2>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[""]}
            onClick={({ key }) => {
              if (key !== "signout") {
                navigate(key);
              }
            }}
            items={[
              {
                key: "",
                icon: <AiOutlineDashboard className="fs-4" />,
                label: "Dashboard",
              },

              {
                key: "patients",
                icon: <AiOutlineUser className="fs-4" />,
                label: "Patients Manage",
                children: [
                  {
                    key: "all-patients",
                    label: "All Patients",
                  },
                  {
                    key: "patient",
                    label: "Add New Patient",
                  },
                ],
              },

              {
                key: "doctors",
                icon: <PiTimerBold className="fs-4" />,
                label: "Doctors",
                children: [
                  {
                    key: "all-doctors",
                    label: "All Doctors",
                  },
                  {
                    key: "doctor",
                    label: "New Doctor",
                  },
                  {
                    key: "search-doctor",
                    label: "Search Doctor",
                  },
                  {
                    key: "doctor-category-list",
                    label: "Doctor Category",
                  },
                  {
                    key: "doctor-booking",
                    label: "Booking Time",
                  },
                  {
                    key: "all-doctor-review",
                    label: "All Review",
                  },
                ],
              },

              {
                key: "hospitals",
                icon: <PiTimerBold className="fs-4" />,
                label: "Hospitals",
                children: [
                  {
                    key: "all-hospital",
                    label: "All Hospitals",
                  },
                  {
                    key: "assign-doctor",
                    label: "Assign Doctor In Hospital",
                  },
                  {
                    key: "blog-hospital",
                    label: "Blog Of Hospital",
                  },
                  {
                    key: "hospital/all-review",
                    label: "All Reviews",
                  },
                  {
                    key: "faq",
                    label: "Faq",
                  },
                ],
              },
              {
                key: "services",
                icon: <PiGearBold className="fs-4" />,
                label: "Services",
                children: [
                  {
                    key: "service",
                    label: "Add Service",
                  },
                  {
                    key: "service-list",
                    label: "All Services",
                  },
                  {
                    key: "service-categiry-list",
                    label: "Service Categories",
                  },
                  {
                    key: "search-service",
                    label: "Search Services",
                  },
                ],
              },

              {
                key: "blog",
                icon: <FaBloggerB className="fs-4" />,
                label: "Blog",
                children: [
                  {
                    key: "all-blog",
                    label: "All Blogs",
                  },
                  {
                    key: "blog-cat",
                    label: "Category",
                  },
                  {
                    key: "add-blog",
                    label: "Add New Post",
                  },
                ],
              },
              {
                key: "testimonial",
                icon: <FaClipboardList className="fs-4" />,
                label: "Testimonials",
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            className="d-flex justify-content-between ps-1 pe-5"
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <div className="d-flex gap-4 align-items-center">
              <div className="position-relative">
                <IoIosNotifications className="fs-4" />
                <span className="badge bg-warning rounded-circle p-1 position-absolute">
                  3
                </span>
              </div>

              <div className="d-flex gap-3 align-items-center dropdown">
                <div>
                  <img
                    width={32}
                    height={32}
                    src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg"
                    alt=""
                  />
                </div>
                <div
                  className="px-2"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {/* <h5 className="mb-0 px-2 ">{user.firstname}</h5>
                  <p className="mb-0 px-2">{user.email}</p> */}
                </div>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <Link
                      className="dropdown-item py-1 mb-1"
                      style={{ height: "auto", lineHeight: "20px" }}
                      to="/"
                    >
                      View Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item py-1 mb-1"
                      style={{ height: "auto", lineHeight: "20px" }}
                      to="/"
                    >
                      Signout
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet />
            <Flex>
              <footer className=" d-flex    flex-grow-1 bg-white p-3 roudned-3">
                &copy; Copyright 2023 All Right Reserved By PCARE
              </footer>
            </Flex>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayout;
