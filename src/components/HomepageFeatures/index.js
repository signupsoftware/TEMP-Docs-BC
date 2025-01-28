import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';



// This list controls the side menu items of products.
// To add new products, just copy an existing one and change the title and url.
//


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
            url: 'https://docs.signupsoftware.com/tem',
            tag: 'travel-and-expense'
          },


              {
                title: <Translate>EXFLOW CONTENT GATE</Translate>,
                url: 'https://docs.signupsoftware.com/tem',
                tag: 'bc-content-gate'
              }

];


const FeatureList = [
[
  {
    title: <Translate>EXFLOW AP</Translate>,
    url: '/business-central/docs/user-manual',
    index: 0,
    tag: 'ap'
  },
  {
    title: <Translate>EXFLOW DATA CAPTURE</Translate>,
    url: 'https://docs.exflow.cloud/datacapture/docs/user-manual/under-dev',
    index: 4,
    tag: 'data-capture'
  },
],
[
  {
    title: <Translate>EXFLOW SALES ORDER</Translate>,
    url: '/business-central/docs/so',
    tag: 'sales-order',
    index: 1
  },
  {
    title: <Translate>EXFLOW TRAVEL & EXPENSE</Translate>,
    url: 'https://docs.signupsoftware.com/tem',
    tag: 'travel-and-expense',
    index: 5
  },
],
[
  {
    title: <Translate>EXFLOW CO2 INSIGHTS</Translate>,
    url: '/business-central/docs/co2',
    tag: 'co2-insights',
    index: 2
  }, 
  {
    title: <Translate>EXFLOW CONTENT GATE</Translate>,
    url: 'http://docs.signupsoftware.com/business-central/docs/cg',
    tag: 'bc-content-gate',
    index: 6
  },
],
[
  {
    title: <Translate>EXFLOW WEB</Translate>,
    url: 'https://docs.exflow.cloud/web',
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
    // Just add an empty cell id "index" is -1
    index === -1 ? <td></td> :
    // Otherwise add the menu item
    <td>
    <a href={url} className="menu-item-link">
    <div className="menu-item small-drop-shadow">
        <Heading as="div">{title}</Heading>
    </div>
    </a>
    </td>
  );
}



// Menu container
export default function HomepageFeatures() {
  return (
    
    <section className={styles.none}>
      <div className="main-title">
      SOLUTIONS FOR<br/>
      D365 FINANCE AND OPERATIONS
      </div>

      <div className="menu-container">
      <table className="main-menu-table" >

      {FeatureList.map(row => (
        <tr>        
          <Feature {...row[0]} />
          <Feature {...row[1]} />
        </tr>
      ))}

      </table>

      </div>

    </section>
  );
}
