const selectorVisible = ref(false)

function openSelector() {
  selectorVisible.value = true
}

function closeSelector() {
  selectorVisible.value = false
}

function toggleSelector() {
  selectorVisible.value = !selectorVisible.value
}

export function useFontSelector() {
  return { selectorVisible, openSelector, closeSelector, toggleSelector }
}
