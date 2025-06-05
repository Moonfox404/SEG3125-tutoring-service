import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-dvw h-dvh flex justify-center items-center">
      <div className="bg-white w-full">
        <NavBar />
        {/* content here (mock space for now) */}
        <div className="h-[120vh]"></div>
        <Footer />
      </div>
    </div>
  );
}
