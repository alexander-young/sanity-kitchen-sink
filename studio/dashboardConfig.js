export default {
  widgets: [
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
                  buildHookId: '62093040387532b095f7436a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ay4k688k',
                  apiId: 'd63c984d-b1bc-4339-badc-9c2810ebf99d'
                },
                {
                  buildHookId: '62093040327838e0a2c75fda',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ftz5mmqg',
                  apiId: 'ce0fdf4c-ed65-4a6e-a8d9-2cfb9273d1fa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alexander-young/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ftz5mmqg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
