import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/src';

export default async function DepartmentFilter({ blok, department = '' }) {
	const storyblokApi = getStoryblokApi();
	const { data } = await storyblokApi.get('cdn/datasource_entries', {
		datasource: 'job-departments',
	});
	const departments = data.datasource_entries;

	return (
		<div {...storyblokEditable(blok)} className="flex items-center gap-3">
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
		</div>
	);
}
