<template>
  <button class="shuffleBtn" @click="shuffle">Click Me!</button>
  <div class="list" ref="listElementRef">
    <div v-for="item in arrayRef" :key="item" class="card">{{ item }}</div>
  </div>
</template>

<script setup lang="ts">
  import { ref, nextTick } from 'vue'
  import _ from 'lodash'

  const arrayRef = ref(new Array(14).fill(1).map((_, index) => index))
  const listElementRef = ref<Element>()
  const lastRectMapRef = ref<Map<Element, DOMRect>>()

  const getItemsRect = () => {
    const children = Array.from(listElementRef.value.children)
    if (!children.length) {
      return new Map<Element, DOMRect>()
    }
    return new Map(children.map<[Element, DOMRect]>(child => [child, child.getBoundingClientRect()]))
  }

  const shuffle = async () => {
    arrayRef.value = _.shuffle(arrayRef.value)
    lastRectMapRef.value = getItemsRect()
    await nextTick()
    const currentRectMap = getItemsRect()
    lastRectMapRef.value.forEach((prevRect, node) => {
      const currentRect = currentRectMap.get(node)
      const invert = {
        left: prevRect.left - currentRect.left,
        top: prevRect.top - currentRect.top
      }
      node.animate([
        {
          transform: `translate3d(${invert.left}px, ${invert.top}px, 0)`
        },
        {
          transform: `translate3d(0, 0, 0)`
        },
      ], {
        duration: 600,
        easing: 'ease-in-out'
      })
    })
  }
</script>

<style scoped>
.shuffleBtn {
  padding: 10px 20px;
  box-shadow: none;
  border: none;
  display: block;
  margin: 0 auto 20px;
  color: #fff;
  background-color: rgb(93, 114, 219);
  border-radius: 4px;
  cursor: pointer;
}

.list {
  display: flex;
  flex-wrap: wrap;
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border: 1px solid #bbb;
  border-radius: 4px;
  margin: 10px;
}
</style>
