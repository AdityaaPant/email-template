import * as React from "react";
import { Section, Heading, Text } from "@react-email/components";
import GlobeLogo from "@/assets/globe";
import Export from "@/assets/export";
import Link from "next/link";
type HeaderProps = {
  title?: string;
  subtitle?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

export const Header: React.FC<HeaderProps> = ({
  title = "You're Invited!",
  subtitle = "Exclusive Early Access",
  titleClassName = "text-[32px] font-bold text-purple-600 mb-[8px]",
  subtitleClassName = "text-[18px] text-purple-700 font-semibold mb-[0px]",
}) => {
  return (
    <Section className="text-center mb-[32px]">
      <div className="rounded-[20px] bg-white/10">
        <div>
          <GlobeLogo />
          <p>Avenue</p>
        </div>
        <Link href="avenueticket.com">
          <div>
            <Export />
            <p>View </p>
          </div>
        </Link>
      </div>
    </Section>
  );
};

export default Header;
