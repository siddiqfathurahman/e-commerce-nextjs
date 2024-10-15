// app/layout.tsx

import Navbar from '@/components/Navbar.tsx'; // Menggunakan alias
import Footer from '@/components/Footer.tsx'; // Menggunakan alias
import '@/styles/globals.css'; // Menggunakan alias

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
