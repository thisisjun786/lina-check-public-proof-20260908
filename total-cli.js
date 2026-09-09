import { total } from './total.js';

function parseArgs(args) {
  if (args.length < 2 || args.length % 2 !== 0) return;
  const values = new Map();
  for (let i = 0; i < args.length; i += 2) {
    const flag = args[i];
    const raw = args[i + 1];
    if (!['--price', '--quantity'].includes(flag) || values.has(flag)) return;
    if (!/^[0-9]+(?:\.[0-9]+)?$/.test(raw)) return;
    const value = Number(raw);
    if (!Number.isFinite(value)) return;
    values.set(flag, value);
  }
  if (!values.has('--price')) return;
  return { price: values.get('--price'), quantity: values.get('--quantity') ?? 1 };
}

const item = parseArgs(process.argv.slice(2));
const result = item ? total([item]) : undefined;
if (!Number.isFinite(result)) {
  process.stderr.write('Usage: node total-cli.js --price NUMBER [--quantity NUMBER]\n');
  process.exitCode = 2;
} else {
  process.stdout.write(String(result) + '\n');
}
