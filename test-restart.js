const crashAfterMs = process.env.CRASH_AFTER_MS || 5000;

console.log(`App started. Will crash after ${crashAfterMs}ms`);

setTimeout(() => {
  console.error('Forcing crash with exit code 1');
  process.exit(1);
}, crashAfterMs);