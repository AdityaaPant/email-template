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

const EventReminderEmail = (props: any) => {
  const {
    attendeeName = "John Doe",
    eventName = "Tech Conference 2024",
    eventDate = "December 15, 2024",
    eventTime = "9:00 AM - 6:00 PM IST",
    venue = "Convention Center, Sector 17, Chandigarh",
    venueAddress = "Plot No. 1, Sector 17, Chandigarh, Punjab 160017",
    ticketNumber = "TC2024-001234",
    coverImageUrl = "https://new.email/static/app/placeholder.png",
    daysUntilEvent = "3",
    checkInTime = "8:30 AM",
    parkingInfo = "Free parking available in Basement Level 1 & 2",
    wifiPassword = "TechConf2024",
    emergencyContact = "+91 98765 43210",
  } = props;

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>
        Only {daysUntilEvent} days left! Get ready for {eventName} - All details
        inside
      </Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white mx-auto px-[0px] py-[0px] max-w-[600px] rounded-[8px] overflow-hidden">
            {/* Event Cover Image */}
            <Section className="mb-[0px]">
              <Img
                src={coverImageUrl}
                alt={`${eventName} Cover Image`}
                className="w-full h-auto object-cover"
                width="600"
                height="300"
              />
            </Section>

            {/* Content Container */}
            <Container className="px-[20px] py-[32px]">
              {/* Header */}
              <Section className="text-center mb-[32px]">
                <Heading className="text-[32px] font-bold text-blue-600 mb-[8px]">
                  🎉 Event Reminder
                </Heading>
                <Text className="text-[18px] text-gray-600 mb-[8px]">
                  Only{" "}
                  <span className="font-bold text-red-600">
                    {daysUntilEvent} days
                  </span>{" "}
                  until {eventName}!
                </Text>
                <Text className="text-[16px] text-gray-500 mb-[0px]">
                  We're excited to see you there, {attendeeName}!
                </Text>
              </Section>

              {/* Countdown Alert */}
              <Section className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-[8px] p-[24px] mb-[32px] text-center">
                <Text className="text-[24px] font-bold text-blue-800 mb-[8px]">
                  ⏰ {daysUntilEvent} Days to Go!
                </Text>
                <Text className="text-[16px] text-blue-700 mb-[12px]">
                  Mark your calendar and get ready for an amazing experience
                </Text>
                <Text className="text-[14px] text-blue-600 mb-[0px]">
                  Don't forget to prepare your questions for the Q&A sessions!
                </Text>
              </Section>

              {/* Event Details */}
              <Section className="mb-[32px]">
                <Heading className="text-[24px] font-bold text-gray-900 mb-[20px]">
                  📅 Event Details
                </Heading>

                <Section className="bg-gray-50 border border-gray-200 rounded-[8px] p-[20px]">
                  <Row className="mb-[16px]">
                    <Column className="w-[50%]">
                      <Text className="text-[14px] font-semibold text-gray-700 mb-[4px]">
                        📅 Date
                      </Text>
                      <Text className="text-[18px] font-bold text-gray-900 mb-[0px]">
                        {eventDate}
                      </Text>
                    </Column>
                    <Column className="w-[50%]">
                      <Text className="text-[14px] font-semibold text-gray-700 mb-[4px]">
                        ⏰ Time
                      </Text>
                      <Text className="text-[18px] font-bold text-gray-900 mb-[0px]">
                        {eventTime}
                      </Text>
                    </Column>
                  </Row>

                  <Row className="mb-[16px]">
                    <Column>
                      <Text className="text-[14px] font-semibold text-gray-700 mb-[4px]">
                        📍 Venue
                      </Text>
                      <Text className="text-[16px] font-bold text-gray-900 mb-[4px]">
                        {venue}
                      </Text>
                      <Text className="text-[14px] text-gray-600 mb-[0px]">
                        {venueAddress}
                      </Text>
                    </Column>
                  </Row>

                  <Row>
                    <Column>
                      <Text className="text-[14px] font-semibold text-gray-700 mb-[4px]">
                        🎫 Your Ticket
                      </Text>
                      <Text className="text-[16px] font-mono font-bold text-blue-600 mb-[0px]">
                        {ticketNumber}
                      </Text>
                    </Column>
                  </Row>
                </Section>
              </Section>

              {/* Check-in Information */}
              <Section className="bg-green-50 border border-green-200 rounded-[8px] p-[20px] mb-[32px]">
                <Text className="text-[18px] font-semibold text-green-800 mb-[12px]">
                  🚪 Check-in Information
                </Text>

                <Row className="mb-[12px]">
                  <Column className="w-[50%]">
                    <Text className="text-[14px] font-semibold text-green-700 mb-[4px]">
                      Check-in Opens
                    </Text>
                    <Text className="text-[16px] font-bold text-green-800 mb-[0px]">
                      {checkInTime}
                    </Text>
                  </Column>
                  <Column className="w-[50%]">
                    <Text className="text-[14px] font-semibold text-green-700 mb-[4px]">
                      Entry Location
                    </Text>
                    <Text className="text-[16px] text-green-800 mb-[0px]">
                      Main Entrance
                    </Text>
                  </Column>
                </Row>

                <Text className="text-[14px] text-green-700 mb-[8px]">
                  <strong>What to bring:</strong> Your ticket (digital or
                  printed), valid photo ID, and business cards for networking
                </Text>
                <Text className="text-[14px] text-green-700 mb-[0px]">
                  <strong>Tip:</strong> Arrive 30 minutes early to avoid queues
                  and grab the best seats!
                </Text>
              </Section>

              {/* Practical Information */}
              <Section className="mb-[32px]">
                <Heading className="text-[24px] font-bold text-gray-900 mb-[20px]">
                  🎯 Practical Information
                </Heading>

                <Row className="mb-[20px]">
                  <Column className="w-[50%]">
                    <Section className="bg-blue-50 border border-blue-200 rounded-[8px] p-[16px] h-full">
                      <Text className="text-[16px] font-semibold text-blue-800 mb-[8px]">
                        🚗 Parking
                      </Text>
                      <Text className="text-[14px] text-blue-700 mb-[0px]">
                        {parkingInfo}
                      </Text>
                    </Section>
                  </Column>
                  <Column className="w-[50%]">
                    <Section className="bg-purple-50 border border-purple-200 rounded-[8px] p-[16px] h-full">
                      <Text className="text-[16px] font-semibold text-purple-800 mb-[8px]">
                        📶 WiFi Access
                      </Text>
                      <Text className="text-[14px] text-purple-700 mb-[4px]">
                        Network: TechConf_Guest
                      </Text>
                      <Text className="text-[14px] font-mono text-purple-800 mb-[0px]">
                        Password: {wifiPassword}
                      </Text>
                    </Section>
                  </Column>
                </Row>

                <Row>
                  <Column className="w-[50%]">
                    <Section className="bg-yellow-50 border border-yellow-200 rounded-[8px] p-[16px] h-full">
                      <Text className="text-[16px] font-semibold text-yellow-800 mb-[8px]">
                        🍽️ Refreshments
                      </Text>
                      <Text className="text-[14px] text-yellow-700 mb-[0px]">
                        Complimentary breakfast, lunch, and coffee breaks
                        included
                      </Text>
                    </Section>
                  </Column>
                  <Column className="w-[50%]">
                    <Section className="bg-red-50 border border-red-200 rounded-[8px] p-[16px] h-full">
                      <Text className="text-[16px] font-semibold text-red-800 mb-[8px]">
                        📞 Emergency Contact
                      </Text>
                      <Text className="text-[14px] font-mono text-red-700 mb-[0px]">
                        {emergencyContact}
                      </Text>
                    </Section>
                  </Column>
                </Row>
              </Section>

              {/* Event Highlights */}
              <Section className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-[8px] p-[20px] mb-[32px]">
                <Text className="text-[18px] font-semibold text-purple-800 mb-[12px]">
                  ✨ Don't Miss These Highlights:
                </Text>
                <Text className="text-[14px] text-purple-700 mb-[6px]">
                  🎤 <strong>9:30 AM:</strong> Opening Keynote - "Future of
                  Technology in India"
                </Text>
                <Text className="text-[14px] text-purple-700 mb-[6px]">
                  💡 <strong>11:00 AM:</strong> Interactive Workshop - "AI in
                  Everyday Business"
                </Text>
                <Text className="text-[14px] text-purple-700 mb-[6px]">
                  🤝 <strong>1:30 PM:</strong> Networking Lunch with Industry
                  Leaders
                </Text>
                <Text className="text-[14px] text-purple-700 mb-[6px]">
                  🚀 <strong>3:00 PM:</strong> Startup Pitch Competition with
                  Live Voting
                </Text>
                <Text className="text-[14px] text-purple-700 mb-[0px]">
                  🎁 <strong>5:30 PM:</strong> Closing Ceremony with Prize
                  Distribution
                </Text>
              </Section>

              {/* Last Minute Reminders */}
              <Section className="bg-orange-50 border border-orange-200 rounded-[8px] p-[20px] mb-[32px]">
                <Text className="text-[18px] font-semibold text-orange-800 mb-[12px]">
                  📝 Last Minute Reminders:
                </Text>
                <Text className="text-[14px] text-orange-700 mb-[6px]">
                  ✅ Download the event app for real-time updates and networking
                </Text>
                <Text className="text-[14px] text-orange-700 mb-[6px]">
                  ✅ Follow us on social media and use hashtag #TechConf2024
                </Text>
                <Text className="text-[14px] text-orange-700 mb-[6px]">
                  ✅ Prepare your elevator pitch for networking opportunities
                </Text>
                <Text className="text-[14px] text-orange-700 mb-[6px]">
                  ✅ Charge your devices - power banks will be available at the
                  venue
                </Text>
                <Text className="text-[14px] text-orange-700 mb-[0px]">
                  ✅ Dress code: Business casual (comfortable shoes recommended)
                </Text>
              </Section>

              {/* Weather & Travel */}
              <Section className="bg-cyan-50 border border-cyan-200 rounded-[8px] p-[20px] mb-[32px]">
                <Text className="text-[16px] font-semibold text-cyan-800 mb-[8px]">
                  🌤️ Weather & Travel Tips
                </Text>
                <Text className="text-[14px] text-cyan-700 mb-[6px]">
                  Expected weather: Pleasant, 18-25°C - Light jacket recommended
                  for morning
                </Text>
                <Text className="text-[14px] text-cyan-700 mb-[6px]">
                  Public transport: Bus routes 1, 5, and 12 stop directly at the
                  venue
                </Text>
                <Text className="text-[14px] text-cyan-700 mb-[0px]">
                  Nearby hotels: Taj Chandigarh (2km), Hotel Mountview (1.5km)
                </Text>
              </Section>

              {/* Contact Information */}
              <Section className="mb-[32px]">
                <Text className="text-[16px] font-semibold text-gray-700 mb-[8px]">
                  Questions or Need Assistance?
                </Text>
                <Text className="text-[14px] text-gray-600 mb-[4px]">
                  Event Helpdesk: support@techconference.com
                </Text>
                <Text className="text-[14px] text-gray-600 mb-[4px]">
                  WhatsApp Support: +91 98765 43210 (Available 24/7 until event
                  day)
                </Text>
                <Text className="text-[14px] text-gray-600 mb-[0px]">
                  On-site help desk will be available from 8:00 AM on event day
                </Text>
              </Section>

              <Hr className="border-gray-200 mb-[32px]" />

              {/* Footer */}
              <Section>
                <Text className="text-[16px] text-center font-semibold text-gray-800 mb-[12px]">
                  We can't wait to see you at {eventName}! 🚀
                </Text>
                <Text className="text-[14px] text-gray-600 text-center mb-[12px]">
                  Thank you for being part of this incredible event. Get ready
                  for an inspiring day!
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
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

EventReminderEmail.PreviewProps = {
  attendeeName: "John Doe",
  eventName: "Tech Conference 2024",
  eventDate: "December 15, 2024",
  eventTime: "9:00 AM - 6:00 PM IST",
  venue: "Convention Center, Sector 17, Chandigarh",
  venueAddress: "Plot No. 1, Sector 17, Chandigarh, Punjab 160017",
  ticketNumber: "TC2024-001234",
  coverImageUrl: "https://new.email/static/app/placeholder.png",
  daysUntilEvent: "3",
  checkInTime: "8:30 AM",
  parkingInfo: "Free parking available in Basement Level 1 & 2",
  wifiPassword: "TechConf2024",
  emergencyContact: "+91 98765 43210",
};

export default EventReminderEmail;
