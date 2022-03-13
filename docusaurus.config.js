// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Igniter V1',
  tagline: '',
  url: 'https://github.com',
  baseUrl: '/IgniterDocs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'TarikSogukpinar', // Usually your GitHub org/user name.
  projectName: 'IgniterDocs', // Usually your repo name.
  deploymentBranch: "gh-pages",

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Igniter V1',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [{
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Başlarken',
          },
          {
            to: '/blog',
            label: 'Hakkımda',
            position: 'left'
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [{
            title: 'Docs',
            items: [{
              label: 'Tutorial',
              to: '/docs/intro',
            }, ],
          },
          {
            title: 'Topluluk',
            items: [

              {
                label: 'Discord',
                href: 'https://discord.gg/pxFjmauqbJ',
              },
              {
                label: 'Github',
                href: 'https://github.com/TarikSogukpinar',
              },
            ],
          },
          {
            title: 'Daha Fazlası',
            items: [{
                label: 'Hakkımda',
                to: '/blog',
              },

            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} By Ledun v.1.0.0`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;