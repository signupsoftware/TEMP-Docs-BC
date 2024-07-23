import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import Translate, {translate} from '@docusaurus/Translate';


const PanelList = [
  {
    Svg: require('@site/static/img/gears.svg').default,
    text: <Translate>ExFlow for Finance and Operations</Translate>,
    link: 'https://docs.exflow.cloud/finance-operations'
  },
  {
    Svg: require('@site/static/img/gears.svg').default,
    text: <Translate>ExFlow Web</Translate>,
    link: 'https://docs.exflow.cloud/web'
  },
  {
    Svg: require('@site/static/img/gears.svg').default,
    text: <Translate>ExFlow Data Capture</Translate>,
    link: 'https://docs.exflow.cloud/datacapture'
  },
];



const FeatureList = [
  {
    title: <Translate>ExFlow for Finance and Operations</Translate>,
    Svg: require('@site/static/img/gears.svg').default,
    description: (
      <>
        ExFlow is easy to use. It is designed to be user-friendly and intuitive.
      </>
    ),
  },
  {
    title: <Translate>ExFlow Web</Translate>,
    Svg: require('@site/static/img/gears.svg').default,
    description: (
      <>
        ExFlow allows you to focus on what matters: your business. It takes care of the rest.
      </>
    ),
  },
  {
    title: <Translate>ExFlow Data Capture</Translate>,
    Svg: require('@site/static/img/gears.svg').default,
    description: (
      <>
        ExFlow is build on top of the newest technologies. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.gears} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function ImagePanel({Svg, text, link}) { 
  return (
    <div className={styles.imagePanelBox}>
      <a className={styles.link} href={link}>        
        <Svg className={styles.gears} role="img" />
        <h4 className={styles.imagePanelText}>{text}</h4>
      </a>
    </div>
  );
}




export default function HomepageFeatures() {
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

/*

          {PanelList.map((props, idx) => (
              <ImagePanel className="panel" key={idx} {...props} />            
            ))}



          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}

*/