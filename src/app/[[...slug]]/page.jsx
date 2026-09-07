import { StoryblokServerComponent } from '@storyblok/react/rsc';
import { getStoryblokApi } from '@/lib/storyblok';
import { notFound } from 'next/navigation';

export default async function Page({ params, searchParams }) {
	const { slug } = await params;
	const resolvedSearchParams = await searchParams;
	const department = resolvedSearchParams?.department ?? '';
	const city = resolvedSearchParams?.city ?? '';
	const q = resolvedSearchParams?.q ?? '';

	let fullSlug = slug ? slug.join('/') : 'jobs';
	const storyblokApi = getStoryblokApi();

	let data;
	try {
		const response = await storyblokApi.get(`cdn/stories/${fullSlug}`, {
			version: 'draft',
		});
		data = response.data;
	} catch (error) {
		notFound();
	}

	return (
		<StoryblokServerComponent
			blok={data.story.content}
			department={department}
			city={city}
			q={q}
		/>
	);
}

export async function generateMetadata() {
	const storyblokApi = getStoryblokApi();

	const { data } = await storyblokApi.get('cdn/stories/jobs', {
		version: 'draft',
	});
	const content = data.story.content;
	return {
		title: 'HEM-JOBPORTAL',
		description: content.seo_description,
	};
}
