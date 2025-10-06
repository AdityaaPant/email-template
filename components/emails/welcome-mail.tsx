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

const WelcomeEmail = (props: any) => {
  const {
    attendeeName = "John Doe",
    eventName = "Tech Conference 2024",
    eventDate = "December 15, 2024",
    eventTime = "9:00 AM - 6:00 PM IST",
    venue = "Convention Center, Sector 17, Chandigarh",
    ticketNumber = "TC2024-001234",
    orderNumber = "ORD-789456123",
    ticketType = "Premium Pass",
    purchaseDate = "November 20, 2024",
    totalAmount = "₹2,500",
    organizerName = "Tech Conference Team",
    eventWebsite = "www.techconference2024.com",
    socialHandle = "@TechConf2024",
  } = props;

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>
        Welcome to {eventName}! Your journey to an amazing experience starts
        here
      </Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white mx-auto px-[20px] py-[40px] max-w-[600px] rounded-[8px]">
            {/* Header */}
            <Section className="text-center mb-[32px]">
              <Heading className="text-[36px] font-bold text-green-600 mb-[8px]">
                🎉 Welcome Aboard!
              </Heading>
              <Text className="text-[20px] text-gray-700 mb-[8px]">
                You're officially registered for
              </Text>
              <Text className="text-[24px] font-bold text-blue-600 mb-[8px]">
                {eventName}
              </Text>
              <Text className="text-[16px] text-gray-600 mb-[0px]">
                Get ready for an incredible experience, {attendeeName}!
              </Text>
            </Section>

            {/* Welcome Message */}
            <Section className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-[8px] p-[24px] mb-[32px]">
              <Text className="text-[18px] font-semibold text-blue-800 mb-[12px]">
                Dear {attendeeName},
              </Text>
              <Text className="text-[16px] text-blue-700 mb-[12px]">
                Thank you for joining us at <strong>{eventName}</strong>! We're
                thrilled to have you as part of our community of innovators,
                learners, and industry leaders.
              </Text>
              <Text className="text-[16px] text-blue-700 mb-[12px]">
                This event promises to be an unforgettable journey filled with
                inspiring keynotes, hands-on workshops, valuable networking
                opportunities, and cutting-edge insights that will shape the
                future of technology.
              </Text>
              <Text className="text-[16px] text-blue-700 mb-[0px]">
                Your adventure begins now - let's make it extraordinary
                together! 🚀
              </Text>
            </Section>

            {/* Registration Confirmation */}
            <Section className="mb-[32px]">
              <Heading className="text-[24px] font-bold text-gray-900 mb-[20px]">
                📋 Registration Confirmed
              </Heading>

              <Section className="bg-green-50 border border-green-200 rounded-[8px] p-[20px]">
                <Row className="mb-[12px]">
                  <Column className="w-[50%]">
                    <Text className="text-[14px] font-semibold text-green-700 mb-[4px]">
                      Event Name
                    </Text>
                    <Text className="text-[16px] font-bold text-green-800 mb-[0px]">
                      {eventName}
                    </Text>
                  </Column>
                  <Column className="w-[50%]">
                    <Text className="text-[14px] font-semibold text-green-700 mb-[4px]">
                      Date & Time
                    </Text>
                    <Text className="text-[16px] text-green-800 mb-[0px]">
                      {eventDate}
                    </Text>
                    <Text className="text-[14px] text-green-700 mb-[0px]">
                      {eventTime}
                    </Text>
                  </Column>
                </Row>

                <Row className="mb-[12px]">
                  <Column className="w-[50%]">
                    <Text className="text-[14px] font-semibold text-green-700 mb-[4px]">
                      Ticket Type
                    </Text>
                    <Text className="text-[16px] font-bold text-green-800 mb-[0px]">
                      {ticketType}
                    </Text>
                  </Column>
                  <Column className="w-[50%]">
                    <Text className="text-[14px] font-semibold text-green-700 mb-[4px]">
                      Venue
                    </Text>
                    <Text className="text-[16px] text-green-800 mb-[0px]">
                      {venue}
                    </Text>
                  </Column>
                </Row>

                <Row className="mb-[12px]">
                  <Column className="w-[50%]">
                    <Text className="text-[14px] font-semibold text-green-700 mb-[4px]">
                      Ticket Number
                    </Text>
                    <Text className="text-[16px] font-mono text-green-800 mb-[0px]">
                      {ticketNumber}
                    </Text>
                  </Column>
                  <Column className="w-[50%]">
                    <Text className="text-[14px] font-semibold text-green-700 mb-[4px]">
                      Order Number
                    </Text>
                    <Text className="text-[16px] font-mono text-green-800 mb-[0px]">
                      {orderNumber}
                    </Text>
                  </Column>
                </Row>

                <Row>
                  <Column className="w-[50%]">
                    <Text className="text-[14px] font-semibold text-green-700 mb-[4px]">
                      Purchase Date
                    </Text>
                    <Text className="text-[16px] text-green-800 mb-[0px]">
                      {purchaseDate}
                    </Text>
                  </Column>
                  <Column className="w-[50%]">
                    <Text className="text-[14px] font-semibold text-green-700 mb-[4px]">
                      Amount Paid
                    </Text>
                    <Text className="text-[18px] font-bold text-green-800 mb-[0px]">
                      {totalAmount}
                    </Text>
                  </Column>
                </Row>
              </Section>
            </Section>

            <Hr className="border-gray-200 mb-[32px]" />

            {/* What's Included */}
            <Section className="mb-[32px]">
              <Heading className="text-[24px] font-bold text-gray-900 mb-[20px]">
                🎁 What's Included in Your {ticketType}
              </Heading>

              <Section className="bg-purple-50 border border-purple-200 rounded-[8px] p-[20px]">
                <Text className="text-[14px] text-purple-700 mb-[8px]">
                  ✅ <strong>Full event access</strong> - All keynotes,
                  sessions, and workshops
                </Text>
                <Text className="text-[14px] text-purple-700 mb-[8px]">
                  ✅ <strong>Premium networking</strong> - VIP networking lounge
                  and exclusive meetups
                </Text>
                <Text className="text-[14px] text-purple-700 mb-[8px]">
                  ✅ <strong>All meals included</strong> - Welcome breakfast,
                  gourmet lunch, and coffee breaks
                </Text>
                <Text className="text-[14px] text-purple-700 mb-[8px]">
                  ✅ <strong>Welcome kit</strong> - Event swag, notebook,
                  branded merchandise
                </Text>
                <Text className="text-[14px] text-purple-700 mb-[8px]">
                  ✅ <strong>Digital resources</strong> - Presentation slides,
                  recordings, and bonus content
                </Text>
                <Text className="text-[14px] text-purple-700 mb-[8px]">
                  ✅ <strong>Certificate of attendance</strong> - Digital
                  certificate for professional development
                </Text>
                <Text className="text-[14px] text-purple-700 mb-[0px]">
                  ✅ <strong>1-year community access</strong> - Exclusive online
                  community and future discounts
                </Text>
              </Section>
            </Section>

            {/* What to Expect */}
            <Section className="bg-yellow-50 border border-yellow-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[18px] font-semibold text-yellow-800 mb-[12px]">
                🌟 What to Expect at {eventName}
              </Text>

              <Row className="mb-[16px]">
                <Column className="w-[50%]">
                  <Text className="text-[16px] font-semibold text-yellow-800 mb-[8px]">
                    🎤 Inspiring Keynotes
                  </Text>
                  <Text className="text-[14px] text-yellow-700 mb-[0px]">
                    Industry leaders sharing breakthrough insights and future
                    trends
                  </Text>
                </Column>
                <Column className="w-[50%]">
                  <Text className="text-[16px] font-semibold text-yellow-800 mb-[8px]">
                    💡 Hands-on Workshops
                  </Text>
                  <Text className="text-[14px] text-yellow-700 mb-[0px]">
                    Interactive sessions where you'll learn practical skills and
                    tools
                  </Text>
                </Column>
              </Row>

              <Row className="mb-[16px]">
                <Column className="w-[50%]">
                  <Text className="text-[16px] font-semibold text-yellow-800 mb-[8px]">
                    🤝 Premium Networking
                  </Text>
                  <Text className="text-[14px] text-yellow-700 mb-[0px]">
                    Connect with 500+ professionals, entrepreneurs, and
                    innovators
                  </Text>
                </Column>
                <Column className="w-[50%]">
                  <Text className="text-[16px] font-semibold text-yellow-800 mb-[8px]">
                    🚀 Innovation Showcase
                  </Text>
                  <Text className="text-[14px] text-yellow-700 mb-[0px]">
                    Discover cutting-edge startups and groundbreaking
                    technologies
                  </Text>
                </Column>
              </Row>

              <Row>
                <Column className="w-[50%]">
                  <Text className="text-[16px] font-semibold text-yellow-800 mb-[8px]">
                    🎯 Career Opportunities
                  </Text>
                  <Text className="text-[14px] text-yellow-700 mb-[0px]">
                    Job fair, mentorship sessions, and career advancement tips
                  </Text>
                </Column>
                <Column className="w-[50%]">
                  <Text className="text-[16px] font-semibold text-yellow-800 mb-[8px]">
                    🏆 Competitions & Prizes
                  </Text>
                  <Text className="text-[14px] text-yellow-700 mb-[0px]">
                    Pitch competitions, hackathons, and amazing prizes to win
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Next Steps */}
            <Section className="bg-blue-50 border border-blue-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[18px] font-semibold text-blue-800 mb-[12px]">
                📝 Next Steps to Maximize Your Experience
              </Text>

              <Text className="text-[14px] text-blue-700 mb-[8px]">
                <strong>1. Save the Date:</strong> Add the event to your
                calendar and set reminders
              </Text>
              <Text className="text-[14px] text-blue-700 mb-[8px]">
                <strong>2. Join Our Community:</strong> Connect with fellow
                attendees before the event
              </Text>
              <Text className="text-[14px] text-blue-700 mb-[8px]">
                <strong>3. Download the App:</strong> Get real-time updates,
                networking tools, and agenda
              </Text>
              <Text className="text-[14px] text-blue-700 mb-[8px]">
                <strong>4. Follow Us:</strong> Stay updated on {socialHandle}{" "}
                for behind-the-scenes content
              </Text>
              <Text className="text-[14px] text-blue-700 mb-[8px]">
                <strong>5. Prepare Your Pitch:</strong> Perfect your elevator
                pitch for networking opportunities
              </Text>
              <Text className="text-[14px] text-blue-700 mb-[0px]">
                <strong>6. Set Your Goals:</strong> Think about what you want to
                achieve at the event
              </Text>
            </Section>

            {/* Pre-Event Resources */}
            <Section className="bg-indigo-50 border border-indigo-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[18px] font-semibold text-indigo-800 mb-[12px]">
                📚 Pre-Event Resources (Coming Soon)
              </Text>
              <Text className="text-[14px] text-indigo-700 mb-[8px]">
                We'll be sending you exclusive pre-event content to help you
                prepare:
              </Text>
              <Text className="text-[14px] text-indigo-700 mb-[6px]">
                • Speaker profiles and session previews
              </Text>
              <Text className="text-[14px] text-indigo-700 mb-[6px]">
                • Attendee networking guide and icebreaker tips
              </Text>
              <Text className="text-[14px] text-indigo-700 mb-[6px]">
                • Venue maps, parking information, and local recommendations
              </Text>
              <Text className="text-[14px] text-indigo-700 mb-[6px]">
                • Pre-event webinar invitations and bonus content
              </Text>
              <Text className="text-[14px] text-indigo-700 mb-[0px]">
                • Exclusive discounts on future events and partner offers
              </Text>
            </Section>

            {/* Important Reminders */}
            <Section className="bg-orange-50 border border-orange-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[16px] font-semibold text-orange-800 mb-[8px]">
                📌 Important Reminders:
              </Text>
              <Text className="text-[14px] text-orange-700 mb-[6px]">
                • Keep your ticket number handy: <strong>{ticketNumber}</strong>
              </Text>
              <Text className="text-[14px] text-orange-700 mb-[6px]">
                • Bring a valid photo ID for event check-in
              </Text>
              <Text className="text-[14px] text-orange-700 mb-[6px]">
                • Event details and updates will be sent closer to the date
              </Text>
              <Text className="text-[14px] text-orange-700 mb-[6px]">
                • Check our website regularly for agenda updates: {eventWebsite}
              </Text>
              <Text className="text-[14px] text-orange-700 mb-[0px]">
                • Contact us anytime if you have questions or need assistance
              </Text>
            </Section>

            {/* Contact Information */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] font-semibold text-gray-700 mb-[8px]">
                Questions? We're Here to Help!
              </Text>
              <Text className="text-[14px] text-gray-600 mb-[4px]">
                Email: welcome@techconference.com (Subject: Welcome -{" "}
                {ticketNumber})
              </Text>
              <Text className="text-[14px] text-gray-600 mb-[4px]">
                Phone: +91 98765 43210 (Support hours: 9 AM - 7 PM IST, Mon-Sat)
              </Text>
              <Text className="text-[14px] text-gray-600 mb-[4px]">
                Website: {eventWebsite}
              </Text>
              <Text className="text-[14px] text-gray-600 mb-[0px]">
                Social Media: Follow us {socialHandle} for live updates and
                community discussions
              </Text>
            </Section>

            <Hr className="border-gray-200 mb-[32px]" />

            {/* Footer */}
            <Section>
              <Text className="text-[18px] font-bold text-center text-gray-800 mb-[12px]">
                Welcome to the {eventName} Family! 🎊
              </Text>
              <Text className="text-[16px] text-center text-gray-700 mb-[12px]">
                You've just taken the first step towards an incredible learning
                and networking experience.
              </Text>
              <Text className="text-[14px] text-center text-gray-600 mb-[12px]">
                We can't wait to meet you in person and see the amazing
                connections you'll make!
              </Text>
              <Text className="text-[12px] text-gray-500 text-center mb-[8px] m-0">
                With excitement and gratitude,
              </Text>
              <Text className="text-[12px] text-gray-500 text-center mb-[8px] m-0">
                {organizerName}
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

WelcomeEmail.PreviewProps = {
  attendeeName: "John Doe",
  eventName: "Tech Conference 2024",
  eventDate: "December 15, 2024",
  eventTime: "9:00 AM - 6:00 PM IST",
  venue: "Convention Center, Sector 17, Chandigarh",
  ticketNumber: "TC2024-001234",
  orderNumber: "ORD-789456123",
  ticketType: "Premium Pass",
  purchaseDate: "November 20, 2024",
  totalAmount: "₹2,500",
  organizerName: "Tech Conference Team",
  eventWebsite: "www.techconference2024.com",
  socialHandle: "@TechConf2024",
};

export default WelcomeEmail;
