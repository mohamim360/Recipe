"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomLink({ path, prefetch = true, children }) {
    const pathname = usePathname();
    const active = pathname === path;

    return (
        <Link
            prefetch={prefetch}
            className={active ? "active" : ""}
            href={path}
        >
            {children}
        </Link>
    );
}