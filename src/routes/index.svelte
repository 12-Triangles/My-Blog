<script context="module">
	// Get all posts of markdown type
	const mdPosts = import.meta.glob('./*.md');
	let posts = [];

	for (let path in mdPosts) {
		posts.push(
			mdPosts[path]().then(({ metadata }) => {
				return { path, metadata };
			})
		);
	}

	export const load = async () => {
		const allPosts = await Promise.all(posts);

		return {
			props: {
				allPosts
			}
		};
	};
</script>

<script>
	import { onMount } from 'svelte';

	onMount(() => {
		window.scrollTo(0, 0);
	});
	export let allPosts;

	// Sort the posts based on when they were created
	export let sortedPosts = allPosts.sort((a, b) => {
		return a.metadata.created > b.metadata.created
			? 1
			: a.metadata.created < b.metadata.created
			? -1
			: 0;
	});

	// Get the Getting Started posts
	export const gettingStarted = sortedPosts.filter((post) => {
		return post.metadata.tag === 'Getting Started';
	});

	// Get the Another Tag posts
	export const anotherTag = sortedPosts.filter((post) => {
		return post.metadata.tag === 'Another Tag';
	});

	// Get the Third Tag posts
	export const thirdTag = sortedPosts.filter((post) => {
		return post.metadata.tag === 'Third Tag';
	});
</script>

<h1>Welcome to My Blog</h1>

<h3>Getting Started</h3>

{#each gettingStarted as post}
	<li>
		<a href={post.path.replace('.md', '')}>{post.metadata.title}</a>
	</li>
{/each}

<h3>Another Tag</h3>

{#each anotherTag as post}
	<li>
		<a href={post.path.replace('.md', '')}>{post.metadata.title}</a>
	</li>
{/each}

<h3>Third Tag</h3>

{#each thirdTag as post}
	<li>
		<a href={post.path.replace('.md', '')}>{post.metadata.title}</a>
	</li>
{/each}
