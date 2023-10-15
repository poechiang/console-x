<script lang="ts" setup>
defineProps<{
  icon?: any
  heading: String
}>()
</script>
<template>
  <div class="item">
    <i> <slot name="icon"></slot> </i>
    <div class="details">
      <h3>
        <template v-if="heading">
          {{ heading }}
        </template>
        <slot name="heading" v-else></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 0.32rem;
  display: flex;
  position: relative;
}

.details {
  flex: 1;
  margin-left: 0.16rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 0.192rem;
  font-weight: 500;
  margin-bottom: 0.064rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.064rem 0 0.16rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
