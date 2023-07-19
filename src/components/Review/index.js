import reviewImg from '../../images/main-review.jpg';
import Button from 'react-bootstrap/Button';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Review = () => {
  return (
    <div className="review-container">
      <img src={reviewImg} />
      <div className="review-desc">
        <h1>우수 고객평</h1>
        <h5>Customer Review</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt autem sapiente possimus,
          temporibus hic, recusandae sed totam, modi iste enim adipisci? Quam aliquid deleniti,
          quasi corrupti omnis officia repellat harum tenetur animi consectetur ab, voluptatem modi
          tempora tempore veritatis.
        </p>
        <div className="review-rating">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
        <Button variant="secondary">전체 보기</Button>
      </div>
    </div>
  );
};

export default Review;
