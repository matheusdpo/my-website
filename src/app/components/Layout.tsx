import Header from "./Header";
import Footer from "./Footer";
import Aside from "./Aside";
import Background from "./Background";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <Background />
      <Aside />
      <div className="flex-1 flex flex-col items-center p-6 md:ml-20 w-full relative z-10">
        <Header />
        {children}
        <Footer />
      </div>
    </main>
  );
}