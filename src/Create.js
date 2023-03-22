import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [likes, setLikes] = useState('nice');
    const [isLoading, setLoading] = useState(false);
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, likes }
        setLoading(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        })
            .then(() => {
                setLoading(false);
                history.push('/');
            })
    }
    return (
        <div className="content">
            <h2 className="add-blog-title">Add a new blog</h2>
            <form className="blog-form" onSubmit={handleSubmit}>
                <label className="field-label">Blog title</label>
                <input
                    type="text"
                    className="title-field"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label className="field-label">Blog body</label>
                <textarea
                    className="textarea-field"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label className="field-label">Blog likes</label>
                <select className="select-field"
                    value={likes}
                    onChange={(e) => setLikes(e.target.value)}>
                    <option value="nice">Nice</option>
                    <option value="good">Good</option>
                    <option value="excellent">Excellent</option>
                </select>
                {!isLoading && <button className="add-blog-btn">Add blog</button>}
                {isLoading && <button className="add-blog-btn" disabled>Adding blog...</button>}
            </form>
        </div>
    );
}

export default Create