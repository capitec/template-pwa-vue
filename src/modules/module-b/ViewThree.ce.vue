<script setup lang="ts">
import type { Check } from '@capitec/omni-components/check'
import type { EmailField } from '@capitec/omni-components/email-field'
import type { PinField } from '@capitec/omni-components/pin-field'

import { reactive, ref } from 'vue'

import '@capitec/omni-components/button'
import '@capitec/omni-components/check'
import '@capitec/omni-components/email-field'
import '@capitec/omni-components/hyperlink'
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
      check.error = 'Please tick the checkbox if your fields have values'
    }
  }
}
</script>

<template>
    <div class="preview">
        <div class="form-container">
            <omni-label label="Input Examples" type="title"></omni-label>
            <omni-email-field
                ref="emailFieldRef"
                id="form-email-field"
                label="Email field"
                hint="Enter a valid email address"
                .value="state.emailValue"
                @input="(e: InputEvent) => emailFieldInput(e)">
            </omni-email-field>
            <omni-pin-field
                ref="pinFieldRef"
                id="form-pin-field"
                label="Pin field"
                hint="Enter a pin consisting of numeric values"
                .value="state.pinValue"
                @input="(e: InputEvent) => pinFieldInput(e)">
            </omni-pin-field>
            <omni-radio-group class="radio-group" label="Select your account type" :horizontal="true">
                <omni-radio label="Developer"></omni-radio>
                <omni-radio label="Admin"></omni-radio>
                <omni-radio label="Casual User" checked></omni-radio>
            </omni-radio-group>
            <omni-check
                ref="checkRef"
                id="form-check"
                label="I agree all fields above are populated"
                @click="(e: Event) => checkClicked(e)"></omni-check>
            <omni-button label="Submit" type="primary" @click="() => formSubmitted()"></omni-button>
        </div>
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

.form-container > omni-email-field,
.form-container > omni-pin-field,
.form-container > omni-check {
  width: 100%;
}

.form-container > * {
  margin-top: 10px;
  margin-bottom: 10px;
}

.terms {
  margin-top: 15px;
}
</style>
