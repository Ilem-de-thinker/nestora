import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { Lock, Mail, ArrowRight, UserCheck, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('adebayo.ogunlesi@nestora.fellow');
  const [password, setPassword] = useState('••••••••••••');
  const [isLoading, setIsLoading] = useState(false);
  const { login, loginAsDemoFellow } = useAuth();
  const navigate = useNavigate();

  const handleCustomLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    await login(email, password);
    setIsLoading(false);
    navigate('/dashboard');
  };

  const handleDemoLogin = () => {
    loginAsDemoFellow();
    navigate('/dashboard');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16 sm:py-24 space-y-6">
      <div className="text-center space-y-2">
        <Badge variant="green">Nestora Virtual Campus</Badge>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#0B1F17]">Student Portal Sign In</h1>
        <p className="text-xs text-[#526359]">
          Access your active cohort sprints, starter kit tracker, and mentor office hours.
        </p>
      </div>

      <Card variant="surface" className="p-6 sm:p-8 space-y-5 border border-[#E8E3D6]">
        {/* Quick Demo Access banner */}
        <div className="p-4 bg-[#E6F2EA] rounded-xl border border-[#D0E6D8] space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0F6B4A]">
            <UserCheck className="w-4 h-4" /> Instant Demo Access
          </div>
          <p className="text-[11px] text-[#2D3A34] leading-relaxed">
            Preview the full student learning experience as an enrolled Impact Fellow with live tracking.
          </p>
          <Button
            type="button"
            variant="primary"
            size="sm"
            fullWidth
            onClick={handleDemoLogin}
            rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            Launch as Fellow Adebayo
          </Button>
        </div>

        <div className="relative text-center my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#E8E3D6]" />
          </div>
          <span className="relative bg-[#F3EFE6] px-3 text-[11px] text-[#64736B] uppercase tracking-wider font-semibold">
            Or sign in with email
          </span>
        </div>

        <form onSubmit={handleCustomLogin} className="space-y-4">
          <Input
            label="Fellow / Student Email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            variant="dark"
            size="md"
            fullWidth
            isLoading={isLoading}
          >
            Sign In to Portal
          </Button>
        </form>

        <div className="pt-2 text-center text-xs text-[#64736B]">
          Not enrolled yet?{' '}
          <Link to="/apply" className="font-semibold text-[#0F6B4A] hover:underline">
            Apply for Cohort 04
          </Link>
        </div>
      </Card>
    </div>
  );
};
