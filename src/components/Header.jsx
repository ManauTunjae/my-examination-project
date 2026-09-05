import { storyblokEditable, renderRichText } from '@storyblok/react/rsc';
import MobileNav from './MobileNav';

export default function Header({ blok }) {
	return (
		<section
			{...storyblokEditable(blok)}
			className="w-full relative mx-auto px-10 flex justify-between h-20 items-center border-b border-gray-400/30 shadow-[0_45px_30px_-5px_rgba(0,0,0,0.10)]"
		>
			<div>
				<h1 className="text-2xl md:text-2xl font-bold mb-3 text-gray-900">
					{blok.title}
				</h1>
			</div>
			<div className="flex hidden text-gray-500 lg:flex font-semibold items-center gap-6 pr-2">
				<a href="/">HEM</a>
				<a href={`/${blok.about?.cached_url}`}>OM OSS</a>
				<a href={`/${blok.contact.cached_url}`}>KONTAKT</a>
			</div>
			<MobileNav
				aboutUrl={blok.about?.cached_url}
				contactUrl={blok.contact?.cached_url}
			/>
		</section>
	);
}
