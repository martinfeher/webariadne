import type { NextApiRequest, NextApiResponse } from "next";
// import { getCurrentUser } from "@/modules/common/server/auth";
// import { sendApiError } from "@/modules/common/server/error";
// import { createTeam, getTeams, createTeamSchema } from "@/modules/teams";
// import { throwMethodNotAllowed } from "@/modules/common/server/error";
import { render } from "@react-email/render";
import WelcomeTemplate from "../../../emails/WelcomeTemplate";
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

const handlePOST = async (req: NextApiRequest, res: NextApiResponse) => {

  res.status(200).json({
      response: 'success',
  });

};


const handleGET = async (req: NextApiRequest, res: NextApiResponse) => {

  await sendEmail({
    to: "mn.feher@gmail.com",
    subject: "email subject",
    html: render(WelcomeTemplate()),
  });

  return res.status(200).json({ message: "Email sent successfully" });

  // res.status(200).json({
  //   response: 'success',
  // });

};