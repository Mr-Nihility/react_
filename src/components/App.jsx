import Section from './section/Section';
import { FeaturesGallary } from './featuresGallary/FeaturesGallary';
import data from './data/features.json';
//-------------------------------------------------------///
console.log(data);
export const App = () => {
  const a = 'Some title';
  return (
    <>
      <Section title={a}>
        <FeaturesGallary features={data}></FeaturesGallary>
      </Section>
    </>
  );
};
