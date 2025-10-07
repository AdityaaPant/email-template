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

const RefundRequestEmail = (props: any) => {
  const {
    attendeeName = "Nathan",
    eventName = "Tech Conference 2024",
    processingTime = "30 days",
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
            <Section className="mb-[40px]">
              <Row>
                <Column className="w-auto">
                  <div className="flex items-center gap-[8px]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.1712 21.1008C16.8093 21.9051 16.3594 22.6927 15.8201 23.3741C20.2949 21.8659 23.5889 17.7909 23.9516 12.9002H22.3586C20.4147 12.9002 18.8533 14.4518 18.5373 16.3699C18.246 18.1379 17.7801 19.7479 17.1712 21.1008Z"
                        fill="#34B2DA"
                      />
                      <path
                        d="M13.6474 12.9002C15.6826 12.9002 17.3475 14.5981 16.9736 16.5987C16.1617 20.9441 14.2337 24 11.9844 24C9.13838 24 6.80657 19.1071 6.59952 12.9002H13.6474Z"
                        fill="#34B2DA"
                      />
                      <path
                        d="M18.5786 7.88908C18.8763 9.82507 20.445 11.3989 22.4037 11.3989H23.9701C23.7227 6.37524 20.3861 2.16395 15.8201 0.624977C16.3594 1.30642 16.8093 2.09401 17.1712 2.89821C17.8098 4.31722 18.2911 6.01885 18.5786 7.88908Z"
                        fill="#34B2DA"
                      />
                      <path
                        d="M17.0343 7.73728C17.3747 9.72781 15.7171 11.3998 13.6976 11.3998H6.59171C6.73234 5.05124 9.09324 -1.52588e-05 11.985 -1.52588e-05C14.2917 -1.52588e-05 16.2607 3.21426 17.0343 7.73728Z"
                        fill="#34B2DA"
                      />
                      <path
                        d="M5.09148 11.3989C5.15964 8.15397 5.77869 5.16536 6.79893 2.89821C7.16078 2.09401 7.61066 1.30642 8.15005 0.624977C3.58406 2.16395 0.247387 6.37524 1.52588e-05 11.3989H5.09148Z"
                        fill="#34B2DA"
                      />
                      <path
                        d="M0.0185699 12.9002C0.381204 17.7909 3.6753 21.8659 8.1501 23.3741C7.61071 22.6927 7.16084 21.9051 6.79898 21.1008C5.81026 18.9037 5.19832 16.0291 5.09943 12.9002H0.0185699Z"
                        fill="#34B2DA"
                      />
                    </svg>
                    <Text className="text-white text-[20px] font-medium m-0 logo-text-responsive">
                      Avenue
                    </Text>
                  </div>
                </Column>
                <Column className="text-right">
                  <Link
                    href="#"
                    className="text-gray-400 text-[14px] no-underline text-small-responsive"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.33333 3.33333C8.96513 3.33333 8.66667 3.03485 8.66667 2.66667C8.66667 2.29848 8.96513 2 9.33333 2H13.3333C13.7015 2 14 2.29848 14 2.66667V6.66667C14 7.03487 13.7015 7.33333 13.3333 7.33333C12.9651 7.33333 12.6667 7.03487 12.6667 6.66667V4.27614L7.80473 9.13807C7.5444 9.3984 7.12227 9.3984 6.86193 9.13807C6.60158 8.87773 6.60158 8.4556 6.86193 8.19527L11.7239 3.33333H9.33333ZM4.77431 3.33333H6C6.36819 3.33333 6.66667 3.63181 6.66667 4C6.66667 4.36819 6.36819 4.66667 6 4.66667H4.8C4.41563 4.66667 4.16745 4.66719 3.97856 4.68262C3.79745 4.69741 3.73031 4.72253 3.69734 4.73933C3.5719 4.80325 3.46991 4.90523 3.406 5.03067C3.3892 5.06363 3.36408 5.13078 3.34929 5.31189C3.33385 5.50078 3.33333 5.74897 3.33333 6.13333V11.2C3.33333 11.5844 3.33385 11.8325 3.34929 12.0215C3.36408 12.2025 3.3892 12.2697 3.406 12.3027C3.46991 12.4281 3.5719 12.5301 3.69734 12.594C3.73031 12.6108 3.79745 12.6359 3.97856 12.6507C4.16745 12.6661 4.41563 12.6667 4.8 12.6667H9.86667C10.2511 12.6667 10.4992 12.6661 10.6881 12.6507C10.8692 12.6359 10.9363 12.6108 10.9693 12.594C11.0948 12.5301 11.1967 12.4281 11.2607 12.3027C11.2775 12.2697 11.3026 12.2025 11.3174 12.0215C11.3328 11.8325 11.3333 11.5844 11.3333 11.2V10C11.3333 9.6318 11.6318 9.33333 12 9.33333C12.3682 9.33333 12.6667 9.6318 12.6667 10V11.2257C12.6667 11.5771 12.6667 11.8803 12.6463 12.13C12.6247 12.3936 12.5772 12.6557 12.4487 12.908C12.2569 13.2843 11.951 13.5903 11.5747 13.782C11.3224 13.9105 11.0603 13.9581 10.7967 13.9796C10.547 14 10.2438 14 9.8924 14H4.77429C4.42287 14 4.11969 14 3.86998 13.9796C3.60642 13.9581 3.34427 13.9105 3.09202 13.782C2.71569 13.5903 2.40973 13.2843 2.21799 12.908C2.08946 12.6557 2.04191 12.3936 2.02038 12.13C1.99998 11.8803 1.99999 11.5771 2 11.2257V6.10764C1.99999 5.75621 1.99998 5.45303 2.02038 5.20331C2.04191 4.93975 2.08946 4.67761 2.21799 4.42535C2.40973 4.04903 2.71569 3.74307 3.09202 3.55132C3.34427 3.42279 3.60642 3.37525 3.86998 3.35371C4.1197 3.33331 4.42287 3.33332 4.77431 3.33333Z"
                        fill="white"
                        fill-opacity="0.5"
                      />
                    </svg>{" "}
                    View in browser
                  </Link>
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
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="inline-block"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#9ca3af"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 16v-4m0-4h.01"
                    stroke="#9ca3af"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
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
