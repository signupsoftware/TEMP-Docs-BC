import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';



// This list controls the side menu items of products.
// To add new products, just copy an existing one and change the title and url.
//

/*
const FeatureList_OLD = [
            {
              title: <Translate>EXFLOW AP</Translate>,
              url: '/business-central/docs/user-manual',
              tag: 'ap'
            },
            {
              title: <Translate>EXFLOW SALES ORDER</Translate>,
              url: '/business-central/docs/so',
              tag: 'sales-order'
            },
            {
              title: <Translate>EXFLOW CO2 INSIGHTS</Translate>,
              url: '/business-central/docs/co2',
              tag: 'co2-insights'
            }, 
            {
              title: <Translate>EXFLOW WEB</Translate>,
              url: 'https://docs.signupsoftware.com/web',
              tag: 'web'
            },
        {
          title: <Translate>EXFLOW DATA CAPTURE</Translate>,
          url: 'https://docs.signupsoftware.com/datacapture/docs/user-manual/under-dev',
          tag: 'data-capture'
        },
          {
            title: <Translate>EXFLOW TRAVEL & EXPENSE</Translate>,
            url: 'https://docs.signupsoftware.com/tem',
            tag: 'travel-and-expense'
          },


              {
                title: <Translate>EXFLOW CONTENT GATE</Translate>,
                url: 'https://docs.signupsoftware.com/tem',
                tag: 'bc-content-gate'
              }

];
*/


const FeatureList = [
[
  {
    title: <Translate>EXFLOW AP</Translate>,
    //url: '/business-central/docs/user-manual/myfolder',
    //url: translate("URL-EXFLOW-AP", "defaultpath"),
    url: 
    translate({
      message: 'URL-EXFLOW-AP',
      description: 'desription of link',
    }),
    index: 0,
    tag: 'ap'
  },
  {
    title: <Translate>EXFLOW DATA CAPTURE</Translate>,
    url: 'https://docs.signupsoftware.com/datacapture/docs/user-manual/under-dev',
    index: 4,
    tag: 'data-capture'
  },
],
[
  {
    title: <Translate>EXFLOW SALES ORDER</Translate>,
    url: translate({
      message: 'PROXY-LINK-EXFLOW-SALES-ORDER',
      description: 'ExFlow Sales Order link',
    }),
    tag: 'sales-order',
    index: 1
  },
{
    title: <Translate>EXFLOW TRAVEL & EXPENSE</Translate>,
    url: translate({
      message: 'PROXY-LINK-EXFLOW-TRAVEL-EXPENSE',
      description: 'ExFlow Travel & Expense link',
    }),
    tag: 'travel-and-expense',
    index: 5
  },
],
[
  {
    title: <Translate>EXFLOW CO2 INSIGHTS</Translate>,
    url: translate({
      message: 'PROXY-LINK-EXFLOW-CO2',
      description: 'desription of link',
    }),
    tag: 'co2-insights',
    index: 2
  }, 
  {
    title: <Translate>EXFLOW CONTENT GATE</Translate>,
    url: translate({
      message: 'PROXY-LINK-EXFLOW-CONTENT-GATE',
      description: 'ExFlow Content Gate link',
    }),
    tag: 'bc-content-gate',
    index: 6
  },
],
[
  {
    title: <Translate>EXFLOW WEB</Translate>,
    url: 'https://docs.signupsoftware.com/web',
    tag: 'web',
    index: 3
  },
  {
    title: <Translate>Nada</Translate>,
    url: 'https://null.none',
    tag: 'nil',
    index: -1
  }
    
  ]
];


// Change this to get a new design of the menu items.
//
function Feature({title, url, index}) {
  return (
    // Just add an empty cell if "index" is -1 (not in use)
    index === -1 ? <td></td> :
    // Otherwise add the menu item
    <div className="div-cell">
    <a href={url} className="menu-item-link" target="_parent">
    <div className="menu-item small-drop-shadow">
        <Heading as="div">{title}</Heading>
    </div>
    </a>
    </div>
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
      <div className="main-menu-table" >

      {FeatureList.map(row => (
        <div className="div-row">        
          <Feature {...row[0]} />
          <Feature {...row[1]} />
        </div>
      ))}

      </div>

      </div>

    </section>
  );
}
