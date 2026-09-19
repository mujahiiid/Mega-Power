import { Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
const footerLinks = [
  'Home',
  'About Us',
  'Services',
  'Our Team',
  'Vision',
  'Contact Us',
];
export function SiteFooter() {
  return (
    <footer className="bg-slate-950 pt-12 text-slate-300">
      <div className="container-site grid gap-9 pb-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-extrabold text-white">
            <span className="text-red-400">MEGA</span> POWER
          </p>
          <p className="mt-4 text-sm leading-6">
            Powering solutions. Protecting what matters. Your trusted partner in
            engineering and safety.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-extrabold text-white">Quick Links</h3>
          <div className="mt-4 grid gap-2">
            {footerLinks.map((link) => (
              <a
                className="text-sm hover:text-white"
                href={`#${link === 'Home' ? 'home' : link === 'About Us' ? 'about' : link === 'Our Team' ? 'team' : link === 'Contact Us' ? 'contact' : link.toLowerCase()}`}
                key={link}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-extrabold text-white">Contact Us</h3>
          <div className="mt-4 grid gap-3 text-sm">
            <p className="flex gap-2">
              <Phone size={16} />
              010 2780 2400
            </p>
            <p className="flex gap-2">
              <Mail size={16} />
              megapower.co1@gmail.com
            </p>
            <p className="flex gap-2">
              <MapPin size={16} />
              6th of October City, Giza
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-extrabold text-white">Follow Us</h3>
          <div className="mt-4 flex gap-3">
            <a
              className="bg-primary rounded-full p-2 text-white"
              href="#contact"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
            <a
              className="bg-primary rounded-full p-2 text-white"
              href="#contact"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Mega Power. All Rights Reserved.
      </div>
    </footer>
  );
}
