const fetchData = async (endpoint) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);
    return response.json();
}

// Waterfall
const waterfall = async () => {
    console.log('-- Waterfall : Start --');
    const user = await fetchData('users/1');
    console.log(user);
    const userPosts = await fetchData(`posts?userId=${user.id}`)
    console.log(userPosts);
    console.log('-- Waterfall : End --');
}

// Paralell
const paralell = async () => {
    console.log('-- Paralelle : Start --');

    const usersData = fetchData('users');
    const postsData = fetchData('posts');

    const [users, posts] = await Promise.all([usersData, postsData]);

    console.log(users);
    console.log(posts);
    console.log('-- Paralelle : End --');
}

waterfall();
setTimeout(() => paralell(), 2000);