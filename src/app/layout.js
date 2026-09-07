import './globals.css';
import StoryblokProvider from '@/components/StoryblokProvider';

export const metadata = {
	title: 'Home',
	description: 'Jobbportalen',
};

export default function RootLayout({ children }) {
	const currentYear = new Date().getFullYear();
	return (
		<StoryblokProvider>
			<html lang="en">
				<body className="min-h-screen flex flex-col">{children}</body>
			</html>
		</StoryblokProvider>
	);
}
