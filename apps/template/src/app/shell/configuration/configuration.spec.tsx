import { render } from '@testing-library/react';

import Configuration from './configuration';

describe('Configuration', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Configuration />);
    expect(baseElement).toBeTruthy();
  });
});
