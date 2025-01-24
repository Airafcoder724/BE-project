import { Mailtrapclient, sender } from "./mailtrap.config.js";
import {
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
} from "./emailTemplate.js";
export const sendVerificationEmail = async (userEmail, verificationToken) => {
  const recipients = [
    {
      email: userEmail,
    },
  ];
  try {
    const response = await Mailtrapclient.send({
      from: sender,
      to: recipients,
      subject: "Verification code sent verify account",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email verification ",
    });

    console.log("email sent Scuccsfully");
  } catch (e) {
    console.error("error sending email", e);
    throw new Error("error sending email", e);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipients = [
    {
      email: email,
    },
  ];

  try {
    const response = await Mailtrapclient.send({
      from: sender,
      to: recipients,
      template_uuid: "96b52b8f-5460-4099-ad9d-0d1fe93147f0",
      template_variables: {
        name: name,
      },
    });
  } catch (e) {
    console.error("error sending welcome email", e);
    throw new Error("error sending welcome email", e);
  }
};

export const sendPasswordResetEmail = async (email, url) => {
  const recipients = [
    {
      email,
    },
  ];
  try {
    const response = await Mailtrapclient.send({
      from: sender,
      to: recipients,
      subject: "Reset Password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", url),
      category: "Password Reset",
    });
  } catch (error) {
    console.error(`Error sending password reset email`, error);
    throw new Error(`Error sending password reset email: ${error}`);
  }
};

export const sendResentSuccessEmail = async (email) => {
  const recipients = [
    {
      email,
    },
  ];
  try {
    const response = await Mailtrapclient.send({
      from: sender,
      to: recipients,
      subject: "Reset Password",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password Reset",
    });
  } catch (error) {
    console.error(`Error sending password reset email`, error);
    throw new Error(`Error sending password reset email: ${error}`);
  }
};
