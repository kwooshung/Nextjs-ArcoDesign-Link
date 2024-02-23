import LinkContext from './linkContext';

describe('LinkContext 测试', () => {
  it('LinkContext 被成功创建', () => {
    expect(LinkContext).not.toBeUndefined();
  });

  it('LinkContext 默认值符合预期', () => {
    // 检查 LinkContext 是否具有预期的默认值
    const contextDefaultValue = (LinkContext as any)._currentValue;
    expect(contextDefaultValue.whiteList).toBeInstanceOf(Array);
  });
});
