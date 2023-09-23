export default function Typography({
  sx = {},
  element,
  children,
}: {
  sx?: { [key: string]: any };
  element: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
}) {
  const Element = element;
  return <Element className="md:text-3xl xs:text-2xl font-serif uppercase" style={sx}>{children}</Element>;
}
