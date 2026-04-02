"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/cn";

type AccordionItemData = {
  id: string;
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItemData[];
  className?: string;
};

export function Accordion({ items, className }: AccordionProps) {
  const [openItem, setOpenItem] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item) => {
        const isOpen = openItem === item.id;

        return (
          <div
            key={item.id}
            className="rounded-[1.5rem] border border-border/70 bg-card"
          >
            <button
              type="button"
              onClick={() => setOpenItem(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
            >
              <span className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                {item.question}
              </span>

              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.22, ease: "easeInOut" }}
                className="text-2xl leading-none text-muted-foreground"
              >
                +
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.24, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}