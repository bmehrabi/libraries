import React from 'react';
import {render} from '@testing-library/react';
import {DevelopmentProcess} from './DevelopmentProcess';

test('matches the snapshot', () => {
    const {container} = render(<DevelopmentProcess />);

    expect(container).toMatchSnapshot();
});
