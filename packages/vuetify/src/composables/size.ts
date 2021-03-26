// Utilities
import { computed } from 'vue'
import { convertToUnit } from '@/util'
import propsFactory from '@/util/propsFactory'

// Types
const predefinedSizes = ['x-small', 'small', 'default', 'large', 'x-large']

export interface SizeProps {
  size?: string | number
}

// Composables
export const makeSizeProps = propsFactory({
  size: {
    type: [String, Number],
    default: 'default',
  },
}, 'size')

export function useSize (props: SizeProps, name: string) {
  const sizeClasses = computed(() => {
    return predefinedSizes.includes(props.size as string)
      ? `${name}--size-${props.size}`
      : null
  })

  const sizeStyles = computed(() => {
    return !predefinedSizes.includes(props.size as string) && props.size
      ? ({
        width: convertToUnit(props.size),
        height: convertToUnit(props.size),
      }) : null
  })

  return { sizeClasses, sizeStyles }
}