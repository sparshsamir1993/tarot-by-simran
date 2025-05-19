import { FaInstagram } from "react-icons/fa";
import styles from "@/styles/Contact.module.scss";
import Link from "next/link";

export default function Contact() {
    return (
        <section className={styles.contact}>
            <div className={styles.contact__content}>
                <h2>Follow me on</h2>
                <hr></hr>
                <div className={styles["contact__content--socials"]}>
                    <Link
                        href="https://www.instagram.com/tarotmysticsbysimran/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram size={48} className={styles.icon} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
