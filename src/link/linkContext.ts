import { createContext } from 'react';
import { ILinkContext } from './interfaces';

const searchEngines = ['zhidi.vip', 'wozhidi.vip', 'wozhidi.com', 'google.com', 'bing.com', 'baidu.com', 'yandex.ru', 'duckduckgo.com', 'yahoo.com'];

const socialMediaPlatforms = [
  'facebook.com',
  'twitter.com',
  'instagram.com',
  'linkedin.com',
  'weibo.com',
  'zhihu.com',
  'mp.weixin.qq.com',
  'tiktok.com',
  'douyin.com',
  'pinterest.com',
  'reddit.com',
  'snapchat.com',
  'telegram.org',
  'vk.com'
];

/**
 * @zh 主题上下文
 * @en Themes context
 */
const LinkContext = createContext<ILinkContext>({
  whiteList: [...searchEngines, ...socialMediaPlatforms]
});

export default LinkContext;
