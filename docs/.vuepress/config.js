module.exports = {
    lang: 'zh-TW',
    title: 'VuePress Study',
    description: 'A VuePress study project',
    host: 'localhost',
    port: 18080,
    base: '/VuePress-Study/',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        logoDark: 'https://vuejs.org/images/logo.png',
        darkMode: true,
        repo: 'Wujidadi/VuePress-Study',
        repoLabel: 'GitHub Repo',

        /* 各頁面一致的側邊欄 */
        sidebar: [
            {
                text: 'VuePress Study',
                link: '/'
            },
            {
                text: 'Other',
                children: [
                    {
                        text: 'TshiekSieg',
                        link: 'tshieksieg.html'
                    }
                ]
            },
            {
                text: 'VuePress 2 Official Site',
                link: 'https://v2.vuepress.vuejs.org/zh/'
            }
        ]

        /* 各頁面不同的側邊欄 */
        // sidebar: {
        //     '/': [
        //         {
        //             text: 'VuePress Study',
        //             link: '/'
        //         },
        //         {
        //             text: 'Other',
        //             children: [
        //                 {
        //                     text: 'TshiekSieg',
        //                     link: 'tshieksieg.html'
        //                 }
        //             ]
        //         },
        //         {
        //             text: 'VuePress 2 Official Site',
        //             link: 'https://v2.vuepress.vuejs.org/zh/'
        //         }
        //     ],
        //     '/tshieksieg.html': [
        //         {
        //             text: 'TshiekSieg',
        //             link: 'tshieksieg.html'
        //         },
        //         {
        //             text: 'VuePress Study',
        //             link: '/'
        //         },
        //         {
        //             text: 'VuePress 2 Official Site',
        //             link: 'https://v2.vuepress.vuejs.org/zh/'
        //         }
        //     ]
        // }
    },
    markdown: {
        anchor: {
            permalink: true,
            permalinkSymbol: '🔗'
        },
        code: {
            lineNumbers: false
        }
    },
    plugins: [
        ['@vuepress/plugin-search']
    ]
}