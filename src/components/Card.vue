<script setup>
import { ref } from "vue";
import draggable from "vuedraggable";
const list1 = ref([
  { name: "John", id: 1 },
  { name: "Joao", id: 2 },
  { name: "Jean", id: 3 },
  { name: "Gerard", id: 4 },
  { name: "Juan", id: 5 },
  { name: "Edgard", id: 6 },
  { name: "Johnson", id: 7 },
]);

const list2 = ref([]);

const log = (ev) => {
  console.log(ev);
};
</script>

<template>
  <div class="m-10 p-10 border rounded-md flex">
    <draggable
      class="list-group"
      :list="list1"
      group="ticket"
      @change="log"
      itemKey="name"
    >
      <template #item="{ element, index }">
        <div class="list-group-item">{{ element.name }} {{ index }}</div>
      </template>
    </draggable>

    <hr />
    <draggable
      class="list-group"
      :list="list2"
      group="ticket"
      @change="log"
      itemKey="name"
    >
      <template #item="{ element, index }">
        <div class="list-group-item">{{ element.name }} {{ index }}</div>
      </template>
    </draggable>
  </div>
</template>

<style scoped>
.list-group {
  width: 500px;
}
.list-group-item {
  padding: 20px;
  margin: 5px;
  background: gray;
}
</style>
