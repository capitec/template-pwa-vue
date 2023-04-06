<script setup lang="ts">
import '@capitec/omni-components/label'
</script>

<template>
    <omni-label label="Welcome!" type="title"></omni-label>
    <omni-label label="Simple starter template that utilises Vue + Vite, navigate around for some more examples." type="subtitle"></omni-label>
</template>

<style>
:host {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--global-background-color);
}
</style>
