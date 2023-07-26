import request from "../utils/request";
export const getAllBlogService = () => {
    return request("https://648c74068620b8bae7eceeca.mockapi.io/blogs", {
        method: 'GET'
    })
}
export const getDetailBlogService = (id) => {
    return request(`https://648c74068620b8bae7eceeca.mockapi.io/blogs/${id}`, {
        method: 'GET'
    })
}
export const getIsShowService = (id, data) => {
    return request(`https://648c74068620b8bae7eceeca.mockapi.io/blogs/${id}`, {
        method: 'PUT',
        data
    })
}

export const deleteBlogService = (id) => {
    return request(`https://648c74068620b8bae7eceeca.mockapi.io/blogs/${id}`, {
        method: 'DELETE'
    })
}

export const createBlogService = (data) => {
    return request(`https://648c74068620b8bae7eceeca.mockapi.io/blogs`, {
        method: 'POST',
        data
    })
}

export const updateBlogService = (id, data) => {
    return request(`https://648c74068620b8bae7eceeca.mockapi.io/blogs/${id}`, {
        method: 'PUT',
        data
    })
}