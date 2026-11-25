import Image from 'next/image';
import { FileText, GraduationCap, Linkedin, Mail } from 'lucide-react';

const profileLinks = [
  { label: 'Email', href: 'mailto:gsjang95@korea.ac.kr', icon: Mail },
  { label: 'CV', href: '/cv.pdf', icon: FileText },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=7w4GZ8cAAAAJ&hl=ko&oi=ao', icon: GraduationCap },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gyusam-chang-735290231/', icon: Linkedin },
];

export default function AboutSection() {
  return (
    <section id="home" className="profile" aria-labelledby="profile-name">
      <div className="profile-copy">
        <h1 id="profile-name">Gyusam Chang</h1>
        <ul className="profile-links" aria-label="Contact and academic profiles">
          {profileLinks.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                title={label}
                target={label === 'Email' ? undefined : '_blank'}
                rel={label === 'Email' ? undefined : 'noreferrer'}
              >
                <Icon size={23} strokeWidth={1.75} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
        <p>
          I am a Ph.D. candidate in Artificial Intelligence at{' '}
          <a href="https://www.korea.edu/" target="_blank" rel="noreferrer">Korea University</a>.
          I previously interned at Samsung Advanced Institute of Technology (SAIT),
          working with Sujin Jang, and was a visiting graduate researcher at UCLA,
          working with Prof. M. Khalid Jawed.
          My research focuses on bridging deep theoretical insights with practical applications
          for the next generation of AI.
        </p>
      </div>
      <div className="profile-photo">
        <Image
          src="/me1.JPG"
          alt="Gyusam Chang"
          fill
          priority
          sizes="(max-width: 700px) 160px, 180px"
        />
      </div>
    </section>
  );
}
