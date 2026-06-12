import { useState } from "react";
import { toast } from "sonner";
import { SectionTitle } from "./SectionTitle";

const INFO = [
  {
    icon: "fa-solid fa-envelope",
    label: "Email",
    value: "amnarukhsar693@gmail.com",
    href: "mailto:amnarukhsar693@gmail.com",
  },
  {
    icon: "fa-solid fa-phone",
    label: "Phone",
    value: "+92 329 9104922",
    href: "tel:+923299104922",
  },
  {
    icon: "fa-solid fa-location-dot",
    label: "Location",
    value: "Narowal, Punjab, Pakistan",
  },
];

const SOCIALS = [
  {
    icon: "fa-brands fa-github",
    href: "https://github.com/AmnaAsghar693",
    color: "#ffffff",
    label: "Github",
  },
  {
    icon: "fa-brands fa-linkedin-in",
    href: "https://linkedin.com/in/amnarukhsar",
    color: "#0A66C2",
    label: "LinkedIn",
  },
  {
    icon: "fa-brands fa-whatsapp",
    href: "https://wa.me/923299104922",
    color: "#25D366",
    label: "WhatsApp",
  },
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    toast.success("Message Sent!", {
      description: "Thank you for contacting me. I'll get back to you soon.",
    });

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-gradient-to-b from-[#0d1117] via-[#111827] to-[#0d1117] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <SectionTitle kicker="Let's Talk" title="Get In Touch" />

        <p className="text-center text-gray-400 -mt-8 mb-14">
          Have a project in mind? Let's work together!
        </p>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="space-y-5" data-aos="fade-right">
            {INFO.map((item) => {
              const card = (
                <div
                  className="
                    group
                    bg-white/[0.03]
                    border border-white/10
                    backdrop-blur-xl
                    rounded-2xl
                    p-5
                    flex items-center gap-4
                    transition-all duration-500
                    hover:bg-white/[0.06]
                    hover:border-cyan-400/40
                    hover:-translate-y-1
                  "
                >
                  <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                    <i
                      className={`${item.icon} text-cyan-400 text-xl`}
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                      {item.label}
                    </p>

                    <p className="text-white font-medium break-all">
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              return item.href ? (
                <a key={item.label} href={item.href}>
                  {card}
                </a>
              ) : (
                <div key={item.label}>{card}</div>
              );
            })}

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="
                    w-14 h-14
                    rounded-full
                    bg-white/[0.03]
                    border border-white/10
                    backdrop-blur-xl
                    flex items-center justify-center
                    text-white text-xl
                    transition-all duration-500
                    hover:-translate-y-2
                  "
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 30px ${social.color}88`;
                    e.currentTarget.style.color = social.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "";
                    e.currentTarget.style.color = "";
                  }}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={submit}
            data-aos="fade-left"
            className="
              bg-white/[0.03]
              border border-white/10
              backdrop-blur-xl
              rounded-3xl
              p-6 lg:p-8
              shadow-xl
              space-y-5
            "
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
                className="
                  w-full
                  bg-white/[0.05]
                  border border-white/10
                  rounded-xl
                  px-4 py-3
                  text-white
                  placeholder-gray-400
                  focus:outline-none
                  focus:border-cyan-400
                  transition-all
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
                className="
                  w-full
                  bg-white/[0.05]
                  border border-white/10
                  rounded-xl
                  px-4 py-3
                  text-white
                  placeholder-gray-400
                  focus:outline-none
                  focus:border-cyan-400
                  transition-all
                "
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              required
              value={form.subject}
              onChange={(e) =>
                setForm({
                  ...form,
                  subject: e.target.value,
                })
              }
              className="
                w-full
                bg-white/[0.05]
                border border-white/10
                rounded-xl
                px-4 py-3
                text-white
                placeholder-gray-400
                focus:outline-none
                focus:border-cyan-400
                transition-all
              "
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              required
              value={form.message}
              onChange={(e) =>
                setForm({
                  ...form,
                  message: e.target.value,
                })
              }
              className="
                w-full
                bg-white/[0.05]
                border border-white/10
                rounded-xl
                px-4 py-3
                text-white
                placeholder-gray-400
                resize-none
                focus:outline-none
                focus:border-cyan-400
                transition-all
              "
            />

            <button
              type="submit"
              className="
                w-full
                py-3
                rounded-xl
                font-semibold
                text-white
                bg-gradient-to-r
                from-cyan-500
                to-violet-500
                hover:scale-[1.02]
                transition-all
                duration-300
                shadow-lg
                shadow-cyan-500/20
              "
            >
              <i className="fa-solid fa-paper-plane mr-2"></i>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}