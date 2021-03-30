<template>
	<div>
		<base-checkbox
			:values="countries"
			v-model:selectedValues="selectedCountries"
		/>
		<accordion v-slot="activeIndex">
			<accordion-item
				v-for="(country, index) in countries"
				:key="country.id"
				:active-index="activeIndex"
				:index="index"
			>
				<template v-slot:title>{{ country.name }}</template>
				<template v-slot:content>{{ country.content }}</template>
			</accordion-item>
		</accordion>
	</div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseCheckbox from "./base/BaseCheckbox.vue";
import Accordion from "./components/Accordion.vue";
import AccordionItem from "./components/AccordionItem.vue";
import { Country } from "./interface/countries";

export default defineComponent({
	components: { BaseCheckbox, Accordion, AccordionItem },
	setup() {
		const selectedCountries = ref<Country[]>([]);
		const countries = ref<Country[]>([
			{
				id: 0,
				name: "denmark",
				content: "Denmark is a very nice country with a lot of cool people.",
			},
			{
				id: 1,
				name: "norway",
				content: "Norway is okay, not as great as DK though.",
			},
			{ id: 2, name: "sweden", content: "Sweden is absolute garbage" },
		]);

		return { countries, selectedCountries };
	},
});
</script>