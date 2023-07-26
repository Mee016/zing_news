import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "../components/header";
import XuatBan from "../pages/xuatban";
import Sach from "../pages/sach";
import XaHoi from "../pages/xahoi";
import TheGioi from "../pages/thegioi";
import KinhDoanh from "../pages/kinhdoanh";
import CongNghe from "../pages/congnghe";
import SucKhoe from "../pages/suckhoe";
import TheThao from "../pages/thethao";
import GiaiTri from "../pages/giaitri";
import DoiSong from "../pages/doisong";
import Home from "../pages/home";
import DetailBlog from "../pages/detailBlog";
import Admin from "../pages/admin";

function DefaultLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    // console.log(token);
    if (!token) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/blog/:id" element={<DetailBlog />} />
          <Route path="/sach/blog/:id" element={<DetailBlog />} />
          <Route path="/xuatban" element={<XuatBan />} />
          <Route path="/sach" element={<Sach />} />
          <Route path="/xahoi" element={<XaHoi />} />
          <Route path="/thegioi" element={<TheGioi />} />
          <Route path="/kinhdoanh" element={<KinhDoanh />} />
          <Route path="/congnghe" element={<CongNghe />} />
          <Route path="/suckhoe" element={<SucKhoe />} />
          <Route path="/thethao" element={<TheThao />} />
          <Route path="/giaitri" element={<GiaiTri />} />
          <Route path="/doisong" element={<DoiSong />} />
        </Routes>
      </div>
    </>
  );
}

export default DefaultLayout;
