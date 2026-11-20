import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://q3chang.github.io'),
  title: 'Gyusam Chang | Home',
  description: 'Gyusam Chang is a Ph.D. candidate in Artificial Intelligence at Korea University. His research focuses on bridging deep theoretical insights with practical applications for the next generation of AI.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        {children}
        <footer className="page-shell site-footer">
          Gyusam Chang <span aria-hidden="true">/</span>{' '}
          <a href="mailto:gsjang95@korea.ac.kr">gsjang95@korea.ac.kr</a>
        </footer>
      </body>
    </html>
  );
}
