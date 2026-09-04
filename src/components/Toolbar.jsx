import { storyblokEditable, getStoryblokApi } from '@storyblok/react/rsc';

export default async function Toolbar({ blok, department = '', q = '' }) {
	const storyblokApi = getStoryblokApi();
	const { data: departmentsData } = await storyblokApi.get(
		'cdn/datasource_entries',
		{
			datasource: 'job-departments',
		},
	);
	const departments = departmentsData.datasource_entries;

	return (
		<div {...storyblokEditable(blok)} className="max-w-7xl mx-auto px-10 mb-8">
			<form
				method="get"
				action="/jobs"
				className="flex flex-col md:flex-row items-stretch md:items-center gap-3"
			>
				<select
					name="department"
					defaultValue={department}
					className="border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
				>
					<option value="">{blok.department_option || 'Kategorier'}</option>
					{departments.map((dept) => (
						<option key={dept.id} value={dept.value}>
							{dept.name}
						</option>
					))}
				</select>
				<button
					type="submit"
					className="bg-gray-900 text-white font-medium px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors whitespace-nowrap"
				>
					{blok.department_button || 'Filtrera'}
				</button>

				<input
					type="text"
					name="q"
					defaultValue={q}
					placeholder={
						blok.search_placeholder || 'Sök jobb, plats eller kompetens'
					}
					className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
				/>

				<button
					type="submit"
					className="bg-gray-900 text-white font-medium px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors whitespace-nowrap"
				>
					{blok.search_button}
				</button>
			</form>
		</div>
	);
}
