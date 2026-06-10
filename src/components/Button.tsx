// components/Button.tsx
"use client";

import Link from "next/link";
import { ReactNode, AnchorHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  children: ReactNode;
}

export default function Button({
  href,
  children,
  onClick,
  className,
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href ?? ''}
      onClick={onClick}
      className={clsx(
        "block w-full text-center bg-primary text-white px-3 py-2 rounded-md hover:bg-secondary",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
