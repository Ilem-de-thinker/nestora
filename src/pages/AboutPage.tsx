import React from 'react';
import { useNavigate } from 'react-router';
import { ArrowRight, Globe2, ShieldCheck, Target, HeartHandshake, Laptop, Users } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
      {/* 1. Mission Statement */}
      <div className="space-y-4 max-w-3xl">
        <Badge variant="green">About Nestora</Badge>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1F17] [text-wrap:balance]">
          Re-architecting how African talent accesses the global remote economy.
        </h1>
        <p className="text-base sm:text-lg text-[#526359] leading-relaxed">
          Nestora is a tech-skills training institute and career accelerator headquartered in Lagos, with virtual hubs across Nairobi, Kigali, and London. We believe that geographic location should not determine access to high-income technical careers.
        </p>
      </div>

      {/* 2. The Core Thesis */}
      <section className="bg-[#F3EFE6] border border-[#E8E3D6] rounded-2xl p-8 sm:p-12 space-y-6">
        <h2 className="text-xs font-semibold tracking-wider uppercase text-[#0F6B4A]">
          The Nestora Thesis
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-[#2D3A34] leading-relaxed">
          <p>
            The global technology sector faces a chronic deficit of disciplined, autonomous engineers and product designers. Concurrently, Africa holds the world’s youngest, most resilient demographic. Yet the traditional path—university degrees or shallow passive video courses—consistently fails to produce remote-ready professionals.
          </p>
          <p>
            We designed Nestora to eliminate the true blockers: erratic electricity, inadequate developer hardware, absence of candid architectural feedback, and isolation from international hiring networks. By coupling intensive apprenticeship with physical hardware distribution, we transform raw determination into world-class capability.
          </p>
        </div>
      </section>

      {/* 3. Three Governing Principles */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-[#0B1F17]">Our Three Governing Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="canvas" className="p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#E6F2EA] text-[#0F6B4A] flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="font-bold text-base text-[#0B1F17]">Production Over Tutorials</h3>
            <p className="text-xs text-[#526359] leading-relaxed">
              We ban toy todo-list apps. Fellows build multi-tenant databases, rate-limited microservices, and tokenized design systems that mirror enterprise production environments.
            </p>
          </Card>

          <Card variant="canvas" className="p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#E6F2EA] text-[#0F6B4A] flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="font-bold text-base text-[#0B1F17]">Infrastructure as Equity</h3>
            <p className="text-xs text-[#526359] leading-relaxed">
              You cannot learn container orchestration on an overheating 4GB laptop. We physically deliver enterprise machines and backup power routers directly to learners’ homes.
            </p>
          </Card>

          <Card variant="canvas" className="p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#E6F2EA] text-[#0F6B4A] flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="font-bold text-base text-[#0B1F17]">Practitioner Mentorship</h3>
            <p className="text-xs text-[#526359] leading-relaxed">
              Teaching assistants do not run our sessions. Senior staff engineers and design leads review your pull requests, teaching the unspoken norms of international distributed teams.
            </p>
          </Card>
        </div>
      </section>

      {/* 4. Global Footprint */}
      <section className="border-t border-[#E8E3D6] pt-12 space-y-8">
        <h2 className="text-2xl font-bold text-[#0B1F17]">Regional & Virtual Campuses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#2D3A34]">
          <div className="p-5 bg-[#F3EFE6] rounded-xl border border-[#E8E3D6] space-y-1">
            <p className="font-bold text-sm text-[#0B1F17]">Lagos Innovation Hub</p>
            <p className="text-[#64736B]">Commercial Ave, Yaba Tech Corridor</p>
            <p className="text-[11px] text-[#0F6B4A] pt-2">Primary Curriculum & Hardware Depot</p>
          </div>
          <div className="p-5 bg-[#F3EFE6] rounded-xl border border-[#E8E3D6] space-y-1">
            <p className="font-bold text-sm text-[#0B1F17]">Nairobi Partner Lab</p>
            <p className="text-[#64736B]">Argwings Kodhek Rd, Kilimani</p>
            <p className="text-[11px] text-[#0F6B4A] pt-2">East Africa Mentorship Hub</p>
          </div>
          <div className="p-5 bg-[#F3EFE6] rounded-xl border border-[#E8E3D6] space-y-1">
            <p className="font-bold text-sm text-[#0B1F17]">London Placement Office</p>
            <p className="text-[#64736B]">Old Street, Silicon Roundabout, UK</p>
            <p className="text-[11px] text-[#0F6B4A] pt-2">European Employer Relations</p>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <div className="bg-[#FAF8F3] border border-[#0F6B4A]/30 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-[#0B1F17]">Interested in joining the next cohort?</h3>
          <p className="text-xs text-[#526359]">Admissions for Autumn 2026 are open on a rolling basis.</p>
        </div>
        <Button
          variant="primary"
          size="md"
          onClick={() => navigate('/apply')}
          rightIcon={<ArrowRight className="w-4 h-4" />}
        >
          Submit Application
        </Button>
      </div>
    </div>
  );
};
