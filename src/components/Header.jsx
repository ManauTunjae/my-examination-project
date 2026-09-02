import { storyblokEditable, renderRichText } from '@storyblok/react/rsc';

export default function Header({ blok }) {
	return (
		<section
			{...storyblokEditable(blok)}
			className="relative mx-auto px-10 flex justify-between h-20 items-center border-b border-gray-200/60 shadow-[0_25px_25px_-10px_rgba(0,0,0,0.06)]"
		>
			<div>
				<h1 className="text-2xl md:text-2xl font-bold mb-3 text-gray-900">
					{blok.title}
				</h1>
			</div>
			<div className="flex hidden text-gray-500 lg:flex font-semibold items-center gap-6 pr-2">
                <a href='/'>HEM</a>
				<a href={`/${blok.about?.cached_url}`}>OM OSS</a>
				<a href={`/${blok.contact.cached_url}`}>KONTAKT</a>
			</div>
		</section>
	);
}
