import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useTicketStore = defineStore("ticket", () => {
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
  return { list1, list2 };
});
