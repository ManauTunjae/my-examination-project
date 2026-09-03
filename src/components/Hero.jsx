import { storyblokEditable, renderRichText } from '@storyblok/react/rsc';

export default function Hero({ blok }) {
	const richTextHtml = blok.content ? renderRichText(blok.content) : '';

	return (
		<section
			{...storyblokEditable(blok)}
			className="max-w-7xl mx-auto px-10 py-10 grid md:grid-cols-2 gap-10 items-center"
		>
			<div className="grid gap-5 items-center">
				<h1 className="text-3xl md:text-5xl font-bold mb-3 text-gray-900">
					{blok.title}
				</h1>
				<p className="text-lg text-gray-700">{blok.description}</p>
				<form className="flex gap-3" method="get" action="/jobs">
					<input
						type="text"
						name="q"
						placeholder={blok.search}
						className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
					/>
					<button
						type="submit"
						className="bg-gray-900 text-white font-medium px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
					>
						{blok.searchbutton || 'Sök jobb'}
					</button>
				</form>
			</div>
			<div className="bg-gray-100 rounded-2xl aspect-video flex items-center justify-center overflow-hidden">
				<img
					src={blok.image.filename}
					alt="Hero image"
					className="w-full h-full object-cover"
				/>
			</div>
		</section>
	);
}
