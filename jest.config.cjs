module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(ts|js)x?$': 'babel-jest',
      '\\.(jpg|jpeg|png|gif|svg)$': 'jest-transform-stub',
    },
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'jest-transform-stub',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!(@lit|lit|lit-html|lit-element|@shoelace-style)/)',
    ],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  };