import { FC, ReactNode } from 'react';
import LinkNext from 'next/link';
import { Link as LinkArcoDesign } from '@arco-design/web-react';
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
  href,
  target,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  locale,
  legacyBehavior,
  onMouseEnter,
  onTouchStart,
  onClick,
  children,
  ...restProps
}: ILinkProps): ReactNode => {
  return (
    <LinkNext
      {...{ style, href, as, replace, scroll, shallow, passHref, prefetch, locale, legacyBehavior, onMouseEnter, onTouchStart, onClick }}
      {...restProps}
      className={className ? (Array.isArray(className) ? className.join(' ') : className) : ''}>
      <LinkArcoDesign {...{ style, icon, status, disabled, hoverable }}>{children}</LinkArcoDesign>
    </LinkNext>
  );
};

export default Link;
