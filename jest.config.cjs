module.exports = {
    roots: ['<rootDir>/src'],
    collectCoverage: false,
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
    coverageDirectory: "coverage",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testMatch: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test|tests).[tj]s?(x)',
    ],
    coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/src/main.tsx'],
    moduleNameMapper: {
        '^.+\\.module\\.(css|less)$': 'identity-obj-proxy',
        '^.+\\.(css|sass|scss)$': '<rootDir>/src/fileTransform.js',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/fileTransform.js',
        '@root/(.*)': '<rootDir>/$1',
        '@components/(.*)': '<rootDir>/src/components/$1',
        '@constants/(.*)': '<rootDir>/src/constants/$1',
        '@utils/(.*)': '<rootDir>/src/utils/$1',
        '@hooks/(.*)': '<rootDir>/src/hooks/$1',
        '@services/(.*)': '<rootDir>/src/services/$1',
        '@entities/(.*)': '<rootDir>/src/entities/$1',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
