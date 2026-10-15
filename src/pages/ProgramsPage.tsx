import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { ArrowRight, CheckCircle2, Clock, Calendar, Laptop, Users, Filter } from 'lucide-react';
import { PROGRAMS, Program } from '../data/programs';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export const ProgramsPage: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<string>('All');
  const navigate = useNavigate();

  const tracks = ['All', 'Engineering', 'Design', 'Cloud & AI', 'Special Initiative'];

  const filteredPrograms = selectedTrack === 'All'
    ? PROGRAMS
    : PROGRAMS.filter((p) => p.track === selectedTrack);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-2xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0F6B4A] tracking-wider uppercase">
          <span>Admissions 2026</span>
          <span className="text-[#64736B]">·</span>
          <span>Next Cohort Begins Nov 10</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1F17] [text-wrap:balance]">
          Intensive Tech Programs Built for Global Velocity.
        </h1>
        <p className="text-base text-[#526359] leading-relaxed">
          Comprehensive career accelerators designed to bridge local ambition with international remote expectations. Every track includes real production sprints, 1:1 code reviews, and remote infrastructure.
        </p>
      </div>

      {/* Filter Tabs (Interactive control adhering to Section 1.A) */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#E8E3D6] pb-4">
        <span className="text-xs font-semibold text-[#64736B] mr-2 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5" /> Filter Track:
        </span>
        {tracks.map((track) => (
          <button
            key={track}
            onClick={() => setSelectedTrack(track)}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              selectedTrack === track
                ? 'bg-[#0F6B4A] text-white shadow-xs'
                : 'bg-[#F3EFE6] text-[#2D3A34] hover:bg-[#E8E3D6]'
            }`}
          >
            {track}
          </button>
        ))}
      </div>

      {/* Programs List */}
      <div className="space-y-8">
        {filteredPrograms.map((program) => (
          <Card
            key={program.slug}
            variant={program.slug === 'scholarship' ? 'surface' : 'canvas'}
            className="border border-[#E8E3D6] p-6 sm:p-8 space-y-6 hover:border-[#0F6B4A]/50 transition-all duration-200"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              {/* Left Details */}
              <div className="space-y-4 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant={program.slug === 'scholarship' ? 'green' : 'neutral'}>
                    {program.track}
                  </Badge>
                  {program.badge && (
                    <Badge variant="green">{program.badge}</Badge>
                  )}
                  <span className="text-xs text-[#64736B]">{program.level}</span>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0B1F17] hover:text-[#0F6B4A] transition-colors">
                    <Link to={`/programs/${program.slug}`}>{program.title}</Link>
                  </h2>
                  <p className="text-sm text-[#526359] mt-2 leading-relaxed">
                    {program.shortDescription}
                  </p>
                </div>

                {/* Key metadata strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 text-xs text-[#2D3A34]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#0F6B4A] shrink-0" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#0F6B4A] shrink-0" />
                    <span>Starts {program.nextCohort}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Laptop className="w-4 h-4 text-[#0F6B4A] shrink-0" />
                    <span>Starter Kit Included</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#0F6B4A] shrink-0" />
                    <span>{program.seatsLeft} Seats Remaining</span>
                  </div>
                </div>

                {/* Outcomes teaser */}
                <div className="pt-2">
                  <p className="text-xs font-semibold text-[#0B1F17] mb-2">Key Outcomes:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#526359]">
                    {program.outcomes.slice(0, 2).map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0F6B4A] shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Tuition & Action Box */}
              <div className="lg:w-72 bg-[#FAF8F3] border border-[#E8E3D6] p-5 rounded-xl flex flex-col justify-between space-y-4 shrink-0">
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-[#64736B] uppercase tracking-wider">Tuition</span>
                  <p className="text-2xl font-extrabold text-[#0B1F17] tabular-nums">
                    {program.tuition}
                  </p>
                  <p className="text-[11px] text-[#64736B] leading-tight">
                    {program.tuitionSubtext}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <Button
                    variant="primary"
                    size="sm"
                    fullWidth
                    onClick={() => navigate(`/apply?program=${program.slug}`)}
                    rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Apply Now
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    onClick={() => navigate(`/programs/${program.slug}`)}
                  >
                    View Curriculum
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
