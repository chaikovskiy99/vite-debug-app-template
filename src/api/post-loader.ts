export default async function postsLoader() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    return await data.json()
}