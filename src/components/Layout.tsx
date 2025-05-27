import Header from "@/components/Header";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="pt-20">{children}</main> {/* Padding to avoid content under header */}
      <FooterCTA />
      <Footer />
    </>
  );
}
