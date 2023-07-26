import React from "react";
import { NavLink } from "react-router-dom";

class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const { type, image, title, content, des, id } = this.props
        return <>
            {type === 1 ? <div style={{ display: 'flex', paddingBottom: 10}}>
                <img width="40%" src={image} alt="HinhAnh" />
                <h5 style={{ paddingLeft: 10, paddingTop: 10, color: "red", fontSize: 18}}> <NavLink to={`blog/${id}`}>{title}</NavLink></h5>
            </div> : type === 2 ? <div> <img width="100%" src={image} alt="HinhAnh" />
                <h5><NavLink to={`blog/${id}`}>{title}</NavLink></h5>
                <p>
                    {content}
                </p>
                <span style={{ fontWeight: 'bold' }}>{des}</span>
            </div> : type === 3 ?<div> <img width="100%" src={image} alt="HinhAnh" />
                <h5> <NavLink to={`blog/${id}`}>{title}</NavLink></h5></div>
                : type === 4 ?<div style={{ padding: 10}}> <img width="100%" src={image} alt="HinhAnh" />
                <h5> <NavLink to={`blog/${id}`}>{title}</NavLink></h5></div>
                : <div style={{ display: 'flex', paddingBottom: 10}}>
                <img width="50%" src={image} alt="HinhAnh" />
                <div style={{maxWidth: 600, paddingLeft: 10}}>
                <h5 style={{ paddingLeft: 10, paddingTop: 10, color: "red", fontSize: 18}}> <NavLink to={`blog/${id}`}>{title}</NavLink></h5>
                <p style={{fontStyle: "italic", paddingTop: 30}}>
                    {content}
                </p>
                </div>
            </div>}
        </>
    }
}

export default Blog
