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

const EventCancellationEmail = (props: any) => {
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
        Your event {eventName} has been cancelled. Refund details inside.
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
            {/* Event Cancellation Banner */}
            <Section
              className="bg-[#2DD4BF] rounded-[12px] mb-[16px] text-center"
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
                    d="M18 6L6 18M6 6l12 12"
                    stroke="#2DD4BF"
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
                Your event has been canceled
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
                More details below regarding your tickets
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

                {/* Action Buttons - Remove the description from here */}
              </div>
            </Section>
            {/* Event Cancellation Message */}
            <Section className="mb-[24px]" style={{ padding: "0 4px" }}>
              <Text
                className="text-white text-[18px] font-medium mb-[24px] text-large-responsive"
                style={{
                  margin: "0 0 24px 0",
                  lineHeight: "1.5",
                }}
              >
                Unfortunately, the event organizer has had to cancel your event
              </Text>

              {/* Cancellation Section */}
              <Text
                className="text-white text-[20px] font-bold mb-[16px] text-large-responsive"
                style={{
                  margin: "0 0 16px 0",
                  fontSize: "20px",
                }}
              >
                Cancellation
              </Text>

              <Text
                className="text-white text-[16px] mb-[32px] text-medium-responsive"
                style={{
                  margin: "0 0 32px 0",
                  lineHeight: "1.6",
                  color: "#d1d5db",
                }}
              >
                The good news is that a refund will be processed automatically
                for you. You should expect to receive your refund within 30
                days. Please note: If the tickets were transferred to you, the
                refund will go to the fan who originally purchased the tickets
                from Avenue. Thank you for your patience and understanding. We
                look forward to gathering and celebrating the live experience
                together again. Please see below for an important message from
                BIGHIT MUSIC regarding this announcement.
              </Text>

              {/* Announcement Section */}
              <Text
                className="text-white text-[20px] font-bold mb-[16px] text-large-responsive"
                style={{
                  margin: "0 0 16px 0",
                  fontSize: "20px",
                }}
              >
                Announcement
              </Text>

              <Text
                className="text-white text-[16px] mb-[16px] text-medium-responsive"
                style={{
                  margin: "0 0 16px 0",
                  lineHeight: "1.6",
                  color: "#d1d5db",
                }}
              >
                We are so sorry that we had to cancel this event and we
                understand your concerns. Please be advised that we are going
                through medical situation and would need all the support we can.
                Thank you again for your support!
              </Text>

              <Text
                className="text-white text-[16px] font-medium text-medium-responsive"
                style={{
                  margin: "0",
                  fontWeight: "600",
                }}
              >
                Team BIGHIT MUSIC
              </Text>
            </Section>

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
                  Refund summary
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

EventCancellationEmail.PreviewProps = {
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

export default EventCancellationEmail;
