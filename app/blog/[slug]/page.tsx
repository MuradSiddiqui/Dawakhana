'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, Globe, BookOpen } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [slug, setSlug] = useState<string>('');
  const [language, setLanguage] = useState<'en' | 'ur'>('en');

  useEffect(() => {
    async function getSlug() {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
      
      // Get language from URL parameters
      const urlParams = new URLSearchParams(window.location.search);
      const langParam = urlParams.get('lang') as 'en' | 'ur' | null;
      
      // Set initial language from URL or default to 'en'
      if (langParam && (langParam === 'en' || langParam === 'ur')) {
        setLanguage(langParam);
      }
    }
    getSlug();
  }, [params]);

  useEffect(() => {
    if (!slug) return;

    async function fetchPost() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`/api/blog/${slug}?lang=${language}`, {
          cache: 'force-cache', // Use browser cache
          next: { revalidate: 600 } // Revalidate every 10 minutes
        });
        if (!response.ok) {
          if (response.status === 404) {
            setError('Post not found');
          } else {
            throw new Error('Failed to fetch post');
          }
          return;
        }
        const postData = await response.json();
        setPost(postData);
        
        // Auto-detect language based on available content
        if (postData.title?.ur && postData.content?.ur && !postData.title?.en) {
          setLanguage('ur');
        } else if (postData.title?.en && postData.content?.en && !postData.title?.ur) {
          setLanguage('en');
        }
      } catch (err) {
        setError('Failed to load post');
        console.error('Error fetching post:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug, language]);

  const isRTL = language === 'ur';

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-rose-50" dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Header Skeleton */}
        <div className="bg-white border-b border-gray-200 shadow-sm">
          <div className="container-site py-4 sm:py-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-gray-100 animate-pulse w-12 h-12"></div>
                <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 rounded-xl animate-pulse"></div>
                <div className="hidden sm:block">
                  <div className="h-5 bg-gray-200 rounded w-32 mb-2 animate-pulse"></div>
                  <div className="h-3 bg-gray-200 rounded w-24 animate-pulse"></div>
                </div>
              </div>
              
              <div className="flex bg-gray-100 rounded-lg p-1 animate-pulse">
                <div className="px-3 py-1.5 rounded-md bg-gray-200 w-8"></div>
                <div className="px-3 py-1.5 rounded-md bg-gray-200 w-12 ml-1"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content Skeleton */}
        <article className="container-site py-8 sm:py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-0">
            {/* Title Skeleton */}
            <div className="h-12 sm:h-16 bg-gray-200 rounded-lg animate-pulse mb-6 sm:mb-8"></div>

            {/* Image Skeleton */}
            <div className="mb-4 sm:mb-6 rounded-xl overflow-hidden shadow-md border border-gray-200 max-w-2xl mx-auto">
              <div className="h-64 bg-gray-200 animate-pulse"></div>
            </div>

            {/* Meta Skeleton */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-6 sm:mb-8">
              <div className="flex items-center gap-2 bg-gray-100 px-3 sm:px-4 py-2 rounded-full animate-pulse">
                <div className="w-4 h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-20"></div>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 px-3 sm:px-4 py-2 rounded-full animate-pulse">
                <div className="w-4 h-4 bg-gray-200 rounded"></div>
                <div className="flex gap-1 sm:gap-2">
                  <div className="h-4 bg-gray-200 rounded w-16"></div>
                  <div className="h-4 bg-gray-200 rounded w-12"></div>
                  <div className="h-4 bg-gray-200 rounded w-14"></div>
                </div>
              </div>
            </div>

            {/* Content Skeleton */}
            <div className="prose prose-sm sm:prose-lg max-w-none">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Footer Skeleton */}
            <div className="mt-8 sm:mt-12">
              <div className="bg-gradient-to-r from-rose-50 to-rose-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-rose-200 shadow-lg">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full mb-3 sm:mb-4 shadow-md border-2 border-rose-200 animate-pulse">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-6 bg-gray-200 rounded w-64 mx-auto mb-2 sm:mb-3 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-96 mx-auto mb-4 sm:mb-6 animate-pulse"></div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                    <div className="h-10 bg-gray-200 rounded-lg w-32 animate-pulse"></div>
                    <div className="h-10 bg-gray-200 rounded-lg w-40 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-rose-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-rose-100 rounded-full mb-6">
            <BookOpen className="w-10 h-10 text-rose-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {language === 'ur' ? 'مضمون نہیں ملا' : 'Article Not Found'}
          </h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            {language === 'ur' 
              ? 'آپ جو بلاگ پوسٹ تلاش کر رہے ہیں وہ موجود نہیں ہے یا منتقل ہو گئی ہے۔'
              : 'The blog post you\'re looking for doesn\'t exist or may have been moved.'
            }
          </p>
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-rose-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-rose-700 hover:to-rose-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-4 h-4" />
            {language === 'ur' ? 'بلاگ پر واپس' : 'Back to Blog'}
          </Link>
        </div>
      </div>
    );
  }

  const availableLanguages = getAvailableLanguages(post);
  const title = post.title?.[language] || post.title?.en || post.title?.ur || '';
  const content = post.content?.[language] || post.content?.en || post.content?.ur || '';
  const tags = post.tags?.[language] || [];
  const seoDescription = post.seoDescription?.[language] || '';

  const publishDate = new Date(post.publishDate).toLocaleDateString(
    language === 'ur' ? 'ur-PK' : 'en-US',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-rose-50" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Professional Header with Logo */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container-site py-4 sm:py-6">
          <div className="flex items-center justify-between gap-4">
            {/* Left Side - Back Button */}
            <Link 
              href={`/blog?lang=${language}`}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-rose-600 transition-colors group"
            >
              <div className="p-2 rounded-lg bg-gray-50 group-hover:bg-rose-50 transition-colors duration-200">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
              </div>
              <span className="font-medium text-sm sm:text-base">
                {language === 'ur' ? 'بلاگ پر واپس' : 'Back to Blog'}
              </span>
            </Link>
            
            {/* Center - Company Logo */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14">
                <Image
                  src="/logo.png"
                  alt="Mufeed e aam Dawakhana Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <h2 className="text-lg font-bold text-gray-900">
                  {language === 'ur' ? 'مفید عام دواخانہ' : 'Mufeed e aam Dawakhana'}
                </h2>
                <p className="text-xs text-gray-500">
                  {language === 'ur' ? 'جڑی بوٹیوں کا بلاگ' : 'Herbal Medicine Blog'}
                </p>
              </div>
            </div>
            
            {/* Right Side - Language Switcher */}
            {availableLanguages.length > 1 && (
              <div className="flex bg-gray-100 rounded-lg p-1">
                {availableLanguages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${
                      lang === language
                        ? 'bg-white text-rose-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    {lang === 'en' ? 'EN' : 'اردو'}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="container-site py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-0">
          {/* Article Title */}
          <h1 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight ${isRTL ? 'text-center' : 'text-left'}`}>
            {title}
          </h1>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="mb-4 sm:mb-6 rounded-xl overflow-hidden shadow-md border border-gray-200 max-w-2xl mx-auto">
              <Image
                src={post.featuredImage}
                alt={title}
                width={500}
                height={250}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          )}

          {/* Article Meta - Moved below image */}
          <div className={`flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-600 mb-6 sm:mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="flex items-center gap-2 bg-rose-50 px-3 sm:px-4 py-2 rounded-full">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-rose-600" />
              <span className="font-medium text-rose-700">{publishDate}</span>
            </div>
                {tags.length > 0 && (
                  <div className="flex items-center gap-2 bg-gray-50 px-3 sm:px-4 py-2 rounded-full">
                    <Tag className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                    <div className="flex gap-1 sm:gap-2 flex-wrap">
                      {tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 sm:px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
          </div>

          {/* Article Content */}
          <div className="prose prose-sm sm:prose-lg max-w-none">
            <div className={`blog-content text-gray-700 whitespace-pre-wrap bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100 text-sm sm:text-base leading-relaxed ${isRTL ? 'text-center' : 'text-left'}`}>
              {content}
            </div>
          </div>

          {/* Article Footer */}
          <div className="mt-8 sm:mt-12">
            <div className="bg-gradient-to-r from-rose-50 to-rose-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-rose-200 shadow-lg">
              <div className="text-center">
                {/* Company Logo */}
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full mb-3 sm:mb-4 shadow-md border-2 border-rose-200">
                  <Image
                    src="/logo.png"
                    alt="Mufeed e aam Dawakhana Logo"
                    width={48}
                    height={48}
                    className="w-8 h-8 sm:w-12 sm:h-12 object-contain"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {language === 'ur' ? 'مفید عام دواخانہ کے بارے میں' : 'About Mufeed e aam Dawakhana'}
                </h3>
                <p className="text-gray-700 mb-4 sm:mb-6 max-w-xl mx-auto leading-relaxed text-xs sm:text-sm">
                  {language === 'ur' 
                    ? 'ہم اپنی کمیونٹی کو روایتی جڑی بوٹیوں کی دوائی اور قدرتی شفا کے حل فراہم کرنے کے لیے پرعزم ہیں۔ ہمارے تجربہ کار پریکٹیشنرز قدیم حکمت کو جدید تفہیم کے ساتھ ملا کر بہترین دیکھ بھال فراہم کرتے ہیں۔'
                    : 'We are committed to providing traditional herbal medicine and natural healing solutions to our community. Our experienced practitioners combine ancient wisdom with modern understanding to offer the best care.'
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-rose-600 to-rose-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:from-rose-700 hover:to-rose-800 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-xs sm:text-sm"
                  >
                    {language === 'ur' ? 'رابطہ کریں' : 'Contact Us'}
                  </Link>
                      <Link
                        href={`/blog?lang=${language}`}
                        className="inline-flex items-center justify-center gap-2 bg-white text-rose-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold border-2 border-rose-600 hover:bg-rose-600 hover:text-white transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm"
                      >
                    {language === 'ur' ? 'مزید مضامین پڑھیں' : 'Read More Articles'}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

// Helper function to get available languages
function getAvailableLanguages(post: any): ('en' | 'ur')[] {
  const languages: ('en' | 'ur')[] = [];
  
  if (post.title?.en && post.content?.en) {
    languages.push('en');
  }
  
  if (post.title?.ur && post.content?.ur) {
    languages.push('ur');
  }
  
  return languages;
}