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
  Img,
  Tailwind,
} from "@react-email/components";

const TicketConfirmationEmail = (props: any) => {
  const {
    attendeeName = "John Doe",
    eventName = "Tech Conference 2024",
    eventDate = "December 15, 2024",
    eventTime = "9:00 AM - 6:00 PM IST",
    venue = "Convention Center, Sector 17, Chandigarh",
    ticketNumber = "TC2024-001234",
    ticketType = "General Admission",
    orderNumber = "ORD-789456123",
    qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=TC2024-001234",
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
      <Preview>
        Your ticket for {eventName} is confirmed! Event details inside.
      </Preview>
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
                <Column className="text-right text-gray-400">
                  View in browser
                </Column>
              </Row>
            </Section>
            {/* Thank You Banner */}
            <Section
              className="bg-[#10B981] rounded-[12px] mb-[16px] text-center"
              style={{ padding: "20px" }}
            >
              <div
                className="thank-you-icon"
                style={{
                  backgroundColor: "black",
                  borderRadius: "50px",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px auto",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ display: "block" }}
                >
                  <path
                    d="M9 12l2 2 4-4"
                    stroke="#10B981"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <Text
                className="text-large-responsive"
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "black",
                  margin: "0 0 8px 0",
                }}
              >
                Thank you for your order!
              </Text>
              <Text
                className="text-medium-responsive"
                style={{
                  fontSize: "16px",
                  color: "black",
                  opacity: "0.7",
                  margin: "0",
                }}
              >
                #{orderNumber}
              </Text>
            </Section>
            {/* Event Card */}
            <Section className="bg-[#000000] border border-[#FFFFFF13] rounded-[12px] mb-[24px] overflow-hidden">
              {/* Event Image */}
              <div
                className="h-[200px] flex items-center justify-center relative"
                style={{
                  background:
                    "linear-gradient(135deg, #2563eb 0%, #9333ea 100%)",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                ></div>
                <div className="relative z-10 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  >
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="p-[20px]">
                {/* Event Title */}
                <Text className="text-white text-[24px] font-bold mb-[16px] text-large-responsive">
                  After Hours Neon
                </Text>

                {/* Event Details */}
                <div className="flex items-start gap-[8px] mb-[12px]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mt-1 flex-shrink-0"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                      stroke="#9ca3af"
                      strokeWidth="2"
                    />
                    <line
                      x1="16"
                      y1="2"
                      x2="16"
                      y2="6"
                      stroke="#9ca3af"
                      strokeWidth="2"
                    />
                    <line
                      x1="8"
                      y1="2"
                      x2="8"
                      y2="6"
                      stroke="#9ca3af"
                      strokeWidth="2"
                    />
                    <line
                      x1="3"
                      y1="10"
                      x2="21"
                      y2="10"
                      stroke="#9ca3af"
                      strokeWidth="2"
                    />
                  </svg>
                  <Text className="text-gray-400 text-[14px] text-small-responsive">
                    Thursday, 28 Dec, from 22:00 to 24:00 (PST)
                  </Text>
                </div>

                <div className="flex items-start gap-[8px] mb-[16px]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mt-1 flex-shrink-0"
                  >
                    <path
                      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                      stroke="#9ca3af"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="10"
                      r="3"
                      stroke="#9ca3af"
                      strokeWidth="2"
                    />
                  </svg>
                  <div>
                    <Text className="text-gray-400 text-[14px] text-small-responsive">
                      Cloud Nine Club
                    </Text>
                    <Text className="text-gray-400 text-[14px] text-small-responsive">
                      220 North Ada St
                    </Text>
                    <Text className="text-gray-400 text-[14px] text-small-responsive">
                      Chicago, IL 60607
                    </Text>
                  </div>
                </div>

                {/* Ticket Quantities */}
                <div className="flex items-center gap-[8px] mb-[4px]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M2 9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9z"
                      stroke="#9ca3af"
                      strokeWidth="2"
                    />
                    <path d="M9 9h6M9 15h6" stroke="#9ca3af" strokeWidth="2" />
                  </svg>
                  <Text className="text-gray-400 text-[14px] text-small-responsive">
                    Regular × 2
                  </Text>
                </div>

                <div className="flex items-center gap-[8px] mb-[20px]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M2 9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9z"
                      stroke="#9ca3af"
                      strokeWidth="2"
                    />
                    <path d="M9 9h6M9 15h6" stroke="#9ca3af" strokeWidth="2" />
                  </svg>
                  <Text className="text-gray-400 text-[14px] text-small-responsive">
                    Early Bird × 1
                  </Text>
                </div>

                {/* Action Buttons */}
                <div>
                  <div
                    className="bg-white rounded-[50px] p-[16px] text-center"
                    style={{ marginBottom: "12px" }}
                  >
                    <div className="flex items-center justify-center gap-[8px]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                          stroke="black"
                          strokeWidth="2"
                        />
                        <rect x="7" y="7" width="3" height="3" fill="black" />
                        <rect x="14" y="7" width="3" height="3" fill="black" />
                        <rect x="7" y="14" width="3" height="3" fill="black" />
                        <rect x="14" y="14" width="3" height="3" fill="black" />
                      </svg>
                      <Text className="text-black text-[16px] font-medium m-0 text-medium-responsive">
                        Show QR
                      </Text>
                    </div>
                  </div>

                  <div className="bg-[#000000] border border-[#FFFFFF13] rounded-[50px] p-[16px] text-center">
                    <div className="flex items-center justify-center gap-[8px]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                          stroke="#9ca3af"
                          strokeWidth="2"
                        />
                        <line
                          x1="16"
                          y1="2"
                          x2="16"
                          y2="6"
                          stroke="#9ca3af"
                          strokeWidth="2"
                        />
                        <line
                          x1="8"
                          y1="2"
                          x2="8"
                          y2="6"
                          stroke="#9ca3af"
                          strokeWidth="2"
                        />
                        <line
                          x1="3"
                          y1="10"
                          x2="21"
                          y2="10"
                          stroke="#9ca3af"
                          strokeWidth="2"
                        />
                      </svg>
                      <Text className="text-white text-[16px] font-medium m-0 text-medium-responsive">
                        Add to Calendar
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
            {/* Order Summary */}
            <Section
              className="bg-[#000000] rounded-[12px] mb-[24px]"
              style={{ border: "1px solid #FFFFFF13" }}
            >
              <div
                className="flex items-center gap-[8px] p-3 rounded-t-[12px]"
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
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    stroke="#9ca3af"
                    strokeWidth="2"
                  />
                  <path
                    d="M9 9h6M9 13h6M9 17h3"
                    stroke="#9ca3af"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <Text className="text-white text-[18px] font-semibold m-0 text-large-responsive">
                  Order summary
                </Text>
              </div>
              <div className="p-3">
                {/* Order ID */}
                <div className="mb-[16px]">
                  <Text className="text-white text-[16px] font-medium mb-[4px] text-medium-responsive">
                    Order
                  </Text>
                  <Text className="text-gray-400 text-[14px] text-small-responsive">
                    {orderNumber}
                  </Text>
                </div>

                {/* Two Column Layout */}
                <Row>
                  {/* Purchase Column */}
                  <Column className="w-[50%] pr-2">
                    <Text className="text-white text-[16px] font-medium mb-[8px] text-medium-responsive">
                      Purchase
                    </Text>
                    <Text className="text-gray-400 text-[14px] mb-[4px] text-small-responsive">
                      Cloud Nine Club
                    </Text>
                    <Text className="text-gray-400 text-[14px] text-small-responsive">
                      28 Dec, 22:00
                    </Text>
                  </Column>

                  {/* Billing Column */}
                  <Column className="w-[50%] pl-2">
                    <Text className="text-white text-[16px] font-medium mb-[8px] text-medium-responsive">
                      Billing
                    </Text>
                    <Text className="text-gray-400 text-[14px] mb-[4px] text-small-responsive">
                      Nathan Smith
                    </Text>
                    <Text className="text-gray-400 text-[14px] mb-[4px] text-small-responsive">
                      Payment method: Amex
                    </Text>
                    <Text className="text-gray-400 text-[14px] mb-[4px] text-small-responsive">
                      Charge: $97
                    </Text>
                    <Text className="text-gray-400 text-[14px] text-small-responsive">
                      Last 4 digits: 9090
                    </Text>
                  </Column>
                </Row>
              </div>
            </Section>{" "}
            {/* Your Order */}
            <Section
              className="bg-[#000000] rounded-[12px] mb-[24px]"
              style={{ border: "1px solid #FFFFFF13" }}
            >
              <div
                className="flex items-center gap-[8px] p-3 rounded-t-[12px]"
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
                  <rect
                    x="2"
                    y="3"
                    width="20"
                    height="14"
                    rx="2"
                    stroke="#9ca3af"
                    strokeWidth="2"
                  />
                  <path
                    d="M8 21v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4"
                    stroke="#9ca3af"
                    strokeWidth="2"
                  />
                  <path
                    d="M6 7h.01M10 7h.01M14 7h.01"
                    stroke="#9ca3af"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <Text className="text-white text-[18px] font-semibold m-0 text-large-responsive">
                  Your Order
                </Text>
              </div>
              <div className="p-3">
                {/* Table Header */}
                <Row className="mb-[8px]">
                  <Column className="w-[25%]">
                    <Text className="text-gray-400 text-[12px] font-medium text-tiny-responsive">
                      SECTION
                    </Text>
                  </Column>
                  <Column className="w-[25%]">
                    <Text className="text-gray-400 text-[12px] font-medium text-tiny-responsive">
                      ROW
                    </Text>
                  </Column>
                  <Column className="w-[25%]">
                    <Text className="text-gray-400 text-[12px] font-medium text-tiny-responsive">
                      SEAT
                    </Text>
                  </Column>
                  <Column className="w-[25%] text-right">
                    <Text className="text-gray-400 text-[12px] font-medium text-tiny-responsive">
                      PRICE
                    </Text>
                  </Column>
                </Row>

                {/* Regular Tickets */}
                <Row className="mb-[8px]">
                  <Column className="w-[25%]">
                    <Text className="text-white text-[14px] text-small-responsive">
                      🎫 Regular
                    </Text>
                  </Column>
                  <Column className="w-[25%]">
                    <Text className="text-white text-[14px] text-small-responsive">
                      2
                    </Text>
                  </Column>
                  <Column className="w-[25%]">
                    <Text className="text-white text-[14px] text-small-responsive">
                      42
                    </Text>
                  </Column>
                  <Column className="w-[25%] text-right">
                    <Text className="text-white text-[14px] text-small-responsive">
                      $39
                    </Text>
                  </Column>
                </Row>

                <Row className="mb-[8px]">
                  <Column className="w-[25%]">
                    <Text className="text-white text-[14px] text-small-responsive">
                      🎫 Regular
                    </Text>
                  </Column>
                  <Column className="w-[25%]">
                    <Text className="text-white text-[14px] text-small-responsive">
                      2
                    </Text>
                  </Column>
                  <Column className="w-[25%]">
                    <Text className="text-white text-[14px] text-small-responsive">
                      43
                    </Text>
                  </Column>
                  <Column className="w-[25%] text-right">
                    <Text className="text-white text-[14px] text-small-responsive">
                      $39
                    </Text>
                  </Column>
                </Row>

                {/* Early Bird Ticket */}
                <Row className="mb-[16px]">
                  <Column className="w-[25%]">
                    <Text className="text-white text-[14px] text-small-responsive">
                      🎫 Early Bird
                    </Text>
                  </Column>
                  <Column className="w-[25%]">
                    <Text className="text-white text-[14px] text-small-responsive">
                      1
                    </Text>
                  </Column>
                  <Column className="w-[25%]">
                    <Text className="text-white text-[14px] text-small-responsive">
                      12
                    </Text>
                  </Column>
                  <Column className="w-[25%] text-right">
                    <Text className="text-white text-[14px] text-small-responsive">
                      $19
                    </Text>
                  </Column>
                </Row>
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
            {/* QR Code Section */}
            <Section className="text-center mb-[32px]">
              <div className="bg-[#000000] border border-[#FFFFFF13] rounded-[12px] p-[24px] inline-block">
                <Img
                  src={qrCodeUrl}
                  alt="QR Code for ticket entry"
                  className="w-[200px] h-[200px] mx-auto mb-[12px]"
                />
              </div>

              {/* Wallet Buttons */}
              <div className="mt-[16px]">
                <div
                  className="bg-[#000000] rounded-[50px] p-[16px] mb-[8px] text-center"
                  style={{ border: "1px solid #FFFFFF13" }}
                >
                  <div className="flex items-center justify-center gap-[8px]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                        fill="white"
                      />
                    </svg>
                    <Text className="text-white text-[16px] font-medium m-0 text-medium-responsive">
                      Add to Apple Wallet
                    </Text>
                  </div>
                </div>

                <div
                  className="bg-[#000000] rounded-[50px] p-[16px] text-center"
                  style={{ border: "1px solid #FFFFFF13" }}
                >
                  <div className="flex items-center justify-center gap-[8px]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    <Text className="text-white text-[16px] font-medium m-0 text-medium-responsive">
                      Add to Google Wallet
                    </Text>
                  </div>
                </div>
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

TicketConfirmationEmail.PreviewProps = {
  attendeeName: "John Doe",
  eventName: "Tech Conference 2024",
  eventDate: "December 15, 2024",
  eventTime: "9:00 AM - 6:00 PM IST",
  venue: "Convention Center, Sector 17, Chandigarh",
  ticketNumber: "TC2024-001234",
  ticketType: "General Admission",
  orderNumber: "ORD-789456123",
  qrCodeUrl:
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=TC2024-001234",
};

export default TicketConfirmationEmail;
