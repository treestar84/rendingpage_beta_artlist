import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import Features from "@/components/Features";
import Comparison from "@/components/Comparison";
import FAQ, { faqData } from "@/components/FAQ";
import BrandStory from "@/components/BrandStory";
import Footer from "@/components/Footer";
import { FAQSchema } from "@/lib/seo";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <FAQSchema questions={faqData} />
      <Hero />
      <ProblemSection />
      <Features />
      <Comparison />
      <FAQ />
      <BrandStory />
      <Footer />
    </main>
  );
}
