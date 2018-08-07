<template>
  <div 
    @mouseover="toggleShow" 
    @mouseout="toggleShow">
    <div class="tooltip-demo">
      <slot name="tooltip-text" />
      <div
        v-if="isShowing"
        class="tooltip"
      >
        <slot name="tooltip-tip" />
      </div>
    </div>
  </div>
</template>

<script>
import { toggle } from './mixins/toggle';
export default {
  name: 'Tooltip',
  mixins: [toggle]
};
</script>

<style scoped lang="scss">
.tooltip-demo {
  position: relative;
  transform: opacity 1s;

  &:hover > * {
    opacity: 1;
  }
}
.tooltip {
  position: absolute;
  left: 50%;
  transform: translate3d(-50%, -160%, 0);
  background: #000000;
  color: white;
  width: 280px;
  border: 1px solid #8ef5c5;
  opacity: 0;
  transform: opacity 1s;
}
.tooltip:after,
.tooltip:before {
  top: 100%;
  left: 50%;
  border: solid transparent;
  content: ' ';
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}
.tooltip:after {
  border-color: rgba(0, 0, 0, 0);
  border-top-color: #000000;
  border-width: 10px;
  margin-left: -10px;
}
.tooltip:before {
  border-color: rgba(142, 245, 197, 0);
  border-top-color: #8ef5c5;
  border-width: 11px;
  margin-left: -11px;
}
</style>
