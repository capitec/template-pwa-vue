<script setup lang="ts">
import type { ColorField } from '@capitec/omni-components/color-field';
import type { Select } from '@capitec/omni-components/select';

import { reactive } from 'vue';

import factories from '../../assets/factories.svg';

import InfoBlock from '@/components/InfoBlock.vue';

import '@capitec/omni-components/icon';
import '@capitec/omni-components/color-field';
import '@capitec/omni-components/select';

const state: {
    color: string;
    size: 'default' | 'extra-small' | 'small' | 'medium' | 'large'
} = reactive({
    color: '#209dee',
    size: 'large'
});

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
    <div class="content-area">
        <div style="padding: 20px 20px 0 20px;">
            <InfoBlock>
                <div class="item">
                    <omni-icon size="large">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">
                            <path
                                d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
                        </svg>
                    </omni-icon>
                    <div>
                        <omni-label label="Info" type="title"></omni-label>
                        <span>
                            This example illustrates the use of various input components, including iconography leveraging the
                            <omni-hyperlink href="https://fonts.google.com/icons?icon.set=Material+Icons&query=material+icon" target="_blank"
                                >Google Material Icon</omni-hyperlink
                            >
                            library.
                        </span>
                    </div>
                </div>
            </InfoBlock>
        </div>
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
    </div>
</template>

<style scoped>
@import 'https://fonts.googleapis.com/icon?family=Material+Icons';

.preview {
    min-height: 190px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

.preview>omni-icon {
    padding: 5px;
    max-width: 58px;
    flex-wrap: wrap;
}

.controls {
    display: flex;
    flex-direction: row;
}

.controls>* {
    padding: 10px;
    max-width: 170px;
}
</style>
