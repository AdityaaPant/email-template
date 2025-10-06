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
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import GlobeLogo from "@/assets/globe";
import Export from "@/assets/export";
import Link from "next/link";
const PreSaleEarlyAccessEmail = (props: any) => {
  const {
    userName = "John Doe",
    productName = "Tech Conference 2024",
    earlyAccessDate = "December 1, 2024",
    earlyAccessTime = "9:00 AM IST",
    publicSaleDate = "December 5, 2024",
    earlyBirdDiscount = "30%",
    accessLink = "https://techconference2024.com/early-access",
    accessCode = "EARLY2024",
    companyName = "Tech Conference",
    supportEmail = "support@techconference.com",
    productImage = "https://new.email/static/app/placeholder.png",
  } = props;

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>
        🎉 Early Access Invite: {productName} - Exclusive pre-sale starts{" "}
        {earlyAccessDate}
      </Preview>
      <Tailwind>
        <Body className="bg-black font-sans py-[40px]">
          <Container className="bg-black mx-auto px-[20px] py-[40px] max-w-[600px] rounded-[8px]">
            {/* Header */}
            <div className="rounded-[20px] bg-white/10">
              <div>
                <GlobeLogo />
                <p>Avenue</p>
              </div>
              <Link href="avenueticket.com">
                <div>
                  <Export />
                  <p>View in browser</p>
                </div>
              </Link>
            </div>

            {/* Product Image */}
            <Section className="mb-[32px]">
              <Img
                src={productImage}
                alt={productName}
                className="w-full h-auto object-cover rounded-[8px]"
              />
            </Section>

            {/* VIP Message */}
            <Section className="bg-purple-50 border border-purple-200 rounded-[8px] p-[24px] mb-[32px]">
              <Text className="text-[16px] text-purple-700 mb-[12px]">
                Hi <strong>{userName}</strong>,
              </Text>
              <Text className="text-[16px] text-purple-700 mb-[12px]">
                You've been selected for <strong>exclusive early access</strong>{" "}
                to {productName}!
              </Text>
              <Text className="text-[16px] text-purple-700 mb-[0px]">
                Get your tickets before anyone else and save{" "}
                <strong>{earlyBirdDiscount}</strong>.
              </Text>
            </Section>

            {/* Early Access Details */}
            <Section className="bg-gold-50 border border-yellow-300 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[18px] font-bold text-yellow-800 mb-[12px] text-center">
                🌟 VIP Early Access Details
              </Text>
              <Row className="mb-[8px]">
                <Column className="w-[50%]">
                  <Text className="text-[14px] font-semibold text-yellow-700 mb-[4px]">
                    Early Access Starts
                  </Text>
                  <Text className="text-[16px] font-bold text-yellow-800 mb-[0px]">
                    {earlyAccessDate}
                  </Text>
                  <Text className="text-[14px] text-yellow-700 mb-[0px]">
                    at {earlyAccessTime}
                  </Text>
                </Column>
                <Column className="w-[50%]">
                  <Text className="text-[14px] font-semibold text-yellow-700 mb-[4px]">
                    Public Sale Starts
                  </Text>
                  <Text className="text-[16px] font-bold text-yellow-800 mb-[0px]">
                    {publicSaleDate}
                  </Text>
                  <Text className="text-[14px] text-yellow-700 mb-[0px]">
                    (4 days later)
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Exclusive Benefits */}
            <Section className="bg-green-50 border border-green-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[16px] font-semibold text-green-800 mb-[12px]">
                🎁 Your VIP Benefits
              </Text>
              <Text className="text-[14px] text-green-700 mb-[6px]">
                ✅ <strong>{earlyBirdDiscount} Early Bird Discount</strong>
              </Text>
              <Text className="text-[14px] text-green-700 mb-[6px]">
                ✅ <strong>First pick</strong> of premium seats
              </Text>
              <Text className="text-[14px] text-green-700 mb-[6px]">
                ✅ <strong>Exclusive VIP networking</strong> session
              </Text>
              <Text className="text-[14px] text-green-700 mb-[0px]">
                ✅ <strong>Priority support</strong> & concierge service
              </Text>
            </Section>

            {/* Access Code */}
            <Section className="bg-blue-50 border border-blue-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[16px] font-semibold text-blue-800 mb-[8px] text-center">
                🔑 Your Exclusive Access Code
              </Text>
              <Text className="text-[24px] font-bold font-mono text-center bg-blue-200 p-[12px] rounded-[8px] text-blue-900 mb-[8px]">
                {accessCode}
              </Text>
              <Text className="text-[14px] text-blue-700 text-center mb-[0px]">
                Keep this code handy - you'll need it!
              </Text>
            </Section>

            {/* CTA Button */}
            <Section className="text-center mb-[32px]">
              <Section className="bg-purple-600 rounded-[8px] px-[32px] py-[16px] inline-block">
                <Text className="text-[18px] font-bold text-white mb-[0px]">
                  <a
                    href={accessLink}
                    className="text-white no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🚀 Get Early Access Now
                  </a>
                </Text>
              </Section>
              <Text className="text-[14px] text-purple-600 font-semibold mt-[12px] mb-[0px]">
                Available from {earlyAccessDate} at {earlyAccessTime}
              </Text>
            </Section>

            {/* Countdown */}
            <Section className="bg-red-50 border border-red-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[16px] font-semibold text-red-800 mb-[8px] text-center">
                ⏰ Limited Time Exclusive Access
              </Text>
              <Text className="text-[14px] text-red-700 text-center mb-[8px]">
                Early access is only available for <strong>4 days</strong>{" "}
                before public sale
              </Text>
              <Text className="text-[14px] text-red-700 text-center mb-[0px]">
                Don't miss your chance to secure the best seats!
              </Text>
            </Section>

            {/* Why You Were Selected */}
            <Section className="bg-orange-50 border border-orange-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[16px] font-semibold text-orange-800 mb-[8px]">
                🌟 Why You Were Selected
              </Text>
              <Text className="text-[14px] text-orange-700 mb-[6px]">
                • Previous attendee with excellent feedback
              </Text>
              <Text className="text-[14px] text-orange-700 mb-[6px]">
                • Active community member
              </Text>
              <Text className="text-[14px] text-orange-700 mb-[0px]">
                • Part of our VIP subscriber list
              </Text>
            </Section>

            {/* What to Expect */}
            <Section className="bg-gray-50 border border-gray-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[16px] font-semibold text-gray-800 mb-[8px]">
                🎯 What to Expect
              </Text>
              <Text className="text-[14px] text-gray-700 mb-[6px]">
                • 2-day premium tech conference
              </Text>
              <Text className="text-[14px] text-gray-700 mb-[6px]">
                • 20+ industry-leading speakers
              </Text>
              <Text className="text-[14px] text-gray-700 mb-[6px]">
                • Hands-on workshops & networking
              </Text>
              <Text className="text-[14px] text-gray-700 mb-[0px]">
                • Exclusive VIP experiences
              </Text>
            </Section>

            {/* Support */}
            <Section className="text-center mb-[32px]">
              <Text className="text-[14px] text-gray-600 mb-[0px]">
                Questions? Email {supportEmail} (VIP Support)
              </Text>
            </Section>

            <Hr className="border-gray-200 mb-[32px]" />

            {/* Footer */}
            <Footer companyName={companyName} supportEmail={supportEmail} />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

PreSaleEarlyAccessEmail.PreviewProps = {
  userName: "John Doe",
  productName: "Tech Conference 2024",
  earlyAccessDate: "December 1, 2024",
  earlyAccessTime: "9:00 AM IST",
  publicSaleDate: "December 5, 2024",
  earlyBirdDiscount: "30%",
  accessLink: "https://techconference2024.com/early-access",
  accessCode: "EARLY2024",
  companyName: "Tech Conference",
  supportEmail: "support@techconference.com",
  productImage: "https://new.email/static/app/placeholder.png",
};

export default PreSaleEarlyAccessEmail;
