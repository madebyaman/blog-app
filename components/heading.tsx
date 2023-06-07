export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-4xl md:text-5xl font-bold text-red-600">{children}</h1>
  );
}
