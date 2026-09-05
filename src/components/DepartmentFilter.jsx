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
}
