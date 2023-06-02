export default function clsx(...args: (string | undefined | null | false)[]) {
  return args.filter(Boolean).join(' ');
}
