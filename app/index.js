export const isValidBracketsBracesParentheses = (str) => {
  // Get rid of the each and every character that is not a bracket, brace or parenthesis
  const bracketBraceParenthesisOnly = str.replace(/[^(){}[\]]/g, "");

  // If the string is empty, return true
  if (!bracketBraceParenthesisOnly) return true;

  // If the string has an odd length, return false
  if (bracketBraceParenthesisOnly.length % 2 !== 0) return false;
};
