import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Tag, Globe } from 'lucide-react';
import type { BlogPost } from '../lib/notion';

interface BlogCardProps {
  post: BlogPost;
  language: 'en' | 'ur';
}

export default function BlogCard({ post, language }: BlogCardProps) {
  const availableLanguages = getAvailableLanguages(post);
  const isRTL = language === 'ur';
  
  const publishDate = new Date(post.publishDate).toLocaleDateString(
    language === 'ur' ? 'ur-PK' : 'en-US',
    {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }
  );

  const title = post.title[language] || post.title.en || post.title.ur;
  const description = post.seoDescription[language] || post.content[language]?.substring(0, 120) || '';
  const tags = post.tags[language] || [];
  const slug = post.slug[language] || post.slug.en || post.slug.ur;

  return (
    <article className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 border border-gray-100 ${isRTL ? 'rtl' : 'ltr'}`}>
          {/* Featured Image - Clickable */}
          {post.featuredImage && (
            <Link href={`/blog/${slug}?lang=${language}`} className="block">
          <div className="relative h-56 overflow-hidden cursor-pointer">
            <Image
              src={post.featuredImage}
              alt={title}
              fill
              className="blog-card-image group-hover:scale-110 transition-transform duration-700"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Language Indicator */}
            {availableLanguages.length > 1 && (
              <div className="absolute top-3 right-3 flex gap-1">
                {availableLanguages.map((lang) => (
                  <span
                    key={lang}
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      lang === language
                        ? 'bg-rose-600 text-white'
                        : 'bg-white/80 text-gray-700'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Link>
      )}

      {/* Content */}
      <div className="p-8">
        {/* Meta Info */}
        <div className={`flex items-center gap-4 text-sm text-gray-500 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className="flex items-center gap-2 bg-rose-50 px-3 py-1 rounded-full">
            <Calendar className="w-4 h-4 text-rose-600" />
            <span className="font-medium text-rose-700">{publishDate}</span>
          </div>
          {tags.length > 0 && (
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
              <Tag className="w-4 h-4 text-gray-600" />
              <span className="font-medium text-gray-700">{tags[0]}</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h2 className={`text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-rose-600 transition-colors duration-300 leading-tight ${isRTL ? 'text-center' : 'text-left'}`}>
          {title}
        </h2>

        {/* Description */}
        <p className={`text-gray-600 mb-6 line-clamp-3 leading-relaxed text-sm ${isRTL ? 'text-center' : 'text-left'}`}>
          {description}...
        </p>


            {/* Read More Link */}
            <Link
              href={`/blog/${slug}?lang=${language}`}
              className={`inline-flex items-center bg-gradient-to-r from-rose-600 to-rose-700 text-white px-6 py-3 rounded-xl font-semibold text-sm group-hover:from-rose-700 group-hover:to-rose-800 transition-all duration-300 transform group-hover:scale-105 shadow-md group-hover:shadow-lg ${isRTL ? 'flex-row-reverse' : ''}`}
            >
          {language === 'ur' ? 'مزید پڑھیں' : 'Read More'}
          <svg className={`w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 ${isRTL ? 'mr-2 group-hover:-translate-x-1' : 'ml-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isRTL ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
          </svg>
        </Link>
      </div>
    </article>
  );
}

// Helper function to get available languages
function getAvailableLanguages(post: BlogPost): ('en' | 'ur')[] {
  const languages: ('en' | 'ur')[] = [];
  
  if (post.title.en && post.content.en) {
    languages.push('en');
  }
  
  if (post.title.ur && post.content.ur) {
    languages.push('ur');
  }
  
  return languages;
}