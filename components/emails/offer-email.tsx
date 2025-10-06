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

const OffersEmail = (props: any) => {
  const {
    userName = "John Doe",
    offerTitle = "Black Friday Sale - 50% Off Everything!",
    offerDescription = "Don't miss our biggest sale of the year. Get 50% off all conference tickets, workshops, and premium content.",
    discountCode = "BLACKFRIDAY50",
    originalPrice = "$299",
    salePrice = "$149",
    expirationDate = "November 30, 2024",
    ctaLink = "https://techconference2024.com/offers/black-friday",
    companyName = "Tech Conference",
    supportEmail = "support@techconference.com",
    offerImage = "https://new.email/static/app/placeholder.png",
  } = props;

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>
        🔥 {offerTitle} - Limited time offer expires {expirationDate}
      </Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white mx-auto px-[20px] py-[40px] max-w-[600px] rounded-[8px]">
            {/* Header */}
            <Section className="text-center mb-[32px]">
              <Heading className="text-[32px] font-bold text-red-600 mb-[8px]">
                🔥 Exclusive Offer Inside!
              </Heading>
              <Text className="text-[16px] text-gray-600 mb-[0px]">
                Limited time deal just for you
              </Text>
            </Section>

            {/* Offer Image */}
            <Section className="mb-[32px]">
              <Img
                src={offerImage}
                alt="Special Offer"
                className="w-full h-auto object-cover rounded-[8px]"
              />
            </Section>

            {/* Main Offer */}
            <Section className="bg-red-50 border border-red-200 rounded-[8px] p-[24px] mb-[32px]">
              <Text className="text-[16px] text-red-700 mb-[12px]">
                Hey <strong>{userName}</strong>,
              </Text>
              <Heading className="text-[24px] font-bold text-red-800 mb-[12px]">
                {offerTitle}
              </Heading>
              <Text className="text-[16px] text-red-700 mb-[0px]">
                {offerDescription}
              </Text>
            </Section>

            {/* Price Comparison */}
            <Section className="bg-green-50 border border-green-200 rounded-[8px] p-[20px] mb-[32px]">
              <Row>
                <Column className="w-[50%] text-center">
                  <Text className="text-[14px] text-gray-600 mb-[4px]">
                    Regular Price
                  </Text>
                  <Text className="text-[24px] font-bold text-gray-500 line-through mb-[0px]">
                    {originalPrice}
                  </Text>
                </Column>
                <Column className="w-[50%] text-center">
                  <Text className="text-[14px] text-green-700 mb-[4px]">
                    Sale Price
                  </Text>
                  <Text className="text-[32px] font-bold text-green-600 mb-[0px]">
                    {salePrice}
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* CTA Button */}
            <Section className="text-center mb-[32px]">
              <Section className="bg-orange-600 rounded-[8px] px-[32px] py-[16px] inline-block">
                <Text className="text-[18px] font-bold text-white mb-[0px]">
                  <a
                    href={ctaLink}
                    className="text-white no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🛒 Claim Your Discount
                  </a>
                </Text>
              </Section>
            </Section>

            {/* Discount Code */}
            <Section className="bg-yellow-50 border border-yellow-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[16px] font-semibold text-yellow-800 mb-[8px] text-center">
                🎟️ Use Discount Code
              </Text>
              <Text className="text-[24px] font-bold font-mono text-center bg-yellow-200 p-[12px] rounded-[8px] text-yellow-900 mb-[8px]">
                {discountCode}
              </Text>
              <Text className="text-[14px] text-yellow-700 text-center mb-[0px]">
                Copy this code at checkout
              </Text>
            </Section>

            {/* Urgency */}
            <Section className="bg-red-100 border border-red-300 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[16px] font-semibold text-red-800 mb-[8px] text-center">
                ⏰ Limited Time Offer
              </Text>
              <Text className="text-[18px] font-bold text-red-700 text-center mb-[8px]">
                Expires: {expirationDate}
              </Text>
              <Text className="text-[14px] text-red-600 text-center mb-[0px]">
                Don't wait - this deal won't last long!
              </Text>
            </Section>

            {/* What's Included */}
            <Section className="bg-blue-50 border border-blue-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[16px] font-semibold text-blue-800 mb-[8px]">
                ✨ What's Included
              </Text>
              <Text className="text-[14px] text-blue-700 mb-[4px]">
                • Full conference access (2 days)
              </Text>
              <Text className="text-[14px] text-blue-700 mb-[4px]">
                • 5 premium workshops
              </Text>
              <Text className="text-[14px] text-blue-700 mb-[4px]">
                • Networking sessions & meals
              </Text>
              <Text className="text-[14px] text-blue-700 mb-[0px]">
                • Digital resources & recordings
              </Text>
            </Section>

            {/* Social Proof */}
            <Section className="bg-purple-50 border border-purple-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[16px] font-semibold text-purple-800 mb-[8px] text-center">
                🌟 Join 5,000+ Happy Attendees
              </Text>
              <Text className="text-[14px] text-purple-700 text-center mb-[0px]">
                "Best tech conference I've attended. Worth every penny!" - Sarah
                M.
              </Text>
            </Section>

            {/* Support */}
            <Section className="text-center mb-[32px]">
              <Text className="text-[14px] text-gray-600 mb-[0px]">
                Questions? Email {supportEmail}
              </Text>
            </Section>

            <Hr className="border-gray-200 mb-[32px]" />

            {/* Footer */}
            <Section>
              <Text className="text-[12px] text-gray-500 text-center mb-[8px] m-0">
                {companyName}
              </Text>
              <Text className="text-[12px] text-gray-500 text-center mb-[8px] m-0">
                123 Event Street, Chandigarh, Punjab 160017, India
              </Text>
              <Text className="text-[12px] text-gray-500 text-center mb-[0px] m-0">
                © 2024 {companyName}. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

OffersEmail.PreviewProps = {
  userName: "John Doe",
  offerTitle: "Black Friday Sale - 50% Off Everything!",
  offerDescription:
    "Don't miss our biggest sale of the year. Get 50% off all conference tickets, workshops, and premium content.",
  discountCode: "BLACKFRIDAY50",
  originalPrice: "$299",
  salePrice: "$149",
  expirationDate: "November 30, 2024",
  ctaLink: "https://techconference2024.com/offers/black-friday",
  companyName: "Tech Conference",
  supportEmail: "support@techconference.com",
  offerImage: "https://new.email/static/app/placeholder.png",
};

export default OffersEmail;
