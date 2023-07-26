import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailBlogsAsync, selectBlogs } from "../home/homeSlice";
const DetailBlog = () => {
  const { id } = useParams();
  console.log(id)
  const dispatch = useDispatch();
  const my = useSelector(selectBlogs);
  // console.log(my);
  useEffect(() => {
    dispatch(getDetailBlogsAsync(id));
  }, []);
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h2>{my.blog.title}</h2>
      <p style={{fontWeight: 100}}>{my.blog.description}</p>
      <img src={my.blog.image} style={{ width: "40%" }}></img>
      <p style={{ fontStyle: "italic" }}>{my.blog.content}</p>
    </div>
  );
};

export default DetailBlog;
