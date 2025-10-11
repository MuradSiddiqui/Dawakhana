export default function StructuredData() {
	const structuredData = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Organization",
				"@id": "https://dawakhanaa.pk/#organization",
				"name": "Mufeed e aam Dawakhana",
				"alternateName": "مفید عام دواخانہ",
				"url": "https://dawakhanaa.pk",
				"logo": {
					"@type": "ImageObject",
					"url": "https://dawakhanaa.pk/logo.png"
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
				"@id": "https://dawakhanaa.pk/#karachi",
				"name": "Mufeed e aam Dawakhana - Karachi",
				"address": {
					"@type": "PostalAddress",
					"streetAddress": "Karachi",
					"addressLocality": "Karachi",
					"addressRegion": "Sindh",
					"addressCountry": "PK"
				},
				"telephone": "+92-21-34663679",
				"url": "https://dawakhanaa.pk/#karachi",
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
				"@id": "https://dawakhanaa.pk/#hyderabad",
				"name": "Mufeed e aam Dawakhana - Hyderabad",
				"address": {
					"@type": "PostalAddress",
					"streetAddress": "Hyderabad",
					"addressLocality": "Hyderabad",
					"addressRegion": "Sindh",
					"addressCountry": "PK"
				},
				"telephone": "+92-22-785888",
				"url": "https://dawakhanaa.pk/#hyderabad",
				"geo": {
					"@type": "GeoCoordinates",
					"latitude": "25.3851382",
					"longitude": "68.3640484"
				}
			},
			{
				"@type": "MedicalClinic",
				"@id": "https://dawakhanaa.pk/#mirpurkhas",
				"name": "Mufeed e aam Dawakhana - Mirpurkhas",
				"address": {
					"@type": "PostalAddress",
					"streetAddress": "Mirpurkhas",
					"addressLocality": "Mirpurkhas",
					"addressRegion": "Sindh",
					"addressCountry": "PK"
				},
				"telephone": "+92-333-2785888",
				"url": "https://dawakhanaa.pk/#mirpurkhas",
				"geo": {
					"@type": "GeoCoordinates",
					"latitude": "25.5278335",
					"longitude": "69.021498"
				}
			},
			{
				"@type": "MedicalClinic",
				"@id": "https://dawakhanaa.pk/#dadu",
				"name": "Mufeed e aam Dawakhana - Dadu",
				"address": {
					"@type": "PostalAddress",
					"streetAddress": "Dadu",
					"addressLocality": "Dadu",
					"addressRegion": "Sindh",
					"addressCountry": "PK"
				},
				"telephone": "+92-333-2785888",
				"url": "https://dawakhanaa.pk/#dadu",
				"geo": {
					"@type": "GeoCoordinates",
					"latitude": "26.7388333",
					"longitude": "67.7818056"
				}
			},
			{
				"@type": "WebSite",
				"@id": "https://dawakhanaa.pk/#website",
				"url": "https://dawakhanaa.pk",
				"name": "Mufeed e aam Dawakhana",
				"description": "Leading healthcare clinic in Sindh, Pakistan",
				"publisher": {
					"@id": "https://dawakhanaa.pk/#organization"
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

