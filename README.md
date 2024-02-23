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
    <a href="README.md" style="font-weight:700;color:#165dff;text-decoration:underline;">English</a> | 
    <a href="README.zh-CN.md">中文</a>
</p>
</div>

# Why Develop It?

> In Next.js projects, it's officially recommended to use the Next.js Link component for navigation. However, integrating the Arco Design Link component in Next.js can be cumbersome. This component resolves this issue by offering full compatibility with the properties of both frameworks, thereby simplifying integration for developers.

# What Pain Points Does It Solve?

- Integrating the **Arco Design** **Link** component into a **Next.js** project can be a hassle due to compatibility issues.
- This component addresses these problems by offering full compatibility with the attributes of both frameworks, simplifying integration for developers.
- It provides all the properties of the **Arco Design** **Link** component, as well as all the properties of the **Next.js** **Link** component, making it more convenient to use in both frameworks.

# Why Use It?

- Easy to use, simple operation, **low learning curve**, and high flexibility.
- Implemented with modern **ES6** features.
- Written in **TypeScript** for type safety.
- Supports on-demand import, **esm** modularization, naturally supports **tree-shaking**, so no worries about the size of the package after bundling.
- Also provides a **commonjs** version in **cjs** format.
- Test coverage of **100%**.

# Demo

- [CodeSandbox](https://codesandbox.io/p/devbox/nextjs-arcodesign-link-l8vhhj?file=%2Fapp%2Fpage.tsx%3A5%2C56)

# Installation

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

# Usage

```tsx
import { Link } from '@kwooshung/nextjs-arcodesign-link';

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
```

# API

- [NextJs App Router](https://nextjs.org/docs/app/api-reference/components/link)
- [Arco Design Link](https://arco.design/react/components/link)

## ArcoDesign Link

| Property  | Description                                               | Type                              | DefaultValue | Version |
| --------- | --------------------------------------------------------- | --------------------------------- | ------------ | ------- |
| disabled  | Whether to disable                                        | boolean                           | `-`          | -       |
| hoverable | Whether to hide background when hover                     | boolean                           | `true`       | 2.23.0  |
| status    | The status of `Link`                                      | 'error' \| 'success' \| 'warning' | `-`          | -       |
| className | Additional css class                                      | string \| string[]                | `-`          | -       |
| icon      | Custom Icon, Display the default icon when set to `true`. | ReactNode \| boolean              | `-`          | -       |
| style     | Additional style                                          | CSSProperties                     | `-`          | -       |

## NextJs Link

| Property       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Type                                       | DefaultValue |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ------------ |
| href           | The path or URL to navigate to. It can also be an object.                                                                                                                                                                                                                                                                                                                                                                                                                                                             | string \| UrlObject                        | -            |
| as             | Optional decorator for the path that will be shown in the browser URL bar. Before Next.js 9.5.3 this was used for dynamic routes, check our [previous docs](https://github.com/vercel/next.js/blob/v9.5.2/docs/api-reference/next/link.md#dynamic-routes) to see how it worked. Note: when this path differs from the one provided in `href` the previous `href`/`as` behavior is used as shown in the [previous docs](https://github.com/vercel/next.js/blob/v9.5.2/docs/api-reference/next/link.md#dynamic-routes). | string \| UrlObject                        | -            |
| replace        | Replace the current `history` state instead of adding a new url into the stack.                                                                                                                                                                                                                                                                                                                                                                                                                                       | boolean                                    | `false`      |
| scroll         | Whether to override the default scroll behavior                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | boolean                                    | `true`       |
| shallow        | Update the path of the current page without rerunning [`getStaticProps`](/docs/basic-features/data-fetching/get-static-props.md), [`getServerSideProps`](/docs/basic-features/data-fetching/get-server-side-props.md) or [`getInitialProps`](/docs/api-reference/data-fetching/get-initial-props.md).                                                                                                                                                                                                                 | boolean                                    | `false`      |
| passHref       | Forces `Link` to send the `href` property to its child.                                                                                                                                                                                                                                                                                                                                                                                                                                                               | boolean                                    | `false`      |
| prefetch       | The active locale is automatically prepended. `locale` allows for providing a different locale. When `false` `href` has to include the locale as the default behavior is disabled.                                                                                                                                                                                                                                                                                                                                    | boolean                                    | `true`       |
| locale         | Enable legacy link behavior.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | string \| false                            | -            |
| legacyBehavior | Enable legacy link behavior.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | boolean                                    | `false`      |
| onMouseEnter   | Optional event handler for when the mouse pointer is moved onto Link                                                                                                                                                                                                                                                                                                                                                                                                                                                  | React.MouseEventHandler<HTMLAnchorElement> | -            |
| onTouchStart   | Optional event handler for when Link is touched                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | React.TouchEventHandler<HTMLAnchorElement> | -            |
| onClick        | Optional event handler for when Link is clicked                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | React.MouseEventHandler<HTMLAnchorElement> | -            |
