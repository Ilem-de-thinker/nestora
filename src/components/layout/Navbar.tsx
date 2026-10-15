import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { Menu, X, ArrowRight, UserCircle, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Programs', path: '/programs' },
    { name: 'Scholarship', path: '/programs/scholarship' },
    { name: 'Courses', path: '/courses' },
    { name: 'Outcomes', path: '/careers-outcomes' },
    { name: 'Mentors', path: '/mentors' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF8F3]/90 backdrop-blur-md border-b border-[#E8E3D6] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict Top Bar Contract: 3 Zones with gap-8 */}
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single text element wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-[#0B1F17] whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
            aria-label="Nestora Home"
          >
            <span className="w-8 h-8 rounded-lg bg-[#0F6B4A] text-[#FAF8F3] flex items-center justify-center font-bold text-base shadow-xs">
              N
            </span>
            <span>Nestora</span>
          </Link>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#2D3A34]">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `whitespace-nowrap shrink-0 py-1 transition-colors hover:text-[#0F6B4A] relative ${
                    isActive
                      ? 'text-[#0F6B4A] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0F6B4A]'
                      : 'text-[#2D3A34]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F3EFE6] border border-[#E8E3D6] text-xs font-semibold text-[#0B1F17] hover:border-[#0F6B4A]/50 transition-colors"
                >
                  <span className="w-6 h-6 rounded-full bg-[#0F6B4A] text-white flex items-center justify-center text-[10px] font-bold">
                    {user?.avatarInitials || 'ST'}
                  </span>
                  <span className="max-w-[120px] truncate">{user?.name}</span>
                </Link>
                <button
                  onClick={logout}
                  title="Sign out"
                  className="p-2 text-[#64736B] hover:text-[#0B1F17] hover:bg-[#F3EFE6] rounded-lg transition-colors cursor-pointer"
                  aria-label="Sign out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="text-xs font-semibold text-[#2D3A34] hover:text-[#0F6B4A] px-2 py-1 transition-colors whitespace-nowrap"
              >
                Student Sign In
              </Link>
            )}

            <Button
              variant="primary"
              size="sm"
              onClick={() => navigate('/apply')}
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Apply for Cohort
            </Button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-[#0B1F17] hover:bg-[#F3EFE6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6B4A]"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-[#E8E3D6] bg-[#FAF8F3] px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm rounded-lg transition-colors ${
                    isActive
                      ? 'bg-[#E6F2EA] text-[#0F6B4A] font-semibold'
                      : 'text-[#0B1F17] hover:bg-[#F3EFE6]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-[#0B1F17] hover:bg-[#F3EFE6] rounded-lg"
            >
              About Nestora
            </NavLink>
            <NavLink
              to="/faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-[#0B1F17] hover:bg-[#F3EFE6] rounded-lg"
            >
              Frequently Asked Questions
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-[#0B1F17] hover:bg-[#F3EFE6] rounded-lg"
            >
              Contact Hubs
            </NavLink>
          </nav>

          <div className="pt-3 border-t border-[#E8E3D6] flex flex-col gap-2">
            {isAuthenticated ? (
              <div className="flex items-center justify-between bg-[#F3EFE6] p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#0F6B4A] text-white flex items-center justify-center text-xs font-bold">
                    {user?.avatarInitials}
                  </span>
                  <div className="text-xs">
                    <p className="font-semibold text-[#0B1F17]">{user?.name}</p>
                    <p className="text-[#64736B] truncate max-w-[160px]">{user?.email}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    logout();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button
                variant="outline"
                size="md"
                fullWidth
                onClick={() => {
                  navigate('/login');
                  setIsMobileMenuOpen(false);
                }}
                leftIcon={<UserCircle className="w-4 h-4" />}
              >
                Student Sign In
              </Button>
            )}

            <Button
              variant="primary"
              size="md"
              fullWidth
              onClick={() => {
                navigate('/apply');
                setIsMobileMenuOpen(false);
              }}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Apply for Cohort
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
