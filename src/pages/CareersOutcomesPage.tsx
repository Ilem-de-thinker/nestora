import React from 'react';
import { useNavigate } from 'react-router';
import { ArrowRight, TrendingUp, CheckCircle2, Building2, MapPin, Clock, DollarSign } from 'lucide-react';
import { ALUMNI_STORIES, OUTCOME_METRICS, HIRING_PARTNERS } from '../data/outcomes';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { IMAGES } from '../lib/images';

export const CareersOutcomesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
      {/* Header & Lead */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-5">
          <Badge variant="green">Verified Alumni Careers</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1F17] leading-[1.1] [text-wrap:balance]">
            Measurable career transformations across global remote teams.
          </h1>
          <p className="text-base sm:text-lg text-[#526359] leading-relaxed">
            Our graduates work autonomously as software engineers, cloud architects, and design systems leads for startups and enterprises across the US, UK, Europe, and Africa.
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden border border-[#E8E3D6] shadow-xs">
            <ImageWithFallback
              src={IMAGES.fellowSuccess}
              alt="Nestora graduate working comfortably as remote product designer"
              aspectRatioClass="aspect-[4/3]"
            />
            <div className="p-4 bg-[#F3EFE6] border-t border-[#E8E3D6] text-xs">
              <p className="font-semibold text-[#0B1F17]">Zainab Ibrahim · Senior Design Systems Lead</p>
              <p className="text-[#64736B]">Hired remotely by Berlin healthtech firm · +410% compensation growth</p>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Strip */}
      <div className="bg-[#FAF8F3] border border-[#E8E3D6] rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {OUTCOME_METRICS.map((metric) => (
          <div key={metric.label} className="space-y-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-[#0B1F17] tabular-nums tracking-tight">
              {metric.value}
            </p>
            <p className="text-xs font-semibold text-[#0B1F17]">{metric.label}</p>
            <p className="text-[11px] text-[#526359] leading-snug">{metric.subtext}</p>
          </div>
        ))}
      </div>

      {/* In-Depth Alumni Case Studies */}
      <section className="space-y-8">
        <div className="space-y-2 max-w-xl">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#0F6B4A]">
            Graduate Profiles
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F17]">
            Before & After: Verifiable Trajectories
          </h2>
          <p className="text-sm text-[#526359]">
            Real stories from alumni who completed the Nestora fellowship and programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ALUMNI_STORIES.map((story) => (
            <Card
              key={story.id}
              variant="surface"
              className="p-6 sm:p-8 space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#0B1F17]">{story.name}</h3>
                    <p className="text-xs text-[#64736B] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#0F6B4A]" /> {story.location}
                    </p>
                  </div>
                  <Badge variant="green">{story.salaryIncrease} Compensation</Badge>
                </div>

                {/* Trajectory comparison */}
                <div className="p-3 bg-white/70 rounded-xl border border-[#E8E3D6] grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-[#64736B] block">Previous Role</span>
                    <p className="text-[#2D3A34] font-medium">{story.previousRole}</p>
                  </div>
                  <div className="border-l border-[#E8E3D6] pl-3">
                    <span className="text-[10px] uppercase font-semibold text-[#0F6B4A] block">Current Remote Role</span>
                    <p className="text-[#0B1F17] font-bold">{story.newRole}</p>
                    <p className="text-[11px] text-[#64736B]">{story.company}</p>
                  </div>
                </div>

                <p className="text-xs text-[#526359] leading-relaxed italic">
                  "{story.quote}"
                </p>

                <div className="pt-2 flex flex-wrap gap-1.5 text-[11px] text-[#64736B]">
                  {story.skillsAcquired.map((skill) => (
                    <span key={skill} className="bg-white/80 px-2 py-0.5 rounded border border-[#E8E3D6]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8E3D6] flex items-center justify-between text-xs text-[#64736B]">
                <span>Completed: {story.programTaken}</span>
                <span className="font-semibold text-[#0B1F17]">Hired in {story.timeToHire}</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Hiring Partners */}
      <section className="bg-[#F3EFE6] border border-[#E8E3D6] rounded-2xl p-8 sm:p-12 space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-[#0B1F17]">Active Hiring Partners</h2>
          <p className="text-xs text-[#526359]">
            Companies that interview and hire Nestora graduates directly through our Talent Placement Desk.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {HIRING_PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="p-4 bg-[#FAF8F3] border border-[#E8E3D6] rounded-xl text-center space-y-1"
            >
              <p className="font-bold text-sm text-[#0B1F17]">{partner.name}</p>
              <p className="text-[11px] text-[#64736B]">{partner.sector}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="bg-[#0F6B4A] text-[#FAF8F3] rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-[#FAF8F3]">Ready to write your own outcome?</h3>
          <p className="text-xs text-[#D7ECE0]">
            Join the next cohort of engineers and designers entering the global remote workforce.
          </p>
        </div>
        <Button
          variant="cream"
          size="md"
          onClick={() => navigate('/apply')}
          rightIcon={<ArrowRight className="w-4 h-4 text-[#0B1F17]" />}
        >
          Apply for Next Cohort
        </Button>
      </div>
    </div>
  );
};
