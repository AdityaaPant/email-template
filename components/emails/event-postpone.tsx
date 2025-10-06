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
} from "@react-email/components";

const EventPostponedEmail = (props: any) => {
  const {
    attendeeName = "John Doe",
    eventName = "Tech Conference 2024",
    originalEventDate = "December 15, 2024",
    originalEventTime = "9:00 AM - 6:00 PM IST",
    newEventDate = "February 20, 2025",
    newEventTime = "9:00 AM - 6:00 PM IST",
    venue = "Convention Center, Sector 17, Chandigarh",
    ticketNumber = "TC2024-001234",
    orderNumber = "ORD-789456123",
    postponementReason = "to ensure the best possible experience for all attendees and accommodate our keynote speakers' schedules",
    confirmationDeadline = "January 15, 2025",
    refundDeadline = "January 10, 2025",
  } = props;

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>
        {eventName} has been postponed to {newEventDate} - Your ticket remains
        valid
      </Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white mx-auto px-[20px] py-[40px] max-w-[600px] rounded-[8px]">
            {/* Header */}
            <Section>
              <Heading className="text-[32px] font-bold text-orange-600 text-center mb-[8px]">
                📅 Event Postponed
              </Heading>
              <Text className="text-[16px] text-gray-600 text-center mb-[32px]">
                Important update about {eventName}
              </Text>
            </Section>

            {/* Postponement Notice */}
            <Section className="bg-orange-50 border border-orange-200 rounded-[8px] p-[24px] mb-[32px]">
              <Text className="text-[18px] font-semibold text-orange-800 mb-[8px]">
                Dear {attendeeName},
              </Text>
              <Text className="text-[16px] text-orange-700 mb-[12px]">
                We hope this message finds you well. We're writing to inform you
                that <strong>{eventName}</strong>
                has been postponed from <strong>
                  {originalEventDate}
                </strong> to <strong>{newEventDate}</strong>.
              </Text>
              <Text className="text-[16px] text-orange-700 mb-[12px]">
                This decision was made {postponementReason}. We believe this new
                date will allow us to deliver an even more exceptional
                experience.
              </Text>
              <Text className="text-[16px] text-orange-700 mb-[0px]">
                <strong>Good news:</strong> Your existing ticket remains
                completely valid for the new date!
              </Text>
            </Section>

            {/* Date Comparison */}
            <Section className="mb-[32px]">
              <Heading className="text-[24px] font-bold text-gray-900 mb-[20px]">
                Updated Event Schedule
              </Heading>

              <Row className="mb-[16px]">
                <Column className="w-[50%]">
                  <Section className="bg-red-50 border border-red-200 rounded-[8px] p-[16px]">
                    <Text className="text-[14px] font-semibold text-red-700 mb-[8px]">
                      ❌ Original Date
                    </Text>
                    <Text className="text-[16px] text-red-800 mb-[4px] line-through">
                      {originalEventDate}
                    </Text>
                    <Text className="text-[14px] text-red-600 mb-[0px] line-through">
                      {originalEventTime}
                    </Text>
                  </Section>
                </Column>
                <Column className="w-[50%]">
                  <Section className="bg-green-50 border border-green-200 rounded-[8px] p-[16px]">
                    <Text className="text-[14px] font-semibold text-green-700 mb-[8px]">
                      ✅ New Date
                    </Text>
                    <Text className="text-[18px] font-bold text-green-800 mb-[4px]">
                      {newEventDate}
                    </Text>
                    <Text className="text-[14px] text-green-600 mb-[0px]">
                      {newEventTime}
                    </Text>
                  </Section>
                </Column>
              </Row>

              <Section className="bg-gray-50 border border-gray-200 rounded-[8px] p-[16px]">
                <Text className="text-[14px] font-semibold text-gray-700 mb-[4px]">
                  📍 Venue (Unchanged)
                </Text>
                <Text className="text-[16px] text-gray-900 mb-[8px]">
                  {venue}
                </Text>
                <Text className="text-[14px] font-semibold text-gray-700 mb-[4px]">
                  🎫 Your Ticket Number
                </Text>
                <Text className="text-[16px] font-mono text-gray-900 mb-[0px]">
                  {ticketNumber}
                </Text>
              </Section>
            </Section>

            <Hr className="border-gray-200 mb-[32px]" />

            {/* Your Options */}
            <Section className="mb-[32px]">
              <Heading className="text-[24px] font-bold text-gray-900 mb-[20px]">
                Your Options
              </Heading>

              <Section className="bg-blue-50 border border-blue-200 rounded-[8px] p-[20px] mb-[16px]">
                <Text className="text-[16px] font-semibold text-blue-800 mb-[8px]">
                  🎯 Option 1: Keep Your Ticket (Recommended)
                </Text>
                <Text className="text-[14px] text-blue-700 mb-[8px]">
                  Your current ticket is automatically valid for the new date.
                  No action needed! You'll receive updated event details and a
                  new QR code closer to the event.
                </Text>
                <Text className="text-[14px] font-bold text-blue-800 mb-[0px]">
                  Bonus: Early confirmed attendees get priority seating and a
                  welcome gift!
                </Text>
              </Section>

              <Section className="bg-yellow-50 border border-yellow-200 rounded-[8px] p-[20px]">
                <Text className="text-[16px] font-semibold text-yellow-800 mb-[8px]">
                  💰 Option 2: Request Full Refund
                </Text>
                <Text className="text-[14px] text-yellow-700 mb-[8px]">
                  If the new date doesn't work for you, we completely
                  understand. You can request a full refund by contacting our
                  support team before <strong>{refundDeadline}</strong>.
                </Text>
                <Text className="text-[14px] text-yellow-700 mb-[0px]">
                  Refunds will be processed within 3-5 business days back to
                  your original payment method.
                </Text>
              </Section>
            </Section>

            {/* Action Required */}
            <Section className="bg-purple-50 border border-purple-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[16px] font-semibold text-purple-800 mb-[12px]">
                📋 Action Required by {confirmationDeadline}
              </Text>
              <Text className="text-[14px] text-purple-700 mb-[8px]">
                Please confirm your attendance for the new date by{" "}
                <strong>{confirmationDeadline}</strong>
                to help us with planning and to secure your priority benefits.
              </Text>
              <Text className="text-[14px] text-purple-700 mb-[8px]">
                <strong>To confirm attendance:</strong> Reply to this email with
                "CONFIRM" or contact our support team
              </Text>
              <Text className="text-[14px] text-purple-700 mb-[0px]">
                <strong>For refund requests:</strong> Contact support before{" "}
                {refundDeadline}
              </Text>
            </Section>

            {/* What's New */}
            <Section className="bg-green-50 border border-green-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[16px] font-semibold text-green-800 mb-[12px]">
                🚀 What's New for the Postponed Event
              </Text>
              <Text className="text-[14px] text-green-700 mb-[8px]">
                • Additional keynote speaker: Industry leader joining our lineup
              </Text>
              <Text className="text-[14px] text-green-700 mb-[8px]">
                • Extended networking session with premium refreshments
              </Text>
              <Text className="text-[14px] text-green-700 mb-[8px]">
                • Exclusive workshop sessions for confirmed early attendees
              </Text>
              <Text className="text-[14px] text-green-700 mb-[8px]">
                • Digital resource pack with bonus content worth ₹500
              </Text>
              <Text className="text-[14px] text-green-700 mb-[0px]">
                • Priority access to future events and early-bird pricing
              </Text>
            </Section>

            {/* Important Reminders */}
            <Section className="bg-gray-50 border border-gray-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[16px] font-semibold text-gray-800 mb-[12px]">
                📌 Important Reminders:
              </Text>
              <Text className="text-[14px] text-gray-700 mb-[8px]">
                • Your current ticket and QR code remain valid until the new
                event date
              </Text>
              <Text className="text-[14px] text-gray-700 mb-[8px]">
                • New QR codes and updated event materials will be sent 1 week
                before the event
              </Text>
              <Text className="text-[14px] text-gray-700 mb-[8px]">
                • Hotel and travel arrangements may need to be updated for the
                new date
              </Text>
              <Text className="text-[14px] text-gray-700 mb-[8px]">
                • All event content, speakers, and agenda remain the same unless
                otherwise noted
              </Text>
              <Text className="text-[14px] text-gray-700 mb-[0px]">
                • Refund deadline: {refundDeadline} | Confirmation deadline:{" "}
                {confirmationDeadline}
              </Text>
            </Section>

            {/* Contact Information */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] font-semibold text-gray-700 mb-[8px]">
                Questions About the Postponement?
              </Text>
              <Text className="text-[14px] text-gray-600 mb-[4px]">
                Email: support@techconference.com (Subject: Event Postponement -{" "}
                {ticketNumber})
              </Text>
              <Text className="text-[14px] text-gray-600 mb-[4px]">
                Phone: +91 98765 43210 (Extended hours: 8 AM - 8 PM IST)
              </Text>
              <Text className="text-[14px] text-gray-600 mb-[0px]">
                Our team is ready to assist with confirmations, refunds, and any
                other questions.
              </Text>
            </Section>

            <Hr className="border-gray-200 mb-[32px]" />

            {/* Footer */}
            <Section>
              <Text className="text-[14px] text-gray-600 text-center mb-[12px]">
                Thank you for your understanding and continued support. We're
                excited to see you at the rescheduled event!
              </Text>
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

EventPostponedEmail.PreviewProps = {
  attendeeName: "John Doe",
  eventName: "Tech Conference 2024",
  originalEventDate: "December 15, 2024",
  originalEventTime: "9:00 AM - 6:00 PM IST",
  newEventDate: "February 20, 2025",
  newEventTime: "9:00 AM - 6:00 PM IST",
  venue: "Convention Center, Sector 17, Chandigarh",
  ticketNumber: "TC2024-001234",
  orderNumber: "ORD-789456123",
  postponementReason:
    "to ensure the best possible experience for all attendees and accommodate our keynote speakers' schedules",
  confirmationDeadline: "January 15, 2025",
  refundDeadline: "January 10, 2025",
};

export default EventPostponedEmail;
