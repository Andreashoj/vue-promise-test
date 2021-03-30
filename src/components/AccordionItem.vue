<template>
	<li class="accordion__item flex flex-col">
		<button
			@click="open"
			aria-label="Open accordion"
			:aria-expanded="isActive ? 'true' : 'false'"
		>
			<slot name="title"></slot>
		</button>
		<transition
			@enter="start"
			@after-enter="end"
			@before-leave="start"
			@after-leave="end"
		>
			<slot name="content"></slot>
		</transition>
	</li>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	props: {
		activeIndex: {
			required: true,
			type: Number,
		},
		index: {
			required: true,
			type: Number,
		},
	},
	setup(props) {
		const { activeIndex } = props;
		return { activeIndex };
	},
	methods: {
		open() {
			if (this.isActive) {
				this.$emit("", this.index);
			} else {
				this.$emit("", this.index);
			}
		},
		start(el: HTMLElement) {
			// return (el.style.height = el.scrollHeight + "px");
		},
		end(el: HTMLElement) {
			// el.style.height = "";
		},
	},
	computed: {
		isActive(): boolean {
			return this.activeIndex === this.index;
		},
	},
});
</script>