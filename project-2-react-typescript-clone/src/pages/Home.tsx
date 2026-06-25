import { useState, useEffect } from "react";
import { FetchClientProvider } from "@/framer/_framer-runtime.js";
import DynamicInfo from "@/framer/DynamicInfo.js";
import Navigation from "@/framer/Navigation.js";
import { Hero } from "@/sections/Hero";
import { Now } from "@/sections/Now";
import { Works } from "@/sections/Works";
import { Footer } from "@/sections/Footer";
import { Divider } from "@/components/Divider";

export function Home() {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.innerWidth >= 810,
  );

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 810px)");
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  // Sync Framer toggle-theme (body) ↔ React data-theme (html)
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    const syncFromFramer = () => {
      const framerTheme = body.getAttribute("toggle-theme");
      if (framerTheme && framerTheme !== root.dataset.theme) {
        root.dataset.theme = framerTheme;
        localStorage.setItem("theme", framerTheme);
      }
    };

    const syncFromReact = () => {
      const reactTheme = root.dataset.theme;
      if (reactTheme && reactTheme !== body.getAttribute("toggle-theme")) {
        body.setAttribute("toggle-theme", reactTheme);
        localStorage.setItem("theme", reactTheme);
      }
    };

    const bodyObs = new MutationObserver(syncFromFramer);
    bodyObs.observe(body, { attributes: true, attributeFilter: ["toggle-theme"] });

    const rootObs = new MutationObserver(syncFromReact);
    rootObs.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

    return () => {
      bodyObs.disconnect();
      rootObs.disconnect();
    };
  }, []);

  return (
    <FetchClientProvider>
      <div className="page">
        {/* Framer runtime Dynamic Island with papillons */}
        <div className="island-slot">
          <DynamicInfo />
        </div>

        {/* Framer runtime Navigation with papillons */}
        <div className="nav-slot">
          <Navigation variant={isDesktop ? "Ixlvz7SuN" : "oPKpRVUxz"} />
        </div>

        <main className="content">
          <Hero />
          <Divider />
          <Now />
          <Divider />
          <Works />
        </main>

        <Footer />
      </div>
    </FetchClientProvider>
  );
}
