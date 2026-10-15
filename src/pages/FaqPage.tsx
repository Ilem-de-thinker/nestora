import React, { useState } from 'react';
import { Search, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQS } from '../data/faqs';
import { Accordion } from '../components/ui/Accordion';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router';

export const FaqPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Scholarship', 'Admissions', 'Starter Kit & Hardware', 'Career & Remote Work', 'Tuition & Payment'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const accordionItems = filteredFaqs.map((faq, idx) => ({
    id: faq.id,
    title: faq.question,
    subtitle: `Category: ${faq.category}`,
    defaultOpen: idx === 0,
    content: <p className="text-xs text-[#526359] leading-relaxed">{faq.answer}</p>,
  }));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      {/* Header */}
      <div className="space-y-3 text-center max-w-xl mx-auto">
        <span className="text-xs font-semibold tracking-wider uppercase text-[#0F6B4A]">
          Answers & Clarifications
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1F17]">
          Frequently Asked Questions
        </h1>
        <p className="text-sm text-[#526359]">
          Everything you need to know about the Impact Fellowship, admissions, hardware starter kits, and tuition.
        </p>
      </div>

      {/* Search & Tabs */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-[#64736B] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. starter kit, selection, payment, laptop)..."
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-[#D4CDBC] rounded-lg text-[#0B1F17] placeholder:text-[#8E9B93] focus:outline-none focus:ring-2 focus:ring-[#0F6B4A]/30 focus:border-[#0F6B4A]"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0F6B4A] text-white shadow-xs'
                  : 'bg-[#F3EFE6] text-[#2D3A34] hover:bg-[#E8E3D6]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion list */}
      {filteredFaqs.length === 0 ? (
        <div className="text-center py-12 bg-[#F3EFE6] border border-[#E8E3D6] rounded-xl space-y-2">
          <HelpCircle className="w-6 h-6 text-[#64736B] mx-auto" />
          <p className="text-sm font-bold text-[#0B1F17]">No questions found</p>
          <p className="text-xs text-[#526359]">Try searching for different keywords or reset your category filter.</p>
        </div>
      ) : (
        <Accordion items={accordionItems} allowMultiple />
      )}

      {/* Still have questions */}
      <div className="p-6 bg-[#F3EFE6] rounded-xl border border-[#E8E3D6] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-sm text-[#0B1F17]">Have a question not listed here?</h3>
          <p className="text-xs text-[#526359]">Our admissions team typically responds within 24 hours.</p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#0F6B4A] hover:underline whitespace-nowrap"
        >
          Contact Admissions Desk <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
