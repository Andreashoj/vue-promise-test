<template>
	<div v-for="value in values" :key="value.id" class="p-4">
		<label :for="value.id" class="pr-4"> {{ value.name }} </label>
		<input
			:id="value.id"
			type="checkbox"
			:value="value"
			v-model="selectedValues"
			@change="$emit('update:selectedValues', selectedValues)"
		/>
	</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Country } from "../interface/countries";

export default defineComponent({
	props: {
		values: {
			required: true,
			type: Array as () => Country[],
		},
		selectedValues: {
			required: false,
			type: Array as () => Country[],
		},
	},
	setup(props) {
		const { selectedValues } = props;
		return { selectedValues };
	},
});
</script>