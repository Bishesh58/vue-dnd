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
    <!-- drag containter 1 -->
    <draggable
      class="list-group"
      :list="store.list1"
      group="ticket"
      @change="log"
      itemKey="name"
    >
      <template #header>
        <h1 class="px-4">Open Ticket</h1>
      </template>
      <template #item="{ element }">
        <div class="list-group-item">
          {{ element.name }}
        </div>
      </template>
    </draggable>
    <!-- drag container 2 -->
    <draggable
      class="list-group"
      :list="store.list2"
      group="ticket"
      @change="log"
      itemKey="name"
    >
      <template #header>
        <h1 class="px-4">Assign ticket</h1>
      </template>
      <template #item="{ element }">
        <div class="list-group-item">{{ element.name }}</div>
      </template>
    </draggable>
    <!-- drag container 3 -->
    <draggable
      class="list-group"
      :list="store.list3"
      group="ticket"
      @change="log"
      itemKey="name"
    >
      <template #header>
        <h1 class="px-4">In progress</h1>
      </template>
      <template #item="{ element }">
        <div class="list-group-item">{{ element.name }}</div>
      </template>
    </draggable>
    <!-- drag container 4 -->
    <draggable
      class="list-group"
      :list="store.list4"
      group="ticket"
      @change="log"
      itemKey="name"
    >
      <template #header>
        <h1 class="px-4">Resolved</h1>
      </template>
      <template #item="{ element }">
        <div class="list-group-item">{{ element.name }}</div>
      </template>
    </draggable>
    <!-- drag container 5 -->
    <draggable
      class="list-group"
      :list="store.list5"
      group="ticket"
      @change="log"
      itemKey="name"
    >
      <template #header>
        <h1 class="px-4">close</h1>
      </template>
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
  background: whitesmoke;
  border-radius: 10px;
}
</style>
