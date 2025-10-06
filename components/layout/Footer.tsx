import * as React from "react";
import { Section, Text } from "@react-email/components";

type FooterProps = {
  companyName?: string;
  supportEmail?: string;
  children?: React.ReactNode;
};

export const Footer: React.FC<FooterProps> = ({
  companyName = "Your Company",
  supportEmail = "support@example.com",
  children,
}) => {
  return (
    <Section>
      {children}
      <Text className="text-[14px] text-center font-semibold text-purple-700 mb-[8px]">
        Welcome to the VIP Club! 🎉
      </Text>
      <Text className="text-[12px] text-gray-500 text-center mb-[8px] m-0">
        {companyName} - VIP Early Access Program
      </Text>
      <Text className="text-[12px] text-gray-500 text-center mb-[0px] m-0">
        © {new Date().getFullYear()} {companyName}. All rights reserved.
      </Text>
      <Text className="text-[12px] text-gray-500 text-center mt-[8px]">
        Support: {supportEmail}
      </Text>
    </Section>
  );
};

export default Footer;
