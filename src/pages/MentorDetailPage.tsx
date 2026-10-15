import React from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { ArrowLeft, Clock, Award, Users, CheckCircle2, MessageSquare } from 'lucide-react';
import { MENTORS } from '../data/mentors';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export const MentorDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const mentor = MENTORS.find((m) => m.id === slug);

  if (!mentor) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold text-[#0B1F17]">Mentor Not Found</h1>
        <p className="text-sm text-[#526359]">
          The mentor profile you requested is currently unavailable.
        </p>
        <Button variant="primary" onClick={() => navigate('/mentors')}>
          Return to Mentors Directory
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      <div>
        <Link
          to="/mentors"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F6B4A] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Mentors Directory
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Mentor Bio & Credentials */}
        <div className="md:col-span-8 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#0F6B4A] text-white flex items-center justify-center font-bold text-xl shrink-0">
              {mentor.initials}
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#0B1F17]">{mentor.name}</h1>
              <p className="text-sm font-medium text-[#0F6B4A]">{mentor.role} at {mentor.company}</p>
              <p className="text-xs text-[#64736B]">{mentor.location}</p>
            </div>
          </div>

          <div className="p-4 bg-[#F3EFE6] border border-[#E8E3D6] rounded-xl text-xs italic text-[#2D3A34] leading-relaxed">
            "{mentor.quote}"
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-bold text-[#0B1F17]">Practitioner Biography</h2>
            <p className="text-sm text-[#526359] leading-relaxed">
              {mentor.bio}
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#E8E3D6]">
            <h2 className="text-base font-bold text-[#0B1F17]">Core Engineering & Design Domains</h2>
            <div className="flex flex-wrap gap-2">
              {mentor.expertise.map((exp) => (
                <Badge key={exp} variant="neutral">
                  {exp}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Office Hours & Track Sidebar */}
        <div className="md:col-span-4 space-y-4">
          <Card variant="surface" className="p-6 space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-[#64736B] uppercase tracking-wider">Assigned Track</span>
              <p className="text-sm font-bold text-[#0B1F17]">{mentor.track}</p>
            </div>

            <div className="space-y-2 pt-2 border-t border-[#E8E3D6] text-xs">
              <div className="flex justify-between">
                <span className="text-[#64736B]">Industry Experience</span>
                <span className="font-bold text-[#0B1F17]">{mentor.experienceYears} Years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64736B]">Alumni Mentored</span>
                <span className="font-bold text-[#0B1F17]">{mentor.alumniMentored}+</span>
              </div>
            </div>

            <div className="p-3 bg-white rounded-lg border border-[#E8E3D6] space-y-1 text-xs">
              <div className="flex items-center gap-1.5 font-bold text-[#0B1F17]">
                <Clock className="w-3.5 h-3.5 text-[#0F6B4A]" /> Weekly Office Hours
              </div>
              <p className="text-[#526359] text-[11px]">{mentor.officeHours}</p>
            </div>

            <Button
              variant="primary"
              size="sm"
              fullWidth
              onClick={() => navigate('/apply')}
            >
              Apply to Learn with {mentor.name.split(' ')[0]}
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};
