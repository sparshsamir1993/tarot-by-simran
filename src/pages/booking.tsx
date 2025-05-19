import styles from "@/styles/Booking.module.scss";
const calendlyUrl = "https://calendly.com/sparshsamir1993";

export default function Booking() {
    return (
        <section className={styles.booking}>
            <h2>Book a Session</h2>
            <iframe
                src={calendlyUrl}
                width="100%"
                height="700"
                frameBorder={0}
                scrolling="no"
                style={{ border: "none" }}
                allowFullScreen
            ></iframe>
        </section>
    );
}
