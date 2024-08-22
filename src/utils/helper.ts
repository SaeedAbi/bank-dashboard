export function debounce(fn: (...args: unknown[]) => void, delay: number) {
  let timerId: ReturnType<Window['setTimeout']>;

  return (...args: unknown[]) => {
    window.clearTimeout(timerId);
    timerId = window.setTimeout(() => fn(...args), delay);
  };
}
