<script setup lang="ts">
import type { Check } from '@capitec/omni-components/check'
import type { EmailField } from '@capitec/omni-components/email-field'
import type { PinField } from '@capitec/omni-components/pin-field'

import { reactive, ref } from 'vue'

import '@capitec/omni-components/button'
import '@capitec/omni-components/check'
import '@capitec/omni-components/email-field'
import '@capitec/omni-components/hyperlink'
import '@capitec/omni-components/icon'
import '@capitec/omni-components/label'
import '@capitec/omni-components/pin-field'
import '@capitec/omni-components/radio'
import '@capitec/omni-components/text-field'

const state: {
    formValid: boolean
    emailValue?: string
    pinValue?: number
} = reactive({
    formValid: false,
    emailValue: '',
    pinValue: undefined
})

const checkRef = ref();
const emailFieldRef = ref();
const pinFieldRef = ref();

function emailFieldInput(e: InputEvent) {
    const emailField = e.currentTarget as EmailField
    emailField.error = ''
}

function pinFieldInput(e: InputEvent) {
    const pinField = e.currentTarget as PinField
    pinField.error = ''
}

function checkClicked(e: Event) {
    const check = e.currentTarget as Check
    check.error = ''
}

function formSubmitted() {
    const check = checkRef.value as Check
    const emailField = emailFieldRef.value as EmailField
    const pinField = pinFieldRef.value as PinField

    if (check.checked && emailField.value && pinField.value) {
        state.formValid = true
        alert('Your form is valid')
    } else {
        state.formValid = false

        if (!emailField.value) {
            emailField.error = 'Please enter an email value'
        }

        if (!pinField.value) {
            pinField.error = 'Please enter a pin value'
        }

        if (!check.checked) {
            check.error = 'Please accept the terms'
        }
    }
}
</script>

<template>
    <div style="padding: 20px 20px 0 20px;">
        <div class="info">
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
                        This example illustrates the use of various components to produce a basic form.
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="preview">
        <div class="form-container">
            <omni-label label="Input Examples" type="title"></omni-label>
            <omni-email-field ref="emailFieldRef" id="form-email-field" label="Email" hint="Your email address"
                .value="state.emailValue" @input="(e: InputEvent) => emailFieldInput(e)">
                <!-- eslint-disable-next-line vue/no-deprecated-slot-attribute -->
                <omni-icon size="medium" slot="suffix" class="suffix-slot">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">
                        <path
                            d="M22 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75V4A.75.75 0 0 1 2 3.25Zm-.75 3.19-8.82 6.174a.75.75 0 0 1-.76.06l-.1-.06-8.82-6.173V19.25h18.5V6.44Zm-.202-1.69H2.951L12 11.084l9.048-6.334Z" />
                    </svg>
                </omni-icon>
            </omni-email-field>
            <omni-pin-field ref="pinFieldRef" id="form-pin-field" label="Pin" hint="Your pin" .value="state.pinValue"
                @input="(e: InputEvent) => pinFieldInput(e)">
            </omni-pin-field>
            <omni-radio-group class="radio-group" label="Select your account type" :horizontal="true">
                <omni-radio label="Developer"></omni-radio>
                <omni-radio label="Admin"></omni-radio>
                <omni-radio label="Casual User" :checked="true"></omni-radio>
            </omni-radio-group>
            <omni-check ref="checkRef" id="form-check" label="I agree all fields above are populated"
                @click="(e: Event) => checkClicked(e)"></omni-check>
            <omni-button label="Submit" type="primary" @click="() => formSubmitted()"></omni-button>
        </div>
    </div>
</template>

<style>
:host {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
    background-color: var(--global-background-color);
}

.preview {
    min-height: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

.form-container {
    min-height: 360px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    flex-flow: column wrap;
}

.form-container>omni-email-field,
.form-container>omni-pin-field,
.form-container>omni-check {
    width: 100%;
}

.form-container>* {
    margin-top: 10px;
    margin-bottom: 10px;
}

.terms {
    margin-top: 15px;
}

.suffix-slot {
    margin-right: 10px;
    color: var(--omni-theme-primary-color);
}

/** INFO BLOCK STYLES */
.info {
    background: var(--global-background-hover-color);
    justify-content: stretch;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 24px;
    border-radius: 3px;
    padding: 0 24px;
    max-width: 600px;
}

.item {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--omni-theme-font-color);
    padding: 24px 0;
    border-bottom: 1px solid white;
    align-self: stretch;
}

.item:last-of-type {
    border-bottom: unset;
}

.item>div {
    padding-left: 24px;
    display: flex;
    flex-direction: column;
}
</style>
