import { useRouter } from 'next/router'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

export default function Home() {
  const route = useRouter()

  const ValidarSchema = Yup.object().shape({
    email: Yup.string().email('Correo no valido').required('El correo es obligatorio'),
    password: Yup.string().required('La contraseña es obligatoria')

  })

  return (
    <div className='fondoHome h-screen w-screen flex justify-center items-center'>
        <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow shadow-slate-300">
          <h1 className="text-2xl font-medium text-center uppercase mb-5">Inicia Sesion</h1>

          <Formik
            initialValues={{
              email: " ",
              password: ""

            }}
            enableReinitialize={true}
            onSubmit={(values) => {
              console.log(values);
              route.push("/PanelAdministrador")
            }}
            validationSchema={ValidarSchema}

          >
            {({ errors, touched, handleSubmit, isSubmitting, isValidating, isValid, dirty }) => (
              <Form onSubmit={handleSubmit}>
                <div className='flex flex-col space-y-4'>
                  <label htmlFor='email' className='-mb-3'>Correo: </label>
                  <Field
                    id="email"
                    type="email"
                    name="email"
                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                    placeholder="correo@mail.com"



                  />
                  {errors.email && touched.email ? (
                    <p className='bg-red-800 py-2 text-white font-bold text-center rounded-md'>
                      {errors.email}
                    </p>
                  ) : null}

                  <label htmlFor='password'>Contraseña: </label>
                  <Field
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="w-full py-3 border -mt-5 border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                    autoComplete="on"
                  />
                  {errors.password && touched.password ? (
                    <p className='bg-red-800 py-2 text-white font-bold text-center rounded-md'>
                      {errors.password}
                    </p>
                  ) : null}

                </div>
                {/* <input
              type="submit"
              value="Iniciar Sesion"
              disabled={isSubmitting}
              className={isSubmitting || isValidating ? () : ()}
            /> */}
                <button

                  type='submit'
                  disabled={!(dirty && isValid)}
                  className={dirty && isValid ? 'w-full px-8 py-3 font-semibold rounded-md mt-10  bg-blue-900 hover:bg-blue-600  text-white justify-end' : "w-full px-8 py-3 font-semibold rounded-md mt-10  bg-gray-300  text-white justify-end"}
                >
                  {isSubmitting || isValidating ? (
                    <div>
                      <svg role="status" className="inline mr-3 w-7 h-7 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                      </svg>
                      Cargando...
                    </div>
                  ) : (
                    "Iniciar sesion"
                  )}
                </button>
              </Form>
            )}
          </Formik>

        </div>

      </div>
  )
}
