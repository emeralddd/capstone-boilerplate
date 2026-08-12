import { type UseFormRegister, type FieldErrors } from 'react-hook-form'
import type { FormEventHandler } from 'react'
import type { LoginInput } from '@/lib/validations/auth'

interface LoginFormCardProps {
  register: UseFormRegister<LoginInput>
  errors: FieldErrors<LoginInput>
  isSubmitting: boolean
  onSubmit: FormEventHandler<HTMLFormElement>
}

export function LoginFormCard({ register, errors, isSubmitting, onSubmit }: LoginFormCardProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[20px] border border-[#ced1d8] bg-[#f7f9fd] p-[20px] shadow-sm"
    >
      <h2 className="mb-5 text-[36px] font-bold text-[#222]">Login</h2>

      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-[#222]">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="Email"
            className="w-full rounded-[10px] border border-[#ced1d8] bg-[#f7f9fd] px-3 py-2 text-sm text-[#1e1e1e] placeholder:text-[#1e1e1e]/50 focus:outline-none focus:ring-2 focus:ring-[#244da3]"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            {...register('email')}
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-red-600" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-[#222]">
            Password
          </label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            placeholder="Password"
            className="w-full rounded-[10px] border border-[#ced1d8] bg-[#f7f9fd] px-3 py-2 text-sm text-[#1e1e1e] placeholder:text-[#1e1e1e]/50 focus:outline-none focus:ring-2 focus:ring-[#244da3]"
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? 'password-error' : undefined}
            {...register('password')}
          />
          {errors.password && (
            <p id="password-error" className="text-xs text-red-600" role="alert">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-[#ffdd4a] px-4 py-3 text-sm font-semibold text-[#222] transition hover:bg-[#e6cc3f] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? 'Signing in…' : 'Login'}
        </button>
      </div>
    </form>
  )
}
