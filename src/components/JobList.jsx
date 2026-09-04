import { storyblokEditable, getStoryblokApi } from '@storyblok/react/rsc';
import CitiesFilter from '@/components/CitiesFilter';

export default async function JobList({
	blok,
	citiesFilterBlok,
	department = '',
	city = '',
	q = '',
}) {
	const storyblokApi = getStoryblokApi();
	const { data } = await storyblokApi.get('cdn/stories', {
		starts_with: 'jobs/',
		content_type: 'job-post',
		version: 'draft',
		...(department && { filter_query: { department: { in: department } } }),
		...(city && { filter_query: { city: { in: city } } }),
		...(q && { search_term: q }),
	});
	const jobs = data.stories;

	return (
		<section
			{...storyblokEditable(blok)}
			className="max-w-7xl mx-auto px-10 py-12"
		>
			<div className="grid md:grid-cols-[1fr_280px] gap-8">
				<div className="grid gap-5">
					{jobs.map((job) => (
						<a
							key={job.uuid}
							href={`/jobs/${job.slug}`}
							className="block border bg-gray-300/10 border-gray-300 rounded-xl p-6 hover:shadow-lg transition-shadow h-45"
						>
							<h2 className="text-xl font-bold text-gray-900 mb-2">
								{job.content.title}
							</h2>
							<p className="text-sm text-gray-500 mb-3">
								<strong>{job.content.department}</strong> ·{' '}
								{job.content.location}
							</p>
							<p className="text-gray-700">{job.content.summary}</p>
						</a>
					))}
				</div>
				<CitiesFilter blok={citiesFilterBlok} activeCity={city} />
			</div>
		</section>
	);
}
