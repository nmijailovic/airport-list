import sanitizeHtml from 'sanitize-html';

/**
 * Performs HTML sanitization process
 * For more details, look at https://github.com/apostrophecms/sanitize-html
 * @param {*} html
 */
export const cleanHtml = html => {
  return sanitizeHtml(html);
};
