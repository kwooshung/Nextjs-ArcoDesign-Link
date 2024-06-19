import { FC, ReactNode } from 'react';
import LinkContext from './linkContext';
import { ILinkProviderProps } from './interfaces';

/**
 * @zh 组件：链接提供者
 * @en Component: Link provider
 * @param {ILinkProviderProps} props 属性
 * @return {ReactNode} React节点
 */
const LinkProvider: FC<ILinkProviderProps> = ({ link, whiteList, children }: ILinkProviderProps): ReactNode => <LinkContext.Provider value={{ link, whiteList }}>{children}</LinkContext.Provider>;

export default LinkProvider;
