import * as ResizeObserverModule from 'resize-observer-polyfill';

(global as any).ResizeObserver = ResizeObserverModule.default;

const MockResponsiveContainer = props => <div {...props} />

jest.mock('recharts', () => ({
    ...jest.requireActual('recharts'),
    ResponsiveContainer: MockResponsiveContainer,
}))