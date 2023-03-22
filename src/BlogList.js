const BlogList = ({ blogz }) => {
    return (
        <div className="blog-list">
            {blogz.map((blog) => {
                return (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Info: {blog.body}</p>
                        <span>Has: {blog.likes} likes</span>
                    </div>
                )
            })}
        </div>
    );
}

export default BlogList;