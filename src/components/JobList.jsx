import { storyblokEditable, getStoryblokApi } from '@storyblok/react/rsc';

export default function JobList({ blok }) {
    const storyblokApi = getStoryblokApi();
    const {data} = await storyblokApi.get('cdn/stories', {
        starts_with: 'jobs/',
        content_type: 'job-post'
    });
    const jobs = data.stories;
	return (
    <section {...storyblokEditable(blok)}>
        
    </section>
    )
}