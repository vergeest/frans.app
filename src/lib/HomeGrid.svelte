<script>
	import BlogPostGridLink from './BlogPostGridLink.svelte';
</script>

<section class="mx-auto w-[1080px] max-w-full px-6">
	<div class="grid-flow-rows grid gap-8 lg:grid-cols-3">
		<BlogPostGridLink />
		<BlogPostGridLink />
		<BlogPostGridLink />
		<BlogPostGridLink />
		<BlogPostGridLink />
		<div
			class="flex h-64 items-center justify-center rounded-2xl border border-white/20 bg-black p-8 text-2xl font-bold"
		>
			Built with SvelteKit, TailwindCSS, Lucide Icons, Fontsource and hosted on Vercel.
		</div>
	</div>
</section>
