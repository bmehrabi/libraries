import {getSearchUri} from './api';

describe('Api', () => {
  describe('getSearchUri', () => {
    const originalEnv = process.env;

    beforeEach(() => {
      jest.resetModules();
      process.env = {
        ...originalEnv,
        REACT_APP_API_KEY: 'KEY',
      };
    });

    it('returns search URI for a specific query', () => {
      expect(getSearchUri('query')).toBe('https://libraries.io/api/search?api_key=KEY&q=query');
    });
  });
});