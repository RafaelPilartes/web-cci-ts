import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const loginEmployeeSchema = z.object({
  email: z
    .string()
    .nonempty('O email é obrigatório!')
    .email('Formato de email invalido')
    .toLowerCase()
    .trim(),
  password: z
    .string()
    .nonempty('A palavra-passe é obrigatório!')
    .min(6, 'A palavra-passe tem de no mínimo 6 caracteres')
})
type loginEmployeeType = z.infer<typeof loginEmployeeSchema>

function MasterLogin() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<loginEmployeeType>({
    resolver: zodResolver(loginEmployeeSchema)
  })

  function submitForm(formData: any) {
    console.log(formData)
  }

  return (
    <div className="containerLogin">
      <form onSubmit={handleSubmit(submitForm)} className="right">
        <div className="containerInput">
          <input
            type="email"
            placeholder={'Endereço de email'}
            {...register('email', { required: true })}
          />
          {errors.email && (
            <span className="errorMessage"> {errors.email.message} </span>
          )}

          <input
            type={'password'}
            placeholder={'Palavra-pass'}
            {...register('password', { required: true })}
          />
          {errors.password && (
            <span className="errorMessage"> {errors.password.message} </span>
          )}
        </div>

        <button name="Entrar" type="submit" />
      </form>
    </div>
  )
}

export default MasterLogin
