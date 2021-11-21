import { Container, ItemsDiv, Div } from './styles'
import { registerSchema } from '../../yupSchemes/Model'
import { Formik } from 'formik'
import { useRouter } from 'next/router'
import { routesDocument } from '../../routes'

export function FormModel(props) {
  const router = useRouter()

  const save = ({ name, email, local, cnpj }) => {
    router.push(routesDocument.initialPage)
  }

  return (
    <Container>
      <ItemsDiv>
        <Div>
          <Formik
            initialValues={{
              name: '',
              email: '',
              local: '',
              cnpj: ''
            }}
            validationSchema={registerSchema}
            onSubmit={values => {
              save(values)
            }}
          >
            {({
              handleChange,
              handleBlur,
              values,
              errors,
              touched,
              handleSubmit
            }) => (
              <>
                <Div margin="0 50px 0 0">
                  <label htmlFor="name">nome</label>
                  <input
                    required
                    id="name"
                    placeholder="digite seu nome"
                    name="name"
                    autoComplete="current-name"
                    type="text"
                    onChange={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    margin="0 0 29px 0"
                    errors={errors.name && touched.name}
                  />
                  {errors.name && touched.name}
                </Div>

                <Div>
                  <label htmlFor="email">email</label>
                  <input
                    required
                    id="email"
                    placeholder="digite seu email"
                    name="email"
                    autoComplete="current-email"
                    onChange={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    margin="0 0 29px 0"
                    errors={errors.email && touched.email}
                  />
                  {errors.email && touched.email}
                </Div>

                <Div margin="0 50px 0 0">
                  <label htmlFor="local">cidade</label>
                  <input
                    required
                    id="local"
                    placeholder="digite seu nome"
                    name="local"
                    autoComplete="current-local"
                    type="text"
                    onChange={handleChange('local')}
                    onBlur={handleBlur('local')}
                    value={values.local}
                    margin="0 0 29px 0"
                    errors={errors.local && touched.local}
                  />
                  {errors.local && touched.local}
                </Div>

                <Div>
                  <label htmlFor="cnpj">cnpj</label>
                  <input
                    required
                    id="cnpj"
                    placeholder="digite seu cnpj"
                    name="cnpj"
                    autoComplete="current-cnpj"
                    onChange={handleChange('cnpj')}
                    onBlur={handleBlur('cnpj')}
                    value={values.cnpj}
                    margin="0 0 29px 0"
                    errors={errors.cnpj && touched.cnpj}
                  />
                  {errors.cnpj && touched.cnpj}
                </Div>

                <button onClick={() => handleSubmit()}>Registrar</button>
              </>
            )}
          </Formik>
        </Div>
      </ItemsDiv>
    </Container>
  )
}
