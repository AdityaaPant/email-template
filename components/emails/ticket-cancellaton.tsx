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

const TicketCancellationEmail = (props: any) => {
  const {
    attendeeName = "John Doe",
    eventName = "Tech Conference 2024",
    eventDate = "December 15, 2024",
    ticketNumber = "TC2024-001234",
    orderNumber = "ORD-789456123",
    cancellationDate = "November 20, 2024",
    refundAmount = "₹2,500",
    refundProcessingDays = "5-7 business days",
    cancellationReason = "Unable to attend due to personal reasons",
  } = props;

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>
        Your ticket cancellation for {eventName} has been processed
        successfully.
      </Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white mx-auto px-[20px] py-[40px] max-w-[600px] rounded-[8px]">
            {/* Header */}
            <Section>
              <Heading className="text-[32px] font-bold text-gray-900 text-center mb-[8px]">
                🚫 Ticket Cancelled
              </Heading>
              <Text className="text-[16px] text-gray-600 text-center mb-[32px]">
                Your cancellation has been processed successfully
              </Text>
            </Section>

            {/* Cancellation Confirmation */}
            <Section className="bg-orange-50 border border-orange-200 rounded-[8px] p-[24px] mb-[32px]">
              <Text className="text-[18px] font-semibold text-orange-800 mb-[8px]">
                Hello {attendeeName},
              </Text>
              <Text className="text-[16px] text-orange-700 mb-[12px]">
                We have successfully processed your cancellation request for{" "}
                <strong>{eventName}</strong>.
              </Text>
              <Text className="text-[16px] text-orange-700 mb-[0px]">
                We're sorry you won't be able to join us, but we understand that
                plans can change.
              </Text>
            </Section>

            {/* Cancellation Details */}
            <Section className="mb-[32px]">
              <Heading className="text-[24px] font-bold text-gray-900 mb-[20px]">
                Cancellation Details
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
                      Order Number
                    </Text>
                    <Text className="text-[16px] font-mono text-gray-900 mb-[0px]">
                      {orderNumber}
                    </Text>
                  </Column>
                </Row>

                <Row className="mb-[12px]">
                  <Column className="w-[50%]">
                    <Text className="text-[14px] font-semibold text-gray-700 mb-[4px]">
                      Event Date
                    </Text>
                    <Text className="text-[16px] text-gray-900 mb-[0px]">
                      {eventDate}
                    </Text>
                  </Column>
                  <Column className="w-[50%]">
                    <Text className="text-[14px] font-semibold text-gray-700 mb-[4px]">
                      Cancellation Date
                    </Text>
                    <Text className="text-[16px] text-gray-900 mb-[0px]">
                      {cancellationDate}
                    </Text>
                  </Column>
                </Row>

                <Row>
                  <Column>
                    <Text className="text-[14px] font-semibold text-gray-700 mb-[4px]">
                      Reason for Cancellation
                    </Text>
                    <Text className="text-[16px] text-gray-900 mb-[0px]">
                      {cancellationReason}
                    </Text>
                  </Column>
                </Row>
              </Section>
            </Section>

            <Hr className="border-gray-200 mb-[32px]" />

            {/* Refund Information */}
            <Section className="mb-[32px]">
              <Heading className="text-[24px] font-bold text-gray-900 mb-[20px]">
                Refund Information
              </Heading>

              <Section className="bg-green-50 border border-green-200 rounded-[8px] p-[20px]">
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

                <Text className="text-[14px] text-green-700 mb-[0px]">
                  Your refund will be processed back to your original payment
                  method. You will receive a separate confirmation email once
                  the refund has been initiated.
                </Text>
              </Section>
            </Section>

            {/* What Happens Next */}
            <Section className="bg-blue-50 border border-blue-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[16px] font-semibold text-blue-800 mb-[12px]">
                📋 What Happens Next:
              </Text>
              <Text className="text-[14px] text-blue-700 mb-[8px]">
                • Your ticket has been deactivated and cannot be used for entry
              </Text>
              <Text className="text-[14px] text-blue-700 mb-[8px]">
                • Refund processing will begin within 24 hours
              </Text>
              <Text className="text-[14px] text-blue-700 mb-[8px]">
                • You'll receive a refund confirmation email once processed
              </Text>
              <Text className="text-[14px] text-blue-700 mb-[8px]">
                • Any associated QR codes or entry passes are now invalid
              </Text>
              <Text className="text-[14px] text-blue-700 mb-[0px]">
                • You can purchase a new ticket anytime if your plans change
              </Text>
            </Section>

            {/* Future Events */}
            <Section className="bg-purple-50 border border-purple-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[16px] font-semibold text-purple-800 mb-[8px]">
                🎯 Don't Miss Our Future Events!
              </Text>
              <Text className="text-[14px] text-purple-700 mb-[8px]">
                We host amazing events throughout the year. Stay connected with
                us to get early access to tickets and exclusive offers for
                upcoming conferences and workshops.
              </Text>
              <Text className="text-[14px] text-purple-700 mb-[0px]">
                Follow us on social media or visit our website for the latest
                updates!
              </Text>
            </Section>

            {/* Contact Information */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] font-semibold text-gray-700 mb-[8px]">
                Need Help or Have Questions?
              </Text>
              <Text className="text-[14px] text-gray-600 mb-[4px]">
                Email: support@techconference.com
              </Text>
              <Text className="text-[14px] text-gray-600 mb-[4px]">
                Phone: +91 98765 43210
              </Text>
              <Text className="text-[14px] text-gray-600 mb-[0px]">
                Our support team is available Monday-Friday, 9 AM - 6 PM IST
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

TicketCancellationEmail.PreviewProps = {
  attendeeName: "John Doe",
  eventName: "Tech Conference 2024",
  eventDate: "December 15, 2024",
  ticketNumber: "TC2024-001234",
  orderNumber: "ORD-789456123",
  cancellationDate: "November 20, 2024",
  refundAmount: "₹2,500",
  refundProcessingDays: "5-7 business days",
  cancellationReason: "Unable to attend due to personal reasons",
};

export default TicketCancellationEmail;
