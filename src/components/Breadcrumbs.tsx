// components/Breadcrumbs.tsx
"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
    name: string;
    href?: string; // omit href for the “current” page
}

interface BreadcrumbsProps {
    crumbs: Crumb[];
}

export default function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
    return (
        <section className="relative bg-white overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-25 pb-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <nav className="text-sm text-gray-600 mb-4" aria-label="Breadcrumb">
                    <ol className="flex items-center space-x-1 md:space-x-2">
                        {crumbs.map((crumb, idx) => {
                            const isLast = idx === crumbs.length - 1;
                            return (
                                <li key={idx} className="flex items-center">
                                    {idx > 0 && <ChevronRight className="h-4 w-4 text-gray-400 mx-1" />}
                                    {crumb.href && !isLast ? (
                                        <Link
                                            href={crumb.href}
                                            className="hover:text-gray-800 transition-colors"
                                        >
                                            {crumb.name}
                                        </Link>
                                    ) : (
                                        <span
                                            className={isLast ? "font-semibold text-gray-900" : ""}
                                            aria-current={isLast ? "page" : undefined}
                                        >
                                            {crumb.name}
                                        </span>
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </nav>
            </div>
        </section>
    );
}
