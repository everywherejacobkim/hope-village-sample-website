import mainBg from '../../images/main-bg.jpg';

const MainBg = () => {
  return <div className="main-bg" style={{ backgroundImage: 'url( ' + mainBg + ' )' }}></div>;
};

export default MainBg;
