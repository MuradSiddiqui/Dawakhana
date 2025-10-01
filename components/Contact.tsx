import React from 'react';
import { Phone, Mail, MapPin, User, Clock, Building, MessageCircle } from 'lucide-react';
import { contact } from '../data/contact';

export default function Contact() {
	// Convert local PK number 0300 2785888 -> 923002785888 for wa.me
	const raw = contact.mainPhone.replace(/[^0-9]/g, '');
	const wa = raw.startsWith('0') ? `92${raw.slice(1)}` : (raw.startsWith('92') ? raw : `92${raw}`);
	const waLink = `https://wa.me/${wa}?text=${encodeURIComponent('Assalamualaikum, I would like to inquire.')}`;

	return (
		<div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm border border-gray-100">
			<div className="text-center mb-8">
				<h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">Contact Us</h2>
				<p className="text-gray-600">Get in touch with our healthcare professionals</p>
			</div>
			
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{/* Contact Information */}
				<div className="space-y-6">
					<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
						<h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
							<User className="h-5 w-5 text-rose-700" />
							Contact Person
						</h3>
						<p className="text-lg font-medium text-gray-800 mb-2">{contact.name}</p>
						<p className="text-gray-600">Hakeem & Clinic Director</p>
					</div>

					<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
						<h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
							<Building className="h-5 w-5 text-rose-700" />
							Contact Details
						</h3>
						<div className="space-y-3">
							<a 
								href={`tel:${contact.mainPhone.replace(/\s/g,'')}`}
								className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
							>
								<div className="flex-shrink-0 w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
									<Phone className="h-5 w-5 text-rose-700" />
								</div>
								<div>
									<p className="font-medium text-gray-900 group-hover:text-rose-700">{contact.mainPhone}</p>
									<p className="text-sm text-gray-500">Call us directly</p>
								</div>
							</a>
							
							<a 
								href={`mailto:${contact.email}`}
								className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
							>
								<div className="flex-shrink-0 w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
									<Mail className="h-5 w-5 text-rose-700" />
								</div>
								<div>
									<p className="font-medium text-gray-900 group-hover:text-rose-700">{contact.email}</p>
									<p className="text-sm text-gray-500">Send us an email</p>
								</div>
							</a>
							
							<a 
								href={waLink}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
							>
								<div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
									<MessageCircle className="h-5 w-5 text-green-600" />
								</div>
								<div>
									<p className="font-medium text-gray-900 group-hover:text-green-600">WhatsApp</p>
									<p className="text-sm text-gray-500">Chat with us</p>
								</div>
							</a>
							
							<div className="flex items-center gap-3 p-3 rounded-lg">
								<div className="flex-shrink-0 w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
									<MapPin className="h-5 w-5 text-rose-700" />
								</div>
								<div>
									<p className="font-medium text-gray-900">{contact.headOfficeAddress}</p>
									<p className="text-sm text-gray-500">Head Office</p>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
						<h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
							<Clock className="h-5 w-5 text-rose-700" />
							Quick Contact
						</h3>
						<p className="text-gray-600 mb-3">Prefer email or WhatsApp? Use the buttons below:</p>
						<div className="flex flex-wrap items-center gap-3">
							<a 
								href={`mailto:${contact.email}`}
								className="inline-flex items-center gap-2 px-4 py-2 bg-rose-700 text-white rounded-lg hover:bg-rose-800 transition-colors"
							>
								<Mail className="h-4 w-4" />
								Email {contact.name}
							</a>
							<a 
								href={waLink}
								target="_blank" rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
							>
								<MessageCircle className="h-4 w-4" />
								WhatsApp
							</a>
						</div>
					</div>
				</div>

				{/* Contact Form */}
				<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
					<h3 className="text-xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
					<form method="GET" action={`mailto:${contact.email}`} encType="text/plain" className="space-y-4">
						<div>
							<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
							<input 
								id="name" 
								name="name" 
								type="text" 
								required 
								className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors" 
								placeholder="Enter your full name"
							/>
						</div>
						
						<div>
							<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
							<input 
								id="email" 
								name="email" 
								type="email" 
								required 
								className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors" 
								placeholder="Enter your email address"
							/>
						</div>
						
						<div>
							<label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
							<input 
								id="phone" 
								name="phone" 
								type="tel" 
								className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors" 
								placeholder="Enter your phone number"
							/>
						</div>
						
						<div>
							<label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
							<input 
								id="subject" 
								name="subject" 
								type="text" 
								className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors" 
								placeholder="What is this regarding?"
							/>
						</div>
						
						<div>
							<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
							<textarea 
								id="message" 
								name="message" 
								rows={4} 
								required
								className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors resize-none" 
								placeholder="Please describe your inquiry or appointment request..."
							/>
						</div>
						
						<button 
							type="submit" 
							className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-rose-700 text-white font-medium rounded-lg hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 transition-colors"
						>
							<Mail className="h-4 w-4" />
							Send Message
						</button>
					</form>
				</div>
			</div>
		</div>
	);
} 