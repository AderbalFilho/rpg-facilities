export const isLocalStorageAvailable = () => {
  const test = 'test';

  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (_e) {
    return false;
  }
}
