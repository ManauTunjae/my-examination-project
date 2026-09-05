import { storyblokEditable, renderRichText } from '@storyblok/react/rsc';

export default function JobPost({ blok }) {
	const richTextHtml = blok.content ? renderRichText(blok.content) : '';

	return (
		<section
			{...storyblokEditable(blok)}
			className="min-h-screen bg-indigo-50/50 eller bg-blue-50/40 text-gray-900"
		>
			<div className="max-w-3xl mx-auto px-6 py-12">
				<h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
					{blok.title}
				</h1>
				<div className="flex flex-wrap items-center gap-3 mb-8">
					{blok.department && (
						<span className="inline-block bg-gray-900 text-white text-sm font-medium px-3 py-1 rounded-full">
							{blok.department}
						</span>
					)}
					{blok.location && (
						<span className="inline-flex items-center gap-1 text-gray-600 text-sm">
							📍 {blok.location}
						</span>
					)}
				</div>
				<div className="flex flex-wrap items-center gap-3 mb-8">
					<p>{blok.summary}</p>
					<div
						className="prose prose-gray max-w-none prose-headings:font-bold prose-h2:text-xl prose-h2:mt-8 prose-h3:text-lg prose-h3:mt-6 prose-ul:list-disc prose-li:mb-1"
						dangerouslySetInnerHTML={{ __html: richTextHtml }}
					/>
				</div>
			</div>
		</section>
	);
}
