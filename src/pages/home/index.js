import { useEffect, useState } from "react";
import Blog from "../../components/Blog";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogsAsync, selectBlogs } from "../home/homeSlice";
const Home = () => {
  const dispatch = useDispatch();
  const blog = useSelector(selectBlogs);
  // console.log(blog);
  useEffect(() => {
    dispatch(getAllBlogsAsync());
  }, []);

  const contentLeft = blog.listBlog.filter((item) => item.type === 1);
  const contentCenter = blog.listBlog.filter((item) => item.type === 2);
  const contentRight = blog.listBlog.filter((item) => item.type === 3);

  return (
    <>
      <div className="container pt-5">
        <div className="row">
          <div className="col-4">
          {contentLeft.filter((item) => item.isShow).map((item, index) => (
              <Blog
                id={item.id}
                key={index}
                type={item.type}
                title={item.title}
                image={item.image}
              />
            ))}
          </div>

          <div className="col-8">
            <div className="row">
              <div className="col-8">
              {contentCenter.filter((item) => item.isShow).map((item, index) => (
                  <Blog
                    id={item.id}
                    key={index}
                    type={item.type}
                    title={item.title}
                    image={item.image}
                    content={item.content}
                    des={item.des}
                  />
                ))}
              </div>
              <div className="col-4">
              {contentRight.filter((item) => item.isShow).map((item, index) => (
                  <Blog
                    id={item.id}
                    key={index}
                    type={item.type}
                    title={item.title}
                    image={item.image}
                    content={item.content}
                    des={item.des}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
