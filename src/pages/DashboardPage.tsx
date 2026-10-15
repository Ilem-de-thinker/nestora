import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import {
  Laptop,
  Calendar,
  CheckCircle2,
  Clock,
  Download,
  Video,
  FileCode,
  Truck,
  ExternalLink,
  BookOpen,
  ArrowRight,
  LogOut,
  Sparkles,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Modal } from '../components/ui/Modal';

export const DashboardPage: React.FC = () => {
  const { user, dashboardData, logout } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<'overview' | 'starter-kit' | 'schedule' | 'resources'>('overview');
  const [selectedSessionUrl, setSelectedSessionUrl] = useState<string | null>(null);
  const [submittedAssignmentId, setSubmittedAssignmentId] = useState<string | null>(null);

  if (!user) {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-xl font-bold text-[#0B1F17]">Student Portal Sign In Required</h1>
        <p className="text-xs text-[#526359]">
          Please sign in to access your active cohort sprint workspace.
        </p>
        <Button variant="primary" onClick={() => navigate('/login')}>
          Sign In Now
        </Button>
      </div>
    );
  }

  const { starterKit, upcomingSessions, assignments, resources } = dashboardData;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-8">
      {/* Top Banner / Student ID Header */}
      <div className="bg-[#F3EFE6] border border-[#E8E3D6] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-start sm:items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#0F6B4A] text-white flex items-center justify-center font-bold text-lg shadow-xs shrink-0">
            {user.avatarInitials}
          </div>
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-bold text-[#0B1F17]">{user.name}</h1>
              <Badge variant="green">{user.cohort}</Badge>
            </div>
            <p className="text-xs text-[#526359]">
              ID: <span className="font-mono text-[#0B1F17] font-semibold">{user.studentId}</span> · Program: <strong>{user.programTitle}</strong>
            </p>
          </div>
        </div>

        {/* Overall Progress Gauge */}
        <div className="bg-[#FAF8F3] border border-[#E8E3D6] p-4 rounded-xl md:w-72 space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-[#0B1F17]">
            <span>Cohort Completion</span>
            <span className="text-[#0F6B4A] tabular-nums font-bold">{user.overallProgress}%</span>
          </div>
          <div className="w-full h-2 bg-[#E8E3D6] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#0F6B4A] rounded-full transition-all duration-500"
              style={{ width: `${user.overallProgress}%` }}
            />
          </div>
          <p className="text-[10px] text-[#64736B]">Sprint 03 of 06 · On Track for Graduation</p>
        </div>
      </div>

      {/* Navigation Tabs (Functional buttons complying with Section 1.A) */}
      <div className="flex items-center gap-1 border-b border-[#E8E3D6] pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
            activeTab === 'overview'
              ? 'bg-[#0F6B4A] text-white shadow-xs'
              : 'text-[#2D3A34] hover:bg-[#F3EFE6]'
          }`}
        >
          Sprint Overview & Tasks
        </button>
        <button
          onClick={() => setActiveTab('starter-kit')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'starter-kit'
              ? 'bg-[#0F6B4A] text-white shadow-xs'
              : 'text-[#2D3A34] hover:bg-[#F3EFE6]'
          }`}
        >
          <Laptop className="w-3.5 h-3.5" />
          Starter Kit Hardware Tracker
        </button>
        <button
          onClick={() => setActiveTab('schedule')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'schedule'
              ? 'bg-[#0F6B4A] text-white shadow-xs'
              : 'text-[#2D3A34] hover:bg-[#F3EFE6]'
          }`}
        >
          <Calendar className="w-3.5 h-3.5" />
          Live Schedule & 1:1 Mentorship
        </button>
        <button
          onClick={() => setActiveTab('resources')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'resources'
              ? 'bg-[#0F6B4A] text-white shadow-xs'
              : 'text-[#2D3A34] hover:bg-[#F3EFE6]'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          Course Resources & Kits
        </button>
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Active sprint assignments */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-1">
              <h2 className="text-lg font-bold text-[#0B1F17]">Active Cohort Deliverables</h2>
              <p className="text-xs text-[#526359]">Evaluated by your mentor and senior engineering peers.</p>
            </div>

            <div className="space-y-4">
              {assignments.map((asg) => {
                const isSubmitted = submittedAssignmentId === asg.id || asg.status === 'graded';
                return (
                  <Card key={asg.id} variant="surface" className="p-5 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h3 className="font-bold text-sm text-[#0B1F17]">{asg.title}</h3>
                      <div className="flex items-center gap-2">
                        {asg.status === 'graded' ? (
                          <Badge variant="green">{asg.grade}</Badge>
                        ) : isSubmitted ? (
                          <Badge variant="green">Submitted for Review</Badge>
                        ) : (
                          <Badge variant="neutral">Due {asg.deadline}</Badge>
                        )}
                      </div>
                    </div>

                    {asg.feedback && (
                      <div className="p-3 bg-white/70 rounded-lg border border-[#E8E3D6] text-xs">
                        <strong className="text-[#0B1F17]">Mentor Feedback: </strong>
                        <span className="text-[#526359]">{asg.feedback}</span>
                      </div>
                    )}

                    {!isSubmitted && (
                      <div className="pt-2 flex justify-end">
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => setSubmittedAssignmentId(asg.id)}
                        >
                          Submit GitHub PR URL
                        </Button>
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Quick sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <Card variant="canvas" className="p-5 space-y-4">
              <h3 className="font-bold text-sm text-[#0B1F17] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#0F6B4A]" /> Next Live Session
              </h3>
              <div className="p-3 bg-[#F3EFE6] rounded-lg border border-[#E8E3D6] space-y-1 text-xs">
                <p className="font-bold text-[#0B1F17]">{upcomingSessions[0].title}</p>
                <p className="text-[#526359]">{upcomingSessions[0].mentor}</p>
                <p className="text-[11px] text-[#0F6B4A] font-semibold">{upcomingSessions[0].date} · {upcomingSessions[0].time}</p>
              </div>
              <Button
                variant="primary"
                size="sm"
                fullWidth
                onClick={() => setSelectedSessionUrl(upcomingSessions[0].meetingUrl)}
                leftIcon={<Video className="w-3.5 h-3.5" />}
              >
                Join Video Meeting
              </Button>
            </Card>

            <Card variant="canvas" className="p-5 space-y-3">
              <h3 className="font-bold text-sm text-[#0B1F17] flex items-center gap-2">
                <Laptop className="w-4 h-4 text-[#0F6B4A]" /> Starter Kit Status
              </h3>
              <div className="text-xs space-y-1">
                <div className="flex justify-between">
                  <span className="text-[#64736B]">Status:</span>
                  <span className="font-bold text-[#0F6B4A]">{starterKit.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64736B]">Tracking:</span>
                  <span className="font-mono text-[#0B1F17]">{starterKit.trackingNumber}</span>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                fullWidth
                onClick={() => setActiveTab('starter-kit')}
              >
                View Full Tracking Log
              </Button>
            </Card>
          </div>
        </div>
      )}

      {/* TAB 2: STARTER KIT TRACKER */}
      {activeTab === 'starter-kit' && (
        <div className="space-y-6">
          <Card variant="surface" className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8E3D6] pb-4">
              <div>
                <span className="text-xs font-semibold text-[#0F6B4A] uppercase tracking-wider">Physical Hardware Bundle</span>
                <h2 className="text-xl font-bold text-[#0B1F17]">Sealed Remote Starter Kit #{starterKit.kitId}</h2>
                <p className="text-xs text-[#526359]">Dispatched via {starterKit.carrier} · Destination: {starterKit.destination}</p>
              </div>
              <Badge variant="green" size="md">{starterKit.status}</Badge>
            </div>

            {/* Hardware Items Manifest */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-[#64736B] uppercase tracking-wider">Included Hardware Manifest</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {starterKit.items.map((item) => (
                  <div key={item.serial} className="p-3 bg-white rounded-lg border border-[#E8E3D6] flex justify-between items-center">
                    <div>
                      <p className="font-bold text-[#0B1F17]">{item.name}</p>
                      <p className="text-[11px] font-mono text-[#64736B]">Serial: {item.serial}</p>
                    </div>
                    <span className="text-[11px] text-[#0F6B4A] font-semibold">{item.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dispatch Timeline */}
            <div className="space-y-3 pt-4 border-t border-[#E8E3D6]">
              <h3 className="text-xs font-semibold text-[#64736B] uppercase tracking-wider">Logistics Milestones</h3>
              <div className="space-y-3">
                {starterKit.timeline.map((event, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#0F6B4A] shrink-0" />
                    <span className="font-semibold text-[#0B1F17]">{event.step}</span>
                    <span className="text-[#64736B]">· {event.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* TAB 3: SCHEDULE & SESSIONS */}
      {activeTab === 'schedule' && (
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-[#0B1F17]">Live Masterclasses & Mentor Reviews</h2>
            <p className="text-xs text-[#526359]">Attend live or catch up on indexed recording transcripts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingSessions.map((session) => (
              <Card key={session.id} variant="surface" className="p-5 space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <Badge variant="neutral">{session.date}</Badge>
                  <h3 className="font-bold text-sm text-[#0B1F17]">{session.title}</h3>
                  <p className="text-xs text-[#526359]">Mentor: {session.mentor}</p>
                  <p className="text-xs font-semibold text-[#0F6B4A]">{session.time}</p>
                </div>
                <Button
                  variant="primary"
                  size="sm"
                  fullWidth
                  onClick={() => setSelectedSessionUrl(session.meetingUrl)}
                  leftIcon={<Video className="w-3.5 h-3.5" />}
                >
                  Join Live Room
                </Button>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: RESOURCES */}
      {activeTab === 'resources' && (
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-[#0B1F17]">Fellowship Engineering Playbooks & Templates</h2>
            <p className="text-xs text-[#526359]">Official starter blueprints, code standards, and tax documentation.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {resources.map((res, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#F3EFE6] border border-[#E8E3D6] rounded-xl flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-3">
                  <FileCode className="w-5 h-5 text-[#0F6B4A]" />
                  <div>
                    <p className="font-bold text-[#0B1F17]">{res.title}</p>
                    <p className="text-[11px] text-[#64736B]">{res.category} · {res.format} · {res.size}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => alert(`Downloading demo resource: ${res.title}`)}
                  className="p-2 text-[#0F6B4A] hover:bg-[#E6F2EA] rounded-lg transition-colors cursor-pointer"
                  title="Download File"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Meeting simulation modal */}
      <Modal
        isOpen={!!selectedSessionUrl}
        onClose={() => setSelectedSessionUrl(null)}
        title="Nestora Live Masterclass Room"
        description="Encrypted virtual room for cohort code reviews and architectural demos."
      >
        <div className="space-y-4 text-center py-4">
          <div className="w-12 h-12 rounded-full bg-[#E6F2EA] text-[#0F6B4A] mx-auto flex items-center justify-center">
            <Video className="w-6 h-6" />
          </div>
          <h4 className="font-bold text-sm text-[#0B1F17]">Connecting to Google Meet Session</h4>
          <p className="text-xs text-[#526359] max-w-sm mx-auto">
            Meeting Link: <span className="font-mono text-[#0F6B4A]">{selectedSessionUrl}</span>
          </p>
          <div className="p-3 bg-[#F3EFE6] rounded-lg text-xs text-[#64736B]">
            Ensure your Sony WH-1000XM4 headset is connected for noise-suppressed participation.
          </div>
          <div className="flex justify-center gap-3 pt-2">
            <Button variant="outline" size="sm" onClick={() => setSelectedSessionUrl(null)}>
              Close Room
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                alert('Opening demo virtual meeting stage in client session.');
                setSelectedSessionUrl(null);
              }}
            >
              Enter Stage
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
