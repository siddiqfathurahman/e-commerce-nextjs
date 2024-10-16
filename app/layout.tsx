import './styles/globals.css'; 
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import ProductGrid from './components/ProductGrid';


export const metadata = {
  title: 'My Next.js Website',
  description: 'This is a simple Next.js website with a Navbar and Footer.',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        
        <ProductGrid /> 
        <Footer />
        
      </body>
    </html>
  );
};

export default Layout;
