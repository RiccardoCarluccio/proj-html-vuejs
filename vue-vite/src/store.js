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
}

export function getImage(obj) {
  return new URL(`./assets/images/${obj.path}`, import.meta.url).href;
}