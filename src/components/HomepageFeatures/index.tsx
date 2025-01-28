import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Photograph',
    Svg: require('@site/static/img/camera_with_flash.svg').default,
    description: (
      <>
        Let's take a picture of your project, fix your camara or just find a cool location. Photon Lab is here to help.
      </>
    ),
  },
  {
    title: 'Develop',
    Svg: require('@site/static/img/film_stock.svg').default,
    description: (
      <>
        No need to build your own darkroom or suite up in a full ABC suit. Here you can develop your shots and feel like Walter White without the drugs.
      </>
    ),
  },
  {
    title: 'Print',
    Svg: require('@site/static/img/picture.svg').default,
    description: (
      <>
        The final step, print your pictures and hang them on your wall. Or just keep them in a box, we don't judge. Or do we?
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
