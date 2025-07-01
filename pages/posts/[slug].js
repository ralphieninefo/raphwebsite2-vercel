// pages/posts/[slug].js

export async function getStaticPaths() {
    return {
      paths: [{ params: { slug: 'hello-world' } }],
      fallback: 'blocking',
    };
  }
  
  export async function getStaticProps({ params }) {
    const content = `This page was generated at ${new Date().toISOString()}`;
    return {
      props: { slug: params.slug, content },
      revalidate: 10,
    };
  }
  
  export default function Post({ slug, content }) {
    return (
      <main style={{ padding: '2rem' }}>
        <h1>Post: {slug}</h1>
        <p>{content}</p>
      </main>
    );
  }

  