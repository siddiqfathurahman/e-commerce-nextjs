// app/layout.tsx

import './styles/globals.css'; // Menggunakan alias
import Navbar from './components/Navbar'; // Menggunakan alias
import Footer from './components/Footer'; // Menggunakan alias

export const metadata = {
  title: 'My Next.js Website',
  description: 'This is a simple Next.js website with a Navbar and Footer.',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
