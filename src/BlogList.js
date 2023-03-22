const BlogList = ({ blogz, handleDelete }) => {
    return (
        <div className="blog-list">
            {blogz.map((blog) => {
                return (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Info: {blog.body}</p>
                        <span>Has: {blog.likes} likes</span>
                        <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
                    </div>
                )
            })}
        </div>
    );
}

export default BlogList;