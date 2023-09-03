import { reactive } from "vue";

export let store = reactive({
  selectedGender: "Men",
})

/**
 * 
 * @param {string} gender 
 */
export function changeGender(gender) {
  store.selectedGender = gender;
  console.log(store.selectedGender);
}