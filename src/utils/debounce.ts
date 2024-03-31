let debounceTimer: NodeJS.Timeout;

export function debounce(func: () => void, interval: number) {
  window.clearInterval(debounceTimer);
  debounceTimer = setTimeout(func, interval);
}
