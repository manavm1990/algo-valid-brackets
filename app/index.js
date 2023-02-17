export const isValidBracketsBracesParentheses = (str) => {
  // Get rid of the each and every character that is not a bracket, brace or parenthesis
  const bracketBraceParenthesisOnly = str.replace(/[^(){}[\]]/g, "");

  // If the string is empty, return true
  if (!bracketBraceParenthesisOnly) return true;

  // If the string has an odd length, return false
  if (bracketBraceParenthesisOnly.length % 2 !== 0) return false;

  // For non-nested, they should be right next to each other. Try.
  if (bracketBraceParenthesisOnly.match(/(\(\))|(\[\])|(\{\})/g)) return true;

  // For nested, we'll divide in half (it's already even length)
  const halfLength = bracketBraceParenthesisOnly.length / 2;
  const leftHalf = bracketBraceParenthesisOnly.slice(0, halfLength);
  const rightHalf = bracketBraceParenthesisOnly.slice(halfLength);

  // If the left half has a closing bracket, brace or parenthesis, return false
  if (leftHalf.match(/(\))|(\])|(\})/g)) return false;

  // If the right half has an opening bracket, brace or parenthesis, return false
  if (rightHalf.match(/(\()|(\[)|(\{)/g)) return false;

  // Check corresponding pairs via indices (split to arrays)
  const leftHalfSplit = leftHalf.split("");
  const rightHalfSplit = rightHalf.split("");

  return leftHalfSplit.every((char, index) => {
    switch (char) {
      case "(":
        return rightHalfSplit[halfLength - index - 1] === ")";
      case "[":
        return rightHalfSplit[halfLength - index - 1] === "]";
      case "{":
        return rightHalfSplit[halfLength - index - 1] === "}";
      default:
        return false;
    }
  });
};
