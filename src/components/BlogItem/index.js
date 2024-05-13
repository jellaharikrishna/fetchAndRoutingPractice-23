import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, topic, author, avatarUrl, imageUrl} = blogDetails

  return (
    <Link className="blog-link" to={`/blogs/${id}`}>
      <li className="blog-item-container">
        <img className="item-image" src={imageUrl} alt={`item ${id}`} />
        <div className="item-card">
          <p className="item-topic">{topic}</p>
          <h1 className="item-title">{title}</h1>
          <div className="author-card">
            <img
              className="author-image"
              src={avatarUrl}
              alt={`author ${id}`}
            />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
