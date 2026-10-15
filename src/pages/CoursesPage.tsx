import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Search, Star, Clock, BookOpen, Users, ArrowRight, Filter } from 'lucide-react';
import { COURSES, Course } from '../data/courses';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

export const CoursesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const navigate = useNavigate();

  const categories = ['All', 'Frontend', 'Backend', 'Design Systems', 'Cloud & DevOps', 'AI & Data'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = COURSES.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'All' || course.category === selectedCategory;

    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-10">
      {/* Header */}
      <div className="space-y-3 max-w-2xl">
        <span className="text-xs font-semibold tracking-wider uppercase text-[#0F6B4A]">
          Modular Skill Sprints
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1F17] [text-wrap:balance]">
          Master Specialized Capabilities in 4–8 Weeks.
        </h1>
        <p className="text-sm text-[#526359] leading-relaxed">
          Targeted technical courses led by domain leaders. Ideal for practicing developers, engineers, and designers leveling up specific gaps.
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div className="bg-[#F3EFE6] border border-[#E8E3D6] p-4 sm:p-6 rounded-2xl space-y-4">
        {/* Search bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-[#64736B] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by topic, skill (e.g. React 19, Kubernetes, Figma Tokens, RAG)..."
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-[#D4CDBC] rounded-lg text-[#0B1F17] placeholder:text-[#8E9B93] focus:outline-none focus:ring-2 focus:ring-[#0F6B4A]/30 focus:border-[#0F6B4A]"
          />
        </div>

        {/* Filter Rows */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-[#E8E3D6]">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-[#64736B] mr-2">Category:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0F6B4A] text-white shadow-xs'
                    : 'bg-[#FAF8F3] text-[#2D3A34] hover:bg-[#E8E3D6]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Level Filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#64736B]">Level:</span>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="text-xs font-medium bg-white border border-[#D4CDBC] rounded-md px-2.5 py-1 text-[#0B1F17] focus:outline-none focus:ring-1 focus:ring-[#0F6B4A]"
            >
              {levels.map((lvl) => (
                <option key={lvl} value={lvl}>
                  {lvl}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-[#64736B]">
        <span>Showing {filteredCourses.length} courses</span>
        {(searchQuery || selectedCategory !== 'All' || selectedLevel !== 'All') && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSelectedLevel('All');
            }}
            className="text-[#0F6B4A] hover:underline font-medium cursor-pointer"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Courses Grid */}
      {filteredCourses.length === 0 ? (
        <div className="text-center py-16 bg-[#F3EFE6] border border-[#E8E3D6] rounded-2xl space-y-3">
          <BookOpen className="w-8 h-8 text-[#64736B] mx-auto" />
          <h3 className="font-bold text-base text-[#0B1F17]">No courses match your criteria</h3>
          <p className="text-xs text-[#526359]">Try searching for different keywords or resetting your category filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card
              key={course.slug}
              variant="surface"
              interactive
              className="p-6 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <Badge variant="neutral">{course.category}</Badge>
                  <span className="text-[#64736B] font-medium">{course.level}</span>
                </div>

                <h2 className="text-lg font-bold text-[#0B1F17] hover:text-[#0F6B4A] transition-colors leading-snug">
                  <Link to={`/courses/${course.slug}`}>{course.title}</Link>
                </h2>

                <p className="text-xs text-[#526359] leading-relaxed line-clamp-3">
                  {course.shortDescription}
                </p>

                {/* Rating & stats */}
                <div className="flex items-center gap-3 text-xs text-[#64736B] pt-2">
                  <div className="flex items-center gap-1 text-[#0B1F17] font-semibold">
                    <Star className="w-3.5 h-3.5 fill-[#0F6B4A] text-[#0F6B4A]" />
                    <span>{course.rating.toFixed(2)}</span>
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#0F6B4A]" />
                    <span>{course.duration}</span>
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#0F6B4A]" />
                    <span>{course.studentsCount} alumni</span>
                  </div>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 text-[11px] text-[#64736B]">
                  {course.skills.slice(0, 3).map((skill) => (
                    <span key={skill} className="bg-white/60 px-2 py-0.5 rounded border border-[#E8E3D6]">
                      {skill}
                    </span>
                  ))}
                  {course.skills.length > 3 && (
                    <span className="text-[#64736B]">+{course.skills.length - 3}</span>
                  )}
                </div>
              </div>

              {/* Bottom strip */}
              <div className="pt-4 border-t border-[#E8E3D6] flex items-center justify-between">
                <div>
                  <span className="text-sm font-extrabold text-[#0B1F17] tabular-nums">{course.price}</span>
                  <span className="text-[10px] text-[#64736B] block">Lifetime access</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate(`/courses/${course.slug}`)}
                  rightIcon={<ArrowRight className="w-3 h-3" />}
                >
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
