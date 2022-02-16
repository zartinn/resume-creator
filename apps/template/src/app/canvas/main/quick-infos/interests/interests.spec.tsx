import { render } from '@testing-library/react';

import Interests from './interests';

describe('Interests', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Interests interests={null}/>);
    expect(baseElement).toBeTruthy();
  });
});
