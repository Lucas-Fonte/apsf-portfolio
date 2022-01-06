import { Background } from '../components/background/Background';
import { VerticalFeatureRow } from '../components/feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const HorizontalFeatures = () => (
  <Background color="bg-primary-500">
    <Section
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
      fullSection
    >
      <VerticalFeatureRow
        title="Your title here"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
        image="/assets/images/feature.svg"
        imageAlt="First feature alt text"
      />
    </Section>
  </Background>
);

export { HorizontalFeatures };
