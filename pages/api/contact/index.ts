import type { NextApiRequest, NextApiResponse } from "next";
// import { getCurrentUser } from "@/modules/common/server/auth";
// import { sendApiError } from "@/modules/common/server/error";
// import { createTeam, getTeams, createTeamSchema } from "@/modules/teams";
// import { throwMethodNotAllowed } from "@/modules/common/server/error";
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

      case "GET":
        await handleGET(req, res);
        break;

      // default:
      //   throwMethodNotAllowed(res, method, ["POST", "GET"]);
    }
  // } catch (error: any) {
  //   sendApiError(res, error);
  // }
}

// const handlePOST = async (req, res) => {
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

// const handleGET = async (req: NextApiRequest, res: NextApiResponse) => {
//   const query = req.query;
//   const { fullName, email, message } = query;
//   await sendEmail({
//     to: "info@webariadne.com",
//     subject: "Webariadne Contact form",
//     html: render(ContactForm()),
//   });
//   return res.status(200).json({ 
//     message: "Email sent successfully",
//   });
// };