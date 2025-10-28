import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  language: 'en' | 'ur';
}

export default function Pagination({ currentPage, totalPages, onPageChange, language }: PaginationProps) {
  const isRTL = language === 'ur';
  
  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    const delta = 2; // Number of pages to show on each side of current page
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className={`flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          currentPage === 1
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-gray-600 hover:text-rose-600 hover:bg-rose-50'
        } ${isRTL ? 'flex-row-reverse' : ''}`}
      >
        <ChevronLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
        <span>{language === 'ur' ? 'پچھلا' : 'Previous'}</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {visiblePages.map((page, index) => (
          <div key={index}>
            {page === '...' ? (
              <div className="flex items-center justify-center w-8 h-8">
                <MoreHorizontal className="w-4 h-4 text-gray-400" />
              </div>
            ) : (
              <button
                onClick={() => onPageChange(page as number)}
                className={`flex items-center justify-center w-8 h-8 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === page
                    ? 'bg-rose-600 text-white'
                    : 'text-gray-600 hover:text-rose-600 hover:bg-rose-50'
                }`}
              >
                {page}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          currentPage === totalPages
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-gray-600 hover:text-rose-600 hover:bg-rose-50'
        } ${isRTL ? 'flex-row-reverse' : ''}`}
      >
        <span>{language === 'ur' ? 'اگلا' : 'Next'}</span>
        <ChevronRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
}
