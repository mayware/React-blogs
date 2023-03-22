import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory();
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE',
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="content">
            {isPending && <div>Loading</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article className="blog-article">
                    <h2>{blog.title}</h2>
                    <p>Says that: {blog.body}</p>
                    <p>Has {blog.likes} likes</p>
                    <button className="delete-blog-btn" onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;