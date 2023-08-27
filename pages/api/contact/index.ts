import type { NextApiRequest, NextApiResponse } from "next";
import { render } from "@react-email/render";
import ContactForm from "../../../emails/ContactForm";
import { sendEmail } from "../../../lib/email";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  
  // try {
    switch (method) {
      case "POST":
        await handlePOST(req, res);
        break;

      // case "GET":
      //   await handleGET(req, res);
      //   break;
      // default:
      //   throwMethodNotAllowed(res, method, ["POST", "GET"]);
    }
  // } catch (error: any) {
  //   sendApiError(res, error);
  // }
}

const handlePOST = async (req: NextApiRequest, res: NextApiResponse) => {
  
  let dataRqBody = req.body;

    await sendEmail({
      to: "info@webariadne.com",
      subject: "Webariadne Contact Form",
      html: render(ContactForm(dataRqBody)),
    });

    return res.status(200).json({ 
      message: "Email sent successfully",
    });

};