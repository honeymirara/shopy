
export function generateMatedata({ params: { id } }) {
    return {
        title: id,
    }
}

export default function Post({ params: { id } }) {
    return <h1>Post page {id}</h1>
}

