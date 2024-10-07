<script>
	import Header from '$lib/Header.svelte';
	import HomeGrid from '../lib/HomeGrid.svelte';
	import SocialLinks from '../lib/SocialLinks.svelte';
	import ViewCount from '../lib/ViewCount.svelte';
	import BgImage from '../lib/bg.svg';
</script>

<svelte:head>
	<title>Frans Vergeest ~ frans.app</title>
	<meta name="description" content="Frans Vergeest's personal website" />
	<meta name="theme-color" content="#000000" />
</svelte:head>

<img
	alt=""
	src={BgImage}
	aria-hidden="true"
	class="pointer-events-none absolute -z-10 block h-[720px] w-full select-none object-cover supports-[animation-timeline]:animate-translate-down supports-[animation-range]:[animation-range:exit_0%_exit-crossing_100%] supports-[animation-timeline]:[animation-timeline:view(block)]"
/>
<Header />
<section class="mx-auto w-[1080px] max-w-full px-6 py-16 lg:py-32">
	<h1
		class="mb-8 text-balance font-serif text-4xl font-light leading-snug tracking-tight text-white antialiased lg:text-6xl lg:leading-snug"
	>
		I’m <span class="text-orange">Frans Vergeest</span>, a student passionate about the
		<span class="text-pink">web,</span>
		<span class="text-green">medicine,</span>
		and
		<span class="text-blue">running.</span>
	</h1>
	<SocialLinks />
</section>
