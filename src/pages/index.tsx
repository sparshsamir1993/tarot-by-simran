import styles from "@/styles/Home.module.scss";
import Image from "next/image";
import { Yesteryear } from "next/font/google";
import simranWithCards from "../../public/simran_with_cards.png";
import Link from "next/link";

const yesteryear = Yesteryear({
    weight: "400",
    subsets: ["latin"],
});

export default function Home() {
    return (
        <section className={styles.home}>
            <div className={styles.home__content}>
                <h1
                    className={`${styles.home__heading} ${yesteryear.className}`}
                >
                    Tarot Mystics by Simran Brar
                </h1>
                <div className={styles.home__image}>
                    <Image
                        src={simranWithCards}
                        alt="Simran with Tarot cards"
                        height={300}
                    />
                </div>
                <p className={styles.home__subheading}>
                    Tarot | Astrology | Numerology
                </p>
                <div className={styles.home__services}>
                    <h2 className={styles["home__services-heading"]}>
                        Services Offered
                    </h2>
                    <ul className={styles["home__services-list"]}>
                        <li className={styles["home__services-item"]}>
                            Tarot Reader
                        </li>
                        <li className={styles["home__services-item"]}>
                            New Age Numerologist
                        </li>
                        <li className={styles["home__services-item"]}>
                            Pendulum Dowser
                        </li>
                        <li className={styles["home__services-item"]}>
                            Health Guide
                        </li>
                        <li className={styles["home__services-item"]}>
                            Name Analyst
                        </li>
                        <li className={styles["home__services-item"]}>
                            Signature Analyst
                        </li>
                        <li className={styles["home__services-item"]}>
                            Visiting Card Analyst
                        </li>
                        <li className={styles["home__services-item"]}>
                            Phone Number Analyst
                        </li>
                        <li className={styles["home__services-item"]}>
                            Relationship Compatibility Analyst
                        </li>
                    </ul>
                </div>
                <hr className={styles.home__divider} />
                <div className={styles.home__booking}>
                    {/* <h2 className={styles["home__booking-heading"]}>
                        Book a Session
                    </h2> */}
                    <Link
                        href="/booking"
                        className={styles["home__booking-button"]}
                    >
                        🔮 Book a Session
                    </Link>
                </div>
            </div>
        </section>
    );
}
