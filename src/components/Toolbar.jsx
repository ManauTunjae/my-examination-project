import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

export default async function Toolbar({ blok, ...rest }) {
	return (
		<div
			{...storyblokEditable(blok)}
			className="w-full max-w-7xl mx-auto px-10 mb-8"
		>
			<form
				method="get"
				action="/jobs"
				className="flex flex-col md:flex-row items-stretch md:items-center gap-4"
			>
				{blok.blocks?.map((nestedBlok) => (
					<StoryblokServerComponent
						blok={nestedBlok}
						key={nestedBlok._uid}
						{...rest}
					/>
				))}
			</form>
		</div>
	);
}
