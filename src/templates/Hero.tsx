import { Background } from '../components/background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => {
  const handleScroll = (component: string) => {
    const NAVIGATION_SCROLL_MAP = {
      main: window.innerHeight * 0,
      projects: window.innerHeight * 1,
      extras: window.innerHeight * 2,
      about: document.body.offsetHeight,
    };

    window.scroll({
      // @ts-ignore
      top: NAVIGATION_SCROLL_MAP[component] || NAVIGATION_SCROLL_MAP.main,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6" fullSection>
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <a onClick={() => handleScroll('main')}>Main</a>
          </li>
          <li>
            <a onClick={() => handleScroll('projects')}>Projects</a>
          </li>
          <li>
            <a onClick={() => handleScroll('extras')}>Extras</a>
          </li>
          <li>
            <a onClick={() => handleScroll('about')}>About</a>
          </li>
        </NavbarTwoColumns>
      </Section>
    </Background>
  );
};

export { Hero };
