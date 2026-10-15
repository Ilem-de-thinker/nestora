import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, Clock, Award, Users, Globe2 } from 'lucide-react';
import { MENTORS } from '../data/mentors';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export const MentorsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      <div className="space-y-3 max-w-2xl">
        <span className="text-xs font-semibold tracking-wider uppercase text-[#0F6B4A]">
          Senior Practitioners
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1F17] [text-wrap:balance]">
          Mentorship from Engineers Who Live the Remote Standard.
        </h1>
        <p className="text-sm text-[#526359] leading-relaxed">
          At Nestora, learning happens through direct apprenticeship. Every mentor is an active staff engineer, principal architect, or design director at leading international and African tech companies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MENTORS.map((mentor) => (
          <Card
            key={mentor.id}
            variant="surface"
            interactive
            className="p-6 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#0F6B4A] text-white flex items-center justify-center font-bold text-sm">
                  {mentor.initials}
                </div>
                <div>
                  <h2 className="font-bold text-base text-[#0B1F17] hover:text-[#0F6B4A] transition-colors">
                    <Link to={`/mentors/${mentor.id}`}>{mentor.name}</Link>
                  </h2>
                  <p className="text-xs text-[#64736B]">{mentor.role}</p>
                  <p className="text-[11px] font-semibold text-[#0F6B4A]">{mentor.company}</p>
                </div>
              </div>

              <div className="pt-1">
                <Badge variant="neutral">{mentor.track}</Badge>
              </div>

              <p className="text-xs text-[#526359] leading-relaxed line-clamp-3">
                {mentor.bio}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2 text-[11px] text-[#64736B]">
                {mentor.expertise.slice(0, 3).map((exp) => (
                  <span key={exp} className="bg-white/60 px-2 py-0.5 rounded border border-[#E8E3D6]">
                    {exp}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8E3D6] space-y-2">
              <div className="flex items-center justify-between text-xs text-[#64736B]">
                <span>{mentor.alumniMentored} Fellows Mentored</span>
                <span className="font-medium text-[#0B1F17]">{mentor.experienceYears} Years Exp</span>
              </div>
              <Link
                to={`/mentors/${mentor.id}`}
                className="text-xs font-semibold text-[#0F6B4A] hover:underline flex items-center justify-between pt-1"
              >
                <span>View Full Mentor Profile & Office Hours</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
