// Remplaza la dirección de la pagina para construir la pagina de los posts de forma dinamica.
// https://blog-javascriptmd/[slug].js -->> https://blog-javascriptmd/Primer_Post

import { MDXRemote } from "next-mdx-remote";
import { getFileBySlug, getFiles } from "../lib/mdx";
import MDXComponents from "../components/MDXComponents";

export default function Post({ source, frontmatter }) {
    console.log(source);
    return (
        //Aqui se colocan los elementos que componen la pagina de los posts. Usando los componentes de jsx.
        <MDXRemote {...source} components={MDXComponents}/>
    );
}

export async function getStaticProps({ params }) {
    const { source, frontmatter } = await getFileBySlug(params.slug);

    return {
        props: { source, frontmatter },
    };
}

export async function getStaticPaths() {
    const posts = await getFiles();
    const paths = posts.map((posts) => ({
        params: {
            slug: posts.replace(/\.mdx/, ""),
        },
    }));

    return {
        paths,
        fallback: false,
    }
}