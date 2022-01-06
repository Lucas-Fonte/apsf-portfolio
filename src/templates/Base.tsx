import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { HorizontalFeatures } from './HorizontalFeatures';

const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scroll({
      top: window.innerHeight * 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="fixed bottom-10 right-10">
      <a onClick={scrollToTop}>Back to top</a>
    </div>
  );
};

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <HorizontalFeatures />
    <Banner />
    <Footer />
    <BackToTopButton />
  </div>
);

export { Base };
