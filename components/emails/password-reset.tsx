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

const PasswordResetEmail = (props: any) => {
  const {
    userName = "John Doe",
    userEmail = "john.doe@example.com",
    resetLink = "https://techconference2024.com/reset-password?token=abc123xyz789",
    resetCode = "RST-456789",
    expirationTime = "1 hour",
    requestTime = "November 20, 2024 at 3:45 PM IST",
    ipAddress = "192.168.1.100",
    supportEmail = "security@techconference.com",
    companyName = "Tech Conference",
  } = props;

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>Reset your password - expires in {expirationTime}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white mx-auto px-[20px] py-[40px] max-w-[600px] rounded-[8px]">
            {/* Header */}
            <Section className="text-center mb-[32px]">
              <Heading className="text-[32px] font-bold text-orange-600 mb-[8px]">
                🔐 Reset Your Password
              </Heading>
              <Text className="text-[16px] text-gray-600 mb-[0px]">
                We received a request to reset your password
              </Text>
            </Section>

            {/* Main Message */}
            <Section className="bg-orange-50 border border-orange-200 rounded-[8px] p-[24px] mb-[32px]">
              <Text className="text-[16px] text-orange-700 mb-[12px]">
                Hello <strong>{userName}</strong>,
              </Text>
              <Text className="text-[16px] text-orange-700 mb-[12px]">
                Click the button below to reset your password for{" "}
                <strong>{userEmail}</strong>.
              </Text>
              <Text className="text-[16px] text-orange-700 mb-[0px]">
                This link expires in <strong>{expirationTime}</strong>.
              </Text>
            </Section>

            {/* Reset Button */}
            <Section className="text-center mb-[32px]">
              <Section className="bg-red-600 rounded-[8px] px-[32px] py-[16px] inline-block">
                <Text className="text-[18px] font-bold text-white mb-[0px]">
                  <a
                    href={resetLink}
                    className="text-white no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reset Password
                  </a>
                </Text>
              </Section>
              <Text className="text-[14px] text-red-600 font-semibold mt-[12px] mb-[0px]">
                Expires in {expirationTime}
              </Text>
            </Section>

            {/* Alternative Method */}
            <Section className="bg-gray-50 border border-gray-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[16px] font-semibold text-gray-800 mb-[8px]">
                Button not working?
              </Text>
              <Text className="text-[14px] text-gray-700 mb-[8px]">
                Copy this link:
              </Text>
              <Text className="text-[12px] font-mono bg-gray-100 p-[8px] rounded-[4px] text-gray-800 mb-[12px] break-all">
                {resetLink}
              </Text>
              <Text className="text-[14px] text-gray-700 mb-[4px]">
                Or use code: <strong>{resetCode}</strong>
              </Text>
            </Section>

            {/* Security Info */}
            <Section className="bg-yellow-50 border border-yellow-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[16px] font-semibold text-yellow-800 mb-[8px]">
                🚨 Security Alert
              </Text>
              <Row className="mb-[8px]">
                <Column className="w-[50%]">
                  <Text className="text-[14px] text-yellow-700 mb-[0px]">
                    <strong>Time:</strong> {requestTime}
                  </Text>
                </Column>
                <Column className="w-[50%]">
                  <Text className="text-[14px] text-yellow-700 mb-[0px]">
                    <strong>IP:</strong> {ipAddress}
                  </Text>
                </Column>
              </Row>
              <Text className="text-[14px] text-yellow-700 mb-[0px]">
                Didn't request this? Contact {supportEmail}
              </Text>
            </Section>

            {/* Password Tips */}
            <Section className="bg-blue-50 border border-blue-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[16px] font-semibold text-blue-800 mb-[8px]">
                💡 New Password Requirements
              </Text>
              <Text className="text-[14px] text-blue-700 mb-[4px]">
                • At least 8 characters
              </Text>
              <Text className="text-[14px] text-blue-700 mb-[4px]">
                • Mix of letters, numbers & symbols
              </Text>
              <Text className="text-[14px] text-blue-700 mb-[0px]">
                • Different from previous passwords
              </Text>
            </Section>

            {/* Support */}
            <Section className="text-center mb-[32px]">
              <Text className="text-[14px] text-gray-600 mb-[4px]">
                Need help? Email: {supportEmail}
              </Text>
              <Text className="text-[14px] text-gray-600 mb-[0px]">
                Emergency: +91 98765 43210
              </Text>
            </Section>

            <Hr className="border-gray-200 mb-[32px]" />

            {/* Footer */}
            <Section>
              <Text className="text-[12px] text-gray-500 text-center mb-[8px] m-0">
                {companyName} Security Team
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

PasswordResetEmail.PreviewProps = {
  userName: "John Doe",
  userEmail: "john.doe@example.com",
  resetLink: "https://techconference2024.com/reset-password?token=abc123xyz789",
  resetCode: "RST-456789",
  expirationTime: "1 hour",
  requestTime: "November 20, 2024 at 3:45 PM IST",
  ipAddress: "192.168.1.100",
  supportEmail: "security@techconference.com",
  companyName: "Tech Conference",
};

export default PasswordResetEmail;
