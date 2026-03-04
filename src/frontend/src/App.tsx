import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Loader2,
  Lock,
  Mail,
  Menu,
  Monitor,
  Phone,
  Shield,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";

// ────────────────────────────────────────────
// Types
// ────────────────────────────────────────────
type FormStatus = "idle" | "loading" | "success" | "error";

// ────────────────────────────────────────────
// Animation helpers
// ────────────────────────────────────────────
const easeOut = "easeOut" as const;

function fadeUpView(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55, ease: easeOut, delay },
  };
}

function fadeUpAnimate(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: easeOut, delay },
  };
}

// ────────────────────────────────────────────
// Navbar
// ────────────────────────────────────────────
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border/60 bg-background/80">
      <nav className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-primary/20 border border-primary/30 flex items-center justify-center glow-teal-sm">
            <Shield className="w-4 h-4 text-teal" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">
            Knock<span className="text-teal">Support</span>
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <button
            type="button"
            data-ocid="nav.home.link"
            onClick={() => scrollTo("home")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
          >
            Home
          </button>
          <button
            type="button"
            data-ocid="nav.services.link"
            onClick={() => scrollTo("services")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
          >
            Services
          </button>
          <button
            type="button"
            data-ocid="nav.contact.link"
            onClick={() => scrollTo("contact")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
          >
            Contact
          </button>
          <Button
            size="sm"
            onClick={() => scrollTo("contact")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-teal-sm font-medium"
          >
            Get Support
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-4 py-4 flex flex-col gap-3"
          >
            <button
              type="button"
              data-ocid="nav.home.link"
              onClick={() => scrollTo("home")}
              className="text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              type="button"
              data-ocid="nav.services.link"
              onClick={() => scrollTo("services")}
              className="text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              type="button"
              data-ocid="nav.contact.link"
              onClick={() => scrollTo("contact")}
              className="text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Contact
            </button>
            <Button
              size="sm"
              onClick={() => scrollTo("contact")}
              className="bg-primary text-primary-foreground w-full mt-1"
            >
              Get Support
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ────────────────────────────────────────────
// Hero Section
// ────────────────────────────────────────────
function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-banner.dim_1200x500.jpg')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy-deep/75" />
      {/* Dot grid overlay */}
      <div className="absolute inset-0 bg-dot-grid opacity-40" />
      {/* Scanlines */}
      <div className="hero-scanlines absolute inset-0" />

      {/* Radial glow behind content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal/5 blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center pt-24">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            {...fadeUpAnimate(0)}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-teal/30 bg-teal/10 text-teal text-xs font-mono-brand font-medium tracking-wider uppercase">
              <Zap className="w-3 h-3" />
              Freelance IT Services
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUpAnimate(0.12)}
            className="font-display font-black text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-6"
          >
            Secure. <span className="gradient-text-teal">Reliable.</span>{" "}
            Professional.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            {...fadeUpAnimate(0.24)}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Expert email security and desktop support — on demand. Fast,
            dependable solutions tailored to your needs.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUpAnimate(0.36)}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              data-ocid="hero.primary_button"
              size="lg"
              onClick={() => scrollTo("services")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-teal px-8 py-3 text-base font-semibold group w-full sm:w-auto"
            >
              View Services
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              data-ocid="hero.secondary_button"
              size="lg"
              variant="outline"
              onClick={() => scrollTo("contact")}
              className="border-border/70 text-foreground hover:bg-accent hover:border-teal/40 px-8 py-3 text-base font-semibold w-full sm:w-auto"
            >
              Get Support
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            {...fadeUpAnimate(0.48)}
            className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
          >
            {[
              { icon: Shield, label: "SPF / DKIM / DMARC" },
              { icon: Lock, label: "Anti-Phishing" },
              { icon: Monitor, label: "Full Desktop Support" },
              { icon: Zap, label: "Fast Turnaround" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-teal" />
                <span>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

// ────────────────────────────────────────────
// Services Section
// ────────────────────────────────────────────
function ServicesSection() {
  const services = [
    {
      id: "email",
      image: "/assets/generated/email-security.dim_600x400.jpg",
      icon: Shield,
      title: "Email Security Services",
      description:
        "End-to-end email security deployment and management. Includes SPF, DKIM, DMARC configuration, anti-phishing, and ongoing monitoring to keep your communications safe.",
      features: [
        "SPF, DKIM & DMARC Setup",
        "Anti-Phishing Protection",
        "Email Gateway Configuration",
        "Ongoing Security Monitoring",
      ],
    },
    {
      id: "desktop",
      image: "/assets/generated/desktop-support.dim_600x400.jpg",
      icon: Monitor,
      title: "Desktop Support",
      description:
        "Full-spectrum desktop support for Windows and macOS. Hardware troubleshooting, OS installation, software configuration, and performance optimization.",
      features: [
        "Windows & macOS Support",
        "Hardware Troubleshooting",
        "OS Installation & Setup",
        "Performance Optimization",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-dot-grid opacity-20" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.p
            {...fadeUpView(0)}
            className="text-teal font-mono-brand text-xs uppercase tracking-widest mb-3"
          >
            What I Offer
          </motion.p>
          <motion.h2
            {...fadeUpView(0.1)}
            className="font-display font-black text-4xl md:text-5xl tracking-tight"
          >
            My Services
          </motion.h2>
          <motion.p
            {...fadeUpView(0.2)}
            className="mt-4 text-muted-foreground max-w-xl mx-auto"
          >
            Specialized expertise across two critical IT domains — delivered
            with precision and professionalism.
          </motion.p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                {...fadeUpView(i * 0.15)}
                className="group relative rounded-lg overflow-hidden border border-border/60 bg-card hover:border-teal/30 transition-all duration-300 hover:shadow-card-hover"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="w-9 h-9 rounded bg-teal/20 border border-teal/30 flex items-center justify-center backdrop-blur-sm">
                      <Icon className="w-4 h-4 text-teal" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Feature list */}
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover teal glow line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────
// About Section
// ────────────────────────────────────────────
function AboutSection() {
  const stats = [
    { value: "100%", label: "Client Satisfaction" },
    { value: "24h", label: "Response Time" },
    { value: "5+", label: "Years Experience" },
    { value: "∞", label: "Dedication" },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-navy-surface relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-teal/3 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <motion.p
              {...fadeUpView(0)}
              className="text-teal font-mono-brand text-xs uppercase tracking-widest mb-3"
            >
              About
            </motion.p>
            <motion.h2
              {...fadeUpView(0.1)}
              className="font-display font-black text-4xl md:text-5xl tracking-tight mb-6"
            >
              About KnockSupport
            </motion.h2>
            <motion.p
              {...fadeUpView(0.2)}
              className="text-muted-foreground leading-relaxed mb-8 text-base"
            >
              KnockSupport is a freelance IT services brand specializing in
              email security and desktop support. With hands-on expertise in
              security deployment and day-to-day technical support, I deliver
              fast, dependable solutions tailored to your needs.
            </motion.p>
            <motion.p
              {...fadeUpView(0.3)}
              className="text-muted-foreground leading-relaxed text-base"
            >
              Whether you're a small business owner needing robust email
              security or an individual requiring desktop troubleshooting,
              KnockSupport brings enterprise-grade expertise to every engagement
              — without the enterprise price tag.
            </motion.p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                {...fadeUpView(i * 0.1)}
                className="p-6 rounded-lg bg-card border border-border/60 hover:border-teal/30 transition-colors duration-300 text-center"
              >
                <div className="font-display font-black text-3xl text-teal mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────
// Contact Section
// ────────────────────────────────────────────
function ContactSection() {
  const { actor } = useActor();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const _formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!actor) {
      setErrorMessage("Unable to connect to the server. Please try again.");
      setFormStatus("error");
      return;
    }

    setFormStatus("loading");
    setErrorMessage("");

    try {
      await actor.submitRequest(name, email, subject, message);
      setFormStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      console.error("Submit error:", err);
      setErrorMessage(
        "Something went wrong. Please try again or email us directly.",
      );
      setFormStatus("error");
    }
  };

  const resetForm = () => {
    setFormStatus("idle");
    setErrorMessage("");
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-dot-grid opacity-15" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.p
            {...fadeUpView(0)}
            className="text-teal font-mono-brand text-xs uppercase tracking-widest mb-3"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            {...fadeUpView(0.1)}
            className="font-display font-black text-4xl md:text-5xl tracking-tight"
          >
            Contact KnockSupport
          </motion.h2>
          <motion.p
            {...fadeUpView(0.2)}
            className="mt-4 text-muted-foreground max-w-xl mx-auto"
          >
            Ready to secure your email or need desktop help? Reach out — I
            respond promptly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Left — email option */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="lg:col-span-2 flex flex-col justify-start gap-6"
          >
            {/* Direct email card */}
            <div className="p-6 rounded-lg bg-card border border-border/60 hover:border-teal/30 transition-colors duration-300">
              <div className="w-10 h-10 rounded bg-teal/15 border border-teal/25 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-teal" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">
                Send an Email
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Prefer to reach out directly? Drop me an email and I'll get back
                to you within 24 hours.
              </p>
              <a
                data-ocid="contact.email.link"
                href="mailto:jponlines@gmail.com"
                className="inline-flex items-center gap-2 text-teal hover:text-teal/80 transition-colors text-sm font-medium group"
              >
                <Mail className="w-4 h-4" />
                jponlines@gmail.com
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Info card */}
            <div className="p-6 rounded-lg bg-card border border-border/60">
              <div className="w-10 h-10 rounded bg-teal/15 border border-teal/25 flex items-center justify-center mb-4">
                <Phone className="w-5 h-5 text-teal" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">
                Response Time
              </h3>
              <p className="text-muted-foreground text-sm">
                All inquiries are answered within{" "}
                <span className="text-foreground font-semibold">24 hours</span>.
                Urgent requests are prioritized.
              </p>
            </div>
          </motion.div>

          {/* Right — support request form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="p-8 rounded-lg bg-card border border-border/60 hover:border-teal/30 transition-colors duration-300">
              <h3 className="font-display font-bold text-xl mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-teal" />
                Support Request Form
              </h3>

              <AnimatePresence mode="wait">
                {formStatus === "success" ? (
                  <motion.div
                    key="success"
                    data-ocid="contact.form.success_state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="py-12 text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-teal/15 border border-teal/30 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-7 h-7 text-teal" />
                    </div>
                    <h4 className="font-display font-bold text-lg mb-2">
                      Request Sent!
                    </h4>
                    <p className="text-muted-foreground text-sm mb-6">
                      Your support request has been submitted. I'll get back to
                      you within 24 hours.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={resetForm}
                      className="border-border text-muted-foreground hover:text-foreground"
                    >
                      Send Another Request
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    ref={_formRef}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-5"
                  >
                    {/* Error message */}
                    <AnimatePresence>
                      {formStatus === "error" && (
                        <motion.div
                          data-ocid="contact.form.error_state"
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center gap-2 p-3 rounded bg-destructive/15 border border-destructive/30 text-destructive text-sm"
                          role="alert"
                        >
                          <AlertCircle className="w-4 h-4 flex-shrink-0" />
                          {errorMessage}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="contact-name"
                          className="text-sm font-medium text-foreground"
                        >
                          Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="contact-name"
                          data-ocid="contact.form.name.input"
                          type="text"
                          placeholder="Your full name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          disabled={formStatus === "loading"}
                          className="bg-input border-border/60 focus:border-teal/50 focus:ring-teal/30"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="contact-email"
                          className="text-sm font-medium text-foreground"
                        >
                          Email <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="contact-email"
                          data-ocid="contact.form.email.input"
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          disabled={formStatus === "loading"}
                          className="bg-input border-border/60 focus:border-teal/50 focus:ring-teal/30"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="contact-subject"
                        className="text-sm font-medium text-foreground"
                      >
                        Subject <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="contact-subject"
                        data-ocid="contact.form.subject.input"
                        type="text"
                        placeholder="Brief description of your issue"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        disabled={formStatus === "loading"}
                        className="bg-input border-border/60 focus:border-teal/50 focus:ring-teal/30"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="contact-message"
                        className="text-sm font-medium text-foreground"
                      >
                        Message <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="contact-message"
                        data-ocid="contact.form.message.textarea"
                        placeholder="Describe your issue or request in detail..."
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        disabled={formStatus === "loading"}
                        className="bg-input border-border/60 focus:border-teal/50 focus:ring-teal/30 resize-none"
                      />
                    </div>

                    <Button
                      data-ocid="contact.form.submit_button"
                      type="submit"
                      disabled={formStatus === "loading"}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-teal font-semibold py-2.5"
                    >
                      {formStatus === "loading" ? (
                        <>
                          <Loader2
                            data-ocid="contact.form.loading_state"
                            className="w-4 h-4 mr-2 animate-spin"
                          />
                          Sending Request...
                        </>
                      ) : (
                        <>
                          Send Request
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────
// Footer
// ────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-navy-deep border-t border-border/60 py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-teal/15 border border-teal/25 flex items-center justify-center">
              <Shield className="w-3.5 h-3.5 text-teal" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">
              Knock<span className="text-teal">Support</span>
            </span>
          </div>

          {/* Contact */}
          <a
            href="mailto:jponlines@gmail.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-teal transition-colors text-sm"
          >
            <Mail className="w-4 h-4" />
            jponlines@gmail.com
          </a>

          {/* Copyright + caffeine */}
          <p className="text-muted-foreground text-xs text-center md:text-right">
            © {year} KnockSupport. Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal/80 hover:text-teal transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ────────────────────────────────────────────
// App Root
// ────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
