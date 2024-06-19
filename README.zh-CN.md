<div align="center">

# @kwooshung/nextjs-arcodesign-link

[![GitHub License](https://img.shields.io/github/license/kwooshung/Nextjs-ArcoDesign-Link?labelColor=272e3b&color=165dff)](LICENSE)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/kwooshung/Nextjs-ArcoDesign-Link?labelColor=272e3b&color=00b42A&logo=github)
![GitHub last commit](https://img.shields.io/github/last-commit/kwooshung/Nextjs-ArcoDesign-Link?labelColor=272e3b&color=165dff)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/kwooshung/Nextjs-ArcoDesign-Link?labelColor=272e3b&color=165dff)
![GitHub top language](https://img.shields.io/github/languages/top/kwooshung/Nextjs-ArcoDesign-Link?labelColor=272e3b&color=165dff)
![GitHub pull requests](https://img.shields.io/github/issues-pr/kwooshung/Nextjs-ArcoDesign-Link?labelColor=272e3b&color=165dff)
![GitHub issues](https://img.shields.io/github/issues/kwooshung/Nextjs-ArcoDesign-Link?labelColor=272e3b&color=165dff)
![Github Stars](https://img.shields.io/github/stars/kwooshung/Nextjs-ArcoDesign-Link?labelColor=272e3b&color=165dff)
[![NPM Version](https://img.shields.io/npm/v/@kwooshung/nextjs-arcodesign-link?labelColor=272e3b&color=165dff)](https://www.npmjs.com/package/@kwooshung/nextjs-arcodesign-link)
[![Npm.js Downloads/Week](https://img.shields.io/npm/dw/@kwooshung/nextjs-arcodesign-link?labelColor=272e3b&labelColor=272e3b&color=165dff&logo=npm)](https://www.npmjs.com/package/@kwooshung/nextjs-arcodesign-link)
[![Github CI/CD](https://github.com/kwooshung/Nextjs-ArcoDesign-Link/actions/workflows/ci.yml/badge.svg)](https://github.com/kwooshung/Nextjs-ArcoDesign-Link/actions/)
[![codecov](https://codecov.io/gh/kwooshung/Nextjs-ArcoDesign-Link/graph/badge.svg?token=I8pXvFOtv9)](https://codecov.io/gh/kwooshung/Nextjs-ArcoDesign-Link)
[![Maintainability](https://api.codeclimate.com/v1/badges/5abb5096369ae941be2a/maintainability)](https://codeclimate.com/github/kwooshung/Nextjs-ArcoDesign-Link/maintainability)
[![Gitee Repo](https://img.shields.io/badge/Gitee-Nextjs--ArcoDesign--Link-165dff?logo=gitee)](https://gitee.com/kwooshung/Nextjs-ArcoDesign-Link/)

<p align="center">
    <a href="README.md">English</a> | 
    <a href="README.zh-CN.md" style="font-weight:700;color:#165dff;text-decoration:underline;">中文</a>
</p>
</div>

# 为什么开发它？

> 在 Next.js 项目中，官方建议是使用 Next.js Link 组件进行导航。 但是，将 Arco Design 的 Link 组件集成在 Next.js 中可能很麻烦。 该组件解决了此问题，提供了与两个框架的属性完全兼容，从而简化了其为开发人员的集成。

# 解决了什么痛点？

- 想要将 **Arco Design** 的 **Link** 组件集成到 **Next.js** 项目中，中间的兼容操作很麻烦。
- 该组件解决了此问题，提供了与两个框架的属性完全兼容，从而简化了其为开发人员的集成。
- 该组件提供了 **Arco Design** 的 **Link** 组件的所有属性，以及 **Next.js** 的 **Link** 组件的所有属性，从而使其在两个框架中的使用更加方便。

# 为什么使用它？

- 支持自动判断域名是否属于自己 `rel='noopener noreferrer'`，防止 **window.opener** 攻击，提高安全性；
- 支持通过 'LinkProvider' 组件设置全局链接白名单，自动判断是否需要添加 `rel='noopener noreferrer'`；
- 使用方便，操作简单，**学习成本低**，灵活性高；
- **ES6** 的现代特性实现；
- **TypeScript** 编写，类型安全；
- 可按需引入，**esm** 模块化，天生支持 **树摇（tree-shaking）**，不用担心打包后的体积；
- 当然本项目也提供了 **commonjs** 规范的 **cjs** 版本；
- 测试覆盖率 **100%**；

# 在线演示

- [CodeSandbox](https://codesandbox.io/p/devbox/nextjs-arcodesign-link-l8vhhj?file=%2Fapp%2Fpage.tsx%3A5%2C56)

# 安装

## npm

```bash
npm install @kwooshung/nextjs-arcodesign-link
```

## yarn

```bash
yarn add @kwooshung/nextjs-arcodesign-link
```

## pnpm

```bash
pnpm add @kwooshung/nextjs-arcodesign-link
```

# 使用方法

```tsx
import { LinkProvider, Link } from '@kwooshung/nextjs-arcodesign-link';

const App = () => {
  return (
    <LinkProvider>
      <Link href='#' status='error'>
        Error Link
      </Link>
      <Link href='#' status='error' disabled>
        Error Link
      </Link>
      <Link href='#' status='success'>
        Success Link
      </Link>
      <Link href='#' status='success' disabled>
        Success Link
      </Link>
      <Link href='#' status='warning'>
        Warning Link
      </Link>
      <Link href='#' status='warning' disabled>
        Warning Link
      </Link>
    </LinkProvider>
  );
};

export default App;
```

# API

- [NextJs App Router](https://nextjs.org/docs/app/api-reference/components/link)
- [Arco Design Link](https://arco.design/react/components/link)

## LinkProvider

全局链接配置，用于设置全局链接白名单，自动判断是否需要添加 `rel='noopener noreferrer'`。

### LinkProvider Props

| 属性      | 描述                                                                                                | 类型     | 默认值                                                                                                                                                                                                                                                                                                                                            |
| --------- | --------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| whitelist | 全局链接白名单，自动判断是否需要添加 `rel='noopener noreferrer'`                                    | string[] | ['zhidi.vip', 'wozhidi.vip', 'wozhidi.com', 'google.com', 'bing.com', 'baidu.com', 'yandex.ru', 'duckduckgo.com', 'yahoo.com', 'facebook.com', 'twitter.com', 'instagram.com', 'linkedin.com', 'weibo.com', 'zhihu.com', 'mp.weixin.qq.com', 'tiktok.com', 'douyin.com', 'pinterest.com', 'reddit.com', 'snapchat.com', 'telegram.org', 'vk.com'] |
| link      | 可传入自定义的链接组件，用于替换默认的链接组件；比如一些有路由功能的国际化组件，会导出专用的 `Link` | Link     | `-`                                                                                                                                                                                                                                                                                                                                               |

## Link

链接组件，结合了 **NextJs** 的 **Link** 组件和 **Arco Design** 的 **Link** 组件的所有属性。

### ArcoDesign Link Props

| 属性      | 描述                                     | 类型                              | 默认值 | 版本   |
| --------- | ---------------------------------------- | --------------------------------- | ------ | ------ |
| disabled  | 是否禁用                                 | boolean                           | `-`    | -      |
| hoverable | 悬浮状态是否有底色                       | boolean                           | `true` | 2.23.0 |
| status    | 不同状态                                 | 'error' \| 'success' \| 'warning' | `-`    | -      |
| className | 节点类名                                 | string \| string[]                | `-`    | -      |
| icon      | 显示图标，设置为 `true` 时展示默认图标。 | ReactNode \| boolean              | `-`    | -      |
| style     | 节点样式                                 | CSSProperties                     | `-`    | -      |

### NextJs Link Props

| 属性           | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                  | 类型                                       | 默认值  |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ------- |
| href           | 要导航到的路径或 URL。它也可以是一个对象。                                                                                                                                                                                                                                                                                                                                                                                            | string \| UrlObject                        | -       |
| as             | 将显示在浏览器 URL 栏中的路径的可选装饰器。 在 Next.js 9.5.3 之前，这用于动态路由，请查看我们的 [之前的文档](https://github.com/vercel/next.js/blob/v9.5.2/docs/api-reference/next/link .md#dynamic-routes) 看看它是如何工作的。 注意：当此路径与 `href` 中提供的路径不同时，将使用之前的 `href`/`as` 行为，如 [之前的文档](https://github.com/vercel/next.js/blob) 中所示 /v9.5.2/docs/api-reference/next/link.md#dynamic-routes）。 | string \| UrlObject                        | -       |
| replace        | 替换当前的“history”状态，而不是将新的 url 添加到堆栈中。                                                                                                                                                                                                                                                                                                                                                                              | boolean                                    | `false` |
| scroll         | 是否覆盖默认的滚动行为                                                                                                                                                                                                                                                                                                                                                                                                                | boolean                                    | `true`  |
| shallow        | 仅更新当前页面的路径，而不重新运行 [`getStaticProps`](/docs/basic-features/data-fetching/get-static-props.md)、[`getServerSideProps`](/docs/basic-features/data-fetching/get-server-side-props.md) 或 [`getInitialProps`](/docs/api-reference/data-fetching/get-initial-props.md)。                                                                                                                                                   | boolean                                    | `false` |
| passHref       | 强制 `Link` 将 `href` 属性发送到其子级。                                                                                                                                                                                                                                                                                                                                                                                              | boolean                                    | `false` |
| prefetch       | 在后台预取页面。任何在视口中的 `<Link />`（初始或通过滚动）都将被预加载。可以通过传递 `prefetch={false}` 来禁用预取。当 `prefetch` 设置为 `false` 时，预取仍将在悬停时发生。使用 [静态生成](/docs/basic-features/data-fetching/get-static-props.md) 的页面将预加载带有数据的 `JSON` 文件，以实现更快的页面转换。预取仅在生产中启用。                                                                                                  | boolean                                    | `true`  |
| locale         | 活动区域设置会自动添加到前面。 `locale` 允许提供不同的区域设置。 当“false”时，“href”必须包含区域设置，因为默认行为被禁用。                                                                                                                                                                                                                                                                                                            | string \| `false`                          | -       |
| legacyBehavior | 启用旧链接行为。                                                                                                                                                                                                                                                                                                                                                                                                                      | boolean                                    | `false` |
| onMouseEnter   | 当鼠标指针移动到链接上时的可选事件处理程序                                                                                                                                                                                                                                                                                                                                                                                            | React.MouseEventHandler<HTMLAnchorElement> | -       |
| onTouchStart   | 触摸链接时的可选事件处理程序                                                                                                                                                                                                                                                                                                                                                                                                          | React.TouchEventHandler<HTMLAnchorElement> | -       |
| onClick        | 单击链接时的可选事件处理程序                                                                                                                                                                                                                                                                                                                                                                                                          | React.MouseEventHandler<HTMLAnchorElement> | -       |
