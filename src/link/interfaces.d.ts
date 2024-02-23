// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ReactNode, CSSProperties, AnchorHTMLAttributes } from 'react';
import type { UrlObject } from 'url';
type Url = string | UrlObject;

/**
 * @zh 链接组件属性
 * @en Link Component Props
 */
export interface ILinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> {
  /**
   * @zh 类样式
   * @en Class style
   */
  className?: string | string[];
  /**
   * @zh 行内样式
   * @en Inline style
   */
  style?: CSSProperties;
  /**
   * @zh 显示图标，设置为 `true` 时展示默认图标。
   * @en Custom Icon, Display the default icon when set to `true`.
   */
  icon?: ReactNode | boolean;
  /**
   * @zh 不同状态
   * @en The status of `Link`
   */
  status?: 'error' | 'success' | 'warning';
  /**
   * @zh 是否禁用
   * @en Whether to disable
   */
  disabled?: boolean;
  /**
   * @zh 悬浮状态是否有底色
   * @en Whether to hide background when hover
   * @defaultValue true
   * @version 2.23.0
   */
  hoverable?: boolean;
  /**
   * @zh 要导航到的路径或 URL。它也可以是一个对象。
   * @en The path or URL to navigate to. It can also be an object.
   *
   * @example https://nextjs.org/docs/api-reference/next/link#with-url-object
   */
  href: Url;
  /**
   * @zh 将显示在浏览器 URL 栏中的路径的可选装饰器。 在 Next.js 9.5.3 之前，这用于动态路由，请查看我们的[以前的文档](https://github.com/vercel/next.js/blob/v9.5.2/docs/api-reference/next/link .md#dynamic-routes）看看它是如何工作的。 注意：当此路径与 `href` 中提供的路径不同时，将使用之前的 `href`/`as` 行为，如 [之前的文档](https://github.com/vercel/next.js/blob) 中所示 /v9.5.2/docs/api-reference/next/link.md#dynamic-routes）。
   * @en Optional decorator for the path that will be shown in the browser URL bar. Before Next.js 9.5.3 this was used for dynamic routes, check our [previous docs](https://github.com/vercel/next.js/blob/v9.5.2/docs/api-reference/next/link.md#dynamic-routes) to see how it worked. Note: when this path differs from the one provided in `href` the previous `href`/`as` behavior is used as shown in the [previous docs](https://github.com/vercel/next.js/blob/v9.5.2/docs/api-reference/next/link.md#dynamic-routes).
   */
  as?: Url;
  /**
   * @zh 替换当前的“history”状态，而不是将新的 url 添加到堆栈中。
   * @en Replace the current `history` state instead of adding a new url into the stack.
   * @defaultValue `false`
   */
  replace?: boolean;
  /**
   * @zh 打开目标
   * @en Open target
   */
  target?: '_self' | '_blank' | '_parent' | '_top' | string;
  /**
   * @zh 是否覆盖默认的滚动行为
   * @en Whether to override the default scroll behavior
   * @example https://nextjs.org/docs/api-reference/next/link#disable-scrolling-to-the-top-of-the-page
   * @defaultValue `true`
   */
  scroll?: boolean;
  /**
   * @zh 仅更新当前页面的路径，而不重新运行 [`getStaticProps`](/docs/basic-features/data-fetching/get-static-props.md)、[`getServerSideProps`](/docs/basic-features/data-fetching/get-server-side-props.md) 或 [`getInitialProps`](/docs/api-reference/data-fetching/get-initial-props.md)。
   * @en Update the path of the current page without rerunning [`getStaticProps`](/docs/basic-features/data-fetching/get-static-props.md), [`getServerSideProps`](/docs/basic-features/data-fetching/get-server-side-props.md) or [`getInitialProps`](/docs/api-reference/data-fetching/get-initial-props.md).
   * @defaultValue `false`
   */
  shallow?: boolean;
  /**
   * @zh 强制 `Link` 将 `href` 属性发送到其子级。
   * @en Forces `Link` to send the `href` property to its child.
   * @defaultValue `false`
   */
  passHref?: boolean;
  /**
   * @zh 在后台预取页面。任何在视口中的 `<Link />`（初始或通过滚动）都将被预加载。可以通过传递 `prefetch={false}` 来禁用预取。当 `prefetch` 设置为 `false` 时，预取仍将在悬停时发生。使用 [静态生成](/docs/basic-features/data-fetching/get-static-props.md) 的页面将预加载带有数据的 `JSON` 文件，以实现更快的页面转换。预取仅在生产中启用。
   * @en Prefetch the page in the background. Any `<Link />` that is in the viewport (initially or through scroll) will be preloaded. Prefetch can be disabled by passing `prefetch={false}`. When `prefetch` is set to `false`, prefetching will still occur on hover. Pages using [Static Generation](/docs/basic-features/data-fetching/get-static-props.md) will preload `JSON` files with the data for faster page transitions. Prefetching is only enabled in production.
   *
   * @defaultValue `true`
   */
  prefetch?: boolean;
  /**
   * @zh 活动区域设置会自动添加到前面。 `locale` 允许提供不同的区域设置。 当“false”时，“href”必须包含区域设置，因为默认行为被禁用。
   * @en The active locale is automatically prepended. `locale` allows for providing a different locale. When `false` `href` has to include the locale as the default behavior is disabled.
   */
  locale?: string | false;
  /**
   * @zh 启用旧链接行为。
   * @en Enable legacy link behavior.
   * @defaultValue `false`
   * @see https://github.com/vercel/next.js/commit/489e65ed98544e69b0afd7e0cfc3f9f6c2b803b7
   */
  legacyBehavior?: boolean;
  /**
   * @zh 当鼠标指针移动到链接上时的可选事件处理程序
   * @en Optional event handler for when the mouse pointer is moved onto Link
   */
  onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
  /**
   * @zh 触摸链接时的可选事件处理程序。
   * @en Optional event handler for when Link is touched.
   */
  onTouchStart?: React.TouchEventHandler<HTMLAnchorElement>;
  /**
   * @zh 单击链接时的可选事件处理程序。
   * @en Optional event handler for when Link is clicked.
   */
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  /**
   * @zh 子元素
   * @en Child element
   */
  children: ReactNode;
}
