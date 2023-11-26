// app/projects/[slug]/page.tsx
import { format, parseISO } from "date-fns";
import { allProjects } from "contentlayer/generated";
import { notFound } from "next/navigation";

/*
Internal dependencies
*/
import { useMDXComponent } from "next-contentlayer/hooks";

export async function generateStaticParams() {
	return allProjects.map((page) => ({
		slug: page._raw.flattenedPath,
	}));
}

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
	const project = allProjects.find(
		(project: any) => project._raw.flattenedPath === params.slug,
	);
	if (!project) throw new Error(`Post not found for slug: ${params.slug}`);
	return { title: project?.title };
};

export default async function Page({ params }: { params: { slug: string } }) {
	// Find the post for the current page.
	const project = allProjects.find(
		(project) => project._raw.flattenedPath === params.slug,
	);

	// 404 if the post does not exist.
	if (!project) notFound();

	// Parse the MDX file via the useMDXComponent hook.
	const MDXContent = useMDXComponent(project.body.code);

	return (
		<div>
			{/* Some code ... */}
			<MDXContent />
		</div>
	);
}
