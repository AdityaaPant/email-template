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
  Link,
} from "@react-email/components";
import { Img } from "@react-email/components";
const Email = () => {
  return <Img src="cat.jpg" alt="Cat" width="300" height="300" />;
};
const send = () => {
  return <Img src="cat.jpg" alt="Cat" width="300" height="300" />;
};
const twitter = () => {
  return <Img src="cat.jpg" alt="Cat" width="300" height="300" />;
};
const facebook = () => {
  return <Img src="cat.jpg" alt="Cat" width="300" height="300" />;
};
const instagram = () => {
  return <Img src="cat.jpg" alt="Cat" width="300" height="300" />;
};
const usa = () => {
  return <Img src="cat.jpg" alt="Cat" width="300" height="300" />;
};
const avenue = () => {
  return <Img src="cat.jpg" alt="Cat" width="300" height="300" />;
};

const RefundRequestEmail = (props: any) => {
  const {
    attendeeName = "Nathan",
    eventName = "Tech Conference 2024",
    processingTime = "30 days",
    supportEmail = "support@avenue.com",
    supportPhone = "+1 (555) 123-4567",
  } = props;

  return (
    <Html lang="en" dir="ltr">
      <Head>
        <style>{`
          @media only screen and (max-width: 600px) {
            .heading-responsive { font-size: 28px !important; }
            .text-large-responsive { font-size: 18px !important; }
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
          }
          @media only screen and (max-width: 480px) {
            .contact-column { 
              width: 100% !important; 
              padding-left: 0 !important; 
              padding-right: 0 !important; 
              margin-bottom: 16px !important;
              display: block !important;
            }
          }
        `}</style>
      </Head>
      <Preview>
        We've received your refund request and are currently reviewing it
      </Preview>
      <Tailwind>
        <Body className="bg-[#0A0A0A] font-sans py-[40px] px-[20px]">
          <Container className="bg-[#0A0A0A] mx-auto max-w-[600px]">
            {/* Header */}
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
                <Column className="w-auto">
                  <div className="flex items-center gap-[8px]">
                    <Img
                      src="https://assets.avenueticketing.com/avenue-logo.png"
                      alt="Avenue logo"
                      width="24"
                      height="24"
                    />
                    <Text className="text-white text-[20px] font-medium m-0 logo-text-responsive">
                      Avenue
                    </Text>
                  </div>
                </Column>
                <Column className="text-right text-gray-400">
                  View in browser
                </Column>
              </Row>
            </Section>

            {/* Main Heading */}
            <Heading className="text-white text-[40px] font-bold leading-[1.2] mb-[40px] mt-0 heading-responsive">
              We've Received Your Refund Request
            </Heading>

            {/* Content */}
            <Section className="mb-[40px]">
              <Text className="text-white text-[16px] leading-[1.6] mb-[20px] mt-0 text-medium-responsive">
                Hi {attendeeName},
              </Text>

              <Text className="text-gray-300 text-[16px] leading-[1.6] mb-[20px] mt-0 text-medium-responsive">
                We're currently reviewing your request. No further action is
                required on your end.
              </Text>

              <Text className="text-gray-300 text-[16px] leading-[1.6] mb-[20px] mt-0 text-medium-responsive">
                If your order is eligible, your refund will be processed to the
                original payment used at the time of purchase. Once funds are
                received from the event organizer, which is usually completed
                within {processingTime}.
              </Text>

              <Text className="text-gray-300 text-[16px] leading-[1.6] mb-[20px] mt-0 text-medium-responsive">
                Thank you for your patience and understanding. We look forward
                to gathering and celebrating the live experience together again.
              </Text>

              <Text className="text-white text-[16px] leading-[1.6] mt-[20px] mb-0 text-medium-responsive">
                — Avenue Fan Support
              </Text>
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
                  src="https://assets.avenueticketing.com/help-icon.png"
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
                  We are here for you
                </Text>
                <Text className="text-gray-400 text-[14px] mb-[24px] mt-0 text-small-responsive">
                  Reach out to us over email or phone 24/7
                </Text>

                <Row className="contact-row">
                  <Column className="w-[50%] pr-[10px] contact-column">
                    <Text className="text-white text-[14px] mb-[8px] mt-0 text-small-responsive">
                      Phone number
                    </Text>
                    <div
                      className="  text-center  rounded-full p-[12px] flex items-center gap-[8px]"
                      style={{ border: "1px solid #FFFFFF13" }}
                    >
                      <Text className="text-white text-center text-[15px] m-0 text-small-responsive">
                        (555) 987 654
                      </Text>
                    </div>
                  </Column>

                  <Column className="w-[50%] pl-[10px] contact-column">
                    <Text className="text-white text-[14px] mb-[8px] mt-0 text-small-responsive">
                      Email Address
                    </Text>
                    <div
                      className=" text-center  rounded-full p-[12px] flex items-center gap-[8px]"
                      style={{ border: "1px solid #FFFFFF13" }}
                    >
                      <Text className="text-white text-center text-[15px] m-0 text-small-responsive">
                        help@avenue.events
                      </Text>
                    </div>
                  </Column>
                </Row>
              </div>
            </Section>

            {/* Footer */}
            <Section className="text-center pt-[40px]">
              <Text className="text-white text-[20px] font-medium m-0 logo-text-responsive">
                Avenue
              </Text>
              <Text className="text-gray-500 text-[14px] my-[8px] text-small-responsive">
                Avenue | 101 Ave, 10th Floor | Hawaii
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

RefundRequestEmail.PreviewProps = {
  attendeeName: "Nathan",
  eventName: "Tech Conference 2024",
  processingTime: "30 days",
};

export default RefundRequestEmail;
