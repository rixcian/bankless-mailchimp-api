import * as EmailValidator from "email-validator";
import {Request, Response} from "express";

import {APIResponse} from "types";



interface RegisterNewsletterParams {
  email: string,
}

const registerNewsletter = async (req: Request<RegisterNewsletterParams>, res: Response<APIResponse>) => {
  const { email } = req.params;

  if (EmailValidator.validate(email)) {
    return res.send({
      data: email,
      error: null
    });
  }

  return res.send({
    data: null,
    error: 'Emailová adresa je ve špatném formátu'
  });
};


export default {
  registerNewsletter
};
