import * as Yup from "yup";

export const wait = (duration = 1000) => {
  return new Promise((resolve) => {
    window.setTimeout(resolve, duration);
  });
};

export const validationSchemaRegister = Yup.object().shape({
  prename: Yup.string()
    .required("Veuillez renseigner votre prénom(Post-nom)")
    .min(2, "Le prénom doit avoir 2 caractères au minimum"),
  name: Yup.string()
    .required("Veuillez renseigner votre nom")
    .min(2, "Le nom doit avoir 2 caractères au minimum"),
  telephone: Yup.number()
    .typeError("Vous devez specifier un numéro de téléphone")
    //.matches(phoneRegExp, "Le numéro de téléphone n'est pas valide")
    .required("Veuillez renseigner le numéro de téléphone de l'oragnisation")
    .min(8, "Renseignez un numéro de téléphone valide min"),
  mail: Yup.string().email("Renseigner une adresse e-mail valide"),
  username: Yup.string().required("Veuillez renseigner le nom d'utilisateur"),
  gcu: Yup.boolean().oneOf(
    [true],
    "Veuillez accepter les conditionds d'utilisation"
  ),
});

export const validationSchemaLogin = Yup.object().shape({
  username: Yup.string().required(
    "Veuillez renseigner le nom d'utilisateur/ téléphone/ E-mail"
  ),
  password: Yup.string().required("Veuillez renseigner le mot de passe"),
});

export const validationCompleteInscriptionStepOne = Yup.object().shape({
  prename: Yup.string()
    .required("Veuillez renseigner votre prénom(Post-nom)")
    .min(2, "Le prénom doit avoir 2 caractères au minimum"),
  name: Yup.string()
    .required("Veuillez renseigner votre nom")
    .min(2, "Le nom doit avoir 2 caractères au minimum"),
  gender: Yup.string().required("Veuillez renseigner votre genre"),
  role: Yup.string().required("Veuillez renseigner votre rôle"),
  telephone: Yup.number()
    .typeError("Vous devez specifier un numéro de téléphone")
    //.matches(phoneRegExp, "Le numéro de téléphone n'est pas valide")
    .required("Veuillez renseigner le numéro de téléphone de l'oragnisation")
    .min(8, "Renseignez un numéro de téléphone valide min"),
  mail: Yup.string().email("Renseigner une adresse e-mail valide"),
  birth: Yup.string().required("Veuillez renseigner votre date de naissance"),
  birth_location: Yup.string().min(
    2,
    "Le lieu de naissance doit comporter 2 caractères au minimum"
  ),
  level_id: Yup.string().required(
    "Veuillez renseigner votre niveau d'étude (classe)"
  ),
});

export const validationCompleteInscriptionStepTwo = Yup.object().shape({
  username: Yup.string().required("Veuillez renseigner le nom d'utilisateur"),
  old_password: Yup.string().required(
    "Veuillez renseigner l'ancien mot de passe"
  ),
  new_password: Yup.string().required(
    "Veuillez renseigner le nouveau mot de passe"
  ),
  confirm_password: Yup.string()
    .required("Veuillez confirmer le nouveau mot de passe")
    .oneOf([Yup.ref("new_password")], "Les mot de passes ne correspondent pas"),
});
