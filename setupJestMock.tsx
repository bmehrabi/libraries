import * as ResizeObserverModule from 'resize-observer-polyfill';
import fetchMock from 'jest-fetch-mock';

(global as any).ResizeObserver = ResizeObserverModule.default;

const MockResponsiveContainer = (props: object) => <div {...props} />

jest.mock('recharts', () => ({
    ...jest.requireActual('recharts'),
    ResponsiveContainer: MockResponsiveContainer,
}));

fetchMock.enableMocks();