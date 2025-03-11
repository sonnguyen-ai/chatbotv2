module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(ts|js|mjs)x?$': 'babel-jest',
      '\\.(jpg|jpeg|png|gif|svg)$': 'jest-transform-stub',
    },
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'jest-transform-stub',
    },
    transformIgnorePatterns: [
      
    ],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  };