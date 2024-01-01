import { useState } from "react";
import { useNavigate, Outlet, Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard, AiOutlineUser } from "react-icons/ai";
import { PiGearBold, PiTimerBold } from "react-icons/pi";
import { FaBloggerB, FaClipboardList, FaHouseUser } from "react-icons/fa";
import { Layout, Menu, theme, Flex } from "antd";
import p2c_logo from "../assets/images/logo/p2c_logo.jpg";

const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo w-25 ">
            <img className="img-fluid" src={p2c_logo} alt="Logo" />
            {/* <h2 className="py-3 fs-5 text-white text-center">
              {" "}
              <span className="sm-logo">P2C</span>
              <span className="lg-logo">P2CARE</span>
            </h2> */}
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
              // {
              //   key: "profile",
              //   icon: <FaHouseUser className="fs-4" />,
              //   label: "Profile",
              //   children: [
              //     {
              //       key: "doctorProfile",
              //       label: "Doctor Profile",
              //     },
              //     {
              //       key: "hospitalProfile",
              //       label: "Hospital Profile",
              //     },
              //   ],
              // },
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
            className="ps-5"
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <nav className="navbar navbar-expand-lg ">
              <h4 className="d-flex">
                {currentPath.replace("/admin", "Home")}
              </h4>
              <div className="container-fluid offset-md-7">
                <button
                  className="navbar-toggler "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDarkDropdown"
                  aria-controls="navbarNavDarkDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDarkDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <button
                        className="btn btn-success dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Admin
                      </button>
                      <ul className="dropdown-menu dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Profile
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Logout
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Change Password
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
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
