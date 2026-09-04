import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

export default function Page({ blok, ...rest }) {
	const citiesFilterBlok = blok.body?.find(
		(nestedBlok) => nestedBlok.component === 'cities-filter',
	);

	return (
		<main {...storyblokEditable(blok)}>
			{blok.body?.map((nestedBlok) => {
				if (nestedBlok.component === 'cities-filter') {
					return null;
				}
				if (nestedBlok.component === 'job-list') {
					return (
						<StoryblokServerComponent
							blok={nestedBlok}
							key={nestedBlok._uid}
							citiesFilterBlok={citiesFilterBlok}
							{...rest}
						/>
					);
				}
				return (
					<StoryblokServerComponent
						blok={nestedBlok}
						key={nestedBlok._uid}
						{...rest}
					/>
				);
			})}
		</main>
	);
}
