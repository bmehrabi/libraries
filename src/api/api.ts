const API_BASE_URI = 'https://libraries.io/api/';
const API_SEARCH_URL = API_BASE_URI + 'search';

/**
 * Returns the search URL for a specific query.
 * @param query Search query.
 * @param sortByStars Sets the sort parameter to star in the URI parameters.
 * @returns Search URI.
 */
export const getSearchUri = (query: string, sortByStars?: boolean): string => {
  const apiKey = process.env.REACT_APP_API_KEY;

  return `${API_SEARCH_URL}?api_key=${apiKey}&q=${query}` + (sortByStars ? '&sort=stars' : '');
}