import { Link } from "react-router-dom";

const BlogList = ({ blogz }) => {
    return (
        <div className="blog-list">
            {blogz.map((blog) => {
                return (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`} className="blog-link">
                            <h2>{blog.title}</h2>
                            <p>Info: {blog.body}</p>
                            <span>Has: {blog.likes} likes</span>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
}

export default BlogList;