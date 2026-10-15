import React from 'react';
import { Link, useNavigate } from 'react-router';
import { ArrowRight, ArrowUpRight, Laptop, Award, ShieldCheck, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { IMAGES } from '../lib/images';
import { OUTCOME_METRICS, HIRING_PARTNERS } from '../data/outcomes';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* 1. HERO SECTION: Single dominant focal carrier, 16:9 visual, clear proposition */}
      <section className="pt-12 md:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0F6B4A] tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F6B4A]" />
              <span>Autumn 2026 Admissions Open</span>
              <span className="text-[#64736B]">·</span>
              <span className="text-[#64736B]">West & East Africa Cohorts</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B1F17] leading-[1.08] [text-wrap:balance]">
              High-income digital skills for international remote careers.
            </h1>

            <p className="text-base sm:text-lg text-[#526359] leading-relaxed max-w-2xl font-normal">
              Nestora bridges the opportunity divide for ambitious African builders. We deliver rigorous software engineering and design apprenticeships, direct mentorship from global staff engineers, and fully equipped physical hardware starter kits.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/programs')}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Explore All Programs
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/programs/scholarship')}
              >
                The Impact Fellowship (100% Funded)
              </Button>
            </div>

            <div className="pt-4 flex items-center gap-6 text-xs text-[#64736B]">
              <span className="flex items-center gap-1.5 font-medium text-[#0B1F17]">
                <ShieldCheck className="w-4 h-4 text-[#0F6B4A]" />
                Zero Tuition Upfront Options
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 font-medium text-[#0B1F17]">
                <Laptop className="w-4 h-4 text-[#0F6B4A]" />
                Dev Laptops Delivered
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 font-medium text-[#0B1F17]">
                <Users className="w-4 h-4 text-[#0F6B4A]" />
                1:1 Global Mentorship
              </span>
            </div>
          </div>

          {/* Right Column: High-Impact Visual Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#E8E3D6] shadow-sm bg-[#F3EFE6]">
              <ImageWithFallback
                src={IMAGES.heroWorkspace}
                alt="Nestora fellows collaborating at modern tech innovation studio in Lagos"
                aspectRatioClass="aspect-[4/3] sm:aspect-[16/10]"
              />
              <div className="p-4 bg-[#FAF8F3] border-t border-[#E8E3D6] flex items-center justify-between text-xs">
                <div>
                  <p className="font-semibold text-[#0B1F17]">Lagos Innovation Hub</p>
                  <p className="text-[#64736B]">Fellows live architecture review sprint</p>
                </div>
                <Badge variant="green">Batch 04 Active</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-Column Proof & Metrics Strip */}
        <div className="mt-16 pt-10 border-t border-[#E8E3D6] grid grid-cols-2 md:grid-cols-4 gap-8">
          {OUTCOME_METRICS.map((metric) => (
            <div key={metric.label} className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#0B1F17] tabular-nums tracking-tight">
                {metric.value}
              </p>
              <p className="text-xs font-semibold text-[#0B1F17]">{metric.label}</p>
              <p className="text-[11px] text-[#64736B] leading-snug">{metric.subtext}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. HIRING PARTNER LOGOS TEASER STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F3EFE6] border border-[#E8E3D6] rounded-2xl p-8 sm:p-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8E3D6] pb-6">
            <div>
              <h2 className="text-sm font-semibold tracking-wider uppercase text-[#0F6B4A]">
                Where Nestora Fellows Work Remotely
              </h2>
              <p className="text-xs text-[#64736B] mt-0.5">
                Alumni hired across European startups, US distributed teams, and African tech flagships
              </p>
            </div>
            <Link
              to="/careers-outcomes"
              className="text-xs font-semibold text-[#0F6B4A] hover:underline flex items-center gap-1 whitespace-nowrap"
            >
              View verified salary outcomes <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
            {HIRING_PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="bg-[#FAF8F3] border border-[#E8E3D6] p-4 rounded-xl text-center space-y-1 hover:border-[#0F6B4A]/40 transition-colors"
              >
                <p className="font-bold text-[#0B1F17] text-sm tracking-tight">{partner.name}</p>
                <p className="text-[10px] text-[#64736B]">{partner.sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TEASER: THREE CORE DISCIPLINES (Gateway into /programs) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#0F6B4A]">
              Curriculum Tracks
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F17] [text-wrap:balance]">
              Designed around skills global employers pay six figures for.
            </h2>
            <p className="text-sm text-[#526359] leading-relaxed">
              Every track is reverse-engineered from actual production codebases and hiring rubrics of top international engineering teams.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/programs')}
            rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            Compare All Programs
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="surface" interactive className="space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[#64736B]">
                <span>Track 01</span>
                <span className="font-medium text-[#0F6B4A]">16 Weeks</span>
              </div>
              <h3 className="text-lg font-bold text-[#0B1F17]">
                Full-Stack Software Engineering
              </h3>
              <p className="text-xs text-[#526359] leading-relaxed">
                Production TypeScript, React architectures, distributed PostgreSQL, caching, and CI/CD automation.
              </p>
              <div className="pt-2 flex flex-wrap gap-1.5 text-[11px] text-[#64736B]">
                <span>React 19</span> · <span>Node.js</span> · <span>PostgreSQL</span> · <span>AWS</span>
              </div>
            </div>
            <div className="pt-4 border-t border-[#E8E3D6] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#0B1F17]">$1,200 <span className="font-normal text-[#64736B]">(Installments Available)</span></span>
              <Link to="/programs/fullstack-engineering" className="text-xs font-semibold text-[#0F6B4A] hover:underline flex items-center gap-1">
                View Syllabus <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </Card>

          <Card variant="surface" interactive className="space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[#64736B]">
                <span>Track 02</span>
                <span className="font-medium text-[#0F6B4A]">12 Weeks</span>
              </div>
              <h3 className="text-lg font-bold text-[#0B1F17]">
                Product Design & Design Systems
              </h3>
              <p className="text-xs text-[#526359] leading-relaxed">
                Enterprise Figma variables, multi-brand tokens, accessibility (WCAG AAA), and engineering handoff.
              </p>
              <div className="pt-2 flex flex-wrap gap-1.5 text-[11px] text-[#64736B]">
                <span>Figma Variables</span> · <span>Tokens</span> · <span>UX Research</span> · <span>Storybook</span>
              </div>
            </div>
            <div className="pt-4 border-t border-[#E8E3D6] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#0B1F17]">$950 <span className="font-normal text-[#64736B]">(Installments Available)</span></span>
              <Link to="/programs/product-design-systems" className="text-xs font-semibold text-[#0F6B4A] hover:underline flex items-center gap-1">
                View Syllabus <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </Card>

          <Card variant="surface" interactive className="space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[#64736B]">
                <span>Track 03</span>
                <span className="font-medium text-[#0F6B4A]">14 Weeks</span>
              </div>
              <h3 className="text-lg font-bold text-[#0B1F17]">
                Cloud Architecture & DevOps
              </h3>
              <p className="text-xs text-[#526359] leading-relaxed">
                Infrastructure as Code with Terraform, Kubernetes clustering, ArgoCD GitOps, and disaster recovery.
              </p>
              <div className="pt-2 flex flex-wrap gap-1.5 text-[11px] text-[#64736B]">
                <span>Kubernetes</span> · <span>Terraform</span> · <span>AWS EKS</span> · <span>Prometheus</span>
              </div>
            </div>
            <div className="pt-4 border-t border-[#E8E3D6] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#0B1F17]">$1,350 <span className="font-normal text-[#64736B]">(Corporate Sponsorable)</span></span>
              <Link to="/programs/cloud-devops" className="text-xs font-semibold text-[#0F6B4A] hover:underline flex items-center gap-1">
                View Syllabus <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* 4. TEASER: THE REMOTE STARTER KIT & HARDWARE THESIS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F3] border border-[#E8E3D6] rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 p-8 sm:p-12 space-y-6">
            <Badge variant="green">Physical Infrastructure Thesis</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F17] [text-wrap:balance]">
              We don’t just teach code. We deliver the machine and power to run it.
            </h2>
            <p className="text-sm text-[#526359] leading-relaxed">
              Talent is equally distributed; electricity and reliable hardware are not. Admitted fellows receive the sealed Nestora Remote Starter Kit shipped directly to their home address before cohort Day 1.
            </p>
            <ul className="space-y-2.5 text-xs text-[#2D3A34]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F6B4A] shrink-0" />
                <span>Refurbished high-spec dev laptop (16GB RAM, quad-core CPU, fast SSD)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F6B4A] shrink-0" />
                <span>Active noise-canceling headset for international Zoom/Meet standups</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F6B4A] shrink-0" />
                <span>High-speed 4G/LTE mobile router with monthly data stipend</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F6B4A] shrink-0" />
                <span>Nestora linen engineering journal, documentation binder & brass pen</span>
              </li>
            </ul>
            <div className="pt-2">
              <Button
                variant="primary"
                size="sm"
                onClick={() => navigate('/programs/scholarship')}
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Learn About Starter Kit Eligibility
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 p-6 sm:p-8 bg-[#F3EFE6] border-t lg:border-t-0 lg:border-l border-[#E8E3D6]">
            <div className="rounded-xl overflow-hidden border border-[#E8E3D6]">
              <ImageWithFallback
                src={IMAGES.remoteStarterKit}
                alt="Nestora remote learner physical starter kit flatlay"
                aspectRatioClass="aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. TEASER: SENIOR GLOBAL MENTORSHIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#0F6B4A]">
              1:1 Apprenticeship
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F17]">
              Mentored by senior staff engineers who live the remote life.
            </h2>
            <p className="text-sm text-[#526359]">
              No generic teaching assistants. Your pull requests and architecture sketches are reviewed by engineers shipping software at world-class companies.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/mentors')}
            rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            Meet the 12+ Mentors
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="surface" className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#0F6B4A] text-white flex items-center justify-center font-bold text-sm">
                KA
              </div>
              <div>
                <h3 className="font-bold text-sm text-[#0B1F17]">Kemi Adebayo</h3>
                <p className="text-xs text-[#64736B]">Staff Frontend Engineer · Moniepoint</p>
              </div>
            </div>
            <p className="text-xs text-[#526359] leading-relaxed italic">
              "African engineers don’t need sympathy; they need high-standard technical rigor and direct exposure to global engineering expectations."
            </p>
            <div className="pt-2 text-[11px] text-[#64736B] flex items-center justify-between border-t border-[#E8E3D6]">
              <span>74 Fellows Mentored</span>
              <span className="text-[#0F6B4A] font-medium">9 Yrs Experience</span>
            </div>
          </Card>

          <Card variant="surface" className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#0F6B4A] text-white flex items-center justify-center font-bold text-sm">
                CN
              </div>
              <div>
                <h3 className="font-bold text-sm text-[#0B1F17]">Chidi Nwosu</h3>
                <p className="text-xs text-[#64736B]">Principal Software Architect · Ex-Andela</p>
              </div>
            </div>
            <p className="text-xs text-[#526359] leading-relaxed italic">
              "When you understand database locks and asynchronous queues at first principles, no technical interview in London or San Francisco can intimidate you."
            </p>
            <div className="pt-2 text-[11px] text-[#64736B] flex items-center justify-between border-t border-[#E8E3D6]">
              <span>110 Fellows Mentored</span>
              <span className="text-[#0F6B4A] font-medium">12 Yrs Experience</span>
            </div>
          </Card>

          <Card variant="surface" className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#0F6B4A] text-white flex items-center justify-center font-bold text-sm">
                AB
              </div>
              <div>
                <h3 className="font-bold text-sm text-[#0B1F17]">Aisha Bello</h3>
                <p className="text-xs text-[#64736B]">Lead Product Designer · Paystack Network</p>
              </div>
            </div>
            <p className="text-xs text-[#526359] leading-relaxed italic">
              "Great product design is not about trendy aesthetics; it is about reducing cognitive strain and delivering unmistakable value to users."
            </p>
            <div className="pt-2 text-[11px] text-[#64736B] flex items-center justify-between border-t border-[#E8E3D6]">
              <span>65 Fellows Mentored</span>
              <span className="text-[#0F6B4A] font-medium">8 Yrs Experience</span>
            </div>
          </Card>
        </div>
      </section>

      {/* 6. HIGH-IMPACT GREEN CALLOUT BAND: The Scholarship Fellowship */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F6B4A] text-[#FAF8F3] rounded-2xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#FAF8F3]/10 border border-[#FAF8F3]/20 px-3 py-1 rounded-md text-xs text-[#E6F2EA]">
              <Sparkles className="w-3.5 h-3.5 text-[#3FA773]" />
              <span>Special Initiative · 100% Fully Funded Grant</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#FAF8F3] [text-wrap:balance]">
              The Nestora Impact Fellowship: 35 Fully Sponsored Seats for Autumn 2026.
            </h2>

            <p className="text-sm sm:text-base text-[#D7ECE0] leading-relaxed">
              Tuition, starter laptop, connectivity stipend, and 1:1 mentorship covered by our philanthropic foundation partners. Zero debt, zero equity clawback, zero hidden fees.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="cream"
                size="md"
                onClick={() => navigate('/apply?program=scholarship')}
                rightIcon={<ArrowRight className="w-4 h-4 text-[#0B1F17]" />}
              >
                Apply for Fellowship Seat
              </Button>
              <Link
                to="/programs/scholarship"
                className="text-sm font-semibold text-[#FAF8F3] hover:underline flex items-center gap-1.5"
              >
                Read Fellowship Requirements <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
