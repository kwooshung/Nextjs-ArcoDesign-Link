import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import LinkContext from './linkContext';
import LinkProvider from './linkProvider';

describe('LinkProvider', () => {
  it('应正确传递 whiteList 和 children 到 Context', () => {
    const testWhiteList = ['https://example.com'];
    const testContent = '测试内容';

    const wrapper = ({ children }: any) => <LinkProvider whiteList={testWhiteList}>{children}</LinkProvider>;

    const { getByText } = render(
      <LinkContext.Consumer>
        {(context) => {
          expect(context.whiteList).toEqual(testWhiteList);
          return <div>{testContent}</div>;
        }}
      </LinkContext.Consumer>,
      { wrapper }
    );

    expect(getByText(testContent)).toBeInTheDocument();
  });
});
