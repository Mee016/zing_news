import { Image } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  const admin = () => {
    navigate("/admin");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="logo">
            <Link to="/">
              <Image
                src="https://static-znews.zingcdn.me/images/logo-zing-home.svg"
                alt="logo"
                preview={false}
                width={100}
              />
            </Link>
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Xuất bản
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sach">
                Sách
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/xahoi">
                Xã hội
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/thegioi">
                Thế giới
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/kinhdoanh">
                Kinh doanh
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/congnghe">
                Công nghệ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/suckhoe">
                Sức khỏe
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/thethao">
                Thể thao
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/giaitri">
                Giải trí
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/doisong">
                Đời sống
              </Link>
            </li>
            <div style={{display: "flex",marginLeft: 160}}>
            <li className="nav-item">
              <Link onClick={admin} className="nav-link" to="/admin">
              <i class="fa-regular fa-user"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={logout} className="nav-link" to="/login">
                <i style={{ color: "red"}}
                  class="fa-solid fa-right-from-bracket"
                  
                >
                </i>
              </Link>
            </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
