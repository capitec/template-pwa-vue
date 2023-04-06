<script setup lang="ts">
import { Router } from '@capitec/omni-router'
import { defineCustomElement } from 'vue'

import '@capitec/omni-components/label'
import '@capitec/omni-components/hyperlink'
import '@capitec/omni-components/switch'

const darkMediaQuery = window.matchMedia
  ? window.matchMedia('(prefers-color-scheme: dark)')
  : undefined
darkMediaQuery?.addEventListener('change', darkPreferenceChange)
let darkMode: boolean = darkMediaQuery?.matches ?? false

function darkPreferenceChange(m: MediaQueryListEvent) {
  if (!darkMode && m.matches) {
    toggleDarkMode()
  } else if (darkMode && !m.matches) {
    toggleDarkMode()
  }
}

function toggleDarkMode() {
  darkMode = !darkMode
  if (darkMode) {
    document.documentElement.setAttribute('dark', '')
  } else {
    document.documentElement.removeAttribute('dark')
  }
}

const router = Router.getInstance()

router.removeRoute('view-one')
router.removeRoute('view-two')
router.removeRoute('view-three')

// Register the app routes.
router.addRoute({
  name: 'view-one',
  title: 'One',
  path: '/one',
  animation: 'fade',
  load: async () => {
    const ViewOne = await import(
      './modules/module-a/ViewOne.ce.vue'
    )
    if (!customElements.get('view-one')) {
      // convert into custom element constructor
      const ViewOneElement = defineCustomElement(ViewOne.default)

      // register
      customElements.define('view-one', ViewOneElement)
    }
  },
  isDefault: true
})

router.addRoute({
  name: 'view-two',
  title: 'Two',
  path: '/two',
  animation: 'pop',
  load: async () => {
    const ViewTwo = await import(
      './modules/module-a/ViewTwo.ce.vue'
    )
    if (!customElements.get('view-two')) {
      // convert into custom element constructor
      const ViewTwoElement = defineCustomElement(ViewTwo.default)

      // register
      customElements.define('view-two', ViewTwoElement)
    }
  }
})

router.addRoute({
  name: 'view-three',
  title: 'Three',
  path: '/three',
  animation: 'slide',
  load: async () => {
    const ViewThree = await import(
      './modules/module-b/ViewThree.ce.vue'
    )
    if (!customElements.get('view-three')) {
      // convert into custom element constructor
      const ViewThreeElement = defineCustomElement(ViewThree.default)

      // register
      customElements.define('view-three', ViewThreeElement)
    }
  }
})

if (darkMode) {
  document.documentElement.setAttribute('dark', '')
}

async function loadRoute() {
  await customElements.whenDefined('omni-router')

  await router.load();
}

function navigate(event: MouseEvent, path: string) {
	event.preventDefault()

	router.push(path)
}

loadRoute()
</script>

<template>
    <header @click="navigate($event, '/')">
        <img src="./assets/logo.png" alt="Omni Logo" />
        <omni-label>Omni Starter Vue</omni-label>
    </header>
    <div class="navbar">
        <nav>
            <omni-hyperlink href="/one" @click="(e: MouseEvent) => navigate(e, '/one')">One</omni-hyperlink>
            <omni-hyperlink href="/two" @click="(e: MouseEvent) => navigate(e, '/two')" label="Two"></omni-hyperlink>
            <omni-hyperlink href="/three" @click="(e: MouseEvent) => navigate(e, '/three')" label="Three"></omni-hyperlink>
        </nav>
        <omni-switch label="Dark Mode" :checked.prop="darkMode" @value-change="() => toggleDarkMode()"></omni-switch>
    </div>
    <omni-router></omni-router>
</template>

<style scoped>
/* Header */
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 20px;
  background: var(--global-background-color);
  transition: all 0.5s linear;
  cursor: pointer;
}
header:hover {
  background: var(--global-background-hover-color);
}
header > img {
  width: 150px;
  transition: all 0.5s linear;
}
header > omni-label {
  --omni-label-default-font-size: 32px;
  --omni-label-default-font-weight: bold;
  padding: 0px;
  margin: 20px 0px 0px 0px;
  transition: all 0.5s linear;
}
@media only screen and (max-width: 1000px) {
  header {
    padding: 20px;
  }
  header > img {
    width: 64px;
  }
  header > omni-label {
    --omni-label-default-font-size: 24px;
  }
}
@media only screen and (max-height: 700px) {
  header {
    display: none;
  }
}
/* Nav Bar */
.navbar {
  display: flex;
  justify-content: space-between;
  background: #209dee;
  align-items: center;
}
.navbar > omni-switch {
  padding: 10px;
  --omni-switch-label-font-color: white; /*var(--global-background-color);*/
}
nav {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;

  font-size: 16px;
  font-weight: normal;
  padding: 0px 20px;
  flex-shrink: 0;
  flex-wrap: wrap;
  transition: all 0.5s linear;
}
nav > omni-hyperlink {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  padding: 0px 20px;

  --omni-hyperlink-color: white; /*var(--global-background-color);*/
  --omni-hyperlink-color-visited: var(--omni-hyperlink-color);

  --omni-hyperlink-font-size: 16px;
  --omni-hyperlink-font-weight: normal;
  --omni-hyperlink-text-decorator: none;
  --omni-hyperlink-text-decorator-visited: none;
  height: 64px;
  cursor: pointer;
}
nav > omni-hyperlink:hover {
  --omni-hyperlink-text-decorator-hover: none;
  background: #1b86cb;
}
@media only screen and (max-width: 1000px) {
  nav {
    padding: 0px;
    justify-content: center;
  }
  nav > omni-hyperlink {
    height: 48px;
  }
}
/* Content Area */
omni-router {
  flex: 1 1 auto;
}
</style>
