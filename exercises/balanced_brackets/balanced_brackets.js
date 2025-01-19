function isBalanced(s) {
  const stack = [];
  const bracketMap = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of s) {
    // If it's a closing bracket
    if (bracketMap[char]) {
      // Check if the stack is empty or the top doesn't match
      if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
        return false;
      }
    } else {
      // If it's an opening bracket, push it onto the stack
      if (char === '(' || char === '{' || char === '[') {
        stack.push(char);
      }
    }
  }

  // If the stack is empty, the brackets are balanced
  return stack.length === 0;
}