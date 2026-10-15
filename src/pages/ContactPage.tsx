import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Send, Clock, Globe2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Select } from '../components/ui/Select';
import { Badge } from '../components/ui/Badge';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Admissions Inquiry',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email required';
    if (!formData.message.trim()) errs.message = 'Please provide your message';

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      {/* Header */}
      <div className="space-y-3 max-w-2xl">
        <Badge variant="green">Connect with Nestora</Badge>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1F17] [text-wrap:balance]">
          Regional Campuses & Admissions Inquiry Desk.
        </h1>
        <p className="text-sm text-[#526359] leading-relaxed">
          Whether you are a prospective candidate with questions about the Fellowship, an employer seeking remote engineering hires, or a partner foundation, our team is ready to connect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Form */}
        <div className="lg:col-span-7">
          <Card variant="surface" className="p-6 sm:p-8 space-y-6">
            <h2 className="text-lg font-bold text-[#0B1F17]">Send an Inquiry</h2>

            {isSent ? (
              <div className="p-8 text-center space-y-4 bg-white rounded-xl border border-[#D0E6D8]">
                <div className="w-12 h-12 rounded-full bg-[#E6F2EA] text-[#0F6B4A] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-[#0B1F17]">Inquiry Dispatched!</h3>
                <p className="text-xs text-[#526359] max-w-sm mx-auto">
                  Thank you, {formData.name}. Our admissions desk will respond to <strong>{formData.email}</strong> within 1 business day.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setIsSent(false);
                    setFormData({ name: '', email: '', subject: 'Admissions Inquiry', message: '' });
                  }}
                >
                  Send Another Note
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Your Full Name"
                    required
                    placeholder="e.g. Samuel Ade"
                    value={formData.name}
                    error={errors.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    required
                    placeholder="samuel@example.com"
                    value={formData.email}
                    error={errors.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <Select
                  label="Inquiry Topic"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  options={[
                    { value: 'Admissions Inquiry', label: 'Admissions & Fellowship Eligibility' },
                    { value: 'Starter Kit Delivery', label: 'Starter Kit & Hardware Logistics' },
                    { value: 'Hiring Partners', label: 'Hiring Nestora Remote Graduates' },
                    { value: 'Foundation Sponsorship', label: 'Foundation Grants & Corporate Sponsorship' },
                  ]}
                />

                <Textarea
                  label="Message"
                  required
                  rows={5}
                  placeholder="Tell us what you'd like to ask or discuss..."
                  value={formData.message}
                  error={errors.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  isLoading={isSubmitting}
                  rightIcon={<Send className="w-3.5 h-3.5" />}
                >
                  Dispatch Message
                </Button>
              </form>
            )}
          </Card>
        </div>

        {/* Hub Locations & Direct Channels */}
        <div className="lg:col-span-5 space-y-6">
          <Card variant="canvas" className="p-6 space-y-4">
            <h3 className="font-bold text-base text-[#0B1F17]">Regional Hub Coordinates</h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#0F6B4A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#0B1F17]">Lagos Innovation Hub & Hardware Depot</p>
                  <p className="text-[#526359]">74 Commercial Avenue, Yaba, Lagos, Nigeria</p>
                  <p className="text-[11px] text-[#64736B]">Mon–Fri: 8:00 AM – 6:00 PM WAT</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#0F6B4A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#0B1F17]">Nairobi Partner Lab</p>
                  <p className="text-[#526359]">Galana Plaza, Kilimani, Nairobi, Kenya</p>
                  <p className="text-[11px] text-[#64736B]">Mon–Fri: 9:00 AM – 6:00 PM EAT</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#0F6B4A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#0B1F17]">London Placement Desk</p>
                  <p className="text-[#526359]">124 City Road, EC1V 2NX, London, United Kingdom</p>
                  <p className="text-[11px] text-[#64736B]">Employer & Hiring Inquiries</p>
                </div>
              </div>
            </div>
          </Card>

          <Card variant="canvas" className="p-6 space-y-3">
            <h3 className="font-bold text-base text-[#0B1F17]">Direct Contact Channels</h3>
            <div className="space-y-2 text-xs text-[#2D3A34]">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0F6B4A]" />
                <span className="font-mono">admissions@nestora.institute</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0F6B4A]" />
                <span className="font-mono">+234 (01) 888 4920</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-[#0F6B4A]" />
                <span>Global Remote Slack Campus (Admitted Fellows)</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
