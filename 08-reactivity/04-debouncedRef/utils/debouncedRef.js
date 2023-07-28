import {ref, watch, unref} from 'vue';
import debounce from 'lodash/debounce';

/**
 * @template T
 * @param {Ref<T>} source - Исходный ref
 * @param {number} wait - Ожидание в миллисекундах для debounce
 * @returns {Ref<T>} - Новый ref, обновляющийся с debounce при обновлении исходного ref-а
 */
export function debouncedRef(source, wait) {
  const debounced = ref(source.value);
  const buffer = ref(source.value)
  watch(source, debounce(() => {
      debounced.value = source.value
    }, wait),
    { flush: 'sync', immediate: true},
  )
  return debounced;
}
