module.exports = {
  title: 'Igniter Roleplay',
  tagline: 'Igniter Framework Roleplay Sunucuları İçin Gelişmiş Roleplay Paketi',
  url: 'https://DevArchitecture.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'TarikSoğukpinar', // Usually your GitHub org/user name.
  projectName: 'DevArchitecture', // Usually your repo name.
  plugins: [require.resolve('docusaurus-lunr-search')],
  themeConfig: {
    navbar: {
      title: 'Igniter V1',
      items: [
        {
          to: 'docs',
          activeBasePath: 'docs',
          label: 'Dokümanlar',
          position: 'right',
        }, 
        {
          to: 'team',         
          label: 'Ekibimiz',
          position: 'right',
        },       
        {
          href: 'https://github.com/TarikSogukpinar',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'Tarık Soğukpınar GitHub',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Dokümanlar',
          items: [ 
            {
              label: 'Dokümanlar',
              to: 'docs/',
            },                   
          ],
        },
        {
          title: 'Topluluk',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/pxFjmauqbJ',
            },            
          ],
        },
        {
          title: 'More',
          items: [            
            {
              label: 'GitHub',
              href: 'https://github.com/TarikSogukpinar',
            },            
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/tar%C4%B1k-so%C4%9Fukp%C4%B1nar/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} By Ledun v.1.0.0`,
    },
  }, 
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          //editUrl:'https://github.com/DevArchitecture',
        },
        team: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/DevArchitecture',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
