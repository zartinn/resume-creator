import { render } from '@testing-library/react';

import QuickInfos from './quick-infos';

describe('QuickInfos', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QuickInfos />);
    expect(baseElement).toBeTruthy();
  });
});
