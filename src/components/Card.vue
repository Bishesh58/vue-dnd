<script setup>
import { useTicketStore } from "../stores/ticketStore";
import { ref } from "vue";
import draggable from "vuedraggable";

const log = (ev) => {
  console.log(ev);
};

const store = useTicketStore();
</script>

<template>
  <div class="m-10 p-10 border rounded-md flex">
    <draggable
      class="list-group"
      :list="store.list1"
      group="ticket"
      @change="log"
      itemKey="name"
    >
      <template #item="{ element }">
        <div class="list-group-item">
          {{ element.name }}
        </div>
      </template>
    </draggable>

    <hr />
    <draggable
      class="list-group"
      :list="store.list2"
      group="ticket"
      @change="log"
      itemKey="name"
    >
      <template #item="{ element }">
        <div class="list-group-item">{{ element.name }}</div>
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
