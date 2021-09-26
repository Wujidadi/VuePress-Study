const sidebars = require('./sidebar.js');

module.exports = {
    lang: 'zh-TW',
    title: 'VuePress Study',
    description: 'A VuePress study project',
    host: 'localhost',
    port: 18080,
    // base: '/VuePress-Study/',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        logoDark: 'https://vuejs.org/images/logo.png',
        darkMode: true,
        repo: 'Wujidadi/VuePress-Study',
        repoLabel: 'GitHub Repo',
        docsDir: 'docs',

        /* 各頁面一致的側邊欄 */
        sidebar: sidebars.integrated

        /* 各頁面不同的側邊欄 */
        // sidebar: sidebars.divided
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