<template>
	<ul class="accordion">
		<slot
			:active-index="activeIndex"
			:update-active-index="updateActiveIndex"
		></slot>
	</ul>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
	setup() {
		let activeIndex = ref<number | null>(null);

		const updateActiveIndex = (newVal: number | null) => {
			activeIndex = newVal;
		};

		return { activeIndex, updateActiveIndex };
	},
});
</script>