import { useSelector } from "react-redux";
import { Mail, Phone, Github, Code, Linkedin, Laptop } from "lucide-react";

const Footer = () => {
  const isDark = useSelector((state) => state.theme.isDark);

  const socials = [
    {
      icon: Mail,
      url: "mailto:praweengupta11001@gmail.com",
      label: "Email",
    },
    {
      icon: Phone,
      url: "tel:+916388553560",
      label: "Call",
    },
    {
      icon: Github,
      url: "https://github.com/PraveenGupta11001?tab=repositories",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      url: "http://www.linkedin.com/in/praveen-gupta-b783791b4",
      label: "LinkedIn",
    },
    {
      icon: Code,
      url: "https://leetcode.com/u/praweengupta11001/",
      label: "LeetCode",
    },
    {
      icon: Laptop,
      url: "https://www.hackerrank.com/profile/praweengupta1101",
      label: "HackerRank",
    },
  ];

  return (
    <footer className={`py-12 border-t mt-12 transition-colors duration-500 ${isDark ? "bg-zinc-950 border-zinc-900 text-zinc-400" : "bg-neutral-50 border-zinc-200 text-zinc-600"
      }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links Capsules */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {socials.map((soc, i) => {
              const Icon = soc.icon;
              return (
                <a
                  key={i}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full border transition duration-300 ${isDark
                      ? "bg-zinc-900/50 border-zinc-800/80 hover:bg-zinc-800 text-zinc-300 hover:text-white"
                      : "bg-white border-zinc-200 hover:bg-zinc-50 text-zinc-600 hover:text-zinc-900"
                    }`}
                  title={soc.label}
                >
                  <Icon className="h-3.5 w-3.5 text-purple-500" />
                  <span>{soc.label}</span>
                </a>
              );
            })}
          </div>

          {/* Copyright text */}
          <p className="text-[11px] font-mono tracking-wider uppercase font-semibold text-zinc-500">
            &copy; {new Date().getFullYear()} Praveen Gupta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;