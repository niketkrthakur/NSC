import { Github, LetterText, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground">
          © {new Date().getFullYear()} NIKHIL SINGH CHAUHAN — ALL RIGHTS RESERVED
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/NikhilSinghChauhan18"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors duration-300 hover:text-primary"
            style={{ cursor: "none" }}
            data-clickable
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/nikhil-singh-chauhan-7a0646277?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors duration-300 hover:text-primary"
            style={{ cursor: "none" }}
            data-clickable
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:kuwarnikhilchauhan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors duration-300 hover:text-primary"
            style={{ cursor: "none" }}
            data-clickable
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://leetcode.com/u/11123456/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors duration-300 hover:text-primary"
            style={{ cursor: "none" }}
            data-clickable
          >
            <img src="/leetcode.png" alt="LeetCode" className="h-5 w-5" />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
