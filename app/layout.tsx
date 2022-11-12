import '@/styles/main.css';
import type { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
  let { children } = props;

  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
