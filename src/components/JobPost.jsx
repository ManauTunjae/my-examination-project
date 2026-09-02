import { storyblokEditable, renderRichText } from '@storyblok/react/rsc';

export default function JobPost({ blok }) {
	const richTextHtml = blok.content ? renderRichText(blok.content) : '';

	return (
		<section {...storyblokEditable(blok)}>
			<h1>{blok.title}</h1>
			<h3>
				<strong>
					{blok.department} 📍 {blok.location}{' '}
				</strong>
			</h3>
			<p>{blok.summary}</p>
			<div dangerouslySetInnerHTML={{ __html: richTextHtml }} />
		</section>
	);
}
