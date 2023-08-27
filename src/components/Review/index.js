import reviewImg from '../../images/main-review.jpg';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Review = () => {
  return (
    <div className="review-container flex items-center">
      <img src={reviewImg} />
      <div className="review-desc">
        <h1>우수 고객평</h1>
        <h5 className="pl-1 text-amber-500 font-semibold">Customer Review</h5>
        <p>
          I am truly delighted to have discovered Hopevillage. Their commitment to crafting
          nourishing food that prioritizes health resonates deeply with me. The organic sesame oil
          they produce is not only a testament to their dedication to quality but also a flavorful
          addition to my meals. Knowing that I am supporting a business that places well-being at
          forefront gives me a sense of satisfaction like no other. Every interaction with
          Hopevillage exudes their passion for holistic nutrition and community well-being. I am
          grateful to be a part of this journey towards healthier living.
        </p>
        <div className="review-rating">
          <AiFillStar className="text-primary-action" />
          <AiFillStar className="text-primary-action" />
          <AiFillStar className="text-primary-action" />
          <AiFillStar className="text-primary-action" />
          <AiOutlineStar className="text-primary-action" />
        </div>
        <button className="bg-gray-200 py-2 px-3 rounded text-gray-700 font-semibold">
          전체 보기
        </button>
      </div>
    </div>
  );
};

export default Review;
