export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ffdd0e94c4f144850c22e6f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-n6b1s38u',
                  apiId: 'ac8e12c5-bb4e-492e-9922-e978a3f5cb00'
                },
                {
                  buildHookId: '5ffdd0e9cf804464f8dacc30',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-cs5551yi',
                  apiId: '6393b534-4822-41af-b53c-b34553e251a8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/icutler/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-cs5551yi.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
