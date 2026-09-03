import { StoryblokStory } from '@storyblok/react/rsc';
import { getStoryblokApi } from '@/lib/storyblok';

export async function generateMetadata() {
	const storyblokApi = getStoryblokApi();

	const { data } = await storyblokApi.get('cdn/stories/home', {
		version: 'draft',
	});
	const content = data.story.content;
	return {
		title: content.seo_title || data.story.name,
		description: content.seo_description,
	};
}

export default async function Page({ params }) {
	const { slug } = await params;

	let fullSlug = slug ? slug.join('/') : 'home';

	let sbParams = {
		version: 'draft',
	};

	const storyblokApi = getStoryblokApi();
	let { data } = await storyblokApi.get(`cdn/stories/${fullSlug}`, sbParams);

	return <StoryblokStory story={data.story} />;
}
