import React from 'react';
import { useNavigate, Link } from 'react-router';
import { ArrowRight, CheckCircle2, ShieldAlert, Award, Sparkles, Laptop, BookOpen, Clock, Calendar } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { IMAGES } from '../lib/images';
import { PROGRAMS } from '../data/programs';
import { MENTORS } from '../data/mentors';

export const ScholarshipPage: React.FC = () => {
  const navigate = useNavigate();
  const fellowship = PROGRAMS.find((p) => p.slug === 'scholarship')!;

  const assignedMentors = MENTORS.filter((m) => fellowship.mentors.includes(m.id));

  return (
    <div className="space-y-16 md:space-y-24 py-12 md:py-16">
      {/* 1. Header & Lead */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <Badge variant="green">100% Fully Funded Grant</Badge>
              <span className="text-xs text-[#64736B]">Cohort 04 Admissions</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1F17] leading-[1.1] [text-wrap:balance]">
              The Nestora Impact Fellowship.
            </h1>

            <p className="text-base sm:text-lg text-[#526359] leading-relaxed">
              A 6-week intensive remote accelerator designed for high-potential African talent. We remove the structural obstacles—tuition, hardware, electricity, and mentorship—so you can focus entirely on technical mastery.
            </p>

            <div className="p-4 bg-[#F3EFE6] border border-[#E8E3D6] rounded-xl flex items-center justify-between text-xs text-[#2D3A34]">
              <div>
                <span className="font-bold text-[#0B1F17] text-sm">$0 Tuition</span>
                <p className="text-[#64736B]">Fully sponsored by international partners</p>
              </div>
              <div>
                <span className="font-bold text-[#0B1F17] text-sm">35 Seats</span>
                <p className="text-[#64736B]">West & East Africa intake</p>
              </div>
              <div>
                <span className="font-bold text-[#0B1F17] text-sm">Starts Nov 10</span>
                <p className="text-[#64736B]">6 Weeks intensive</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/apply?program=scholarship')}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Apply for Fellowship Seat
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const el = document.getElementById('curriculum-breakdown');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View 6-Week Sprints
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-[#E8E3D6] shadow-xs">
              <ImageWithFallback
                src={IMAGES.scholarshipMentorship}
                alt="Fellows engaged in whiteboard architecture review with senior mentor"
                aspectRatioClass="aspect-[4/3]"
              />
              <div className="p-4 bg-[#F3EFE6] border-t border-[#E8E3D6] text-xs">
                <p className="font-semibold text-[#0B1F17]">Weekly 1:1 Architecture Reviews</p>
                <p className="text-[#64736B]">Direct personal feedback on code quality and remote etiquette</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What's Included: 4 Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#0F6B4A]">
              Full Grant Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F17]">
              What Admitted Fellows Receive
            </h2>
            <p className="text-sm text-[#526359]">
              Everything needed to learn, build, and work remotely without compromises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="surface" className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#E6F2EA] text-[#0F6B4A] flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-bold text-base text-[#0B1F17]">100% Tuition Grant</h3>
              <p className="text-xs text-[#526359] leading-relaxed">
                Full financial coverage for all lectures, masterclasses, code review platforms, and capstone assessments. Zero deferred tuition or equity.
              </p>
            </Card>

            <Card variant="surface" className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#E6F2EA] text-[#0F6B4A] flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-bold text-base text-[#0B1F17]">Physical Starter Kit</h3>
              <p className="text-xs text-[#526359] leading-relaxed">
                Refurbished enterprise dev laptop (16GB RAM, quad-core CPU), noise-canceling headset, backup power router, and linen engineering journal delivered to your home.
              </p>
            </Card>

            <Card variant="surface" className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#E6F2EA] text-[#0F6B4A] flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-bold text-base text-[#0B1F17]">Dedicated Senior Mentor</h3>
              <p className="text-xs text-[#526359] leading-relaxed">
                Weekly scheduled 1:1 sessions with engineering leads from Moniepoint, Stripe partner networks, and Paystack for deep architectural reviews.
              </p>
            </Card>

            <Card variant="surface" className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#E6F2EA] text-[#0F6B4A] flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="font-bold text-base text-[#0B1F17]">Placement Desk Access</h3>
              <p className="text-xs text-[#526359] leading-relaxed">
                Direct introductions to international startups and enterprises actively hiring remote African engineers and product designers.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. The 6-Week Intensive Structure */}
      <section id="curriculum-breakdown" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F3] border border-[#E8E3D6] rounded-2xl p-8 sm:p-12 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#0F6B4A]">
              Syllabus Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F17]">
              The 6-Week Crucible Breakdown
            </h2>
            <p className="text-sm text-[#526359]">
              Fast-paced, production-first engineering designed to establish professional autonomy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fellowship.curriculum.map((mod, idx) => (
              <div
                key={mod.week}
                className="bg-[#F3EFE6] border border-[#E8E3D6] p-6 rounded-xl space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#64736B]">
                    <span className="font-bold text-[#0F6B4A]">Phase 0{idx + 1}</span>
                    <span>{mod.week}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#0B1F17]">{mod.title}</h3>
                  <p className="text-xs text-[#526359] leading-relaxed">{mod.description}</p>
                </div>
                <div className="pt-3 border-t border-[#E8E3D6]">
                  <p className="text-[11px] font-semibold text-[#0B1F17] mb-1">Evaluated Deliverable:</p>
                  <p className="text-xs text-[#0F6B4A] font-medium leading-snug">{mod.deliverable}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Eligibility & How Selection Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Eligibility Card */}
          <Card variant="surface" className="p-8 space-y-5">
            <h3 className="text-xl font-bold text-[#0B1F17] flex items-center gap-2">
              <Award className="w-5 h-5 text-[#0F6B4A]" /> Eligibility Requirements
            </h3>
            <ul className="space-y-3 text-xs text-[#2D3A34]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0F6B4A] shrink-0 mt-0.5" />
                <span>
                  <strong>Geographic Location:</strong> Resident of Nigeria, Ghana, Kenya, Rwanda, or another African nation with intent to work remotely.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0F6B4A] shrink-0 mt-0.5" />
                <span>
                  <strong>Time Commitment:</strong> Ability to commit at least 15 hours per week to live code reviews, evening masterclasses, and project sprints.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0F6B4A] shrink-0 mt-0.5" />
                <span>
                  <strong>Demonstrated Curiosity:</strong> Evidence of prior self-learning (GitHub repositories, Figma prototypes, personal projects, or technical writing).
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0F6B4A] shrink-0 mt-0.5" />
                <span>
                  <strong>Collaborative Temperament:</strong> Willingness to accept candid architectural critiques and engage actively in peer code reviews.
                </span>
              </li>
            </ul>
          </Card>

          {/* Selection Process */}
          <Card variant="surface" className="p-8 space-y-5">
            <h3 className="text-xl font-bold text-[#0B1F17] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#0F6B4A]" /> How Selection Works
            </h3>
            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-md bg-[#FAF8F3] border border-[#E8E3D6] text-[#0B1F17] font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <div>
                  <p className="font-bold text-[#0B1F17]">Written Application (15 mins)</p>
                  <p className="text-[#526359] mt-0.5">Tell us about your background, projects you’ve built, and why you want to work remotely.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-md bg-[#FAF8F3] border border-[#E8E3D6] text-[#0B1F17] font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <div>
                  <p className="font-bold text-[#0B1F17]">Technical Logic & Coding Challenge</p>
                  <p className="text-[#526359] mt-0.5">A 45-minute asynchronous problem-solving sprint testing first-principles thinking.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-md bg-[#FAF8F3] border border-[#E8E3D6] text-[#0B1F17] font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <div>
                  <p className="font-bold text-[#0B1F17]">Conversational Interview with Mentor</p>
                  <p className="text-[#526359] mt-0.5">A 20-minute video discussion evaluating your communication clarity, curiosity, and remote discipline.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-md bg-[#E6F2EA] text-[#0F6B4A] font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <div>
                  <p className="font-bold text-[#0F6B4A]">Admission Offer & Starter Kit Dispatch</p>
                  <p className="text-[#526359] mt-0.5">Selected fellows receive welcome packages and their sealed hardware bundle before kickoff.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* 5. Assigned Mentors Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-[#0B1F17]">Fellowship Mentors</h2>
            <p className="text-xs text-[#64736B]">Assigned to guide Cohort 04 fellows weekly</p>
          </div>
          <Link to="/mentors" className="text-xs font-semibold text-[#0F6B4A] hover:underline">
            View All Mentors
          </Link>
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
                  <p className="text-xs text-[#64736B]">{mentor.role} · {mentor.company}</p>
                </div>
              </div>
              <p className="text-xs text-[#526359] line-clamp-2 italic">"{mentor.quote}"</p>
              <div className="pt-2 text-[11px] text-[#0F6B4A] font-medium border-t border-[#E8E3D6]">
                Office Hours: {mentor.officeHours}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 6. Sticky Bottom Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F3EFE6] border border-[#0F6B4A]/30 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-[#0B1F17]">Ready to apply for the fully funded grant?</h3>
            <p className="text-xs text-[#526359]">
              Next deadline is November 10, 2026. Only 35 fellowship seats available for this cycle.
            </p>
          </div>
          <Button
            variant="primary"
            size="md"
            onClick={() => navigate('/apply?program=scholarship')}
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Start Fellowship Application
          </Button>
        </div>
      </section>
    </div>
  );
};
