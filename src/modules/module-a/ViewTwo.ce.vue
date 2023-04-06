<script setup lang="ts">
import type { ColorField } from '@capitec/omni-components/color-field'
import type { Select } from '@capitec/omni-components/select'

import { onMounted, onUnmounted } from 'vue'
import { reactive } from 'vue'

import factories from '../../assets/factories.svg'

import '@capitec/omni-components/icon'
import '@capitec/omni-components/color-field'
import '@capitec/omni-components/select'

let materialLink: HTMLLinkElement
onMounted(() => {
  // Adding Google Material Icons to document
  materialLink = document.createElement('link')
  materialLink.rel = 'stylesheet preload'
  materialLink.href = 'https://fonts.googleapis.com/icon?family=Material+Icons'
  materialLink.as = 'style'
  document.head.appendChild(materialLink)
})
onUnmounted(() => {
  // Removing Google Material Icons from document
  if (materialLink) {
    materialLink.remove()
  }
})

const state: {
  color: string;
  size: 'default' | 'extra-small' | 'small' | 'medium' | 'large'
} = reactive({
  color: '#209dee',
  size: 'large'
});
// let color: string = '#209dee'
// let size: 'default' | 'extra-small' | 'small' | 'medium' | 'large' = 'large'

const iconSizes = ['default', 'extra-small', 'small', 'medium', 'large'] as const
type IconSizesTuple = typeof iconSizes
type IconSize = IconSizesTuple[number]

function colourChange(e: Event) {
  state.color = (e.target as ColorField)?.value?.toString() ?? '#209dee'
}

function sizeChange(e: Event) {
  state.size = ((e.target as Select)?.value?.toString() as IconSize) ?? 'default'
}
</script>

<template>
    <div class="preview" :style="`color: ${state.color}`">
        <!-- Omni Icon with slotted SVG content -->
        <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component -->
        <omni-icon v-html="factories" .size="state.size"> </omni-icon>

        <!-- Omni Icon with Google Material Icon -->
        <omni-icon .size="state.size" icon="@material/dataset"></omni-icon>
    </div>
    <div class="controls">
        <omni-color-field label="Colour" .value="state.color" @input="(e: Event) => colourChange(e)"> </omni-color-field>
        <omni-select label="Size" :value.prop="state.size" .items="iconSizes" @change="(e: Event) => sizeChange(e)"></omni-select>
    </div>
</template>

<style>
:host {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--global-background-color);
}

.preview {
  min-height: 190px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.preview > omni-icon {
  padding: 5px;
  max-width: 58px;
  flex-wrap: wrap;
}

.controls {
  display: flex;
  flex-direction: row;
}

.controls > * {
  padding: 10px;
  max-width: 170px;
}
</style>
