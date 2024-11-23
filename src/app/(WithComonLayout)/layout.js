import Footer from "@/Components/Module/Footer/Footer";
import Navbar from "@/Components/Module/Navbar/Navbar";

export default function HomeLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
