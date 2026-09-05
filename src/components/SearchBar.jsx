import { storyblokEditable } from '@storyblok/react/rsc';

export default async function SearchBar({ blok, q = '' }) {
	return (
		<div
			{...storyblokEditable(blok)}
			className="flex-1 flex items-center gap-3"
		>
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
				{blok.search_button || 'Sök jobb'}
			</button>
		</div>
	);
}
