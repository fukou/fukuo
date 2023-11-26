// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Project = defineDocumentType(() => ({
	name: "Project",
	filePathPattern: `projects/*.mdx`,
    contentType: 'mdx',
	fields: {
        title: {
            type: 'string',
            required: true
        },
        summary: {
            type: 'string',
            required: true
        },
        description: {
            type: 'string',
            required: true
        },
        image: {
            type: 'string',
        },
        year: {
            type: 'date',
            required: true
        },
    },
	computedFields: {
		url: {
			type: "string",
			resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx/, ""),
		},
	},
}));

export default makeSource({ contentDirPath: "projects", documentTypes: [Project] });
