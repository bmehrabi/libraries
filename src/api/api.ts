const API_BASE_URI = 'https://libraries.io/api/';
const API_SEARCH_URL = API_BASE_URI + 'search';

/**
 * Returns the search URL for a specific query.
 * @param query
 * @returns Search URI.
 */
export const getSearchUri = (query: string): string => {
  const apiKey = process.env.REACT_APP_API_KEY;

  return `${API_SEARCH_URL}?api_key=${apiKey}&q=${query}`;
}