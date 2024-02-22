import { render } from '@testing-library/react';
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
    expect(container.firstChild).toMatchSnapshot();
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
});
