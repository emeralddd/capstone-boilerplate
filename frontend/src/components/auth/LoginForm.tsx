import type { FormEventHandler } from 'react'
import type { FieldErrors, UseFormRegister } from 'react-hook-form'
import type { LoginInput } from '@/lib/validations/auth'
import { TextField } from './TextField'

interface LoginFormProps {
  register: UseFormRegister<LoginInput>
  errors: FieldErrors<LoginInput>
  isSubmitting: boolean
  onSubmit: FormEventHandler<HTMLFormElement>
  formError?: string | null
}

export function LoginForm({ register, errors, isSubmitting, onSubmit, formError }: LoginFormProps) {
  const errorMessage = errors.email?.message ?? errors.password?.message ?? formError

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full max-w-182 flex-col gap-5 rounded-[10px] border-2 border-[#ced1d8] bg-[#f7f9fd] p-5 font-fira-sans"
    >
      <h2 className="text-[36px] font-bold text-[#222]">Login</h2>

      <div className="flex flex-col gap-3.75">
        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-2.5">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <TextField
              id="email"
              type="email"
              autoComplete="email"
              placeholder="Email"
              error={!!errors.email}
              aria-invalid={!!errors.email}
              aria-describedby={errorMessage ? 'login-error' : undefined}
              {...register('email')}
            />

            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <TextField
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="Password"
              error={!!errors.password}
              aria-invalid={!!errors.password}
              aria-describedby={errorMessage ? 'login-error' : undefined}
              {...register('password')}
            />
          </div>

          {errorMessage && (
            <p id="login-error" className="pl-1 text-xs text-[#ae2c39]" role="alert">
              {errorMessage}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex h-10 w-full items-center justify-center rounded-full bg-[#ffdd4a] text-base font-normal text-[#222] transition-colors hover:bg-[#f7d50a] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? 'Signing in…' : 'Login'}
        </button>
      </div>
    </form>
  )
}
