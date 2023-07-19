import mainBg from '../../images/main-illustration.jpg';
import Button from 'react-bootstrap/Button';
import './birds.css';

const MainBg = () => {
  return (
    <div className="main-bg">
      <div className="main-bg-desc">
        <h1>바른 먹거리를 만드는</h1>
        <div className="main-bg-desc-div">
          <h1>당신의</h1>
          <h1 className="main-bg-desc-title">희망마을</h1>
        </div>

        <h1>건강함을 최우선 합니다.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt autem sapiente possimus,
          temporibus hic, recusandae sed totam, modi iste enim adipisci? Quam aliquid deleniti,
          quasi corrupti omnis officia repellat harum tenetur animi consectetur ab, voluptatem modi
          tempora tempore veritatis.
        </p>
        <Button variant="success" className="main-bg-btn">
          <b>인사말</b>
        </Button>
        <Button variant="secondary">
          <b>오시는 길</b>
        </Button>
      </div>

      <img src={mainBg} />

      <div className="bird-container bird-container--one">
        <div className="bird bird--one"></div>
      </div>
      <div className="bird-container bird-container--two">
        <div className="bird bird--two"></div>
      </div>
    </div>
  );
};

export default MainBg;
