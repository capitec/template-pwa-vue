<template>
    <div class="info">
        <slot></slot>
    </div>
</template>
<style scoped>

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

.info::v-deep(.item) {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--omni-theme-font-color);
    padding: 24px 0;
    border-bottom: 1px solid white;
    align-self: stretch;
}

.info::v-deep(.item:last-of-type) {
    border-bottom: unset;
}

.info::v-deep(.item > div) {
    padding-left: 24px;
    display: flex;
    flex-direction: column;
}

</style>