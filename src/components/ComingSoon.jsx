import { storyblokEditable, renderRichText } from '@storyblok/react/rsc';

export default function ComingSoon({ blok }) {
	const richTextHtml = blok.content ? renderRichText(blok.content) : '';

	return (
		<section
			{...storyblokEditable(blok)}
			className="grid gap-5 items-center mx-auto px-10 py-10"
		>
			<h1 className="text-3xl md:text-5xl font-bold mb-3 text-gray-900">
				{blok.title}
			</h1>
			<p className="text-lg text-gray-700">{blok.description}</p>
		</section>
	);
}
