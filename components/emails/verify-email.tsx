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

const VerifyEmailAddress = (props: any) => {
  const {
    userName = "John Doe",
    userEmail = "john.doe@example.com",
    verificationCode = "VER-2024-789456",
    verificationLink = "https://techconference2024.com/verify?token=abc123xyz789",
    expirationTime = "24 hours",
    supportEmail = "support@techconference.com",
    companyName = "Tech Conference",
    requestTime = "November 20, 2024 at 2:30 PM IST",
    ipAddress = "192.168.1.100",
    deviceInfo = "Chrome on Windows",
  } = props;

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>
        Please verify your email address to complete your registration
      </Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white mx-auto px-[20px] py-[40px] max-w-[600px] rounded-[8px]">
            {/* Header */}
            <Section className="text-center mb-[32px]">
              <Heading className="text-[32px] font-bold text-blue-600 mb-[8px]">
                📧 Verify Your Email
              </Heading>
              <Text className="text-[18px] text-gray-600 mb-[8px]">
                Just one more step to complete your registration
              </Text>
              <Text className="text-[16px] text-gray-500 mb-[0px]">
                We need to verify your email address to secure your account
              </Text>
            </Section>

            {/* Main Verification Message */}
            <Section className="bg-blue-50 border border-blue-200 rounded-[8px] p-[24px] mb-[32px]">
              <Text className="text-[18px] font-semibold text-blue-800 mb-[12px]">
                Hello {userName},
              </Text>
              <Text className="text-[16px] text-blue-700 mb-[12px]">
                Thank you for registering with <strong>{companyName}</strong>!
                To complete your account setup and ensure the security of your
                account, please verify your email address.
              </Text>
              <Text className="text-[16px] text-blue-700 mb-[12px]">
                We've sent this verification request to:{" "}
                <strong>{userEmail}</strong>
              </Text>
              <Text className="text-[16px] text-blue-700 mb-[0px]">
                Click the button below or use the verification code to confirm
                your email address.
              </Text>
            </Section>

            {/* Verification Button */}
            <Section className="text-center mb-[32px]">
              <Section className="bg-green-600 rounded-[8px] px-[32px] py-[16px] inline-block">
                <Text className="text-[18px] font-bold text-white mb-[0px]">
                  <a
                    href={verificationLink}
                    className="text-white no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ✅ Verify Email Address
                  </a>
                </Text>
              </Section>
              <Text className="text-[14px] text-gray-600 mt-[12px] mb-[0px]">
                This link will expire in {expirationTime}
              </Text>
            </Section>

            {/* Alternative Verification Method */}
            <Section className="bg-gray-50 border border-gray-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[16px] font-semibold text-gray-800 mb-[12px]">
                🔑 Alternative Verification Method
              </Text>
              <Text className="text-[14px] text-gray-700 mb-[8px]">
                If the button above doesn't work, you can also verify your email
                by:
              </Text>
              <Text className="text-[14px] text-gray-700 mb-[8px]">
                1. Copying and pasting this link into your browser:
              </Text>
              <Text className="text-[12px] font-mono bg-gray-100 p-[8px] rounded-[4px] text-gray-800 mb-[12px] break-all">
                {verificationLink}
              </Text>
              <Text className="text-[14px] text-gray-700 mb-[4px]">
                2. Or use this verification code on our website:
              </Text>
              <Text className="text-[20px] font-bold font-mono text-center bg-yellow-100 p-[12px] rounded-[8px] text-gray-900 mb-[0px]">
                {verificationCode}
              </Text>
            </Section>

            <Hr className="border-gray-200 mb-[32px]" />

            {/* Security Information */}
            <Section className="bg-yellow-50 border border-yellow-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[16px] font-semibold text-yellow-800 mb-[12px]">
                🔒 Security Information
              </Text>

              <Row className="mb-[12px]">
                <Column className="w-[50%]">
                  <Text className="text-[14px] font-semibold text-yellow-700 mb-[4px]">
                    Request Time
                  </Text>
                  <Text className="text-[14px] text-yellow-800 mb-[0px]">
                    {requestTime}
                  </Text>
                </Column>
                <Column className="w-[50%]">
                  <Text className="text-[14px] font-semibold text-yellow-700 mb-[4px]">
                    IP Address
                  </Text>
                  <Text className="text-[14px] font-mono text-yellow-800 mb-[0px]">
                    {ipAddress}
                  </Text>
                </Column>
              </Row>

              <Row className="mb-[12px]">
                <Column>
                  <Text className="text-[14px] font-semibold text-yellow-700 mb-[4px]">
                    Device Information
                  </Text>
                  <Text className="text-[14px] text-yellow-800 mb-[0px]">
                    {deviceInfo}
                  </Text>
                </Column>
              </Row>

              <Text className="text-[14px] text-yellow-700 mb-[0px]">
                If you didn't request this verification, please ignore this
                email or contact our support team.
              </Text>
            </Section>

            {/* Why Verify */}
            <Section className="bg-purple-50 border border-purple-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[16px] font-semibold text-purple-800 mb-[12px]">
                🛡️ Why Do We Need Email Verification?
              </Text>
              <Text className="text-[14px] text-purple-700 mb-[8px]">
                Email verification helps us ensure:
              </Text>
              <Text className="text-[14px] text-purple-700 mb-[6px]">
                ✅ <strong>Account Security:</strong> Protect your account from
                unauthorized access
              </Text>
              <Text className="text-[14px] text-purple-700 mb-[6px]">
                ✅ <strong>Communication:</strong> Send you important updates
                and notifications
              </Text>
              <Text className="text-[14px] text-purple-700 mb-[6px]">
                ✅ <strong>Password Recovery:</strong> Help you regain access if
                you forget your password
              </Text>
              <Text className="text-[14px] text-purple-700 mb-[6px]">
                ✅ <strong>Event Updates:</strong> Keep you informed about your
                registrations and events
              </Text>
              <Text className="text-[14px] text-purple-700 mb-[0px]">
                ✅ <strong>Spam Prevention:</strong> Ensure our emails reach
                your inbox, not spam folder
              </Text>
            </Section>

            {/* What Happens Next */}
            <Section className="bg-green-50 border border-green-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[16px] font-semibold text-green-800 mb-[12px]">
                🚀 What Happens After Verification?
              </Text>
              <Text className="text-[14px] text-green-700 mb-[8px]">
                Once you verify your email address, you'll be able to:
              </Text>
              <Text className="text-[14px] text-green-700 mb-[6px]">
                • Access your complete account dashboard
              </Text>
              <Text className="text-[14px] text-green-700 mb-[6px]">
                • Receive important event notifications and updates
              </Text>
              <Text className="text-[14px] text-green-700 mb-[6px]">
                • Download your tickets and access exclusive content
              </Text>
              <Text className="text-[14px] text-green-700 mb-[6px]">
                • Join our community forums and networking platform
              </Text>
              <Text className="text-[14px] text-green-700 mb-[6px]">
                • Manage your event preferences and profile settings
              </Text>
              <Text className="text-[14px] text-green-700 mb-[0px]">
                • Receive personalized event recommendations
              </Text>
            </Section>

            {/* Troubleshooting */}
            <Section className="bg-orange-50 border border-orange-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[16px] font-semibold text-orange-800 mb-[12px]">
                ⚠️ Having Trouble?
              </Text>
              <Text className="text-[14px] text-orange-700 mb-[8px]">
                If you're experiencing issues with verification:
              </Text>
              <Text className="text-[14px] text-orange-700 mb-[6px]">
                🔍 <strong>Check your spam folder</strong> - Our emails
                sometimes end up there
              </Text>
              <Text className="text-[14px] text-orange-700 mb-[6px]">
                ⏰ <strong>Wait a few minutes</strong> - Email delivery can take
                up to 10 minutes
              </Text>
              <Text className="text-[14px] text-orange-700 mb-[6px]">
                🔗 <strong>Try the alternative link</strong> - Copy-paste the
                full URL if the button doesn't work
              </Text>
              <Text className="text-[14px] text-orange-700 mb-[6px]">
                🔄 <strong>Request a new code</strong> - Visit our website to
                resend verification
              </Text>
              <Text className="text-[14px] text-orange-700 mb-[0px]">
                📞 <strong>Contact support</strong> - We're here to help if
                nothing else works
              </Text>
            </Section>

            {/* Expiration Warning */}
            <Section className="bg-red-50 border border-red-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[16px] font-semibold text-red-800 mb-[8px]">
                ⏳ Important: Verification Link Expires Soon
              </Text>
              <Text className="text-[14px] text-red-700 mb-[8px]">
                This verification link will expire in{" "}
                <strong>{expirationTime}</strong> for security reasons.
              </Text>
              <Text className="text-[14px] text-red-700 mb-[8px]">
                If the link expires, you can request a new verification email
                from your account dashboard or by visiting our website.
              </Text>
              <Text className="text-[14px] text-red-700 mb-[0px]">
                Please verify your email as soon as possible to avoid any delays
                in accessing your account.
              </Text>
            </Section>

            {/* Contact Information */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] font-semibold text-gray-700 mb-[8px]">
                Need Help? Contact Our Support Team
              </Text>
              <Text className="text-[14px] text-gray-600 mb-[4px]">
                Email: {supportEmail} (Subject: Email Verification -{" "}
                {verificationCode})
              </Text>
              <Text className="text-[14px] text-gray-600 mb-[4px]">
                Phone: +91 98765 43210 (Support hours: 9 AM - 7 PM IST, Mon-Sat)
              </Text>
              <Text className="text-[14px] text-gray-600 mb-[4px]">
                Live Chat: Available on our website during business hours
              </Text>
              <Text className="text-[14px] text-gray-600 mb-[0px]">
                Our support team typically responds within 2 hours during
                business hours.
              </Text>
            </Section>

            <Hr className="border-gray-200 mb-[32px]" />

            {/* Footer */}
            <Section>
              <Text className="text-[16px] text-center font-semibold text-gray-800 mb-[12px]">
                Thank you for choosing {companyName}! 🎉
              </Text>
              <Text className="text-[14px] text-center text-gray-600 mb-[12px]">
                We're excited to have you as part of our community and look
                forward to providing you with an amazing experience.
              </Text>
              <Text className="text-[12px] text-gray-500 text-center mb-[8px] m-0">
                {companyName} Team
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

VerifyEmailAddress.PreviewProps = {
  userName: "John Doe",
  userEmail: "john.doe@example.com",
  verificationCode: "VER-2024-789456",
  verificationLink: "https://techconference2024.com/verify?token=abc123xyz789",
  expirationTime: "24 hours",
  supportEmail: "support@techconference.com",
  companyName: "Tech Conference",
  requestTime: "November 20, 2024 at 2:30 PM IST",
  ipAddress: "192.168.1.100",
  deviceInfo: "Chrome on Windows",
};

export default VerifyEmailAddress;
