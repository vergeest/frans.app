<script>
	import { onMount } from 'svelte';

	let pageviews = '-';

	onMount(async () => {
		fetch('https://analytics.frans.app/api/stats/frans.app/pages?detailed=true', {
			cache: 'default',
			mode: 'cors'
		})
			.then((response) => response.json())
			.then((data) => {
				pageviews = data.results[0].pageviews;
			})
			.catch((e) => console.log('Error loading views!'));
	});
</script>

<span class="leading-none">{pageviews} views</span>
