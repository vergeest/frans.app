<script>
	import Header from '$lib/Header.svelte';
	import ViewCount from '../lib/ViewCount.svelte';
</script>

<svelte:head>
	<title>frans.app ~ home</title>
	<meta name="description" content="Frans Vergeest's personal website" />
	<meta name="theme-color" content="#000000" />
</svelte:head>

<div class="-mb-16 bg-[url('/bg.svg')] bg-cover bg-center">
	<Header />
	<section class="mx-auto w-[1080px] max-w-full px-8 py-32">
		<h1
			class="mb-16 animate-none text-balance font-serif text-4xl font-light leading-snug text-white antialiased mix-blend-difference lg:text-5xl lg:leading-snug"
		>
			I’m <span class="text-orange">Frans Vergeest</span>, a student passionate about the
			<span class="text-pink">web,</span>
			<span class="text-green">medicine,</span>
			and
			<span class="text-blue">running.</span>
		</h1>
		<div class="mb-12 flex gap-8 text-white/75">
			<a
				href="https://www.instagram.com/frans.vergeest/"
				rel="noreferrer noopener"
				class="block transition-colors hover:text-green"
				target="_blank"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-instagram"
					><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path
						d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
					/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg
				>
			</a>
			<a
				href="https://www.linkedin.com/in/vergeest"
				rel="noreferrer noopener"
				target="_blank"
				class="block transition-colors hover:text-green"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-linkedin"
					><path
						d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
					/><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg
				></a
			>
			<a
				href="https://github.com/frans32"
				rel="noreferrer noopener"
				target="_blank"
				class="block transition-colors hover:text-green"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-github"
					><path
						d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
					/><path d="M9 18c-4.51 2-5-2-7-2" /></svg
				></a
			>
		</div>
		<ViewCount />
	</section>
</div>

<!-- <section class="mx-auto w-[1080px] max-w-full px-8">
	<div class="grid-flow-rows grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] gap-8">
		<div
			class="flex h-64 items-center justify-center rounded-2xl border border-white/20 bg-black p-8 text-2xl font-bold"
		>
			Writing
		</div>

		<div
			class="flex h-64 items-center justify-center rounded-2xl border border-white/20 bg-black p-8 text-2xl font-bold"
		>
			Writing
		</div>

		<div
			class="flex h-64 items-center justify-center rounded-2xl border border-white/20 bg-black p-8 text-2xl font-bold"
		>
			Writing
		</div>
		<div
			class="flex h-64 items-center justify-center rounded-2xl border border-white/20 bg-black p-8 text-2xl font-bold"
		>
			Writing
		</div>
		<div
			class="flex h-64 items-center justify-center rounded-2xl border border-white/20 bg-black p-8 text-2xl font-bold"
		>
			Writing
		</div>
		<div
			class="flex h-64 items-center justify-center rounded-2xl border border-white/20 bg-black p-8 text-2xl font-bold"
		>
			Writing
		</div>
		<div
			class="flex h-64 items-center justify-center rounded-2xl border border-white/20 bg-black p-8 text-2xl font-bold"
		>
			Writing
		</div>
		<div
			class="flex h-64 items-center justify-center rounded-2xl border border-white/20 bg-black p-8 text-2xl font-bold"
		>
			Writing
		</div>
		<div
			class="flex h-64 items-center justify-center rounded-2xl border border-white/20 bg-black p-8 text-2xl font-bold"
		>
			Writing
		</div>
		<div
			class="flex h-64 items-center justify-center rounded-2xl border border-white/20 bg-black p-8 text-2xl font-bold"
		>
			Writing
		</div>
		<div
			class="flex h-64 items-center justify-center rounded-2xl border border-white/20 bg-black p-8 text-2xl font-bold"
		>
			Writing
		</div>
		<div
			class="flex h-64 items-center justify-center rounded-2xl border border-white/20 bg-black p-8 text-2xl font-bold"
		>
			Writing
		</div>
	</div>
</section>
 -->
