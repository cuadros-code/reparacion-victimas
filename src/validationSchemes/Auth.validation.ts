import * as yup from "yup";

export const schemaLogin = yup.object({
  email: yup.string().required('El correo es requerido')
                      .email('El correo no es válido')
                      .typeError('El correo no es válido'),
  password: yup.string().required('La contraseña es requerida')
                        .min(6, 'La contraseña debe tener al menos 6 caracteres')
                        .typeError('La contraseña no es válida')
}).required();

export const schemaRegister = yup.object({
  fullName : yup.string().required('El nombre es requerido')
                          .typeError('El nombre no es válido'),
  email: yup.string().required('El correo es requerido')
                      .email('El correo no es válido')
                      .typeError('El correo no es válido'),
  password: yup.string().required('La contraseña es requerida')
                        .min(6, 'La contraseña debe tener al menos 6 caracteres')
                        .typeError('La contraseña no es válida')
}).required();