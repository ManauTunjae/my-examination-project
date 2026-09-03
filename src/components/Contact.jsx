import { storyblokEditable, renderRichText } from '@storyblok/react/rsc';

export default function Contact({ blok }) {
	return (
		<section {...storyblokEditable(blok)}>
			<h1>Contact page</h1>
			<p>Contact is coming soon...</p>
		</section>
	);
}
