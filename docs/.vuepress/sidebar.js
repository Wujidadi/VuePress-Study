const sidebar = {
    integrated: [
        {
            text: 'VuePress Study',
            link: '/index.html'
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
    ],
    divided: {
        '/index.html': [
            {
                text: 'VuePress Study',
                link: '/index.html'
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
        ],
        '/tshieksieg.html': [
            {
                text: 'TshiekSieg',
                link: 'tshieksieg.html'
            },
            {
                text: 'VuePress Study',
                link: '/index.html'
            },
            {
                text: 'VuePress 2 Official Site',
                link: 'https://v2.vuepress.vuejs.org/zh/'
            }
        ]
    }
};

module.exports = sidebar;
