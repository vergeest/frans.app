<script>
	import '../style.css';

	import NProgress from '$lib/NProgress.svelte';

	import platypiNormalWoff2 from '@fontsource-variable/platypi/files/platypi-latin-wght-normal.woff2?url';
	import silkscreenNormalWoff2 from '@fontsource/silkscreen/files/silkscreen-latin-400-normal.woff2?url';
	import atk400NormalWoff2 from '@fontsource/atkinson-hyperlegible/files/atkinson-hyperlegible-latin-400-normal.woff2?url';
	import atk700NormalWoff2 from '@fontsource/atkinson-hyperlegible/files/atkinson-hyperlegible-latin-700-normal.woff2?url';

	const consoleMessageTitle = 'color: orange; font-weight: bold; font-size: 4em;';
	const consoleMessageBody = 'color: #888; font-size: 2em;';

	console.log('%cWelcome to frans.app!', consoleMessageTitle);
	console.log("%cHave fun and explore, but please don't break things...", consoleMessageBody);
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" />

	<link rel="preload" href={platypiNormalWoff2} as="font" type="font/woff2" crossorigin />
	<link rel="preload" href={silkscreenNormalWoff2} as="font" type="font/woff2" crossorigin />
	<link rel="preload" href={atk400NormalWoff2} as="font" type="font/woff2" crossorigin />
	<link rel="preload" href={atk700NormalWoff2} as="font" type="font/woff2" crossorigin />

	<script
		data-collect-dnt="true"
		async
		defer
		src="https://scripts.simpleanalyticscdn.com/latest.js"
	></script>
	<noscript
		><img
			src="https://queue.simpleanalyticscdn.com/noscript.gif?collect-dnt=true"
			alt=""
			referrerpolicy="no-referrer-when-downgrade"
		/></noscript
	>
</svelte:head>

<NProgress />

<slot />
