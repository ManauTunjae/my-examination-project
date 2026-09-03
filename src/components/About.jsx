import { storyblokEditable, renderRichText } from '@storyblok/react/rsc';

export default function About({ blok }) {
	return (
		<section {...storyblokEditable(blok)}>
			<h1>About page</h1>
			<p>About is coming soon...</p>
		</section>
	);
}
