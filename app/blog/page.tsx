'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import BlogCard from '../../components/BlogCard';
import Pagination from '../../components/Pagination';
import BlogHeader from '../../components/BlogHeader';
import { Globe, BookOpen } from 'lucide-react';
import Head from 'next/head';

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [language, setLanguage] = useState<'en' | 'ur'>('en');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`/api/blog?lang=${language}&page=${currentPage}&limit=6&paginated=true&clearCache=true`, {
          cache: 'no-store', // Don't use browser cache for fresh data
          next: { revalidate: 60 } // Revalidate every 1 minute
        });
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data.posts);
        setTotalPages(data.totalPages);
        setTotalPosts(data.totalPosts);
      } catch (err) {
        setError('Failed to load posts');
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [language, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isRTL = language === 'ur';

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-rose-50">
        {/* Header Skeleton */}
        <div className="bg-gradient-to-r from-rose-600 to-rose-700 text-white py-16 relative overflow-hidden">
          <div className="container-site relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full animate-pulse"></div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-white/20 rounded animate-pulse"></div>
                <div className="bg-white/20 rounded-full p-1 flex animate-pulse">
                  <div className="px-6 py-3 rounded-xl bg-white/30 w-20"></div>
                  <div className="px-6 py-3 rounded-xl bg-white/30 w-16 ml-2"></div>
                </div>
              </div>
            </div>
            <div className="h-16 bg-white/20 rounded-2xl animate-pulse mb-6"></div>
            <div className="h-6 bg-white/20 rounded-lg animate-pulse w-3/4"></div>
          </div>
        </div>

        {/* Content Skeleton */}
        <div className="py-20">
          <div className="container-site">
            <div className="text-center mb-16">
              <div className="h-8 bg-gray-200 rounded-lg animate-pulse w-64 mx-auto mb-4"></div>
              <div className="h-1 bg-gray-200 rounded-full w-24 mx-auto"></div>
            </div>
            
            {/* Blog Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-3xl shadow-lg overflow-hidden animate-pulse">
                  <div className="h-56 bg-gray-200"></div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-6 bg-gray-200 rounded-full w-24"></div>
                      <div className="h-6 bg-gray-200 rounded-full w-16"></div>
                    </div>
                    <div className="h-6 bg-gray-200 rounded-lg mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
                    <div className="h-12 bg-gray-200 rounded-xl w-32"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-rose-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-rose-100 rounded-full mb-6">
            <span className="text-4xl">⚠️</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {language === 'ur' ? 'خرابی' : 'Error Loading Posts'}
          </h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            {language === 'ur' ? 'بلاگ پوسٹس لوڈ کرنے میں خرابی ہوئی ہے۔' : error}
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-rose-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-rose-700 hover:to-rose-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {language === 'ur' ? 'دوبارہ کوشش کریں' : 'Try Again'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-rose-50" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Main Website Header */}
      <BlogHeader />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-rose-600 to-rose-700 text-white py-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="container-site text-center relative z-10">
          {/* Company Logo - Centered */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-6 shadow-lg border-2 border-white/30">
            <Image
              src="/logo.png"
              alt="Mufeed e aam Dawakhana Logo"
              width={56}
              height={56}
              className="w-14 h-14 object-contain"
              priority
            />
          </div>
          
          {/* Enhanced Language Switcher */}
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-1 flex shadow-lg border border-white/30">
              <button
                onClick={() => setLanguage('en')}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  language === 'en'
                    ? 'bg-white text-rose-700 shadow-lg transform scale-105'
                    : 'text-white hover:bg-white/20 hover:text-white'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('ur')}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  language === 'ur'
                    ? 'bg-white text-rose-700 shadow-lg transform scale-105'
                    : 'text-white hover:bg-white/20 hover:text-white'
                }`}
              >
                اردو
              </button>
            </div>
          </div>
          
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-rose-100 bg-clip-text text-transparent ${isRTL ? 'text-center' : ''}`}>
            {language === 'ur' ? 'جڑی بوٹیوں کا بلاگ' : 'Herbal Medicine Blog'}
          </h1>
          <p className={`text-lg sm:text-xl text-rose-100 max-w-3xl mx-auto leading-relaxed ${isRTL ? 'text-center' : 'text-left'}`}>
            {language === 'ur' 
              ? 'روایتی طب کی قدیم حکمت، قدرتی شفا، اور جڑی بوٹیوں کے علاج کو دریافت کریں۔ ماہرین کی بصیرت آپ کو صحت مند، قدرتی طرز زندگی اپنانے میں مدد کرے گی۔'
              : 'Discover the ancient wisdom of traditional medicine, natural healing, and herbal remedies. Expert insights to help you embrace a healthier, more natural lifestyle.'
            }
          </p>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="py-20">
        <div className="container-site">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full mb-8">
                <BookOpen className="w-12 h-12 text-rose-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {language === 'ur' ? 'جلد آرہا ہے' : 'Coming Soon'}
              </h2>
              <p className="text-lg text-gray-600 max-w-md mx-auto">
                {language === 'ur' 
                  ? 'ہم آپ کے لیے کچھ حیرت انگیز جڑی بوٹیوں کے مواد تیار کر رہے ہیں! ماہرین کی بصیرت اور قدرتی شفا کی تجاویز کے لیے ہمارے ساتھ رہیں۔'
                  : 'We\'re preparing some amazing herbal medicine content for you! Stay tuned for expert insights and natural healing tips.'
                }
              </p>
            </div>
          ) : (
            <>
              {/* Section Header */}
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">
                  {language === 'ur' ? 'تازہ ترین مضامین' : 'Latest Articles'}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-rose-600 mx-auto rounded-full"></div>
              </div>

              {/* Blog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} language={language} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-16">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    language={language}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}