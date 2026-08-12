import { forwardRef, type InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
  { className, error, ...props },
  ref
) {
  return (
    <input
      ref={ref}
      className={cn(
        'h-10 w-full rounded-[10px] border-2 border-[#ced1d8] bg-[#f7f9fd] px-3 font-fira-sans text-base text-[#1e1e1e] placeholder:italic placeholder:text-[#1e1e1e]/50 focus:border-[#222] focus:outline-none',
        error && 'border-[#ae2c39]',
        className
      )}
      {...props}
    />
  )
})
