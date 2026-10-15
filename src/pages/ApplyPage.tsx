import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router';
import { CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, Laptop, Sparkles, AlertCircle } from 'lucide-react';
import { PROGRAMS } from '../data/programs';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Select } from '../components/ui/Select';
import { Badge } from '../components/ui/Badge';

export const ApplyPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const programParam = searchParams.get('program') || 'scholarship';

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationSuccess, setApplicationSuccess] = useState(false);
  const [applicationId, setApplicationId] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Personal
    fullName: '',
    email: '',
    phone: '',
    country: 'Nigeria',
    city: 'Lagos',
    githubOrPortfolio: '',
    // Step 2: Track & Background
    programSlug: programParam,
    occupation: 'Junior Developer / Freelancer',
    experienceLevel: '1–2 Years',
    primaryDiscipline: 'Software Engineering',
    // Step 3: Motivation & Remote Readiness
    motivation: '',
    weeklyHours: '15–20 hours/week',
    needsStarterKit: 'Yes',
    powerSetup: 'Public Grid + Inverter / Backup Generator',
    // Step 4: Agreement
    honorCodeAccepted: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (programParam && PROGRAMS.some((p) => p.slug === programParam)) {
      setFormData((prev) => ({ ...prev, programSlug: programParam }));
    }
  }, [programParam]);

  const selectedProgram = PROGRAMS.find((p) => p.slug === formData.programSlug) || PROGRAMS[0];

  const validateStep = (step: number) => {
    const errs: Record<string, string> = {};
    if (step === 1) {
      if (!formData.fullName.trim()) errs.fullName = 'Full legal name is required.';
      if (!formData.email.trim() || !formData.email.includes('@'))
        errs.email = 'Valid email address is required.';
      if (!formData.phone.trim()) errs.phone = 'Phone number is required.';
      if (!formData.city.trim()) errs.city = 'City of residence is required.';
    }
    if (step === 2) {
      if (!formData.programSlug) errs.programSlug = 'Please select a program track.';
    }
    if (step === 3) {
      if (!formData.motivation.trim() || formData.motivation.length < 30) {
        errs.motivation = 'Please share at least 30 characters explaining your career motivation.';
      }
    }
    if (step === 4) {
      if (!formData.honorCodeAccepted) {
        errs.honorCodeAccepted = 'You must accept the Nestora Academic Honor Code.';
      }
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `NST-${new Date().getFullYear()}-APP${Math.floor(10000 + Math.random() * 90000)}`;
      setApplicationId(generatedId);
      setApplicationSuccess(true);
    }, 1200);
  };

  if (applicationSuccess) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 sm:py-24">
        <Card variant="surface" className="p-8 sm:p-12 text-center space-y-6 border border-[#0F6B4A]/30">
          <div className="w-16 h-16 rounded-full bg-[#E6F2EA] text-[#0F6B4A] mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <Badge variant="green">Application Successfully Received</Badge>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#0B1F17]">
              Welcome to the Candidate Pool, {formData.fullName.split(' ')[0]}!
            </h1>
            <p className="text-xs text-[#526359] leading-relaxed max-w-lg mx-auto">
              Your application for <strong>{selectedProgram.title}</strong> has been logged in our admissions database.
            </p>
          </div>

          {/* Reference Card */}
          <div className="bg-[#FAF8F3] border border-[#E8E3D6] p-4 rounded-xl text-left text-xs space-y-2 max-w-md mx-auto">
            <div className="flex justify-between border-b border-[#E8E3D6] pb-2">
              <span className="text-[#64736B]">Application ID</span>
              <strong className="font-mono text-[#0B1F17]">{applicationId}</strong>
            </div>
            <div className="flex justify-between border-b border-[#E8E3D6] pb-2">
              <span className="text-[#64736B]">Track Selected</span>
              <span className="font-semibold text-[#0B1F17]">{selectedProgram.title}</span>
            </div>
            <div className="flex justify-between border-b border-[#E8E3D6] pb-2">
              <span className="text-[#64736B]">Hardware Starter Kit</span>
              <span className="font-semibold text-[#0F6B4A]">Requested ({formData.needsStarterKit})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#64736B]">Next Evaluation Round</span>
              <span className="font-semibold text-[#0B1F17]">Technical Logic Sprint</span>
            </div>
          </div>

          <div className="space-y-3 pt-2 max-w-md mx-auto text-left text-xs text-[#526359]">
            <p className="font-bold text-[#0B1F17]">What happens next?</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Check your inbox at <strong>{formData.email}</strong> for your logic challenge link.</li>
              <li>Complete the asynchronous coding challenge within 72 hours.</li>
              <li>Candidates meeting the threshold will be invited for a 20-min mentor interview.</li>
            </ol>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              variant="primary"
              size="md"
              onClick={() => navigate('/dashboard')}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Student Portal Demo
            </Button>
            <Button
              variant="outline"
              size="md"
              onClick={() => navigate('/')}
            >
              Return to Home
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-10">
      {/* Header */}
      <div className="space-y-3 text-center max-w-2xl mx-auto">
        <span className="text-xs font-semibold tracking-wider uppercase text-[#0F6B4A]">
          Official Admissions Gateway
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1F17]">
          Nestora Cohort Application
        </h1>
        <p className="text-sm text-[#526359]">
          Takes ~8 minutes. No application fee. Applications are reviewed on a rolling basis.
        </p>
      </div>

      {/* Stepper Header */}
      <div className="grid grid-cols-4 gap-2 text-center text-xs">
        {[
          { num: 1, label: 'Personal Info' },
          { num: 2, label: 'Track Selection' },
          { num: 3, label: 'Remote Readiness' },
          { num: 4, label: 'Review & Submit' },
        ].map((s) => (
          <div
            key={s.num}
            className={`p-2.5 rounded-lg border transition-colors ${
              currentStep === s.num
                ? 'bg-[#E6F2EA] border-[#0F6B4A] text-[#0F6B4A] font-bold'
                : currentStep > s.num
                ? 'bg-[#F3EFE6] border-[#D4CDBC] text-[#0B1F17]'
                : 'bg-transparent border-[#E8E3D6] text-[#8E9B93]'
            }`}
          >
            <span className="block text-[11px]">Step 0{s.num}</span>
            <span className="truncate block font-medium">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Multi-step Form Card */}
      <Card variant="surface" className="p-6 sm:p-10 border border-[#E8E3D6]">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* STEP 1: Personal Details */}
          {currentStep === 1 && (
            <div className="space-y-5 animate-fadeIn">
              <div className="border-b border-[#E8E3D6] pb-3">
                <h2 className="text-lg font-bold text-[#0B1F17]">1. Candidate Information & Residence</h2>
                <p className="text-xs text-[#526359]">Used for identity verification and hardware delivery dispatch.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Full Legal Name"
                  required
                  placeholder="e.g. Adebayo Ogunlesi"
                  value={formData.fullName}
                  error={errors.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
                <Input
                  label="Email Address"
                  type="email"
                  required
                  placeholder="adebayo@example.com"
                  value={formData.email}
                  error={errors.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Input
                  label="Phone Number (WhatsApp Active)"
                  required
                  placeholder="+234 803 000 0000"
                  value={formData.phone}
                  error={errors.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <Select
                  label="Country of Residence"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  options={[
                    { value: 'Nigeria', label: 'Nigeria' },
                    { value: 'Ghana', label: 'Ghana' },
                    { value: 'Kenya', label: 'Kenya' },
                    { value: 'Rwanda', label: 'Rwanda' },
                    { value: 'South Africa', label: 'South Africa' },
                    { value: 'Other African Country', label: 'Other African Country' },
                  ]}
                />
                <Input
                  label="City / Town"
                  required
                  placeholder="e.g. Ibadan, Lagos, Nairobi"
                  value={formData.city}
                  error={errors.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />
              </div>

              <Input
                label="GitHub, Figma Profile, or Portfolio URL"
                placeholder="https://github.com/yourhandle or portfolio link"
                value={formData.githubOrPortfolio}
                helperText="Optional, but strongly recommended to demonstrate prior self-directed learning."
                onChange={(e) => setFormData({ ...formData, githubOrPortfolio: e.target.value })}
              />
            </div>
          )}

          {/* STEP 2: Track Selection */}
          {currentStep === 2 && (
            <div className="space-y-5 animate-fadeIn">
              <div className="border-b border-[#E8E3D6] pb-3">
                <h2 className="text-lg font-bold text-[#0B1F17]">2. Program Track & Technical Background</h2>
                <p className="text-xs text-[#526359]">Select your intended focus area and current experience level.</p>
              </div>

              <div className="space-y-3">
                <label className="block text-xs font-semibold text-[#0B1F17]">
                  Select Program Track <span className="text-[#0F6B4A]">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PROGRAMS.map((prog) => (
                    <div
                      key={prog.slug}
                      onClick={() => setFormData({ ...formData, programSlug: prog.slug })}
                      className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                        formData.programSlug === prog.slug
                          ? 'border-[#0F6B4A] bg-[#FAF8F3] ring-1 ring-[#0F6B4A]'
                          : 'border-[#E8E3D6] bg-white hover:border-[#0F6B4A]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-bold text-[#0B1F17]">{prog.title}</span>
                        {prog.slug === 'scholarship' && (
                          <Badge variant="green">100% Funded</Badge>
                        )}
                      </div>
                      <p className="text-[11px] text-[#526359] line-clamp-2">{prog.shortDescription}</p>
                      <p className="text-[10px] font-semibold text-[#0F6B4A] mt-2">
                        {prog.tuition} · {prog.duration}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <Select
                  label="Current Occupation"
                  value={formData.occupation}
                  onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                  options={[
                    { value: 'Junior Developer / Freelancer', label: 'Junior Developer / Freelancer' },
                    { value: 'University Student / Recent Grad', label: 'University Student / Recent Grad' },
                    { value: 'Self-Taught Career Switcher', label: 'Self-Taught Career Switcher' },
                    { value: 'IT Support / Non-Tech Professional', label: 'IT Support / Non-Tech Professional' },
                  ]}
                />
                <Select
                  label="Coding / Design Experience"
                  value={formData.experienceLevel}
                  onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                  options={[
                    { value: 'Complete Beginner (<6 Months)', label: 'Complete Beginner (<6 Months)' },
                    { value: '1–2 Years Self-Taught', label: '1–2 Years Self-Taught' },
                    { value: '2+ Years Building Small Projects', label: '2+ Years Building Small Projects' },
                  ]}
                />
              </div>
            </div>
          )}

          {/* STEP 3: Remote Readiness */}
          {currentStep === 3 && (
            <div className="space-y-5 animate-fadeIn">
              <div className="border-b border-[#E8E3D6] pb-3">
                <h2 className="text-lg font-bold text-[#0B1F17]">3. Remote Readiness & Motivation</h2>
                <p className="text-xs text-[#526359]">We evaluate availability, infrastructure setup, and motivation.</p>
              </div>

              <Textarea
                label="Why do you want to join Nestora, and what are your remote career goals?"
                required
                rows={4}
                value={formData.motivation}
                error={errors.motivation}
                placeholder="Share your technical goals, what you have attempted to learn so far, and how you plan to commit your time..."
                onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Select
                  label="Weekly Hours Commitment"
                  value={formData.weeklyHours}
                  onChange={(e) => setFormData({ ...formData, weeklyHours: e.target.value })}
                  options={[
                    { value: '12–15 hours/week', label: '12–15 hours/week' },
                    { value: '15–20 hours/week (Recommended)', label: '15–20 hours/week (Recommended)' },
                    { value: '25+ hours/week (Full-Time Immersion)', label: '25+ hours/week' },
                  ]}
                />
                <Select
                  label="Need Starter Kit Hardware?"
                  value={formData.needsStarterKit}
                  onChange={(e) => setFormData({ ...formData, needsStarterKit: e.target.value })}
                  options={[
                    { value: 'Yes', label: 'Yes, I need laptop & router' },
                    { value: 'No', label: 'No, I have my own setup' },
                  ]}
                />
                <Select
                  label="Current Power & Backup Setup"
                  value={formData.powerSetup}
                  onChange={(e) => setFormData({ ...formData, powerSetup: e.target.value })}
                  options={[
                    { value: 'Public Grid + Inverter / Backup Generator', label: 'Inverter / Generator Backup' },
                    { value: 'Solar Setup', label: 'Solar Power' },
                    { value: 'Reliable Co-working Space Nearby', label: 'Co-working Access' },
                    { value: 'Unstable Grid (Need Nestora Backup Kit)', label: 'Unstable (Need Backup Kit)' },
                  ]}
                />
              </div>
            </div>
          )}

          {/* STEP 4: Review & Agreement */}
          {currentStep === 4 && (
            <div className="space-y-5 animate-fadeIn">
              <div className="border-b border-[#E8E3D6] pb-3">
                <h2 className="text-lg font-bold text-[#0B1F17]">4. Review Details & Submit</h2>
                <p className="text-xs text-[#526359]">Confirm your candidate summary before final submission.</p>
              </div>

              <div className="bg-[#FAF8F3] border border-[#E8E3D6] rounded-xl p-5 space-y-3 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-b border-[#E8E3D6] pb-3">
                  <div>
                    <span className="text-[#64736B]">Candidate Name:</span>
                    <p className="font-bold text-[#0B1F17]">{formData.fullName}</p>
                  </div>
                  <div>
                    <span className="text-[#64736B]">Email & Phone:</span>
                    <p className="font-bold text-[#0B1F17]">{formData.email} · {formData.phone}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-b border-[#E8E3D6] pb-3">
                  <div>
                    <span className="text-[#64736B]">Program Selected:</span>
                    <p className="font-bold text-[#0F6B4A]">{selectedProgram.title}</p>
                  </div>
                  <div>
                    <span className="text-[#64736B]">Tuition / Grant Status:</span>
                    <p className="font-bold text-[#0B1F17]">{selectedProgram.tuition}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <span className="text-[#64736B]">Hardware Starter Kit:</span>
                    <p className="font-bold text-[#0B1F17]">{formData.needsStarterKit === 'Yes' ? 'Requested for Home Delivery' : 'Self-Provided'}</p>
                  </div>
                  <div>
                    <span className="text-[#64736B]">Location:</span>
                    <p className="font-bold text-[#0B1F17]">{formData.city}, {formData.country}</p>
                  </div>
                </div>
              </div>

              {/* Honor Code Checkbox */}
              <div className="p-4 bg-white border border-[#D4CDBC] rounded-xl space-y-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.honorCodeAccepted}
                    onChange={(e) => setFormData({ ...formData, honorCodeAccepted: e.target.checked })}
                    className="mt-1 w-4 h-4 text-[#0F6B4A] rounded border-[#D4CDBC] focus:ring-[#0F6B4A]"
                  />
                  <div className="text-xs text-[#2D3A34]">
                    <span className="font-bold text-[#0B1F17]">Nestora Academic Honor Code: </span>
                    I commit to completing code reviews autonomously, adhering to strict zero-plagiarism policies, and participating constructively in cohort sprints.
                  </div>
                </label>
                {errors.honorCodeAccepted && (
                  <p className="text-xs text-red-600 font-medium pl-7">{errors.honorCodeAccepted}</p>
                )}
              </div>
            </div>
          )}

          {/* Stepper Navigation Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-[#E8E3D6]">
            {currentStep > 1 ? (
              <Button
                type="button"
                variant="outline"
                size="md"
                onClick={prevStep}
                leftIcon={<ArrowLeft className="w-4 h-4" />}
              >
                Previous Step
              </Button>
            ) : (
              <div />
            )}

            {currentStep < 4 ? (
              <Button
                type="button"
                variant="primary"
                size="md"
                onClick={nextStep}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Continue to Step 0{currentStep + 1}
              </Button>
            ) : (
              <Button
                type="submit"
                variant="primary"
                size="md"
                isLoading={isSubmitting}
                rightIcon={<CheckCircle2 className="w-4 h-4" />}
              >
                Submit Candidate Application
              </Button>
            )}
          </div>
        </form>
      </Card>
    </div>
  );
};
