import mainBg from '../../images/main-bg.jpg';
import Button from 'react-bootstrap/Button';

const MainBg = () => {
  return (
    <div className="main-bg">
      <div className="main-bg-desc">
        <h1>For your Lovely</h1>
        <h1>Pets Better</h1>
        <h1>Life Together</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt autem sapiente possimus,
          temporibus hic, recusandae sed totam, modi iste enim adipisci? Quam aliquid deleniti,
          quasi corrupti omnis officia repellat harum tenetur animi consectetur ab, voluptatem modi
          tempora tempore veritatis.
        </p>
        <Button variant="success" className="main-bg-btn">
          About Us
        </Button>
        <Button variant="secondary">Contact Us</Button>
      </div>
      <img src={mainBg} />
    </div>
  );
};

export default MainBg;
