export const convertHtml = (content: string) => {
  const parse = require('html-react-parser');
  return parse(content);
};
