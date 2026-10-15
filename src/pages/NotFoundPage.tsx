import React from 'react';
import { Link, useNavigate } from 'react-router';
import { ArrowLeft, Compass, Home } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <Card variant="surface" className="max-w-md w-full p-8 text-center space-y-6 border border-[#E8E3D6]">
        <div className="w-14 h-14 rounded-2xl bg-[#E6F2EA] text-[#0F6B4A] mx-auto flex items-center justify-center">
          <Compass className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-semibold text-[#0F6B4A] uppercase tracking-wider">
            404 — Route Unmapped
          </span>
          <h1 className="text-2xl font-bold text-[#0B1F17]">
            Page Out of Range
          </h1>
          <p className="text-xs text-[#526359] leading-relaxed">
            The curriculum section or resource you were looking for does not exist or has been shifted in the current sprint.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            variant="primary"
            size="sm"
            onClick={() => navigate('/')}
            leftIcon={<Home className="w-3.5 h-3.5" />}
          >
            Return to Gateway
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/programs')}
          >
            Explore Programs
          </Button>
        </div>
      </Card>
    </div>
  );
};
