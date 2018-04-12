import YOUTUBE_KEY from '../config/youtubeKey';

export async function youtube(query) {
	const fixed = 'https://www.googleapis.com/youtube/v3/search';
	const url = `${fixed}?part=snippet&maxResults=5&q=${query}&key=${YOUTUBE_KEY}`;
	const body = await fetch(url);
	const response = await body.json();
	return response;
}
