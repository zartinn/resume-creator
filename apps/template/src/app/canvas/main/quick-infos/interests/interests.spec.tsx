import { render } from '@testing-library/react';

import Interests from './interests';

describe('Interests', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Interests />);
    expect(baseElement).toBeTruthy();
  });
});
