import React from 'react';
import { render } from '@testing-library/react';
import {ListItem} from "@mui/material";

test('matches the snapshot', () => {
    const {container} = render(<ListItem />);

    expect(container).toMatchSnapshot();
});
