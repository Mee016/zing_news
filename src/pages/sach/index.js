import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogsAsync, selectBlogs } from "../home/homeSlice";
import Blog from "../../components/Blog";

const Sach = () => {
  const dispatch = useDispatch();
  const blog = useSelector(selectBlogs);
  console.log(blog);
  useEffect(() => {
    dispatch(getAllBlogsAsync());
  }, []);
  const contentTop = blog.listBlog.filter((item) => item.type === 5);
  const contentBottom = blog.listBlog.filter((item) => item.type === 4);
  return (<>
    <div className="container pt-2">
      <h3>SÁCH HAY</h3>
      <hr />
      <div className="row">
      <div className="col-12">
          {contentTop.filter((item) => item.isShow).map((item, index) => (
            <Blog
              id={item.id}
              key={index}
              type={item.type}
              title={item.title}
              image={item.image}
              content={item.content}
            />
          ))}
        </div>
        <div className="col-4" style={{ display: "flex", minWidth: "100%" }}>
          {contentBottom.filter((item) => item.isShow).map((item, index) => (
            <Blog
              id={item.id}
              key={index}
              type={item.type}
              title={item.title}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default Sach;
