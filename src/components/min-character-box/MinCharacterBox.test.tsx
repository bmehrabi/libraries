import MinCharacterBox from './MinCharacterBox';
import {render} from '@testing-library/react';

describe('MinCharacterBox Component', () => {
  it('matches the snapshot', () => {
    const {container} = render(<MinCharacterBox minLength={3} />);

    expect(container).toMatchSnapshot();
  });
})