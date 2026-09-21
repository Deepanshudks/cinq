import nodemailer from "nodemailer";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, phone, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"${process.env.WEBSITE_NAME ?? "CINQ by Raghava"} - Enquiry" <${process.env.EMAIL}>`,
      to: [process.env.EMAIL, process.env.EMAIL2],
      subject: "New CINQ by Raghava Website Enquiry",

      html: `
        <div style="margin:0;padding:0;background:#f5f3ef;font-family:Arial,Helvetica,sans-serif;">
          <table
            width="100%"
            cellpadding="0"
            cellspacing="0"
            style="background:#f5f3ef;padding:40px 0;"
          >
            <tr>
              <td align="center">

                <table
                  width="640"
                  cellpadding="0"
                  cellspacing="0"
                  style="
                    background:#ffffff;
                    border:1px solid #e6e0d6;
                    border-radius:10px;
                    overflow:hidden;
                  "
                >

                  <!-- Header -->
                  <tr>
                    <td
                      style="
                        background:#17131a;
                        padding:36px 40px;
                        text-align:center;
                        border-bottom:3px solid #c8a96b;
                      "
                    >
                      <h1
                        style="
                          margin:0;
                          font-size:28px;
                          font-weight:500;
                          letter-spacing:3px;
                          color:#f5ead5;
                        "
                      >
                        CINQ
                      </h1>

                      <p
                        style="
                          margin:8px 0 0 0;
                          font-size:14px;
                          letter-spacing:1.5px;
                          color:#c8a96b;
                        "
                      >
                        BY RAGHAVA
                      </p>

                      <p
                        style="
                          margin:16px 0 0 0;
                          font-size:13px;
                          color:#b9b2ad;
                        "
                      >
                        New Enquiry Received from Website
                      </p>
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="padding:40px;">

                      <h2
                        style="
                          margin:0 0 24px 0;
                          font-size:18px;
                          font-weight:600;
                          color:#17131a;
                          border-bottom:1px solid #e6e0d6;
                          padding-bottom:12px;
                        "
                      >
                        Client Information
                      </h2>

                      <table
                        width="100%"
                        cellpadding="0"
                        cellspacing="0"
                        style="
                          font-size:14px;
                          color:#4a4541;
                          border-collapse:collapse;
                        "
                      >

                        <!-- Name -->
                        <tr>
                          <td
                            style="
                              padding:14px 0;
                              width:160px;
                              font-weight:600;
                              color:#17131a;
                              border-bottom:1px solid #f0ede8;
                            "
                          >
                            Full Name
                          </td>

                          <td
                            style="
                              padding:14px 0;
                              border-bottom:1px solid #f0ede8;
                            "
                          >
                            ${name}
                          </td>
                        </tr>

                        <!-- Phone -->
                        <tr>
                          <td
                            style="
                              padding:14px 0;
                              font-weight:600;
                              color:#17131a;
                              border-bottom:1px solid #f0ede8;
                            "
                          >
                            Phone Number
                          </td>

                          <td
                            style="
                              padding:14px 0;
                              border-bottom:1px solid #f0ede8;
                            "
                          >
                            <a
                              href="tel:${phone}"
                              style="
                                color:#17131a;
                                text-decoration:none;
                              "
                            >
                              ${phone}
                            </a>
                          </td>
                        </tr>

                        <!-- Email -->
                        <tr>
                          <td
                            style="
                              padding:14px 0;
                              font-weight:600;
                              color:#17131a;
                              border-bottom:1px solid #f0ede8;
                            "
                          >
                            Email Address
                          </td>

                          <td
                            style="
                              padding:14px 0;
                              border-bottom:1px solid #f0ede8;
                            "
                          >
                            <a
                              href="mailto:${email}"
                              style="
                                color:#17131a;
                                text-decoration:none;
                              "
                            >
                              ${email}
                            </a>
                          </td>
                        </tr>

                        <!-- Message -->
                        <tr>
                          <td
                            style="
                              padding:14px 0;
                              font-weight:600;
                              color:#17131a;
                              vertical-align:top;
                            "
                          >
                            Message
                          </td>

                          <td
                            style="
                              padding:14px 0;
                              line-height:1.6;
                            "
                          >
                            ${message ? message.replace(/\n/g, "<br/>") : "No message provided"}
                          </td>
                        </tr>

                      </table>

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td
                      style="
                        background:#faf8f5;
                        padding:20px 40px;
                        text-align:center;
                        border-top:1px solid #e6e0d6;
                      "
                    >
                      <p
                        style="
                          margin:0;
                          font-size:12px;
                          color:#8a837d;
                        "
                      >
                        CINQ by Raghava · Hyderabad
                      </p>
                    </td>
                  </tr>

                </table>

              </td>
            </tr>
          </table>
        </div>
      `,
    });

    return res.status(200).json({
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Email sending error:", error);

    return res.status(500).json({
      message: "Error sending email",
    });
  }
}
