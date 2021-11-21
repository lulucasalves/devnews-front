import * as Yup from 'yup'

export const registerSchema = Yup.object().shape({
  name: Yup.string().required('Preencha seu nome.'),
  email: Yup.string().email('E-mail inválido.').required('Preencha o e-mail.'),
  password: Yup.string()
    .required('Preencha sua senha.')
    .min(6, 'Sua senha deve ter no mínimo 6 caracteres'),
  passwordConfirmation: Yup.string().when('password', (password, field) =>
    password
      ? field
          .required('confime a sua senha')
          .typeError('Senha incorreta')
          .oneOf([Yup.ref('password')], 'Senha incorreta')
      : field
  ),
  companyName: Yup.string().required('Preencha o nome da empresa.'),
  cnpj: Yup.string()
    .matches(
      /[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}[0-9]{0}/,
      'CNPJ incorreto'
    )
    .required('Preencha o cnpj.')
    .max(18, 'CNPJ incorreto')
})
