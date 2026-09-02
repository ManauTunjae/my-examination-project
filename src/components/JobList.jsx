import { storyblokEditable, renderRichText } from "@storyblok/react/rsc";

export default function JobList({blok}) {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get('cdn/stories', {
        start_with: "jobs/",
        content_type: "job-post",
    })

    const jobs = data.stories;

    return (
        <section>

        </section>
    )
}