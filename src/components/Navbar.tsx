import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/Navbar.module.scss";
import blackLogo from "../../public/logo_black.png";
import Image from "next/image";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = () => {
        return (
            <>
                <Link
                    href="/"
                    className={styles.nav_links}
                    onClick={() => setMenuOpen(false)}
                >
                    Home
                </Link>
                <Link
                    href="/services"
                    className={styles.nav_links}
                    onClick={() => setMenuOpen(false)}
                >
                    Services
                </Link>
                <Link
                    href="/booking"
                    className={styles.nav_links}
                    onClick={() => setMenuOpen(false)}
                >
                    Booking
                </Link>
                <Link
                    href="/contact"
                    className={styles.nav_links}
                    onClick={() => setMenuOpen(false)}
                >
                    Contact
                </Link>
            </>
        );
    };

    return (
        <nav className={styles.navbar} aria-label="Main navigation">
            {/* Logo */}
            <div className={styles.logo}>
                <Link href="/">
                    <Image
                        src={blackLogo}
                        alt="Tarot by Simran"
                        height={60}
                        width={60}
                    />
                </Link>
            </div>

            {/* Navigation Links */}
            <div className={styles.links}>
                {/* Desktop Links */}
                <div className={styles.desktopLinks}>{navLinks()}</div>

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
                    {navLinks()}
                </div>
            </div>
        </nav>
    );
}
