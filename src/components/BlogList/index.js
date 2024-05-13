import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {initialBlogList: [], isLoading: true}

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const blogListData = await response.json()
    const updatedBlogListData = blogListData.map(eachData => ({
      id: eachData.id,
      title: eachData.title,
      topic: eachData.topic,
      author: eachData.author,
      imageUrl: eachData.image_url,
      avatarUrl: eachData.avatar_url,
    }))
    this.setState({initialBlogList: updatedBlogListData, isLoading: false})
  }

  render() {
    const {initialBlogList, isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <ul className="bloglist-container">
        {initialBlogList.map(eachData => (
          <BlogItem key={eachData.id} blogDetails={eachData} />
        ))}
      </ul>
    )
  }
}
export default BlogList
