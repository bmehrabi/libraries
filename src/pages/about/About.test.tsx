import React from 'react';
import {render} from '@testing-library/react';
import {About} from "./About";

test('matches the snapshot', () => {
    const {container} = render(<About />);

    expect(container).toMatchSnapshot();
});
