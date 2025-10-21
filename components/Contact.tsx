'use client';
import React, { useState } from 'react';
import { Phone, Mail, MapPin, User, Clock, Building, MessageCircle, Send, CheckCircle, AlertCircle, Facebook } from 'lucide-react';
import { contact } from '../data/contact';
import { useLanguage } from '../lib/LanguageContext';

export default function Contact() {
	const { t, isRTL } = useLanguage();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: ''
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

	const raw = contact.mainPhone.replace(/[^0-9]/g, '');
	const wa = raw.startsWith('0') ? `92${raw.slice(1)}` : (raw.startsWith('92') ? raw : `92${raw}`);
	const waLink = `https://wa.me/${wa}?text=${encodeURIComponent('Assalamualaikum, I would like to inquire.')}`;

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus('idle');

		try {
	
			const message = `*New Contact Form Submission*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || 'Not provided'}
*Subject:* ${formData.subject || 'General Inquiry'}
*Message:* ${formData.message}

---
Sent from Mufeed e aam Dawakhana website`;

			const whatsappUrl = `https://wa.me/${wa}?text=${encodeURIComponent(message)}`;
			

			window.open(whatsappUrl, '_blank');
			

			const emailSubject = `Contact Form: ${formData.subject || 'General Inquiry'}`;
			const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\n\nMessage:\n${formData.message}`;
			const emailUrl = `mailto:${contact.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
			

			setSubmitStatus('success');
			
	
			setTimeout(() => {
				setFormData({
					name: '',
					email: '',
					phone: '',
					subject: '',
					message: ''
				});
				setSubmitStatus('idle');
			}, 3000);

		} catch (error) {
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm border border-gray-100 overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
			<div className="text-center mb-8">
				<h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">{t('contact.title')}</h2>
				<p className="text-gray-600">{t('contact.subtitle')}</p>
			</div>
			
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
			
				<div className="space-y-6 min-w-0">
					<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
						<h3 className={`text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
							{!isRTL && <User className="h-5 w-5 text-rose-700" />}
							{t('contact.contactPerson')}
							{isRTL && <User className="h-5 w-5 text-rose-700" />}
						</h3>
						<p className={`text-lg font-medium text-gray-800 mb-2 ${isRTL ? 'text-right' : ''}`}>{contact.name}</p>
						<p className={`text-gray-600 ${isRTL ? 'text-right' : ''}`}>{isRTL ? 'حکیم اور کلینک ڈائریکٹر' : 'Hakeem & Clinic Director'}</p>
					</div>

					<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 min-w-0">
						<h3 className={`text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
							{!isRTL && <Building className="h-5 w-5 text-rose-700" />}
							{t('contact.contactDetails')}
							{isRTL && <Building className="h-5 w-5 text-rose-700" />}
						</h3>
						<div className="space-y-3 min-w-0">
							<a 
								href={`tel:${contact.mainPhone.replace(/\s/g,'')}`}
								className={`flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors group ${isRTL ? 'flex-row-reverse justify-end' : ''}`}
							>
								{!isRTL && (
									<div className="flex-shrink-0 w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center">
										<Phone className="h-3 w-3 text-rose-700" />
									</div>
								)}
								<div className={`flex-1 ${isRTL ? 'text-right' : ''}`}>
									<p className="font-medium text-gray-900 group-hover:text-rose-700 text-xs sm:text-sm" dir="ltr">{contact.mainPhone}</p>
									<p className="text-xs sm:text-sm text-gray-500">{t('contact.callUs')}</p>
								</div>
								{isRTL && (
									<div className="flex-shrink-0 w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center">
										<Phone className="h-3 w-3 text-rose-700" />
									</div>
								)}
							</a>
							
							<a 
								href={`mailto:${contact.email}`}
								className={`flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors group ${isRTL ? 'flex-row-reverse justify-end' : ''}`}
							>
								{!isRTL && (
									<div className="flex-shrink-0 w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center">
										<Mail className="h-3 w-3 text-rose-700" />
									</div>
								)}
								<div className={`flex-1 ${isRTL ? 'text-right' : ''}`}>
									<p className="font-medium text-gray-900 group-hover:text-rose-700 text-xs sm:text-sm" dir="ltr">{contact.email}</p>
									<p className="text-xs sm:text-sm text-gray-500">{t('contact.sendEmail')}</p>
								</div>
								{isRTL && (
									<div className="flex-shrink-0 w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center">
										<Mail className="h-3 w-3 text-rose-700" />
									</div>
								)}
							</a>
							
							<a 
								href={waLink}
								target="_blank"
								rel="noopener noreferrer"
								className={`flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors group ${isRTL ? 'flex-row-reverse justify-end' : ''}`}
							>
								{!isRTL && (
									<div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
										<MessageCircle className="h-4 w-4 text-green-600" />
									</div>
								)}
								<div className={`min-w-0 flex-1 ${isRTL ? 'text-right' : ''}`}>
									<p className="font-medium text-gray-900 group-hover:text-green-600">WhatsApp</p>
									<p className="text-sm text-gray-500">{t('contact.chatWhatsApp')}</p>
								</div>
								{isRTL && (
									<div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
										<MessageCircle className="h-4 w-4 text-green-600" />
									</div>
								)}
							</a>
							
							<a 
								href={contact.facebookUrl}
								target="_blank"
								rel="noopener noreferrer"
								className={`flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors group ${isRTL ? 'flex-row-reverse justify-end' : ''}`}
							>
								{!isRTL && (
									<div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
										<Facebook className="h-4 w-4 text-blue-600" />
									</div>
								)}
								<div className={`min-w-0 flex-1 ${isRTL ? 'text-right' : ''}`}>
									<p className="font-medium text-gray-900 group-hover:text-blue-600">Facebook</p>
									<p className="text-sm text-gray-500">{isRTL ? 'ہمیں فالو کریں' : 'Follow us'}</p>
								</div>
								{isRTL && (
									<div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
										<Facebook className="h-4 w-4 text-blue-600" />
									</div>
								)}
							</a>
							
							<div className={`flex items-center gap-2 p-3 rounded-lg ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
								{!isRTL && (
									<div className="flex-shrink-0 w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
										<MapPin className="h-4 w-4 text-rose-700" />
									</div>
								)}
								<div className={`min-w-0 flex-1 ${isRTL ? 'text-right' : ''}`}>
									<p className="font-medium text-gray-900 break-words">{contact.headOfficeAddress}</p>
									<p className="text-sm text-gray-500">{t('contact.headOffice')}</p>
								</div>
								{isRTL && (
									<div className="flex-shrink-0 w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
										<MapPin className="h-4 w-4 text-rose-700" />
									</div>
								)}
							</div>
						</div>
					</div>

				</div>


				<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
					<h3 className={`text-xl font-semibold text-gray-900 mb-6 ${isRTL ? 'text-right' : ''}`}>{t('contact.sendMessage')}</h3>
					

					{submitStatus === 'success' && (
						<div className={`mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
							<CheckCircle className="h-5 w-5 text-green-600" />
							<div className={isRTL ? 'text-right' : ''}>
								<p className="text-green-800 font-medium">{t('contact.success')}</p>
								<p className="text-green-600 text-sm">{isRTL ? 'واٹس ایپ آپ کے پیغام کے ساتھ کھلنا چاہیے۔ اگر نہیں، تو براہ کرم دوبارہ کوشش کریں۔' : 'WhatsApp should open with your message. If not, please try again.'}</p>
							</div>
						</div>
					)}
					
					{submitStatus === 'error' && (
						<div className={`mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
							<AlertCircle className="h-5 w-5 text-red-600" />
							<div className={isRTL ? 'text-right' : ''}>
								<p className="text-red-800 font-medium">{t('contact.error')}</p>
								<p className="text-red-600 text-sm">{isRTL ? 'براہ کرم دوبارہ کوشش کریں یا ہم سے براہ راست رابطہ کریں۔' : 'Please try again or contact us directly.'}</p>
							</div>
						</div>
					)}
					
					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<label htmlFor="name" className={`block text-sm font-medium text-gray-700 mb-1 ${isRTL ? 'text-right' : ''}`}>{t('contact.name')} *</label>
							<input 
								id="name" 
								name="name" 
								type="text" 
								value={formData.name}
								onChange={handleInputChange}
								required 
								className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors" 
								placeholder={isRTL ? 'اپنا پورا نام درج کریں' : 'Enter your full name'}
								dir={isRTL ? 'rtl' : 'ltr'}
								style={isRTL ? { textAlign: 'right' } : { textAlign: 'left' }}
							/>
						</div>
						
						<div>
							<label htmlFor="email" className={`block text-sm font-medium text-gray-700 mb-1 ${isRTL ? 'text-right' : ''}`}>{t('contact.email')} *</label>
							<input 
								id="email" 
								name="email" 
								type="email" 
								value={formData.email}
								onChange={handleInputChange}
								required 
								className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors" 
								placeholder={isRTL ? 'اپنا ای میل ایڈریس درج کریں' : 'Enter your email address'}
								dir="ltr"
								style={{ textAlign: 'left' }}
							/>
						</div>
						
						<div>
							<label htmlFor="phone" className={`block text-sm font-medium text-gray-700 mb-1 ${isRTL ? 'text-right' : ''}`}>{t('contact.phone')}</label>
							<input 
								id="phone" 
								name="phone" 
								type="tel" 
								value={formData.phone}
								onChange={handleInputChange}
								className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors" 
								placeholder={isRTL ? 'اپنا فون نمبر درج کریں' : 'Enter your phone number'}
								dir="ltr"
								style={{ textAlign: 'left' }}
							/>
						</div>
						
						<div>
							<label htmlFor="subject" className={`block text-sm font-medium text-gray-700 mb-1 ${isRTL ? 'text-right' : ''}`}>{t('contact.subject')}</label>
							<input 
								id="subject" 
								name="subject" 
								type="text" 
								value={formData.subject}
								onChange={handleInputChange}
								className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors" 
								placeholder={isRTL ? 'یہ کس بارے میں ہے؟' : 'What is this regarding?'}
								dir={isRTL ? 'rtl' : 'ltr'}
								style={isRTL ? { textAlign: 'right' } : { textAlign: 'left' }}
							/>
						</div>
						
						<div>
							<label htmlFor="message" className={`block text-sm font-medium text-gray-700 mb-1 ${isRTL ? 'text-right' : ''}`}>{t('contact.message')} *</label>
							<textarea 
								id="message" 
								name="message" 
								rows={4} 
								value={formData.message}
								onChange={handleInputChange}
								required
								className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors resize-none" 
								placeholder={isRTL ? 'براہ کرم اپنی انکوائری یا اپائنٹمنٹ کی درخواست بیان کریں...' : 'Please describe your inquiry or appointment request...'}
								dir={isRTL ? 'rtl' : 'ltr'}
								style={isRTL ? { textAlign: 'right' } : { textAlign: 'left' }}
							/>
						</div>
						
						<button 
							type="submit" 
							disabled={isSubmitting}
							className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-rose-700 text-white font-medium rounded-lg hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${isRTL ? 'flex-row-reverse' : ''}`}
						>
							{isSubmitting ? (
								<>
									<div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
									{t('contact.sending')}
								</>
							) : (
								<>
									<Send className="h-4 w-4" />
									{t('contact.send')}
								</>
							)}
						</button>
						
						<p className="text-xs text-gray-500 text-center mt-3">
							{isRTL ? 'آپ کا پیغام براہ راست ہمارے کلینک کو واٹس ایپ کے ذریعے بھیجا جائے گا۔' : 'Your message will be sent via WhatsApp to our clinic directly.'}
						</p>
					</form>
				</div>
			</div>
		</div>
	);
} 