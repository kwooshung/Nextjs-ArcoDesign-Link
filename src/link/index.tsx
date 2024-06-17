import { FC, ReactNode, useContext, useEffect, useState } from 'react';
import LinkNext from 'next/link';
import { Link as LinkArcoDesign } from '@arco-design/web-react';
import LinkContext from './linkContext';
import { ILinkProps } from './interfaces';

/**
 * 组件：链接组件
 */
const Link: FC<ILinkProps> = ({
  className,
  style,
  icon,
  status,
  disabled,
  hoverable,
  href = '',
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  locale,
  legacyBehavior,
  rel,
  onMouseEnter,
  onTouchStart,
  onClick,
  children,
  ...restProps
}: ILinkProps): ReactNode => {
  const context = useContext(LinkContext);
  const [computedRel, setComputedRel] = useState<string | undefined>(rel);

  /**
   * @zh 计算 `rel` 属性
   * @en Calculate the `rel` attribute
   */
  useEffect(() => {
    if (href && rel === undefined) {
      const hrefHostname = typeof href === 'string' ? new URL(href, window.location.origin).hostname : href?.hostname;
      const isInWhitelist = context?.whiteList?.some((domain) => hrefHostname?.endsWith(domain));

      if (!isInWhitelist) {
        const isExternal = hrefHostname && hrefHostname !== window.location.hostname;
        setComputedRel(isExternal ? 'noopener noreferrer' : undefined);
      } else {
        setComputedRel(rel);
      }
    }
  }, [context?.whiteList, href, rel]);

  return (
    <LinkNext
      {...{ style, href, as, replace, scroll, shallow, passHref, prefetch, locale, legacyBehavior, onMouseEnter, onTouchStart, onClick }}
      {...restProps}
      rel={computedRel}
      className={className ? (Array.isArray(className) ? className.join(' ') : className) : undefined}>
      <LinkArcoDesign {...{ style, icon, status, disabled, hoverable }}>{children}</LinkArcoDesign>
    </LinkNext>
  );
};

export default Link;
