export function debounce(fn: (...args: unknown[]) => void, delay: number) {
  let timerId: ReturnType<Window['setTimeout']>;

  return (...args: unknown[]) => {
    window.clearTimeout(timerId);
    timerId = window.setTimeout(() => fn(...args), delay);
  };
}
export function isServer(): boolean {
  return typeof window === 'undefined';
}

// amount in `ms`
export async function sleep(delay: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export async function randomDelayForAPIServices() {
  const randomNumber = Math.random();
  return sleep(randomNumber * 2 + 1);
}
