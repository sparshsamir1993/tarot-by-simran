import styles from "@/styles/Services.module.scss";
import React from "react";

const services = [
    {
        icon: "🔮",
        title: "Tarot Reader",
        description:
            "Tarot readings offer insights into your past, present, and future using symbolic cards and intuitive interpretation. Each session is deeply personal and helps guide decision-making and emotional healing.",
    },
    {
        icon: "🔢",
        title: "New Age Numerologist",
        description:
            "Discover the hidden meanings of numbers in your name and birthdate to reveal your personality, purpose, and destiny path.",
    },
    {
        icon: "🔘",
        title: "Pendulum Dowser",
        description:
            "Using a pendulum for energy-based answers, dowsing is a powerful tool to gain yes/no clarity about health, relationships, and more.",
    },
    {
        icon: "🩺",
        title: "Health Guide",
        description:
            "Holistic advice and intuitive health insights to align your physical and energetic wellbeing.",
    },
    {
        icon: "🖋",
        title: "Name Analyst",
        description:
            "Your name holds vibrational energy. A detailed name analysis reveals the impact of your name on your life and ways to align it better.",
    },
    {
        icon: "✍️",
        title: "Signature Analyst",
        description:
            "Understand your personality traits and subconscious patterns by analyzing your signature style.",
    },
    {
        icon: "💼",
        title: "Visiting Card Analyst",
        description:
            "Decode the energy and impression left by your professional card. Recommendations are provided for improving alignment and success.",
    },
    {
        icon: "📞",
        title: "Phone Number Analyst",
        description:
            "Numbers influence energy. Discover how your personal or business phone number affects your communication, luck, and outcome.",
    },
    {
        icon: "❤️",
        title: "Relationship Compatibility Analyst",
        description:
            "Evaluate compatibility using birth data, name vibrations, and personal energy signatures to guide romantic and business partnerships.",
    },
];

// Functional component that explains each service
const ServiceDetails: React.FC = () => (
    <section style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            Services offered
        </h1>
        <p style={{ marginBottom: "2rem" }}>
            Explore the various spiritual and analytical services offered by
            Simran Brar to help you gain clarity, confidence, and peace of mind.
        </p>
        {services.map((service) => (
            <div key={service.title} style={{ marginBottom: "2rem" }}>
                <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                    {service.icon} {service.title}
                </h2>
                <p>{service.description}</p>
            </div>
        ))}
    </section>
);

export default function Services() {
    return (
        <div className={styles.services}>
            <ServiceDetails />
        </div>
    );
}
