import { render } from '@testing-library/react';
import LinkProvider from './linkProvider';
import Link from '.';

describe('Link', () => {
  it('应正确渲染默认状态下的 Link 组件', () => {
    const { getByText } = render(<Link href='https://example.com'>链接文本</Link>);
    expect(getByText('链接文本')).toBeTruthy();
  });

  it('应正确应用自定义类名和样式 - 1', () => {
    const { container } = render(
      <Link href='https://example.com' className='custom-class' style={{ color: 'rgb(255, 0, 0)' }}>
        链接文本
      </Link>
    );

    const link = container.firstChild;
    expect(link).toHaveClass('custom-class');
    expect(link).toHaveStyle('color: rgb(255, 0, 0)');
  });

  it('应正确应用自定义类名和样式 - 2', () => {
    const { container } = render(
      <Link href='https://example.com' className={['aaa', 'bbb']} style={{ color: 'rgb(0, 0, 255)' }}>
        链接文本
      </Link>
    );

    const link = container.firstChild;
    expect(link).toHaveClass('aaa');
    expect(link).toHaveClass('bbb');
    expect(link).toHaveStyle('color: rgb(0, 0, 255)');
  });

  it('应正确处理不同的状态属性', () => {
    const { container } = render(
      <Link href='https://example.com' status='error'>
        链接文本
      </Link>
    );

    expect(container.querySelector('span')).toHaveClass('arco-link');
  });

  it('应正确处理 disabled 属性', () => {
    const { container } = render(
      <Link href='https://example.com' disabled>
        链接文本
      </Link>
    );
    const link = container.querySelector('.arco-link');
    expect(link).toHaveClass('arco-link-disabled');
  });

  it('应正确处理 hoverable 属性', () => {
    const { container } = render(
      <Link href='https://example.com' hoverable={false}>
        链接文本
      </Link>
    );

    const link = container.querySelector('.arco-link');
    expect(link).toHaveClass('arco-link-hoverless');
  });

  it('应正确处理a原生属性', () => {
    const { container } = render(
      <Link href='https://example.com' hoverable={false} target='_blank' download='file.zip'>
        链接文本
      </Link>
    );

    const link = container.querySelector('a');
    const span = link?.querySelector('span');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('download', 'file.zip');
    expect(span).toHaveClass('arco-link-hoverless');
  });

  it('没有设置rel，url 是外部链接，则加入 rel', () => {
    const { container } = render(
      <Link href='https://example.com' hoverable={false} target='_blank'>
        链接文本
      </Link>
    );

    const link = container.querySelector('a');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('没有设置rel，url 是内部链接，则没有 rel', () => {
    const { container } = render(
      <Link href='/a/b/c' hoverable={false} target='_blank'>
        链接文本
      </Link>
    );

    const link = container.querySelector('a');
    expect(link).not.toHaveAttribute('rel');
  });

  it('没有设置rel，url 是外部链接，但属于白名单，则没有 rel', () => {
    const { container } = render(
      <LinkProvider whiteList={['example.com']}>
        <Link href='https://example.com' hoverable={false} target='_blank'>
          链接文本
        </Link>
      </LinkProvider>
    );

    const link = container.querySelector('a');
    expect(link).not.toHaveAttribute('rel');
  });

  it('没有设置rel，url 是对象形式的链接，虽有白名单，但是内部链接，则没有 rel', () => {
    const { container } = render(
      <LinkProvider whiteList={['example.com']}>
        <Link href={{ pathname: '/about', query: { name: 'test' } }} hoverable={false} target='_blank'>
          链接文本
        </Link>
      </LinkProvider>
    );

    const link = container.querySelector('a');
    expect(link).not.toHaveAttribute('rel');
  });

  it('设置rel，url 是对象形式的链接，虽有白名单，也是内部链接，强制加上rel，也要有的', () => {
    const { container } = render(
      <LinkProvider whiteList={['example.com']}>
        <Link href={{ pathname: '/blog/slug', query: { slug: 'my-post' } }} hoverable={false} target='_blank' rel='noopener noreferrer'>
          链接文本
        </Link>
      </LinkProvider>
    );

    const link = container.querySelector('a');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('测试默认白名单是否有效', () => {
    const { container } = render(
      <LinkProvider>
        <Link href='https://www.zhihu.com/question/644826107' hoverable={false} target='_blank'>
          链接文本
        </Link>
      </LinkProvider>
    );

    const link = container.querySelector('a');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
