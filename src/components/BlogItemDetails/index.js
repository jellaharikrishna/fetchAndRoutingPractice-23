import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {initalBlogItemDetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const blogItemDetailsData = await response.json()
    const updatedBlogItemDetailsData = {
      id: blogItemDetailsData.id,
      title: blogItemDetailsData.title,
      author: blogItemDetailsData.author,
      content: blogItemDetailsData.content,
      topic: blogItemDetailsData.topic,
      imageUrl: blogItemDetailsData.image_url,
      avatarUrl: blogItemDetailsData.avatar_url,
    }
    this.setState({
      initalBlogItemDetails: updatedBlogItemDetailsData,
      isLoading: false,
    })
  }

  render() {
    const {initalBlogItemDetails, isLoading} = this.state
    const {
      id,
      title,
      author,
      content,
      avatarUrl,
      imageUrl,
    } = initalBlogItemDetails

    return isLoading ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <div className="blog-item-details-container">
        <h1 className="blog-item-details-title">{title}</h1>
        <div className="blog-item-details-author-card">
          <img
            className="blog-item-details-author-image"
            src={avatarUrl}
            alt={`author ${id}`}
          />
          <p className="blog-item-details-author-name">{author}</p>
        </div>
        <img className="blog-item-details-image" src={imageUrl} alt={title} />
        <p className="blog-item-details-content">{content}</p>
      </div>
    )
  }
}
export default BlogItemDetails
