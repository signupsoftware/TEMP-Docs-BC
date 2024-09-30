// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config
//import Translate, {translate} from '@docusaurus/Translate';
import {themes as prismThemes} from 'prism-react-renderer';

// ========================================================================================================
// ========================================================================================================
// IMPORTANT: Ensure DEPLOY_MODE is set to "PROD" before making a pull request.
// This is crucial because the production settings (siteURL and baseURL) need to be correctly configured
// for the live environment. Failing to do so may result in incorrect URLs being used, which can break
// the site or lead to incorrect routing. Always double-check this setting to avoid deployment issues.

//const DEPLOY_MODE = "DEV";
//const DEPLOY_MODE = "PROD";

const siteURL = 'https://docs.exflow.cloud/';    
const baseURL = "/business-central/";

//const siteURL = 'http://localhost:3000/';
//const baseURL = "/";

// ========================================================================================================
// ========================================================================================================

//import Translate, {translate} from '@docusaurus/Translate';
//var header1 =  translate({ message: 'Other documentation' });
//import { getLang } from './src/components/langReference.js';

// EA 2024-09-03 The 'config' class doesn't work well, use this to change the main site address.
// EA 2024-09-24 Obsolete, removing this.
//const siteURL = 'https://thankful-grass-074f8cd03.5.azurestaticapps.net/';
//const siteURL = 'http://localhost:3000/';
//const siteURL = 'https://docs.exflow.cloud/business-central/';
//const subURL = "/";

// var siteURL = "";
// var baseURL = "";

// if (!(DEPLOY_MODE === "PROD")) {
//   //siteURL = 'https://docs.exflow.cloud/business-central/';  
//   siteURL = 'https://docs.exflow.cloud/';    
//   baseURL = "/business-central/";
// } 
// else {
// //if (DEPLOY_MODE === "DEV") {
//   siteURL = 'http://localhost:3000/';
//   baseURL = "/";
// }

 
// Use these to quickly chnage between Dev/Prod
// -- Development, local --
//const lnk_intro = 'docs/user-manual/welcome-to-exflow/introduction';
//const lnk_relnotes = 'docs/user-manual/welcome-to-exflow/release-notes'
// -- Production, cloud --
const lnk_intro = 'docs/user-manual/welcome-to-exflow/introduction'; //'introduction';
const lnk_relnotes = 'docs/user-manual/welcome-to-exflow/release-notes'; //'release-notes';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ExFlow Documentation Platform',
  tagline: 'ExFlow Documentation Platform',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  // EA 2024-09-26 Or not! This is set in the 'siteURL' variable above.
  // EA 2024-09-26b Joke's on me, it's mandatory even if not in use
  //
  //url: 'https://thankful-grass-074f8cd03.5.azurestaticapps.net/',
  //url: 'https://localhost:3000/',       // Use this for local dev
  url: 'https://docs.exflow.cloud/',    // Use this for production
  //url: siteURL,

  // EA 2024-09-27 We're fixing this in Github Yaml, it replaces 'http://localhost:3000/' with 'https://docs.exflow.cloud/'
  //url: 'http://localhost:3000/',

 
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // localhost:3000
  //baseUrl: '/',    // Use this for local dev
  baseUrl: '/business-central/',    // Use this for production  
  
  // EA 2024-09-27 We're fixing this in Github Yaml, it replaces '/' with 'business-central'
  //baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      de: {
        htmlLang: 'de-DE',
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      fa: {
        direction: 'rtl',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        /*
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        */
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      //image: 'img/docusaurus-social-card.jpg',
      navbar: {

        logo: {
          //alt: 'ExFlow',
          src: 'img/exflow-logo-v5.png',
        },

        items: [
          {
            type: 'localeDropdown',
            position: 'right',
          },


          {
            label: 'Home',
            position: 'left',
            href: '/',
          },



          {
            label: 'Documentation',
            position: 'left',
            //href: '/docs/user-manual'
            to: 'https://docs.exflow.cloud/business-central/docs/user-manual',
          },


          {
            label: 'Release notes',
            position: 'left',
            //href: '/docs/user-manual/welcome-to-exflow/release-notes'
            to: 'https://docs.exflow.cloud/business-central/docs/user-manual/welcome-to-exflow/release-notes'
          },


          {
            href: 'https://www.youtube.com/playlist?list=PLJAWzooWyJH9V7QYAmcGgxEIFDjfVBB-Y',
            label: 'Video tutorials',
            position: 'left',
          },


          /*
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          */
        ],
      },
      
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Other documentation',
            items: [
              {
                label: 'ExFlow for FO',
                to: 'https://docs.exflow.cloud/finance-operations',
              },
              {
                label: 'ExFlow for BC',
                //to: '/docs/user-manual/welcome-to-exflow/introduction',
                // https://docs.exflow.cloud/business-central/
                //to: siteURL + 'docs/user-manual/welcome-to-exflow/introduction',
                to: 'https://docs.exflow.cloud/business-central/docs/user-manual/welcome-to-exflow/introduction'
               
              },
              {
                label: 'ExFlow Web',
                to: 'https://docs.exflow.cloud/web',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'ExFlow support',
                to: 'https://support.signupsoftware.com/',
              },
              {
                label: 'Partner portal',
                href: 'https://azuresignup.sharepoint.com/sites/Signupsoftware',
              },
              {
                label: 'Terms and Conditions',
                href: '/docs/papers/agreements',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SignUp Software AB`,
      },
      
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};




export default {
  ...config,
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /* @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        searchResultLimits: 15,
        searchBarShortcutHint: false
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ]
}
