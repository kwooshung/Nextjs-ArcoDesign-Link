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
  status = 'default',
  disabled,
  hoverable,
  href,
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
  children
}: ILinkProps): ReactNode => {
  return (
    <LinkNext
      {...{ href, as, replace, scroll, shallow, passHref, prefetch, locale, legacyBehavior, onMouseEnter, onTouchStart, onClick }}
      className={status === 'default' ? (className ? (Array.isArray(className) ? className.join(' ') : className) : '') : ''}
      style={status === 'default' ? style : {}}>
      {status === 'default' ? children : <LinkArcoDesign {...{ className, style, icon, status, disabled, hoverable }}>{children}</LinkArcoDesign>}
    </LinkNext>
  );
};

export default Link;
