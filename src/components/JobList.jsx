import { storyblokEditable, getStoryblokApi } from '@storyblok/react/rsc';

export default async function JobList({ blok }) {
	const storyblokApi = getStoryblokApi();
	const { data } = await storyblokApi.get('cdn/stories', {
		starts_with: 'jobs/',
		content_type: 'job-post',
		version: 'draft',
	});
	const jobs = data.stories;

	return (
		<section {...storyblokEditable(blok)}>
			<div className="grid md:grid-cols-2 gap-6">
				{jobs.map((job) => (
					<a
						key={job.uuid}
						href={`/jobs/${job.slug}`}
						className="block border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
					>
						<h2 className="text-xl font-bold text-gray-900 mb-2">
							{job.content.title}
						</h2>
						<p className="text-sm text-gray-500 mb-3">
							<strong>{job.content.department}</strong> 📍 {job.content.location}
						</p>
						<p className="text-gray-700">{job.content.summary}</p>
					</a>
				))}
			</div>
		</section>
	);
}
