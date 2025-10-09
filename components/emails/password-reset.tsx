import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
  Row,
  Column,
  Tailwind,
  Img,
  Link,
} from "@react-email/components";

const PasswordResetEmail = (props: any) => {
  const {
    userName = "John Doe",
    userEmail = "john.doe@example.com",
    resetLink = "https://techconference2024.com/reset-password?token=abc123xyz789",
    verificationLink = "https://techconference2024.com/reset-password?token=abc123xyz789",
    resetCode = "RST-456789",
    expirationTime = "1 hour",
    requestTime = "November 20, 2024 at 3:45 PM IST",
    ipAddress = "192.168.1.100",
    supportEmail = "security@techconference.com",
    companyName = "Tech Conference",
  } = props;

  return (
    <Html lang="en" dir="ltr">
      <Head>
        <style>{`
          @media only screen and (max-width: 600px) {
            .heading-responsive { font-size: 28px !important; }
            .text-large-responsive { font-size: 20px !important; }
            .text-medium-responsive { font-size: 14px !important; }
            .text-small-responsive { font-size: 12px !important; }
            .text-tiny-responsive { font-size: 11px !important; }
            .logo-text-responsive { font-size: 16px !important; }
            .contact-column { 
              width: 100% !important; 
              padding-left: 0 !important; 
              padding-right: 0 !important; 
              margin-bottom: 16px !important;
              display: block !important;
            }
            .contact-row {
              display: block !important;
            }
            .thank-you-icon {
              width: 40px !important;
              height: 40px !important;
              margin-bottom: 12px !important;
            }
            .thank-you-icon svg {
              width: 20px !important;
              height: 20px !important;
            }
          }
          @media only screen and (max-width: 480px) {
            .contact-column { 
              width: 100% !important; 
              padding-left: 0 !important; 
              padding-right: 0 !important; 
              margin-bottom: 16px !important;
              display: block !important;
            }
            .text-large-responsive { font-size: 18px !important; }
            .text-medium-responsive { font-size: 13px !important; }
            .thank-you-icon {
              width: 36px !important;
              height: 36px !important;
              margin-bottom: 10px !important;
            }
            .thank-you-icon svg {
              width: 18px !important;
              height: 18px !important;
            }
          }
        `}</style>
      </Head>
      <Preview>Reset your password - expires in {expirationTime}</Preview>
      <Tailwind>
        <Body className="bg-[#0A0A0A] font-sans py-[40px] px-[20px]">
          <Container className="bg-[#0A0A0A] mx-auto max-w-[600px]">
            <Section
              className="mb-[40px] "
              style={{
                border: "1px solid #FFFFFF13",
                padding: "16px",
                borderRadius: "50px",
                backgroundColor: "#232323",
              }}
            >
              <Row>
                <Column style={{ width: "auto", verticalAlign: "middle" }}>
                  <table style={{ margin: 0, padding: 0 }}>
                    <tr>
                      <td
                        style={{ verticalAlign: "middle", paddingRight: "8px" }}
                      >
                        <Img
                          src="https://assets.avenueticketing.com/email-template/avenueLogo.png"
                          alt="Avenue logo"
                          width="150"
                          height="25"
                        />
                      </td>
                    </tr>
                  </table>
                </Column>
                <Column style={{ textAlign: "right", verticalAlign: "middle" }}>
                  <Link
                    href="https://www.avenueticket.com"
                    style={{ textDecoration: "none" }}
                  >
                    <table style={{ margin: "0 0 0 auto", padding: 0 }}>
                      <tr>
                        <td
                          style={{
                            verticalAlign: "middle",
                            paddingRight: "4px",
                          }}
                        >
                          <Img
                            src="https://assets.avenueticketing.com/email-template/link.png"
                            alt="Browser icon"
                            width="16"
                            height="16"
                          />
                        </td>
                        <td style={{ verticalAlign: "middle" }}>
                          <Text
                            className="text-gray-400 text-[14px]"
                            style={{ lineHeight: "1", margin: "0" }}
                          >
                            View in browser
                          </Text>
                        </td>
                      </tr>
                    </table>
                  </Link>
                </Column>
              </Row>
            </Section>
            {/* Verification CTA Section */}
            <Section className="bg-[#0A0A0A] rounded-[12px] mb-[16px]">
              <div className="p-3 text-start">
                <Text className="text-white text-[36px] font-normal mb-[36px] text-large-responsive">
                  Password reset{" "}
                </Text>
                <Text className="text-gray-300 text-[14px] mb-[16px]">
                  We've received a request to reset the password for the Avenue
                  account associated with {userEmail}. No changes have been made
                  to your account yet.
                </Text>
                <Text className="text-gray-300 text-[14px] mb-[24px]">
                  You can reset your password by clicking the link below.
                </Text>

                <div
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "999px",
                    padding: "12px 24px",
                    display: "inline-block",
                    marginBottom: "12px",
                    width: "90%",
                    textAlign: "center",
                  }}
                >
                  <Link
                    href={verificationLink}
                    style={{ textDecoration: "none" }}
                  >
                    <Text
                      style={{
                        color: "#0A0A0A",
                        fontWeight: "normal",
                        fontSize: "16px",
                        margin: 0,
                        textAlign: "center",
                      }}
                    >
                      Reset your password
                    </Text>
                  </Link>
                </div>

                <Text className="text-gray-300 text-[14px] mb-[16px]">
                  If you did not request a new password, please let us know
                  immediately by replying to this email.
                </Text>

                <Text className="text-gray-300 text-[14px] mb-[16px]">
                  We're here to help you at any step along the way.
                </Text>

                <Text className="text-gray-300 text-[14px] mb-[16px]">
                  - Avenue Fan Support
                </Text>

                <Text className="text-gray-400 text-[13px] mb-0">
                  If the buttons doesn't work, paste this link into your
                  browser:
                </Text>
                <Text className="text-blue-400 text-[13px] break-word mt-0">
                  {verificationLink}
                </Text>
              </div>
            </Section>

            {/* Help Section */}
            <Section
              className="bg-[#0A0A0A] rounded-[12px] "
              style={{ border: "1px solid #FFFFFF13" }}
            >
              <div
                className=" flex items-center gap-[8px] p-3 rounded-t-[12px]"
                style={{
                  borderBottom: "1px solid #FFFFFF13",
                  backgroundColor: "#101010",
                }}
              >
                <Img
                  src="https://assets.avenueticketing.com/email-template/help.png"
                  alt="Help icon"
                  width="20"
                  height="20"
                  className="inline-block"
                />
                <Text className="text-white text-[18px] font-semibold m-0 text-large-responsive">
                  Need Help?
                </Text>
              </div>
              <div className="p-3">
                <Text className="text-white text-[16px] font-semibold mb-[4px] mt-[16px] text-medium-responsive">
                  Security Team Available 24/7
                </Text>
                <Text className="text-gray-400 text-[14px] mb-[24px] mt-0 text-small-responsive">
                  Questions? Email {supportEmail}
                </Text>

                <Row className="contact-row">
                  <Column className="w-[50%] pr-[10px] contact-column">
                    <Text className="text-white text-[14px] mb-[8px] mt-0 text-small-responsive">
                      Emergency Phone
                    </Text>
                    <div
                      style={{
                        border: "1px solid #FFFFFF13",
                        borderRadius: "25px",
                        padding: "12px",
                        textAlign: "center",
                      }}
                    >
                      <table style={{ width: "100%", margin: 0, padding: 0 }}>
                        <tr>
                          <td
                            style={{
                              textAlign: "center",
                              verticalAlign: "middle",
                            }}
                          >
                            <table
                              style={{
                                margin: "0 auto",
                                padding: 0,
                                borderSpacing: "0 0",
                              }}
                            >
                              <tr>
                                <td
                                  style={{
                                    verticalAlign: "middle",
                                    paddingRight: "8px",
                                  }}
                                >
                                  <Img
                                    src="https://assets.avenueticketing.com/email-template/Flag.png"
                                    alt="Phone icon"
                                    width="16"
                                    height="16"
                                  />
                                </td>
                                <td style={{ verticalAlign: "middle" }}>
                                  <Text className="text-white text-[15px] m-0 text-small-responsive">
                                    +91 98765 43210
                                  </Text>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </Column>

                  <Column className="w-[50%] pl-[10px] contact-column">
                    <Text className="text-white text-[14px] mb-[8px] mt-0 text-small-responsive">
                      Security Email
                    </Text>
                    <div
                      style={{
                        border: "1px solid #FFFFFF13",
                        borderRadius: "25px",
                        padding: "12px",
                        textAlign: "center",
                      }}
                    >
                      <table style={{ width: "100%", margin: 0, padding: 0 }}>
                        <tr>
                          <td
                            style={{
                              textAlign: "center",
                              verticalAlign: "middle",
                            }}
                          >
                            <table
                              style={{
                                margin: "0 auto",
                                padding: 0,
                                borderSpacing: "0 0",
                              }}
                            >
                              <tr>
                                <td
                                  style={{
                                    verticalAlign: "middle",
                                    paddingRight: "8px",
                                  }}
                                >
                                  <Img
                                    src="https://assets.avenueticketing.com/email-template/mail.png"
                                    alt="Email icon"
                                    width="16"
                                    height="16"
                                  />
                                </td>
                                <td style={{ verticalAlign: "middle" }}>
                                  <Text className="text-white text-[15px] m-0 text-small-responsive">
                                    security@avenue.com
                                  </Text>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </Column>
                </Row>
              </div>
            </Section>
            {/* Footer */}
            <Section className="text-center pt-[40px]">
              <table style={{ margin: "0 auto", padding: 0 }}>
                <tr>
                  <td style={{ verticalAlign: "middle", paddingRight: "8px" }}>
                    <Img
                      src="https://assets.avenueticketing.com/email-template/avenueLogo.png"
                      alt="Avenue logo"
                      width="150"
                      height="25"
                    />
                  </td>
                </tr>
              </table>

              {/* Social Media Icons */}
              <div style={{ textAlign: "center", margin: "16px 0" }}>
                <table
                  style={{
                    margin: "0 auto",
                    padding: 0,
                    borderSpacing: "16px 0",
                  }}
                >
                  <tr>
                    <td style={{ textAlign: "center" }}>
                      <Link
                        href="https://www.instagram.com/avenueticket/"
                        style={{ textDecoration: "none" }}
                      >
                        <Img
                          src="https://assets.avenueticketing.com/email-template/instagram.png"
                          alt="Instagram"
                          width="24"
                          height="24"
                        />
                      </Link>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <Link
                        href="https://www.facebook.com/people/Avenue-Ticketing/61578022446260/#"
                        style={{ textDecoration: "none" }}
                      >
                        <Img
                          src="https://assets.avenueticketing.com/email-template/facebook.png"
                          alt="Facebook"
                          width="24"
                          height="24"
                        />
                      </Link>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <Link
                        href="https://x.com/avenueticketHQ"
                        style={{ textDecoration: "none" }}
                      >
                        <Img
                          src="https://assets.avenueticketing.com/email-template/twitter.png"
                          alt="Twitter"
                          width="20"
                          height="20"
                        />
                      </Link>
                    </td>
                  </tr>
                </table>
              </div>

              <Text className="text-gray-500 text-[14px] my-[8px] text-small-responsive">
                Avenue Security Team | 101 Ave, 10th Floor | Hawaii
              </Text>
              <Text className="text-gray-500 text-[14px] mt-[4px] mb-0 text-small-responsive">
                Copyright 2025 Avenue. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

PasswordResetEmail.PreviewProps = {
  userName: "John Doe",
  userEmail: "john.doe@example.com",
  resetLink: "https://techconference2024.com/reset-password?token=abc123xyz789",
  verificationLink:
    "https://techconference2024.com/reset-password?token=abc123xyz789",
  resetCode: "RST-456789",
  expirationTime: "1 hour",
  requestTime: "November 20, 2024 at 3:45 PM IST",
  ipAddress: "192.168.1.100",
  supportEmail: "security@techconference.com",
  companyName: "Tech Conference",
};

export default PasswordResetEmail;
