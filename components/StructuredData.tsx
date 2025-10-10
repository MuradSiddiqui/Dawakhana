export default function StructuredData() {
	const structuredData = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Organization",
				"@id": "https://dawakhanamufeed.pk/#organization",
				"name": "Mufeed e aam Dawakhana",
				"alternateName": "مفید عام دواخانہ",
				"url": "https://dawakhanamufeed.pk",
				"logo": {
					"@type": "ImageObject",
					"url": "https://dawakhanamufeed.pk/logo.png"
				},
				"description": "Leading healthcare clinic in Sindh, Pakistan providing compassionate medical care",
				"address": {
					"@type": "PostalAddress",
					"addressCountry": "PK",
					"addressRegion": "Sindh"
				},
				"sameAs": [
					"https://www.facebook.com/share/1QQQJiH4My/"
				]
			},
			{
				"@type": "MedicalClinic",
				"@id": "https://dawakhanamufeed.pk/#karachi",
				"name": "Mufeed e aam Dawakhana - Karachi",
				"address": {
					"@type": "PostalAddress",
					"streetAddress": "Karachi",
					"addressLocality": "Karachi",
					"addressRegion": "Sindh",
					"addressCountry": "PK"
				},
				"telephone": "+92-21-34663679",
				"url": "https://dawakhanamufeed.pk/#karachi",
				"geo": {
					"@type": "GeoCoordinates",
					"latitude": "24.914414",
					"longitude": "67.101863"
				},
				"openingHoursSpecification": [
					{
						"@type": "OpeningHoursSpecification",
						"dayOfWeek": "Monday",
						"opens": "12:00",
						"closes": "18:00"
					},
					{
						"@type": "OpeningHoursSpecification",
						"dayOfWeek": "Sunday",
						"opens": "12:00",
						"closes": "15:00"
					}
				]
			},
			{
				"@type": "MedicalClinic",
				"@id": "https://dawakhanamufeed.pk/#hyderabad",
				"name": "Mufeed e aam Dawakhana - Hyderabad",
				"address": {
					"@type": "PostalAddress",
					"streetAddress": "Hyderabad",
					"addressLocality": "Hyderabad",
					"addressRegion": "Sindh",
					"addressCountry": "PK"
				},
				"telephone": "+92-22-785888",
				"url": "https://dawakhanamufeed.pk/#hyderabad",
				"geo": {
					"@type": "GeoCoordinates",
					"latitude": "25.3851382",
					"longitude": "68.3640484"
				}
			},
			{
				"@type": "MedicalClinic",
				"@id": "https://dawakhanamufeed.pk/#mirpurkhas",
				"name": "Mufeed e aam Dawakhana - Mirpurkhas",
				"address": {
					"@type": "PostalAddress",
					"streetAddress": "Mirpurkhas",
					"addressLocality": "Mirpurkhas",
					"addressRegion": "Sindh",
					"addressCountry": "PK"
				},
				"telephone": "+92-333-2785888",
				"url": "https://dawakhanamufeed.pk/#mirpurkhas",
				"geo": {
					"@type": "GeoCoordinates",
					"latitude": "25.5278335",
					"longitude": "69.021498"
				}
			},
			{
				"@type": "MedicalClinic",
				"@id": "https://dawakhanamufeed.pk/#dadu",
				"name": "Mufeed e aam Dawakhana - Dadu",
				"address": {
					"@type": "PostalAddress",
					"streetAddress": "Dadu",
					"addressLocality": "Dadu",
					"addressRegion": "Sindh",
					"addressCountry": "PK"
				},
				"telephone": "+92-333-2785888",
				"url": "https://dawakhanamufeed.pk/#dadu",
				"geo": {
					"@type": "GeoCoordinates",
					"latitude": "26.7388333",
					"longitude": "67.7818056"
				}
			},
			{
				"@type": "WebSite",
				"@id": "https://dawakhanamufeed.pk/#website",
				"url": "https://dawakhanamufeed.pk",
				"name": "Mufeed e aam Dawakhana",
				"description": "Leading healthcare clinic in Sindh, Pakistan",
				"publisher": {
					"@id": "https://dawakhanamufeed.pk/#organization"
				},
				"inLanguage": ["en-PK", "ur-PK"]
			}
		]
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
		/>
	);
}

