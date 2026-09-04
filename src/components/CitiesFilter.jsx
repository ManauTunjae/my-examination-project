import { storyblokEditable, getStoryblokApi } from '@storyblok/react/rsc';

export default async function CitiesFilter({ blok, activeCity = '' }) {
	const storyblokApi = getStoryblokApi();
	const { data } = await storyblokApi.get('cdn/datasource_entries', {
		datasource: 'job-cities',
	});
	const cities = data.datasource_entries;

	return (
		<aside
			{...storyblokEditable(blok)}
			className="bg-gray-100 rounded-xl p-6 h-fit"
		>
			<h3 className="font-bold text-gray-900 mb-4">
				{blok.cities_title || 'Populära städer'}
			</h3>
			<ul className="space-y-2">
				<li>
					<a
						href="/jobs"
						className={`block hover:underline ${
							activeCity === '' ? 'font-bold text-gray-900' : 'text-gray-600'
						}`}
					>
						{blok.all_cities_label || 'Alla städer'} ➡️
					</a>
				</li>
				{cities.map((c) => (
					<li key={c.id}>
						<a
							href={`/jobs?city=${c.value}`}
							className={`block hover:underline ${
								activeCity === c.value
									? 'font-bold text-gray-900'
									: 'text-gray-600'
							}`}
						>
							{c.name} ➡️
						</a>
					</li>
				))}
			</ul>
		</aside>
	);
}
