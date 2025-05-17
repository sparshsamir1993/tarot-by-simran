import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/Navbar.module.scss";
import blackLogo from "../../public/logo_black.png";
import Image from "next/image";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar} aria-label="Main navigation">
            {/* Logo */}
            <div className={styles.logo}>
                <Image
                    src={blackLogo}
                    alt="Tarot by Simran"
                    height={60}
                    width={60}
                />
            </div>

            {/* Navigation Links */}
            <div className={styles.links}>
                {/* Desktop Links */}
                <div className={styles.desktopLinks}>
                    <Link onClick={() => setMenuOpen(!menuOpen)} href="/">
                        Home
                    </Link>
                    <Link onClick={() => setMenuOpen(!menuOpen)} href="/about">
                        About
                    </Link>
                    <Link
                        onClick={() => setMenuOpen(!menuOpen)}
                        href="/services"
                    >
                        Services
                    </Link>
                    <Link
                        onClick={() => setMenuOpen(!menuOpen)}
                        href="/booking"
                    >
                        Booking
                    </Link>
                    <Link
                        onClick={() => setMenuOpen(!menuOpen)}
                        href="/contact"
                    >
                        Contact
                    </Link>
                </div>

                {/* Hamburger Icon */}
                <div
                    className={styles.hamburger}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`${styles.mobileMenu} ${
                        menuOpen ? styles.show : ""
                    }`}
                >
                    <Link href="/" onClick={() => setMenuOpen(false)}>
                        Home
                    </Link>
                    <Link href="/about" onClick={() => setMenuOpen(false)}>
                        About
                    </Link>
                    <Link href="/services" onClick={() => setMenuOpen(false)}>
                        Services
                    </Link>
                    <Link href="/booking" onClick={() => setMenuOpen(false)}>
                        Booking
                    </Link>
                    <Link href="/contact" onClick={() => setMenuOpen(false)}>
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
