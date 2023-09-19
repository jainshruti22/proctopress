// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ProctoPress',
  tagline: 'ProctorPress- Online Exam Proctoring Plugin For LMS',
  favicon: 'data:image/png;base64,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',

  // Set the production url of your site here
  url: 'https://www.miniorange.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'miniOrange',
          blogDescription: 'A Docusaurus powered blog!',
          postsPerPage: 1,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
       
      }),
      
    ],
  ],
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: 'https://plugins.miniorange.com/wp-content/uploads/2020/08/368x64.png',
      navbar: {
        title: '',
        logo: {
          alt: 'miniorange',
          src: 'https://plugins.miniorange.com/wp-content/uploads/2020/08/368x64.png',
        },
        items: [
            
          {to: '/pricing', label: 'Pricing', position: 'right'},
          {to: '/blog', label: 'Blogs', position: 'right'},
          {
            type: 'docSidebar',
            to:'https://www.miniorange.com/businessfreetrial',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Guides',
          },
          {
            to:'https://www.miniorange.com/contact',
            label: 'Contact Us',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
