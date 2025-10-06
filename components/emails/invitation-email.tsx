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

const InvitationEmail = (props: any) => {
  const {
    userName = "John Doe",
    eventName = "Tech Innovation Summit 2024",
    eventDate = "December 15, 2024",
    eventTime = "10:00 AM - 6:00 PM IST",
    eventLocation = "Chandigarh Convention Center, Punjab",
    eventDescription = "Join 500+ tech leaders, innovators, and entrepreneurs for a day of cutting-edge insights, networking, and breakthrough technologies.",
    signupLink = "https://techsummit2024.com/signup",
    eventDetailsLink = "https://techsummit2024.com/details",
    hostName = "Tech Innovation Group",
    contactEmail = "events@techinnovation.com",
    eventImage = "https://new.email/static/app/placeholder.png",
    rsvpDeadline = "December 10, 2024",
  } = props;

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>
        🎉 You're invited to {eventName} - {eventDate}. RSVP now!
      </Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white mx-auto px-[20px] py-[40px] max-w-[600px] rounded-[8px]">
            {/* Header */}
            <Section className="text-center mb-[32px]">
              <Heading className="text-[32px] font-bold text-blue-600 mb-[8px]">
                🎉 You're Invited!
              </Heading>
              <Text className="text-[16px] text-gray-600 mb-[0px]">
                An exclusive event just for you
              </Text>
            </Section>

            {/* Event Image */}
            <Section className="mb-[32px]">
              <Img
                src={eventImage}
                alt={eventName}
                className="w-full h-auto object-cover rounded-[8px]"
              />
            </Section>

            {/* Personal Invitation */}
            <Section className="bg-blue-50 border border-blue-200 rounded-[8px] p-[24px] mb-[32px]">
              <Text className="text-[16px] text-blue-700 mb-[12px]">
                Dear <strong>{userName}</strong>,
              </Text>
              <Text className="text-[16px] text-blue-700 mb-[12px]">
                We're thrilled to invite you to <strong>{eventName}</strong>!
              </Text>
              <Text className="text-[16px] text-blue-700 mb-[0px]">
                {eventDescription}
              </Text>
            </Section>

            {/* Event Details */}
            <Section className="bg-green-50 border border-green-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[18px] font-bold text-green-800 mb-[16px] text-center">
                📅 Event Details
              </Text>
              <Row className="mb-[12px]">
                <Column className="w-[30%]">
                  <Text className="text-[14px] font-semibold text-green-700 mb-[0px]">
                    📅 Date:
                  </Text>
                </Column>
                <Column className="w-[70%]">
                  <Text className="text-[14px] text-green-700 mb-[0px]">
                    {eventDate}
                  </Text>
                </Column>
              </Row>
              <Row className="mb-[12px]">
                <Column className="w-[30%]">
                  <Text className="text-[14px] font-semibold text-green-700 mb-[0px]">
                    🕐 Time:
                  </Text>
                </Column>
                <Column className="w-[70%]">
                  <Text className="text-[14px] text-green-700 mb-[0px]">
                    {eventTime}
                  </Text>
                </Column>
              </Row>
              <Row className="mb-[0px]">
                <Column className="w-[30%]">
                  <Text className="text-[14px] font-semibold text-green-700 mb-[0px]">
                    📍 Venue:
                  </Text>
                </Column>
                <Column className="w-[70%]">
                  <Text className="text-[14px] text-green-700 mb-[0px]">
                    {eventLocation}
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* RSVP Buttons */}
            <Section className="text-center mb-[32px]">
              <Text className="text-[18px] font-bold text-gray-800 mb-[16px]">
                Will you join us?
              </Text>
              <Row>
                <Column className="w-[50%] text-center pr-[8px]">
                  <Section className="bg-green-600 rounded-[8px] px-[20px] py-[12px] inline-block w-full">
                    <Text className="text-[16px] font-bold text-white mb-[0px]">
                      <a
                        href={signupLink}
                        className="text-white no-underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ✅ Yes, I'll Attend
                      </a>
                    </Text>
                  </Section>
                </Column>
                <Column className="w-[50%] text-center pl-[8px]">
                  <Section className="bg-gray-500 rounded-[8px] px-[20px] py-[12px] inline-block w-full">
                    <Text className="text-[16px] font-bold text-white mb-[0px]">
                      <a
                        href={`mailto:${contactEmail}?subject=Cannot Attend ${eventName}`}
                        className="text-white no-underline"
                      >
                        ❌ Can't Make It
                      </a>
                    </Text>
                  </Section>
                </Column>
              </Row>
            </Section>

            {/* RSVP Deadline */}
            <Section className="bg-orange-50 border border-orange-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[16px] font-semibold text-orange-800 mb-[8px] text-center">
                ⏰ RSVP Deadline
              </Text>
              <Text className="text-[18px] font-bold text-orange-700 text-center mb-[8px]">
                {rsvpDeadline}
              </Text>
              <Text className="text-[14px] text-orange-700 text-center mb-[0px]">
                Please confirm your attendance by this date
              </Text>
            </Section>

            {/* What to Expect */}
            <Section className="bg-purple-50 border border-purple-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[16px] font-semibold text-purple-800 mb-[8px]">
                🌟 What to Expect
              </Text>
              <Text className="text-[14px] text-purple-700 mb-[4px]">
                • Keynote speeches from industry leaders
              </Text>
              <Text className="text-[14px] text-purple-700 mb-[4px]">
                • Interactive workshops & demos
              </Text>
              <Text className="text-[14px] text-purple-700 mb-[4px]">
                • Networking lunch & coffee breaks
              </Text>
              <Text className="text-[14px] text-purple-700 mb-[0px]">
                • Exclusive swag & takeaways
              </Text>
            </Section>

            {/* Additional Options */}
            <Section className="bg-gray-50 border border-gray-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[16px] font-semibold text-gray-800 mb-[12px] text-center">
                📋 Need More Info?
              </Text>
              <Row>
                <Column className="w-[50%] text-center pr-[8px]">
                  <Section className="bg-blue-600 rounded-[6px] px-[16px] py-[10px] inline-block w-full">
                    <Text className="text-[14px] font-semibold text-white mb-[0px]">
                      <a
                        href={eventDetailsLink}
                        className="text-white no-underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        📖 Event Details
                      </a>
                    </Text>
                  </Section>
                </Column>
                <Column className="w-[50%] text-center pl-[8px]">
                  <Section className="bg-purple-600 rounded-[6px] px-[16px] py-[10px] inline-block w-full">
                    <Text className="text-[14px] font-semibold text-white mb-[0px]">
                      <a
                        href={`mailto:${contactEmail}?subject=Question about ${eventName}`}
                        className="text-white no-underline"
                      >
                        💬 Ask Questions
                      </a>
                    </Text>
                  </Section>
                </Column>
              </Row>
            </Section>

            {/* Special Notes */}
            <Section className="bg-yellow-50 border border-yellow-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[16px] font-semibold text-yellow-800 mb-[8px]">
                📝 Important Notes
              </Text>
              <Text className="text-[14px] text-yellow-700 mb-[4px]">
                • Free parking available on-site
              </Text>
              <Text className="text-[14px] text-yellow-700 mb-[4px]">
                • Lunch and refreshments included
              </Text>
              <Text className="text-[14px] text-yellow-700 mb-[4px]">
                • Business casual dress code
              </Text>
              <Text className="text-[14px] text-yellow-700 mb-[0px]">
                • Bring your business cards for networking
              </Text>
            </Section>

            {/* Contact */}
            <Section className="text-center mb-[32px]">
              <Text className="text-[14px] text-gray-600 mb-[4px]">
                Questions? Contact us at {contactEmail}
              </Text>
              <Text className="text-[14px] text-gray-600 mb-[0px]">
                Phone: +91 98765 43210
              </Text>
            </Section>

            <Hr className="border-gray-200 mb-[32px]" />

            {/* Footer */}
            <Section>
              <Text className="text-[14px] text-center font-semibold text-blue-700 mb-[8px]">
                Looking forward to seeing you there! 🎉
              </Text>
              <Text className="text-[12px] text-gray-500 text-center mb-[8px] m-0">
                {hostName}
              </Text>
              <Text className="text-[12px] text-gray-500 text-center mb-[8px] m-0">
                123 Innovation Drive, Chandigarh, Punjab 160017, India
              </Text>
              <Text className="text-[12px] text-gray-500 text-center mb-[0px] m-0">
                © 2024 {hostName}. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

InvitationEmail.PreviewProps = {
  userName: "John Doe",
  eventName: "Tech Innovation Summit 2024",
  eventDate: "December 15, 2024",
  eventTime: "10:00 AM - 6:00 PM IST",
  eventLocation: "Chandigarh Convention Center, Punjab",
  eventDescription:
    "Join 500+ tech leaders, innovators, and entrepreneurs for a day of cutting-edge insights, networking, and breakthrough technologies.",
  signupLink: "https://techsummit2024.com/signup",
  eventDetailsLink: "https://techsummit2024.com/details",
  hostName: "Tech Innovation Group",
  contactEmail: "events@techinnovation.com",
  eventImage: "https://new.email/static/app/placeholder.png",
  rsvpDeadline: "December 10, 2024",
};

export default InvitationEmail;
