<template>
	<footer aria-label="Site Footer" class="bg-gray-100">
		<div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
			<!--Logo with copy-->

			<div class="flex justify-center text-teal-600">
				<SVGLogo />
			</div>

			<p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
				consequuntur amet culpa cum itaque neque.
			</p>
			<!--Footer nav-->

			<nav aria-label="Footer Nav" class="mt-12">
				<ul class="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">

					<li v-for="link in data.links" :key="link">
						<p class="text-gray-700 transition hover:text-gray-700/75">
							<NuxtLink :to="link.link">
								{{ link.name }}
							</NuxtLink>
						</p>
					</li>
				</ul>
			</nav>
			<!--Footer socials-->

			<ul class="mt-12 flex justify-center gap-6 md:gap-8">
				<li>
					<p rel="noreferrer" target="_blank" class="text-gray-700 transition hover:text-gray-700/75">
						<SVGFb />
					</p>
				</li>
				<li>
					<p rel="noreferrer" target="_blank" class="text-gray-700 transition hover:text-gray-700/75">
						<SVGInsta />
					</p>
				</li>
				<li>
					<p rel="noreferrer" target="_blank" class="text-gray-700 transition hover:text-gray-700/75">
						<SVGTwitter />
					</p>
				</li>


			</ul>
		</div>
	</footer>

</template>


<script setup>
import { ref } from 'vue';
const data = ref({
	links: [
		{ name: 'About', link: '/' },
		{ name: 'Careers', link: '/' },
		{ name: 'History', link: '/' },
		{ name: 'Services', link: '/' },
		{ name: 'Projects', link: '/' },
		{ name: 'Blog', link: '/' },
	],

})
</script>

<style>

</style>