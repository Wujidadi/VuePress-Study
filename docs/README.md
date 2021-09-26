---
head:
  - - link
    - rel: shortcut icon
      href: https://vuejs.org/images/logo.png
permalink: /index.html
# sidebar:
#   - text: VuePress Study
#     link: /
#   - text: Other
#     children:
#       - text: tshieksieg
#         link: tshieksieg.html
#   - text: VuePress 2 Official Site
#     link: https://v2.vuepress.vuejs.org/zh/
---
# Hello VuePress

This is a demo page of my VuePress study project.


[[toc]]


## Code Block

### JavaScript <Badge text="中文" vertical="middle" />

```js{2,5-7,10}:line-numbers
const vueApp = Vue.createApp({
    data() {
        return {
            subPages: [
                { href: 'sub/component/', text: '組件' },
                { href: 'sub/slot/', text: '插槽' }
            ]
        };
    }
});

vueApp.component('sub-page-list', {
    props: [ 'href', 'text' ],
    template: '<li><a v-bind:href="href" target="_blank">{{ text }}</a>'
});

const vueModel = vueApp.mount('#main-page');
```

### Plain Text

Language alias can be `none`, `null`, `undefined` or not append it. ([Prism#Examples](https://prismjs.com/#examples))
```{2,4}
Vue.js (commonly referred to as Vue; pronounced /vjuː/, like "view")
is an open-source model-view-viewmodel front end JavaScript framework
for building user interfaces and single-page applications.
It was created by Evan You,
and is maintained by him and
the rest of the active core team members.
```


## Table <Badge text="中文" vertical="middle" />

| No. | Name   | Comments   |
|:---:| ------ | ---------- |
| 1   | 朱元璋 | 太祖高皇帝 |
| 2   | 朱允炆 | 惠宗惠皇帝 |
| 3   | 朱棣   | 成祖文皇帝 |


## Emoji

VuePress 2 已經發布 :tada: ！


## Custom Containers <Badge text="中文" type="warning" vertical="middle" />

::: tip
這是一個提示
:::

::: warning
這是一個警告
:::

::: danger
這是一個危險警告
:::

::: details
這是一個詳情塊，在 IE / Edge 中不生效
:::


## Using Vue in Markdown

### Vue mustache parsing
There are {{ 2 + 5 }} people in the story.

### Use `v-pre` to escape vue parsing
> In v1.x, `v-pre` was also a custom container type to make this effect, but it is removed from v2.x.
<p v-pre>There are {{ 2 + 5 + ' books' }} in this room.</p>
