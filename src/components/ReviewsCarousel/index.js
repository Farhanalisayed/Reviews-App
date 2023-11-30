// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    index: 0,
    image: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    user: 'Wade Warren',
    company: 'Rang',
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  }
  leftClicked = () => {
    const {reviewsList} = this.props
    const {index} = this.state
    const updatedIndex = index - 1
    if (0 <= updatedIndex && updatedIndex< reviewsList.length) {
      this.setState({
        index: updatedIndex,
        image: reviewsList[updatedIndex].imgUrl,
        user: reviewsList[updatedIndex].username,
        company: reviewsList[updatedIndex].companyName,
        description: reviewsList[updatedIndex].description,
      })
    } else {
      this.setState(prevState => ({
        index: prevState.index,
        image: prevState.image,
        user: prevState.user,
        company: prevState.company,
        description: prevState.description,
      }))
    }
  }

  rightClicked = () => {
    const {reviewsList} = this.props
    const {index} = this.state
    const updatedIndex = index + 1
    if (0 <= updatedIndex && updatedIndex< reviewsList.length) {
      this.setState({
        index: updatedIndex,
        image: reviewsList[updatedIndex].imgUrl,
        user: reviewsList[updatedIndex].username,
        company: reviewsList[updatedIndex].companyName,
        description: reviewsList[updatedIndex].description,
      })
    } else {
      this.setState(prevState => ({
        index: prevState.index,
        image: prevState.image,
        user: prevState.user,
        company: prevState.company,
        description: prevState.description,
      }))
    }
  }
  render() {
    const {reviewsList} = this.props
    const {image, user, company, description} = this.state
    return (
      <div className="the-container">
        <h1>Reviews</h1>
        <img src={image} className="img" alt={user} />
        <div className="arrows-name">
          <button
            type="button"
            className="btn"
            data-testid="leftArrow"
            onClick={this.leftClicked}
          >
            <img
              className="arrow"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>

          <p className="name">{user}</p>

          <button
            type="button"
            className="btn"
            data-testid="leftArrow"
            onClick={this.rightClicked}
          >
            <img
              className="arrow"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
        <p className="company">{company}</p>
        <p className="review">{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
