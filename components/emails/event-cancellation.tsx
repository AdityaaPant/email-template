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
import Header from "../layout/Header";

const EventCancellationEmail = (props: any) => {
  const {
    attendeeName = "John Doe",
    eventName = "Tech Conference 2024",
    eventDate = "December 15, 2024",
    eventTime = "9:00 AM - 6:00 PM IST",
    venue = "Convention Center, Sector 17, Chandigarh",
    ticketNumber = "TC2024-001234",
    orderNumber = "ORD-789456123",
    cancellationReason = "Due to unforeseen circumstances and safety concerns",
    refundAmount = "₹2,500",
    refundProcessingDays = "3-5 business days",
    alternativeEventDate = "March 15, 2025",
  } = props;

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>
        Important: {eventName} has been cancelled - Full refund details inside
      </Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white mx-auto px-[20px] py-[40px] max-w-[600px] rounded-[8px]">
            {/* Header */}

            <div></div>
            <Section>
              <Heading className="text-[32px] font-bold text-red-600 text-center mb-[8px]">
                ⚠️ Event Cancelled
              </Heading>
              <Text className="text-[16px] text-gray-600 text-center mb-[32px]">
                Important update regarding {eventName}
              </Text>
            </Section>

            {/* Cancellation Notice */}
            <Section className="bg-red-50 border border-red-200 rounded-[8px] p-[24px] mb-[32px]">
              <Text className="text-[18px] font-semibold text-red-800 mb-[8px]">
                Dear {attendeeName},
              </Text>
              <Text className="text-[16px] text-red-700 mb-[12px]">
                We regret to inform you that <strong>{eventName}</strong>{" "}
                scheduled for {eventDate}
                has been cancelled.
              </Text>
              <Text className="text-[16px] text-red-700 mb-[12px]">
                {cancellationReason}, we have made the difficult decision to
                cancel this event. We sincerely apologize for any inconvenience
                this may cause.
              </Text>
              <Text className="text-[16px] text-red-700 mb-[0px]">
                Your safety and experience are our top priorities, and we
                believe this is the right decision.
              </Text>
            </Section>

            {/* Event Details */}
            <Section className="mb-[32px]">
              <Heading className="text-[24px] font-bold text-gray-900 mb-[20px]">
                Cancelled Event Details
              </Heading>

              <Section className="bg-gray-50 border border-gray-200 rounded-[8px] p-[20px]">
                <Row className="mb-[12px]">
                  <Column className="w-[50%]">
                    <Text className="text-[14px] font-semibold text-gray-700 mb-[4px]">
                      Event Name
                    </Text>
                    <Text className="text-[16px] text-gray-900 mb-[0px]">
                      {eventName}
                    </Text>
                  </Column>
                  <Column className="w-[50%]">
                    <Text className="text-[14px] font-semibold text-gray-700 mb-[4px]">
                      Scheduled Date
                    </Text>
                    <Text className="text-[16px] text-gray-900 mb-[0px]">
                      {eventDate}
                    </Text>
                  </Column>
                </Row>

                <Row className="mb-[12px]">
                  <Column className="w-[50%]">
                    <Text className="text-[14px] font-semibold text-gray-700 mb-[4px]">
                      Time
                    </Text>
                    <Text className="text-[16px] text-gray-900 mb-[0px]">
                      {eventTime}
                    </Text>
                  </Column>
                  <Column className="w-[50%]">
                    <Text className="text-[14px] font-semibold text-gray-700 mb-[4px]">
                      Venue
                    </Text>
                    <Text className="text-[16px] text-gray-900 mb-[0px]">
                      {venue}
                    </Text>
                  </Column>
                </Row>

                <Row>
                  <Column>
                    <Text className="text-[14px] font-semibold text-gray-700 mb-[4px]">
                      Your Ticket Number
                    </Text>
                    <Text className="text-[16px] font-mono text-gray-900 mb-[0px]">
                      {ticketNumber}
                    </Text>
                  </Column>
                </Row>
              </Section>
            </Section>

            <Hr className="border-gray-200 mb-[32px]" />

            {/* Automatic Refund Information */}
            <Section className="mb-[32px]">
              <Heading className="text-[24px] font-bold text-gray-900 mb-[20px]">
                Automatic Full Refund
              </Heading>

              <Section className="bg-green-50 border border-green-200 rounded-[8px] p-[20px]">
                <Text className="text-[16px] font-semibold text-green-800 mb-[12px]">
                  💰 No Action Required - Full Refund Processing
                </Text>

                <Row className="mb-[12px]">
                  <Column className="w-[50%]">
                    <Text className="text-[14px] font-semibold text-green-700 mb-[4px]">
                      Refund Amount
                    </Text>
                    <Text className="text-[20px] font-bold text-green-800 mb-[0px]">
                      {refundAmount}
                    </Text>
                  </Column>
                  <Column className="w-[50%]">
                    <Text className="text-[14px] font-semibold text-green-700 mb-[4px]">
                      Processing Time
                    </Text>
                    <Text className="text-[16px] text-green-800 mb-[0px]">
                      {refundProcessingDays}
                    </Text>
                  </Column>
                </Row>

                <Text className="text-[14px] text-green-700 mb-[8px]">
                  We are automatically processing a full refund for your ticket
                  purchase. The refund will be credited back to your original
                  payment method.
                </Text>
                <Text className="text-[14px] text-green-700 mb-[0px]">
                  You will receive a separate refund confirmation email once the
                  transaction is complete.
                </Text>
              </Section>
            </Section>

            {/* Alternative Event Information */}
            <Section className="bg-blue-50 border border-blue-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[16px] font-semibold text-blue-800 mb-[12px]">
                🗓️ Rescheduled Event Information
              </Text>
              <Text className="text-[14px] text-blue-700 mb-[8px]">
                We are working to reschedule this event for{" "}
                <strong>{alternativeEventDate}</strong>. All registered
                attendees will receive priority booking and early-bird pricing.
              </Text>
              <Text className="text-[14px] text-blue-700 mb-[8px]">
                We will send you detailed information about the new event date,
                venue, and registration process within the next 2 weeks.
              </Text>
              <Text className="text-[14px] text-blue-700 mb-[0px]">
                Your contact information has been saved for priority
                notifications about the rescheduled event.
              </Text>
            </Section>

            {/* What Happens Next */}
            <Section className="bg-yellow-50 border border-yellow-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[16px] font-semibold text-yellow-800 mb-[12px]">
                📋 What Happens Next:
              </Text>
              <Text className="text-[14px] text-yellow-700 mb-[8px]">
                • Full refund processing begins immediately - no action required
                from you
              </Text>
              <Text className="text-[14px] text-yellow-700 mb-[8px]">
                • You'll receive a refund confirmation email within{" "}
                {refundProcessingDays}
              </Text>
              <Text className="text-[14px] text-yellow-700 mb-[8px]">
                • Priority access to the rescheduled event with special pricing
              </Text>
              <Text className="text-[14px] text-yellow-700 mb-[8px]">
                • All QR codes and entry passes are now invalid
              </Text>
              <Text className="text-[14px] text-yellow-700 mb-[0px]">
                • Updates about future events will be sent to your registered
                email
              </Text>
            </Section>

            {/* Apology and Compensation */}
            <Section className="bg-purple-50 border border-purple-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[16px] font-semibold text-purple-800 mb-[8px]">
                🎁 Our Sincere Apology
              </Text>
              <Text className="text-[14px] text-purple-700 mb-[8px]">
                We understand how disappointing this news must be, especially if
                you've made travel arrangements or cleared your schedule for
                this event.
              </Text>
              <Text className="text-[14px] text-purple-700 mb-[8px]">
                As an apology, all affected attendees will receive a 20%
                discount on the rescheduled event and exclusive access to
                premium content and networking sessions.
              </Text>
              <Text className="text-[14px] text-purple-700 mb-[0px]">
                We are committed to making the rescheduled event even better
                than originally planned.
              </Text>
            </Section>

            {/* Contact Information */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] font-semibold text-gray-700 mb-[8px]">
                Need Immediate Assistance?
              </Text>
              <Text className="text-[14px] text-gray-600 mb-[4px]">
                Email: support@techconference.com (Priority response for
                cancellation queries)
              </Text>
              <Text className="text-[14px] text-gray-600 mb-[4px]">
                Phone: +91 98765 43210 (Extended hours: 8 AM - 8 PM IST)
              </Text>
              <Text className="text-[14px] text-gray-600 mb-[0px]">
                Our dedicated support team is standing by to assist with any
                questions or concerns.
              </Text>
            </Section>

            <Hr className="border-gray-200 mb-[32px]" />

            {/* Footer */}
            <Section>
              <Text className="text-[14px] text-gray-600 text-center mb-[12px]">
                Once again, we sincerely apologize for this cancellation and any
                inconvenience caused.
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

EventCancellationEmail.PreviewProps = {
  attendeeName: "John Doe",
  eventName: "Tech Conference 2024",
  eventDate: "December 15, 2024",
  eventTime: "9:00 AM - 6:00 PM IST",
  venue: "Convention Center, Sector 17, Chandigarh",
  ticketNumber: "TC2024-001234",
  orderNumber: "ORD-789456123",
  cancellationReason: "Due to unforeseen circumstances and safety concerns",
  refundAmount: "₹2,500",
  refundProcessingDays: "3-5 business days",
  alternativeEventDate: "March 15, 2025",
};

export default EventCancellationEmail;
