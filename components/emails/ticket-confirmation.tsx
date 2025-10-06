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
      <Head />
      <Preview>
        Your ticket for {eventName} is confirmed! Event details inside.
      </Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white mx-auto px-[20px] py-[40px] max-w-[600px] rounded-[8px]">
            {/* Header */}
            <Section>
              <Heading className="text-[32px] font-bold text-gray-900 text-center mb-[8px]">
                🎫 Ticket Confirmed!
              </Heading>
              <Text className="text-[16px] text-gray-600 text-center mb-[32px]">
                You're all set for an amazing experience
              </Text>
            </Section>

            {/* Confirmation Message */}
            <Section className="bg-green-50 border border-green-200 rounded-[8px] p-[24px] mb-[32px]">
              <Text className="text-[18px] font-semibold text-green-800 mb-[8px]">
                Hello {attendeeName}! 👋
              </Text>
              <Text className="text-[16px] text-green-700 mb-[0px]">
                Great news! Your ticket for <strong>{eventName}</strong> has
                been confirmed. We can't wait to see you there!
              </Text>
            </Section>

            {/* QR Code Section */}
            <Section className="text-center mb-[32px]">
              <Section className="bg-gray-50 border border-gray-200 rounded-[8px] p-[24px] inline-block">
                <Text className="text-[18px] font-semibold text-gray-900 mb-[16px]">
                  Your Entry QR Code
                </Text>
                <Img
                  src={qrCodeUrl}
                  alt="QR Code for ticket entry"
                  className="w-[200px] h-[200px] mx-auto mb-[12px]"
                />
                <Text className="text-[14px] text-gray-600 mb-[0px]">
                  Show this QR code at the entrance for quick check-in
                </Text>
              </Section>
            </Section>

            {/* Event Details */}
            <Section className="mb-[32px]">
              <Heading className="text-[24px] font-bold text-gray-900 mb-[20px]">
                Event Details
              </Heading>

              <Row className="mb-[16px]">
                <Column>
                  <Text className="text-[16px] font-semibold text-gray-700 mb-[4px]">
                    📅 Date & Time
                  </Text>
                  <Text className="text-[16px] text-gray-600 mb-[0px]">
                    {eventDate}
                  </Text>
                  <Text className="text-[16px] text-gray-600 mb-[0px]">
                    {eventTime}
                  </Text>
                </Column>
              </Row>

              <Row className="mb-[16px]">
                <Column>
                  <Text className="text-[16px] font-semibold text-gray-700 mb-[4px]">
                    📍 Venue
                  </Text>
                  <Text className="text-[16px] text-gray-600 mb-[0px]">
                    {venue}
                  </Text>
                </Column>
              </Row>
            </Section>

            <Hr className="border-gray-200 mb-[32px]" />

            {/* Ticket Information */}
            <Section className="mb-[32px]">
              <Heading className="text-[24px] font-bold text-gray-900 mb-[20px]">
                Your Ticket Information
              </Heading>

              <Section className="bg-gray-50 border border-gray-200 rounded-[8px] p-[20px]">
                <Row className="mb-[12px]">
                  <Column className="w-[50%]">
                    <Text className="text-[14px] font-semibold text-gray-700 mb-[4px]">
                      Ticket Number
                    </Text>
                    <Text className="text-[16px] font-mono text-gray-900 mb-[0px]">
                      {ticketNumber}
                    </Text>
                  </Column>
                  <Column className="w-[50%]">
                    <Text className="text-[14px] font-semibold text-gray-700 mb-[4px]">
                      Ticket Type
                    </Text>
                    <Text className="text-[16px] text-gray-900 mb-[0px]">
                      {ticketType}
                    </Text>
                  </Column>
                </Row>

                <Row>
                  <Column>
                    <Text className="text-[14px] font-semibold text-gray-700 mb-[4px]">
                      Order Number
                    </Text>
                    <Text className="text-[16px] font-mono text-gray-900 mb-[0px]">
                      {orderNumber}
                    </Text>
                  </Column>
                </Row>
              </Section>
            </Section>

            {/* Important Notes */}
            <Section className="bg-blue-50 border border-blue-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[16px] font-semibold text-blue-800 mb-[12px]">
                📋 Important Notes:
              </Text>
              <Text className="text-[14px] text-blue-700 mb-[8px]">
                • Please arrive 30 minutes before the event starts
              </Text>
              <Text className="text-[14px] text-blue-700 mb-[8px]">
                • Bring a valid photo ID for entry verification
              </Text>
              <Text className="text-[14px] text-blue-700 mb-[8px]">
                • Show the QR code above or your ticket number for quick
                check-in
              </Text>
              <Text className="text-[14px] text-blue-700 mb-[8px]">
                • Save this email to your phone for offline access
              </Text>
              <Text className="text-[14px] text-blue-700 mb-[0px]">
                • Contact support if you have any questions or need assistance
              </Text>
            </Section>

            {/* Contact Information */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] font-semibold text-gray-700 mb-[8px]">
                Need Help?
              </Text>
              <Text className="text-[14px] text-gray-600 mb-[4px]">
                Email: support@techconference.com
              </Text>
              <Text className="text-[14px] text-gray-600 mb-[0px]">
                Phone: +91 98765 43210
              </Text>
            </Section>

            <Hr className="border-gray-200 mb-[32px]" />

            {/* Footer */}
            <Section>
              <Text className="text-[12px] text-gray-500 text-center mb-[8px] m-0">
                Tech Conference Organizers
              </Text>
              <Text className="text-[12px] text-gray-500 text-center mb-[8px] m-0">
                123 Event Street, Chandigarh, Punjab 160017, India
              </Text>
              <Text className="text-[12px] text-gray-500 text-center mb-[0px] m-0">
                © 2024 Tech Conference. All rights reserved.
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
