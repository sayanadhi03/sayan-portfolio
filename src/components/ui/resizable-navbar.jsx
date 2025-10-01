"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import React, { useRef, useState } from "react";

export const Navbar = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
      className={cn("sticky inset-x-0 top-20 z-40 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { visible })
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(16px)" : "blur(0px)",
        boxShadow: visible
          ? "0 0 32px rgba(34, 42, 53, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(34, 42, 53, 0.06), 0 0 8px rgba(34, 42, 53, 0.12), 0 20px 80px rgba(47, 48, 55, 0.08), 0 1px 0 rgba(255, 255, 255, 0.15) inset"
          : "0 0 0 rgba(34, 42, 53, 0), 0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(34, 42, 53, 0), 0 0 0 rgba(34, 42, 53, 0), 0 0 0 rgba(47, 48, 55, 0), 0 0 0 rgba(255, 255, 255, 0)",
        width: visible ? "85%" : "100%",
        y: visible ? 12 : 0,
        scale: visible ? 0.98 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8,
        duration: 0.6,
      }}
      style={{
        minWidth: "800px",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent py-2 lg:flex dark:bg-transparent",
        visible ? "px-4 bg-white/80 dark:bg-neutral-950/80" : "px-6",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "hidden flex-row items-center justify-center space-x-1 text-sm font-medium text-zinc-600 lg:flex lg:space-x-1",
        className
      )}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        staggerChildren: 0.1,
      }}
    >
      {items.map((item, idx) => (
        <motion.a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-3 py-2 text-neutral-600 dark:text-neutral-300 whitespace-nowrap"
          key={`link-${idx}`}
          href={item.link}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.05,
            y: -2,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 25,
            },
          }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            mass: 0.6,
            delay: idx * 0.1,
          }}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 35,
                mass: 0.4,
              }}
            />
          )}
          <motion.span
            className="relative z-20"
            animate={{
              color:
                hovered === idx ? "rgb(255, 107, 53)" : "rgb(115, 115, 115)",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            {item.name}
          </motion.span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({ children, className, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
            scale: 0.95,
            backdropFilter: "blur(0px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            backdropFilter: "blur(16px)",
          }}
          exit={{
            opacity: 0,
            y: -20,
            scale: 0.95,
            backdropFilter: "blur(0px)",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            mass: 0.8,
            staggerChildren: 0.1,
          }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white/90 backdrop-blur-md px-4 py-8 shadow-[0_0_32px_rgba(34,_42,_53,_0.12),_0_2px_4px_rgba(0,_0,_0,_0.08),_0_0_0_1px_rgba(34,_42,_53,_0.06)] dark:bg-neutral-950/90",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({ isOpen, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="p-2 rounded-md"
      whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
    >
      <motion.div
        animate={{ rotate: isOpen ? 90 : 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        {isOpen ? (
          <IconX className="text-black dark:text-white" />
        ) : (
          <IconMenu2 className="text-black dark:text-white" />
        )}
      </motion.div>
    </motion.button>
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="#"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <div className="relative">
        <img
          src="/portfolio image.jpg"
          alt="Sayan Adhikary"
          width={30}
          height={30}
          className="rounded-full object-cover border-2 border-orange-500/30"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/20 to-red-600/20"></div>
      </div>
      <span className="font-medium text-black dark:text-white">
        Sayan Adhikary
      </span>
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}) => {
  const baseStyles =
    "px-3 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer inline-block text-center whitespace-nowrap";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  const MotionTag = motion[Tag] || motion.a;

  return (
    <MotionTag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{
        scale: 1.05,
        y: -3,
        boxShadow:
          variant === "dark"
            ? "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)"
            : "0 8px 32px rgba(34, 42, 53, 0.15), 0 0 0 1px rgba(34, 42, 53, 0.08)",
      }}
      whileTap={{
        scale: 0.95,
        y: -1,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 0.6,
      }}
      {...props}
    >
      {children}
    </MotionTag>
  );
};
