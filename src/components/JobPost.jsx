import { storyblokEditable, renderRichText } from '@storyblok/react/rsc';

export default function JobPost({ blok }) {
	const richTextHtml = blok.content ? renderRichText(blok.content) : '';

    return (
        <sektion {...storyblokEditable(blok)}>
            <h1>{blok.title}</h1>
            <p>
                <strong>{blok.department}</strong> - {blok.location}
            </p>
            <p>{blok.summary}</p>
            <div dangerouslySetInnerHTML={{ __html: richTextHtml}}/>
        </sektion>
    )
}
