import React from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { ArrowRight, ArrowLeft, CheckCircle2, Clock, Calendar, Users, Laptop, ShieldCheck, Sparkles } from 'lucide-react';
import { PROGRAMS } from '../data/programs';
import { MENTORS } from '../data/mentors';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export const ProgramDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const program = PROGRAMS.find((p) => p.slug === slug);

  if (!program) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold text-[#0B1F17]">Program Not Found</h1>
        <p className="text-sm text-[#526359]">
          The program you requested does not exist or may have been renamed.
        </p>
        <Button variant="primary" onClick={() => navigate('/programs')}>
          Return to All Programs
        </Button>
      </div>
    );
  }

  const assignedMentors = MENTORS.filter((m) => program.mentors.includes(m.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      {/* Back button */}
      <div>
        <Link
          to="/programs"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F6B4A] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Programs Catalog
        </Link>
      </div>

      {/* Program Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="green">{program.track}</Badge>
            {program.badge && <Badge variant="dark">{program.badge}</Badge>}
            <span className="text-xs text-[#64736B]">{program.level}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1F17] [text-wrap:balance]">
            {program.title}
          </h1>

          <p className="text-base sm:text-lg text-[#526359] leading-relaxed">
            {program.overview}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#E8E3D6] text-xs text-[#2D3A34]">
            <div>
              <p className="text-[#64736B]">Duration</p>
              <p className="font-bold text-sm text-[#0B1F17]">{program.duration}</p>
            </div>
            <div>
              <p className="text-[#64736B]">Format</p>
              <p className="font-bold text-sm text-[#0B1F17]">Remote Live + Async</p>
            </div>
            <div>
              <p className="text-[#64736B]">Next Cohort</p>
              <p className="font-bold text-sm text-[#0B1F17]">{program.nextCohort}</p>
            </div>
            <div>
              <p className="text-[#64736B]">Seats Left</p>
              <p className="font-bold text-sm text-[#0F6B4A]">{program.seatsLeft} Available</p>
            </div>
          </div>
        </div>

        {/* Tuition Card */}
        <div className="lg:col-span-4">
          <Card variant="surface" className="p-6 space-y-5 sticky top-24">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-[#64736B] uppercase tracking-wider">Tuition & Financing</span>
              <p className="text-3xl font-extrabold text-[#0B1F17] tabular-nums">{program.tuition}</p>
              <p className="text-xs text-[#526359] leading-snug">{program.tuitionSubtext}</p>
            </div>

            <div className="space-y-2.5 text-xs text-[#2D3A34] pt-2 border-t border-[#E8E3D6]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F6B4A]" />
                <span>Physical dev hardware kit included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F6B4A]" />
                <span>Weekly 1:1 mentor code reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F6B4A]" />
                <span>Lifetime alumni remote talent network</span>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <Button
                variant="primary"
                size="md"
                fullWidth
                onClick={() => navigate(`/apply?program=${program.slug}`)}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Apply for Next Cohort
              </Button>
              {program.scholarshipAvailable && program.slug !== 'scholarship' && (
                <Link
                  to="/programs/scholarship"
                  className="block text-center text-xs font-semibold text-[#0F6B4A] hover:underline pt-1"
                >
                  Need financial aid? Check fellowship grants →
                </Link>
              )}
            </div>
          </Card>
        </div>
      </div>

      {/* Learning Outcomes */}
      <section className="space-y-6 pt-8 border-t border-[#E8E3D6]">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-[#0B1F17]">What You Will Master & Ship</h2>
          <p className="text-sm text-[#526359]">Concrete technical capabilities expected in remote engineering teams.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {program.outcomes.map((outcome, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4 bg-[#F3EFE6] rounded-xl border border-[#E8E3D6]">
              <CheckCircle2 className="w-4 h-4 text-[#0F6B4A] shrink-0 mt-0.5" />
              <p className="text-xs text-[#2D3A34] font-medium leading-relaxed">{outcome}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Curriculum Breakdown */}
      <section className="space-y-6 pt-8 border-t border-[#E8E3D6]">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-[#0B1F17]">Curriculum & Deliverables</h2>
          <p className="text-sm text-[#526359]">Weekly modular progression with verified portfolio projects.</p>
        </div>

        <div className="space-y-4">
          {program.curriculum.map((module, idx) => (
            <Card key={module.week} variant="canvas" className="p-6 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs font-bold text-[#0F6B4A]">{module.week}</span>
                <span className="text-xs text-[#64736B]">Sprint 0{idx + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-[#0B1F17]">{module.title}</h3>
              <p className="text-xs text-[#526359] leading-relaxed">{module.description}</p>
              <div className="pt-2 border-t border-[#E8E3D6] text-xs">
                <strong className="text-[#0B1F17]">Shipped Deliverable: </strong>
                <span className="text-[#0F6B4A] font-medium">{module.deliverable}</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Program Mentors */}
      <section className="space-y-6 pt-8 border-t border-[#E8E3D6]">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-[#0B1F17]">Track Mentors</h2>
          <p className="text-sm text-[#526359]">Senior engineers and designers assigned to guide this specific program.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {assignedMentors.map((mentor) => (
            <Card key={mentor.id} variant="surface" className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0F6B4A] text-white flex items-center justify-center font-bold text-xs">
                  {mentor.initials}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0B1F17]">{mentor.name}</h4>
                  <p className="text-xs text-[#64736B]">{mentor.role}</p>
                  <p className="text-[11px] text-[#0F6B4A]">{mentor.company}</p>
                </div>
              </div>
              <p className="text-xs text-[#526359] leading-relaxed italic line-clamp-3">
                "{mentor.quote}"
              </p>
              <div className="pt-2 text-[11px] text-[#64736B] border-t border-[#E8E3D6]">
                Office Hours: {mentor.officeHours}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};
