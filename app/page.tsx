import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-grow p-8 text-center">
        <h1 className="text-4xl font-bold">Welcome to My Next.js Website!</h1>
        <p className="mt-4 text-lg">This is a simple website with a Navbar and Footer.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
