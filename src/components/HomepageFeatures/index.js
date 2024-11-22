import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';



// This list controls the side menu items of products.
// To add new products, just copy an existing one and change the title and url.
//

/* -- These are the links for local dev environment */
/*
const FeatureList = [
  {
    title: <Translate>EXFLOW AP</Translate>,
    url: '/docs/user-manual',
  },
  {
    title: <Translate>EXFLOW SALES ORDER</Translate>,
    //url: '/business-central/docs/user-manual/sales-order/sales-order-setup',
    url: '/docs/user-manual/sales-order/technical-requirements-sales', // EA 2024-09-26 Changed by req. from Sofia
  },
  {
    title: <Translate>EXFLOW CO2 INSIGHTS</Translate>,
    url: '/docs/user-manual/CO2-Insights/co2-insights',
  },
  {
    title: <Translate>EXFLOW WEB</Translate>,
    url: 'https://docs.exflow.cloud/web',
  },
  {
    title: <Translate>EXFLOW DATA CAPTURE</Translate>,
    url: 'https://docs.exflow.cloud/datacapture/docs/user-manual/under-dev',
  },
  {
    title: <Translate>EXFLOW TRAVEL & EXPENSE</Translate>,
    url: '/docs/user-manual/travel-and-expense/travel-and-expense',
  },
];
*/

/* -- These are the links that should be used for the prod site, when the updated repo is finally deployed. */

const FeatureList = [
  {
    title: <Translate>EXFLOW AP</Translate>,
    url: '/business-central/docs/user-manual',
    tag: 'ap'
  },
  {
    title: <Translate>EXFLOW SALES ORDER</Translate>,
    url: '/business-central/docs/user-manual/sales-order/technical-requirements-sales',
    tag: 'sales-order'
  },
  {
    title: <Translate>EXFLOW CO2 INSIGHTS</Translate>,
    //url: '/business-central/docs/user-manual/CO2-Insights/co2-insights', 
    url: '/business-central/docs/proxy/proxy-co2-insights',
    tag: 'co2-insights'
  }, 
  {
    title: <Translate>EXFLOW WEB</Translate>,
    url: 'https://docs.exflow.cloud/web',
    tag: 'web'
  },
  {
    title: <Translate>EXFLOW DATA CAPTURE</Translate>,
    url: 'https://docs.exflow.cloud/datacapture/docs/user-manual/under-dev',
    tag: 'data-capture'
  },
  {
    title: <Translate>EXFLOW TRAVEL & EXPENSE</Translate>,
    url: '/business-central/docs/user-manual/travel-and-expense/travel-and-expense',
    //url: '/business-central/docs/proxy/proxy-travel-and-expense',
    tag: 'travel-and-expense'
  }
];


// Change this to get a new design of the menu items.
//
function Feature({title, url, tag}) {
  return (
    <a href={url} className="menu-item-link" tag={tag}>
    <div className="menu-item">
        <Heading as="div">{title}</Heading>
    </div>
    </a>
  );
}


// Menu container
export default function HomepageFeatures() {
  return (
    
    <section className={styles.none}>
      <div className="main-title">
        SOLUTIONS FOR D365 BUSINESS CENTRAL
      </div>

      <div className="menu-container">
          {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
          ))}
      </div>
    </section>
  );
}


// =================================================================================================
//  Old stuff for reference, ignore this
// =================================================================================================
/*
const PanelList = [
  {
    Svg: require('@site/static/img/gears.svg').default,
    text: <Translate>EXFLOW AP</Translate>,
    link: 'https://docs.exflow.cloud/finance-operations'
  },
  {
    Svg: require('@site/static/img/gears.svg').default,
    text: <Translate>EXFLOW SALES ORDER</Translate>,
    link: 'https://docs.exflow.cloud/web'
  },
  {
    Svg: require('@site/static/img/gears.svg').default,
    text: <Translate>EXFLOW WEB</Translate>,
    link: 'https://docs.exflow.cloud/finance-operations'
  },
  {
    Svg: require('@site/static/img/gears.svg').default,
    text: <Translate>EXFLOW DATA CAPTURE</Translate>,
    link: 'https://docs.exflow.cloud/finance-operations'
  },
  {
    Svg: require('@site/static/img/gears.svg').default,
    text: <Translate>EXFLOW C02 INSIGHTS</Translate>,
    link: 'https://docs.exflow.cloud/finance-operations'
  },
];
*/

/*
const FeatureList = [
  {
    title: <Translate>EXFLOW AP</Translate>,
    Svg: require('@site/static/img/gears.svg').default,
    description: (<Translate>ExFlow is easy to use. It is designed to be user-friendly and intuitive.</Translate>),
    url: 'https://docs.exflow.cloud/finance-operations',
  },
  {
    title: <Translate>EXFLOW SALES ORDER</Translate>,
    Svg: require('@site/static/img/gears.svg').default,
    description: (<><Translate>ExFlow allows you to focus on what matters: your business. It takes care of the rest.</Translate></>),
    url: 'https://docs.exflow.cloud/finance-operations',
  },
  {
    title: <Translate>EXFLOW WEB</Translate>,
    Svg: require('@site/static/img/gears.svg').default,
    description: (<Translate>ExFlow is easy to use. It is designed to be user-friendly and intuitive.</Translate>),
    url: 'https://docs.exflow.cloud/finance-operations',
  },
  {
    title: <Translate>EXFLOW DATA CAPTURE</Translate>,
    Svg: require('@site/static/img/gears.svg').default,
    description: (<Translate>ExFlow is easy to use. It is designed to be user-friendly and intuitive.</Translate>),
    url: 'https://docs.exflow.cloud/finance-operations',
  },
  {
    title: <Translate>EXFLOW CO2 INSIGHTS</Translate>,
    Svg: require('@site/static/img/gears.svg').default,
    description: (<Translate>ExFlow is easy to use. It is designed to be user-friendly and intuitive.</Translate>),
    url: 'https://docs.exflow.cloud/finance-operations',
  },
];
*/


// Menu item
/*
function Feature_ORIGINAL({Svg, title, description, url}) {
  return (
    <a href="{url}" className="menu-item-link">
    <div className="menu-item">
        <Heading as="div">{title}</Heading>
    </div>
    </a>
  );
}
*/


/*

          {PanelList.map((props, idx) => (
              <ImagePanel className="panel" key={idx} {...props} />            
            ))}



          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}

*/