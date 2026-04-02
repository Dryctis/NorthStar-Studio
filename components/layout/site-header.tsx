"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { navigationItems, primaryCta } from "@/data/site/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { NorthstarMark } from "@/components/ui/northstar-mark";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 16);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  function closeMenu() {
    setIsMobileMenuOpen(false);
  }

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300 ease-out",
          isScrolled
            ? "border-b border-border/80 bg-background/72 shadow-[0_12px_44px_rgba(2,6,14,0.55)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <Container className="flex h-16 items-center justify-between md:h-20">
          <Link
            href="/"
            className="group flex items-center gap-3 text-sm font-semibold tracking-tight text-foreground"
          >
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card/70">
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-accent/20 blur-md transition-opacity duration-300 group-hover:opacity-90"
              />
              <NorthstarMark className="relative h-5 w-5 text-foreground" />
            </span>
            <span className="text-sm tracking-[0.02em]">Northstar Studio</span>
          </Link>

          <nav className="hidden items-center gap-2 rounded-full border border-border/80 bg-card/50 px-2 py-1 md:flex">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors duration-200 hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href={primaryCta.href}>{primaryCta.label}</Button>
          </div>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/90 text-foreground transition-colors hover:bg-secondary md:hidden"
          >
            <span className="sr-only">
              {isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            </span>

            <div className="relative h-[18px] w-[18px]">
              <span
                className={cn(
                  "absolute inset-0 transition-all duration-200 ease-out",
                  isMobileMenuOpen ? "scale-90 opacity-0" : "scale-100 opacity-100"
                )}
              >
                <svg
                  viewBox="0 0 18 18"
                  className="h-[18px] w-[18px]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M3 4.75H15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  <path d="M3 9H15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  <path d="M3 13.25H15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </span>

              <span
                className={cn(
                  "absolute inset-0 transition-all duration-200 ease-out",
                  isMobileMenuOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
                )}
              >
                <svg
                  viewBox="0 0 18 18"
                  className="h-[18px] w-[18px]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M4.5 4.5L13.5 13.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M13.5 4.5L4.5 13.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>
          </button>
        </Container>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/45 backdrop-blur-[3px] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={closeMenu}
            />

            <motion.div
              className="fixed inset-x-0 top-[4.1rem] z-50 md:hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <Container>
                <div className="rounded-[1.5rem] border border-border bg-card/95 p-3.5 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-md">
                  <nav className="space-y-1.5">
                    {navigationItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        className="block rounded-xl px-4 py-3 text-[15px] font-medium text-foreground transition-colors hover:bg-secondary"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>

                  <div className="mt-3 border-t border-border/70 pt-3">
                    <Button href={primaryCta.href} className="h-11 w-full">
                      {primaryCta.label}
                    </Button>
                  </div>
                </div>
              </Container>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
