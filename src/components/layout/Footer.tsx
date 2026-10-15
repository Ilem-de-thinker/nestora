import React, { useState } from 'react';
import { Link } from 'react-router';
import { ArrowUpRight, CheckCircle2, Globe2 } from 'lucide-react';
import { Button } from '../ui/Button';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSuccess(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 3000);
  };

  return (
    <footer className="bg-[#0B1F17] text-[#FAF8F3] border-t border-[#1B382B]">
      {/* Upper Footer: Brand statement, Hubs & Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-[#FAF8F3]">
              <span className="w-8 h-8 rounded-lg bg-[#0F6B4A] text-[#FAF8F3] flex items-center justify-center font-bold text-base">
                N
              </span>
              <span>Nestora</span>
            </Link>
            <p className="text-sm text-[#B4C2BA] leading-relaxed max-w-sm">
              A premier tech-skills training institute and global remote career accelerator. Equipping ambitious talent across Africa with high-income digital capabilities and physical infrastructure.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#8E9F94]">
              <Globe2 className="w-4 h-4 text-[#3FA773]" />
              <span>Coordinating cohorts across West, East, and Central Africa</span>
            </div>
          </div>

          {/* Nav links columns */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#8E9F94]">
              Programs
            </h4>
            <ul className="space-y-2 text-sm text-[#D7ECE0]">
              <li>
                <Link to="/programs/scholarship" className="hover:text-white transition-colors flex items-center gap-1">
                  The Impact Fellowship <span className="text-[10px] text-[#3FA773] bg-[#143327] px-1.5 py-0.5 rounded">Grant</span>
                </Link>
              </li>
              <li>
                <Link to="/programs/fullstack-engineering" className="hover:text-white transition-colors">
                  Full-Stack Engineering
                </Link>
              </li>
              <li>
                <Link to="/programs/product-design-systems" className="hover:text-white transition-colors">
                  Product Design Systems
                </Link>
              </li>
              <li>
                <Link to="/programs/cloud-devops" className="hover:text-white transition-colors">
                  Cloud & DevOps
                </Link>
              </li>
              <li>
                <Link to="/programs/ai-data-engineering" className="hover:text-white transition-colors">
                  Applied AI & Data
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#8E9F94]">
              Platform
            </h4>
            <ul className="space-y-2 text-sm text-[#D7ECE0]">
              <li>
                <Link to="/courses" className="hover:text-white transition-colors">
                  Course Catalog
                </Link>
              </li>
              <li>
                <Link to="/careers-outcomes" className="hover:text-white transition-colors">
                  Alumni Outcomes
                </Link>
              </li>
              <li>
                <Link to="/mentors" className="hover:text-white transition-colors">
                  Global Mentors
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Our Thesis & About
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  Frequently Asked
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact & Hubs
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Dispatch */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#8E9F94]">
              Nestora Dispatch
            </h4>
            <p className="text-xs text-[#B4C2BA] leading-relaxed">
              Bi-weekly technical teardowns, remote job openings at partner startups, and scholarship intake announcements.
            </p>
            {newsletterSuccess ? (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-[#143327] border border-[#0F6B4A] text-xs text-[#3FA773]">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>You are subscribed to the Nestora Dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="px-3.5 py-2 text-sm rounded-lg bg-[#143327] border border-[#234A38] text-white placeholder:text-[#8E9F94] focus:outline-none focus:ring-1 focus:ring-[#3FA773] w-full"
                />
                <Button variant="secondary" size="sm" type="submit">
                  Join
                </Button>
              </form>
            )}
            <div className="pt-3 text-[11px] text-[#8E9F94]">
              <span>Next scholarship deadline: </span>
              <strong className="text-white">November 10, 2026</strong>
            </div>
          </div>
        </div>

        {/* Regional Hub Strip */}
        <div className="mt-12 pt-8 border-t border-[#1B382B] grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-[#8E9F94]">
          <div>
            <p className="font-semibold text-[#D7ECE0]">Lagos Learning Hub</p>
            <p>Yaba Tech Corridor, Lagos, NG</p>
          </div>
          <div>
            <p className="font-semibold text-[#D7ECE0]">Nairobi Partner Lab</p>
            <p>Kilimani Business District, KE</p>
          </div>
          <div>
            <p className="font-semibold text-[#D7ECE0]">London Placement Desk</p>
            <p>Silicon Roundabout, EC1V, UK</p>
          </div>
          <div>
            <p className="font-semibold text-[#D7ECE0]">Remote Global Campus</p>
            <p>Active Across 18 Time Zones</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-[#1B382B] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E9F94]">
          <p>© {new Date().getFullYear()} Nestora Institute of Technology Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/faq" className="hover:text-white transition-colors">Privacy Charter</Link>
            <Link to="/faq" className="hover:text-white transition-colors">Honor Code</Link>
            <Link to="/apply" className="hover:text-white transition-colors flex items-center gap-1">
              Apply Now <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
