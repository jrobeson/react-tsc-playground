import { type ReactNode, useEffect, useState } from 'react';
import { get } from './utils/http';
import BlogPosts, { type BlogPost } from './components/BlogPosts';
import fetchingImage from './assets/data-fetching.png';
import ErrorMessage from './components/ErrorMessage';

type RawData = {
	id: number;
	userId: number;
	title: string;
	body: string;
};

function App() {
	const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
	const [isFetching, setIsFetching] = useState(false);
	const [error, setError] = useState<string>();

	useEffect(() => {
		async function getPosts() {
			setIsFetching(true);
			try {
				const data = (await get('https://jsonplaceholder.typicode.com/posts')) as RawData[];
				const blogPosts: BlogPost[] = data.map((post) => {
					return {
						id: post.id,
						title: post.title,
						text: post.body,
					};
				});

				setFetchedPosts(blogPosts);
			} catch (error) {
				if (error instanceof Error) {
					setError(error.message);
				}
			}
			setIsFetching(false);
		}
		getPosts();
	}, []);

	let content: ReactNode;

	if (error) {
		content = <ErrorMessage text={error} />;
	}

	if (fetchedPosts) {
		content = <BlogPosts posts={fetchedPosts} />;
	}

	if (isFetching) {
		content = <p id='loading-fallback'>Fetching posts...</p>;
	}

	return (
		<main>
			<img src={fetchingImage} alt='An abstract image depicting data fetching' />
			{content}
		</main>
	);
}

export default App;
