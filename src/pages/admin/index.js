import { Button, Form, Input, Modal, Select, Space, Switch, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createBlogAsync,
  deleteBlogAsync,
  getAllBlogsAsync,
  getIsShowsAsync,
  selectBlogs,
  updateBlogAsync,
} from "../home/homeSlice";
import { Option } from "antd/es/mentions";

function Admin() {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    if (values.id) {
      await dispatch(updateBlogAsync(values));
    } else {
      await dispatch(createBlogAsync(values));
    }
    dispatch(getAllBlogsAsync());
    setIsModalOpen(false);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBlogsAsync(), getIsShowsAsync());
  }, []);
  const deleteBlog = async (id) => {
    await dispatch(deleteBlogAsync(id));
    dispatch(getAllBlogsAsync());
  };
  const updateBlog = (blog) => {
    // console.log(blog);
    form.resetFields();
    setIsModalOpen(true);
    form.setFieldsValue({
      ...blog,
    });
    // console.log(blog)
  };
  // const onChange = async (values, blog, id) => {
  //   const newValue = { ...values, isShow: !values.isShow };
  //   await dispatch(getIsShowsAsync(id, newValue));
    // const res = await getIsShowsAsync(newValue);
    // if (values.isShow) {
      // console.log(values.isShow);
    //   await dispatch(updateBlogAsync(values));
    //   form.resetFields();
    //   form.setFieldsValue({
    //     ...blog,
    //   });
    // } else {
      // console.log(values.isShow);
      // await dispatch("");
      // form.resetFields();
      // console.log("hihihi");
    // }
    // dispatch(getIsShowsAsync());
  // };

  const adminBlog = useSelector(selectBlogs);
  //   console.log(adminBlog);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (text) => <img src={text} width={120} alt="" />,
    },
    {
      title: "Activity",
      key: "activity",
      render: (_, record) => (
        <Space size="middle">
          <button onClick={() => deleteBlog(record.id)}>Delete</button>
          <button onClick={() => updateBlog(record)}>Update</button>
        </Space>
      ),
    },
    {
      title: "Show/Hide",
      dataIndex: "isShow",
      key: "isShow",
      render: (isShow, record) => (
        <Switch
          defaultChecked
          // onChange={() => onChange(record)}
          checked={isShow}
        />
      ),
    },
  ];

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Create Blog
      </Button>
      <Modal
        title="Create Blog"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="form"
          form={form}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item label="ID" name="id">
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input title!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input description!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Content"
            name="content"
            rules={[
              {
                required: true,
                message: "Please input content!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Show/Hide"
            name="isShow"
            rules={[
              {
                required: true,
                message: "Type required",
              },
            ]}
          >
            <Select
              style={{
                width: 120,
              }}
            >
              <Option value={true}>Show</Option>
              <Option value={false}>Hide</Option>
            </Select>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Table
        columns={columns}
        dataSource={adminBlog.listBlog}
        loading={adminBlog.isLoading}
      />
    </>
  );
}

export default Admin;
