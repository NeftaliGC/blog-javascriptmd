import fs from 'fs';
import path from 'path'; 
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';import path from 'path';


const root = process.cwd();

export const getFiles = () => fs.readFileSync( path.join( root, 'data' ) );

export const getFileBySlug = async ({ slug }) => {
    
    const mdxSourse = fs.readFileSync (
        path.join(root, 'data', `${slug}.mdx`), 'utf-8'
    );

    const { data, content} = await matter(mdxSourse);
    const source = await serialize(content, {}/*Este es un objeto de opciones para Desde aqui implementar pluguins*/)

    return {
        source,
        fromtmatter: {
            slug,
            ...data,
        },
    };
};

export const getAllFilesMetaData = () => {
    const files = getFiles();

    return files.reduce( (allPost, postSlug) => {
        const mdxSourse = fs.readFileSync( path.join(root, 'data', postSlug), 'utf-8');
        const { data } = matter(mdxSourse);

        return [{...data, slug: postSlug.replace('.mdx', '')}, ...allPost]
    });
};