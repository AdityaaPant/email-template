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
    venueName = "Convention Center",
    venueAddress = "Sector 17, Chandigarh",
    venueCity = "Chandigarh, India",
    ticketNumber = "TC2024-001234",
    ticketType = "General Admission",
    orderNumber = "ORD-789456123",
    qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=TC2024-001234",
    refundAmount = "$150.00",
    processingTime = "5-7 business days",
    tickets = [
      { type: "Regular", quantity: 2, price: "$75.00 each" },
      { type: "Early Bird", quantity: 1, price: "$60.00 each" },
    ],
    ticketDetails = [
      { type: "Regular", section: "GA", row: "2", seat: "42", price: "$39" },
      { type: "Regular", section: "GA", row: "2", seat: "43", price: "$39" },
      {
        type: "Early Bird",
        section: "VIP",
        row: "1",
        seat: "12",
        price: "$19",
      },
    ],
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
                    <Img
                      src="https://assets.avenueticketing.com/email-template/avenue-logo.png"
                      alt="Avenue Logo"
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
                <Img
                  src="https://assets.avenueticketing.com/email-template/twitter.webp"
                  alt="Cancel Icon"
                  width="24"
                  height="24"
                  style={{
                    display: "block",
                    filter:
                      "brightness(0) saturate(100%) invert(85%) sepia(19%) saturate(1944%) hue-rotate(131deg) brightness(90%) contrast(87%)",
                  }}
                />
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
                  {eventName}
                </Text>

                {/* Event Details */}
                <div className="flex items-start gap-[8px] mb-[12px]">
                  <Img
                    src="https://assets.avenueticketing.com/email-template/calendar-icon.png"
                    alt="Calendar Icon"
                    width="16"
                    height="16"
                    style={{ marginTop: "4px", flexShrink: "0" }}
                  />
                  <Text className="text-gray-400 text-[14px] text-small-responsive">
                    {eventDate}, {eventTime}
                  </Text>
                </div>

                <div className="flex items-start gap-[8px] mb-[16px]">
                  <Img
                    src="https://assets.avenueticketing.com/email-template/location-icon.png"
                    alt="Location Icon"
                    width="16"
                    height="16"
                    style={{ marginTop: "4px", flexShrink: "0" }}
                  />
                  <div>
                    <Text className="text-gray-400 text-[14px] text-small-responsive">
                      {venueName}
                    </Text>
                    <Text className="text-gray-400 text-[14px] text-small-responsive">
                      {venueAddress}
                    </Text>
                    <Text className="text-gray-400 text-[14px] text-small-responsive">
                      {venueCity}
                    </Text>
                  </div>
                </div>

                {/* Ticket Quantities */}
                {tickets.map((ticket: any, index: number) => (
                  <div
                    key={index}
                    className="flex items-center gap-[8px] mb-[4px]"
                  >
                    <Img
                      src="https://assets.avenueticketing.com/email-template/ticket-icon.png"
                      alt="Ticket Icon"
                      width="16"
                      height="16"
                    />
                    <Text className="text-gray-400 text-[14px] text-small-responsive">
                      {ticket.type} × {ticket.quantity}
                    </Text>
                  </div>
                ))}

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
                for you. You should expect to receive your refund within{" "}
                {processingTime}. Please note: If the tickets were transferred
                to you, the refund will go to the fan who originally purchased
                the tickets from Avenue. Thank you for your patience and
                understanding. We look forward to gathering and celebrating the
                live experience together again. Please see below for an
                important message from BIGHIT MUSIC regarding this announcement.
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
                <Img
                  src="https://assets.avenueticketing.com/email-template/refund-icon.png"
                  alt="Refund Icon"
                  width="20"
                  height="20"
                  className="inline-block"
                />
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

                {/* Ticket Details */}
                {ticketDetails.map((ticket: any, index: number) => (
                  <Row key={index} className="mb-[8px]">
                    <Column className="w-[25%]">
                      <div className="flex items-center gap-[4px]">
                        <Img
                          src="https://assets.avenueticketing.com/ticket-icon.png"
                          alt="Ticket icon"
                          width="14"
                          height="14"
                        />
                        <Text className="text-white text-[14px] text-small-responsive">
                          {ticket.type}
                        </Text>
                      </div>
                    </Column>
                    <Column className="w-[25%]">
                      <Text className="text-white text-[14px] text-small-responsive">
                        {ticket.row}
                      </Text>
                    </Column>
                    <Column className="w-[25%]">
                      <Text className="text-white text-[14px] text-small-responsive">
                        {ticket.seat}
                      </Text>
                    </Column>
                    <Column className="w-[25%] text-right">
                      <Text className="text-white text-[14px] text-small-responsive">
                        {ticket.price}
                      </Text>
                    </Column>
                  </Row>
                ))}
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
                  src="https://assets.avenueticketing.com/email-template/help-icon.png"
                  alt="Help Icon"
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
