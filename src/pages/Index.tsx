import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SelectedWorks from "../components/SelectedWorks";
import Journal from "../components/Journal";
import Explorations from "../components/Explorations";
import Stats from "../components/Stats";
import ContactFooter from "../components/ContactFooter";

export default function Index() {
  const [isLoading, setIsLoading] = useState(
    () => !sessionStorage.getItem("porto-loaded")
  );
  const location = useLocation();

  const handleComplete = useCallback(() => {
    sessionStorage.setItem("porto-loaded", "1");
    setIsLoading(false);
  }, []);

  useEffect(() => {
    document.title = "Aditya M Zain — Portfolio";
  }, []);

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo && !isLoading) {
      const id = state.scrollTo;
      window.history.replaceState({}, document.title);
      const t = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
      return () => window.clearTimeout(t);
    }
  }, [location, isLoading]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-bg font-body text-text-primary"
    >
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleComplete} />}
      </AnimatePresence>

      <Navbar />

      <main>
        <Hero ready={!isLoading} />
        <SelectedWorks />
        <Journal />
        <Explorations />
        <Stats />
        <ContactFooter />
      </main>
    </motion.div>
  );
}
