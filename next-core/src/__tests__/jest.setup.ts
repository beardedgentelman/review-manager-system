import "@testing-library/jest-dom";

jest.mock('next/navigation', () => jest.requireActual('next-router-mock'));

Object.defineProperty(window, 'confirm', {
  writable: true,
  value: jest.fn(),
})

Object.defineProperty(window, 'alert', {
  writable: true,
  value: jest.fn(),
})

jest.mock('axios', () => ({
  delete: jest.fn(),
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
}))

jest.mock('@/lib/actions', () => ({
  deleteReview: jest.fn(),
}));