import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "../../components/CookieBanner";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-full flex flex-col">
      <Header />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
}