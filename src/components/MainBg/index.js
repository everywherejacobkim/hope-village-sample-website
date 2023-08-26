import mainBg from '../../images/main-illustration.jpg';
import './birds.css';

const MainBg = () => {
  return (
    <div className="main-bg">
      <div className="main-bg-desc flex flex-col gap-2">
        <div>
          <h1>바른 먹거리를 만드는</h1>
          <div className="main-bg-desc-div">
            <h1>당신의</h1>
            <h1 className="main-bg-desc-title">희망마을</h1>
          </div>
          <h1>건강함을 최우선 합니다.</h1>
        </div>
        <div>
          <p>
            In our envisioned community, crafting wholesome sustenance takes precedence, emphasizing
            the paramount importance of well-being. We are dedicated to producing organic sesame
            oils and fostering a village where the creation of nourishing food stands as a
            cornerstone, with a steadfast commitment to prioritizing health above all else.
          </p>
        </div>
        <div>
          <div className="flex gap-2">
            <button className="bg-green-700 py-2 px-3 rounded text-white">
              <b>인사말</b>
            </button>
            <button className="bg-gray-200 py-2 px-3 rounded text-gray-700">
              <b>오시는 길</b>
            </button>
          </div>
        </div>
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
