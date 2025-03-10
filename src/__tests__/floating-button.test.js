import FloatingButton from '../floating-button';

describe('FloatingButton Component', () => {
  it('renders FloatingButton component', () => {
    document.body.innerHTML = '<floating-button></floating-button>';
    const floatingButton = document.querySelector('floating-button');
    expect(document.body.contains(floatingButton)).toBe(true);
  });
});
