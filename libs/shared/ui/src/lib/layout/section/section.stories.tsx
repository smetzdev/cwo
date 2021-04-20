import { withWrapper, StoryContent } from './section.stories.helpers';
import { Section } from './index';

export default {
  title: 'Layout/Section',
  component: Section,
  decorators: [withWrapper],
};

export const Base = () => (
  <Section>
    <StoryContent />
  </Section>
);
