import { render } from '@testing-library/react';

import Achievments from './achievments';

describe('Achievments', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Achievments />);
    expect(baseElement).toBeTruthy();
  });
});
