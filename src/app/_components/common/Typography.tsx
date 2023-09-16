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
  return <Element style={sx}>{children}</Element>;
}
