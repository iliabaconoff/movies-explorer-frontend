import Main from '../Main/Main';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Landing = ({ loggedIn }) => {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <Main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </Main>
      <Footer />
    </>
  );
};

export default Landing;
