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
  Link,
  Img,
  Tailwind,
} from "@react-email/components";

const eventPostpone = (props: any) => {
  const {
    attendeeName = "John Doe",
    eventName = "Tech Conference 2024",
    eventDate = "December 15, 2024",
    eventTime = "9:00 AM - 6:00 PM IST",
    venue = "Convention Center, Sector 17, Chandigarh",
    venueName = "Convention Center",
    venueAddress = "Sector 17, Chandigarh",
    venueCity = "Chandigarh, India",
    ticketNumber = "TC2024-001234",
    ticketType = "General Admission",
    orderNumber = "ORD-789456123",
    qrCodeUrl = "https://assets.avenueticketing.com/email-template/qrCode.png",
    refundAmount = "$150.00",
    processingTime = "5-7 business days",
    tickets = [
      { type: "Regular", quantity: 2, price: "$75.00 each" },
      { type: "Early Bird", quantity: 1, price: "$60.00 each" },
    ],
    ticketDetails = [
      { type: "Regular", section: "GA", row: "2", seat: "42", price: "$39" },
      { type: "Regular", section: "GA", row: "2", seat: "43", price: "$39" },
      {
        type: "Early Bird",
        section: "VIP",
        row: "1",
        seat: "12",
        price: "$19",
      },
    ],
  } = props;

  return (
    <Html lang="en" dir="ltr">
      <Head>
        <style>{`
          @media only screen and (max-width: 600px) {
            .heading-responsive { font-size: 28px !important; }
            .text-large-responsive { font-size: 20px !important; }
            .text-medium-responsive { font-size: 14px !important; }
            .text-small-responsive { font-size: 12px !important; }
            .text-tiny-responsive { font-size: 11px !important; }
            .logo-text-responsive { font-size: 16px !important; }
            .contact-column { 
              width: 100% !important; 
              padding-left: 0 !important; 
              padding-right: 0 !important; 
              margin-bottom: 16px !important;
              display: block !important;
            }
            .contact-row {
              display: block !important;
            }
            .thank-you-icon {
              width: 40px !important;
              height: 40px !important;
              margin-bottom: 12px !important;
            }
            .thank-you-icon svg {
              width: 20px !important;
              height: 20px !important;
            }
          }
          @media only screen and (max-width: 480px) {
            .contact-column { 
              width: 100% !important; 
              padding-left: 0 !important; 
              padding-right: 0 !important; 
              margin-bottom: 16px !important;
              display: block !important;
            }
            .text-large-responsive { font-size: 18px !important; }
            .text-medium-responsive { font-size: 13px !important; }
            .thank-you-icon {
              width: 36px !important;
              height: 36px !important;
              margin-bottom: 10px !important;
            }
            .thank-you-icon svg {
              width: 18px !important;
              height: 18px !important;
            }
          }
        `}</style>
      </Head>
      <Preview>
        Your ticket for {eventName} is cancelled! More details inside.
      </Preview>
      <Tailwind>
        <Body className="bg-[#0A0A0A] font-sans py-[40px] px-[20px]">
          <Container className="bg-[#0A0A0A] mx-auto max-w-[600px]">
            <Section
              className="mb-[40px] "
              style={{
                border: "1px solid #FFFFFF13",
                padding: "16px",
                borderRadius: "50px",
                backgroundColor: "#232323",
              }}
            >
              <Row>
                <Column style={{ width: "auto", verticalAlign: "middle" }}>
                  <table style={{ margin: 0, padding: 0 }}>
                    <tr>
                      <td
                        style={{ verticalAlign: "middle", paddingRight: "8px" }}
                      >
                        <Img
                          src="https://assets.avenueticketing.com/email-template/avenueLogo.png"
                          alt="Avenue logo"
                          width="150"
                          height="25"
                        />
                      </td>
                    </tr>
                  </table>
                </Column>
                <Column style={{ textAlign: "right", verticalAlign: "middle" }}>
                  <table style={{ margin: "0 0 0 auto", padding: 0 }}>
                    <tr>
                      <td
                        style={{
                          verticalAlign: "middle",
                          paddingRight: "4px",
                        }}
                      >
                        <Img
                          src="https://assets.avenueticketing.com/email-template/link.png"
                          alt="Browser icon"
                          width="16"
                          height="16"
                        />
                      </td>
                      <td style={{ verticalAlign: "middle" }}>
                        <Text
                          className="text-gray-400 text-[14px]"
                          style={{ lineHeight: "1", margin: "0" }}
                        >
                          View in browser
                        </Text>
                      </td>
                    </tr>
                  </table>
                </Column>
              </Row>
            </Section>
            {/* Thank You Banner */}
            <Section
              className="bg-[#B5D4DD] rounded-[12px] mb-[16px] text-center"
              style={{ padding: "20px" }}
            >
              <div
                className="thank-you-icon"
                style={{
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px auto",
                  textAlign: "center",
                }}
              >
                <Img
                  src="https://assets.avenueticketing.com/email-template/eventCancel.png"
                  alt="Checkmark Icon"
                  width="50"
                  height="50"
                  style={{ display: "block" }}
                />
              </div>
              <Text
                className="text-large-responsive"
                style={{
                  fontSize: "36px",
                  fontWeight: "normal",
                  color: "black",
                  lineHeight: "1",
                  maxWidth: "350px",
                  textAlign: "center",
                  margin: "0 auto 8px auto",
                }}
              >
                Your event has been postponed
              </Text>
              <Text
                className="text-medium-responsive "
                style={{
                  fontSize: "16px",

                  opacity: "0.7",
                  margin: "0",
                  color: "#00000080",
                }}
              >
                This is just a heads up - your tickets are still valid
              </Text>
            </Section>
            {/* Event Card */}
            <Section className="bg-[#121212] border border-[#FFFFFF13] rounded-[12px] mb-[24px] overflow-hidden">
              {/* Event Image */}
              <div style={{ padding: "8px" }}>
                <Img
                  src="https://assets.avenueticketing.com/email-template/bg.png"
                  alt="Event image"
                  width="100%"
                  height="200"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "200px",
                    objectFit: "fill",
                    borderRadius: "8px",
                  }}
                />
              </div>

              <div className="p-[20px]">
                {/* Event Title */}
                <Text className="text-white text-[24px] font-bold mb-[16px] text-large-responsive">
                  {eventName}
                </Text>

                {/* Event Details */}
                <table
                  style={{
                    margin: "0 0 12px 0",
                    padding: 0,
                    borderSpacing: "0",
                  }}
                >
                  <tr>
                    <td
                      style={{ verticalAlign: "middle", paddingRight: "8px" }}
                    >
                      <Img
                        src="https://assets.avenueticketing.com/email-template/calendar-1.png"
                        alt="Calendar icon"
                        width="16"
                        height="16"
                        style={{ display: "block" }}
                      />
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      <Text
                        className="text-gray-400 text-[14px] text-small-responsive"
                        style={{ margin: "0", lineHeight: "1.4" }}
                      >
                        {eventDate}, {eventTime}
                      </Text>
                    </td>
                  </tr>
                </table>

                <table
                  style={{
                    margin: "0 0 16px 0",
                    padding: 0,
                    borderSpacing: "0",
                  }}
                >
                  <tr>
                    <td style={{ verticalAlign: "top", paddingRight: "8px" }}>
                      <Img
                        src="https://assets.avenueticketing.com/email-template/map.png"
                        alt="Location icon"
                        width="16"
                        height="16"
                        style={{ display: "block", marginTop: "2px" }}
                      />
                    </td>
                    <td style={{ verticalAlign: "top" }}>
                      <Text
                        className="text-gray-400 text-[14px] text-small-responsive"
                        style={{ margin: "0 0 4px 0", lineHeight: "1.4" }}
                      >
                        {venueName}
                      </Text>
                      <Text
                        className="text-gray-400 text-[14px] text-small-responsive"
                        style={{ margin: "0 0 4px 0", lineHeight: "1.4" }}
                      >
                        {venueAddress}
                      </Text>
                      <Text
                        className="text-gray-400 text-[14px] text-small-responsive"
                        style={{ margin: "0", lineHeight: "1.4" }}
                      >
                        {venueCity}
                      </Text>
                    </td>
                  </tr>
                </table>

                {/* Ticket Quantities */}
                {tickets.map((ticket: any, index: number) => (
                  <table
                    key={index}
                    style={{
                      margin: "0 0 4px 0",
                      padding: 0,
                      borderSpacing: "0",
                    }}
                  >
                    <tr>
                      <td
                        style={{ verticalAlign: "middle", paddingRight: "8px" }}
                      >
                        <Img
                          src="https://assets.avenueticketing.com/email-template/ticket.png"
                          alt="Ticket icon"
                          width="16"
                          height="16"
                          style={{ display: "block" }}
                        />
                      </td>
                      <td style={{ verticalAlign: "middle" }}>
                        <Text
                          className="text-gray-400 text-[14px] text-small-responsive"
                          style={{ margin: "0", lineHeight: "1.4" }}
                        >
                          {ticket.type} × {ticket.quantity}
                        </Text>
                      </td>
                    </tr>
                  </table>
                ))}

                {/* Action Buttons - Remove the description from here */}
              </div>
            </Section>
            {/* Event Cancellation Info */}
            <Section className="mb-[24px]">
              <Text className="text-white text-[16px] font-normal mb-[16px]">
                Reschedule
              </Text>
              <Text className="text-gray-300 text-[14px] mb-[24px]">
                The event organizer is still trying to reschedule your event; if
                they do, your tickets will remain good for the rescheduled date.
                Hang on to your tickets - we'll email you as soon as the new
                date is announced. We understand that you might not be able to
                make it, so we
              </Text>
            </Section>
            {/* Order Summary */}
            <Section
              className="bg-[#000000] rounded-[12px] mb-[24px]"
              style={{ border: "1px solid #FFFFFF13" }}
            >
              <div
                className="flex items-center gap-[8px] p-3 rounded-t-[12px]"
                style={{
                  borderBottom: "1px solid #FFFFFF13",
                  backgroundColor: "#101010",
                }}
              >
                <Img
                  src="https://assets.avenueticketing.com/email-template/options.png"
                  alt="Order summary icon"
                  width="20"
                  height="20"
                  className="inline-block"
                />
                <Text className="text-white text-[18px] font-semibold m-0 text-large-responsive">
                  Order summary
                </Text>
              </div>
              <div className="p-3">
                {/* Order ID */}
                <div className="mb-[16px]">
                  <Text className="text-white text-[16px] font-medium mb-[4px] text-medium-responsive">
                    Order
                  </Text>
                  <Text className="text-gray-400 text-[14px] text-small-responsive">
                    {orderNumber}
                  </Text>
                </div>

                {/* Two Column Layout */}
                <Row>
                  {/* Purchase Column */}
                  <Column className="w-[50%] pr-2">
                    <Text className="text-white text-[16px] font-medium mb-[8px] text-medium-responsive">
                      Purchase
                    </Text>
                    <Text className="text-gray-400 text-[14px] mb-[4px] text-small-responsive">
                      {venueName}
                    </Text>
                    <Text className="text-gray-400 text-[14px] text-small-responsive">
                      {eventDate}, {eventTime}
                    </Text>
                  </Column>

                  {/* Billing Column */}
                  <Column className="w-[50%] pl-2">
                    <Text className="text-white text-[16px] font-medium mb-[8px] text-medium-responsive">
                      Billing
                    </Text>
                    <Text className="text-gray-400 text-[14px] mb-[4px] text-small-responsive">
                      {attendeeName}
                    </Text>
                    <Text className="text-gray-400 text-[14px] mb-[4px] text-small-responsive">
                      Payment method: Amex
                    </Text>
                    <Text className="text-gray-400 text-[14px] mb-[4px] text-small-responsive">
                      Charge: $97
                    </Text>
                    <Text className="text-gray-400 text-[14px] text-small-responsive">
                      Last 4 digits: 9090
                    </Text>
                  </Column>
                </Row>
              </div>
            </Section>{" "}
            {/* Your Order */}
            <Section
              className="bg-[#000000] rounded-[12px] mb-[24px]"
              style={{ border: "1px solid #FFFFFF13" }}
            >
              <div
                className="flex items-center gap-[8px] p-3 rounded-t-[12px]"
                style={{
                  borderBottom: "1px solid #FFFFFF13",
                  backgroundColor: "#101010",
                }}
              >
                <Img
                  src="https://assets.avenueticketing.com/email-template/lock.png"
                  alt="Your order icon"
                  width="20"
                  height="20"
                  className="inline-block"
                />
                <Text className="text-white text-[18px] font-semibold m-0 text-large-responsive">
                  Refund Summary
                </Text>
              </div>
              <div className="p-3">
                {/* Dynamic Ticket Details - Row Style */}
                {ticketDetails.map((ticket: any, index: number) => (
                  <div
                    key={index}
                    className={`${index !== ticketDetails.length - 1 ? "mb-[8px] pb-[8px]" : ""}`}
                    style={{
                      borderBottom:
                        index !== ticketDetails.length - 1
                          ? "1px solid #FFFFFF13"
                          : "none",
                    }}
                  >
                    {/* Headers Row */}
                    <table
                      style={{ width: "100%", margin: "0 0 4px 0", padding: 0 }}
                    >
                      <tr>
                        <td style={{ width: "25%", padding: "0 8px 0 0" }}>
                          <Text className="text-gray-400 text-[12px] font-medium text-tiny-responsive my-1">
                            SECTION
                          </Text>
                        </td>
                        <td style={{ width: "25%", padding: "0 8px" }}>
                          <Text className="text-gray-400 text-[12px] font-medium text-tiny-responsive my-1">
                            ROW
                          </Text>
                        </td>
                        <td style={{ width: "25%", padding: "0 8px" }}>
                          <Text className="text-gray-400 text-[12px] font-medium text-tiny-responsive my-1">
                            SEAT
                          </Text>
                        </td>
                        <td style={{ width: "25%", padding: "0 0 0 8px" }}>
                          <Text className="text-gray-400 text-[12px] font-medium text-tiny-responsive my-1">
                            PRICE
                          </Text>
                        </td>
                      </tr>
                    </table>

                    {/* Values Row */}
                    <table style={{ width: "100%", margin: 0, padding: 0 }}>
                      <tr>
                        <td
                          style={{
                            width: "25%",
                            padding: "0 8px 0 0",
                            verticalAlign: "middle",
                            marginTop: "4px",
                            marginBottom: "4px",
                          }}
                        >
                          <table style={{ margin: 0, padding: 0 }}>
                            <tr>
                              <td
                                style={{
                                  verticalAlign: "middle",
                                  paddingRight: "8px",
                                }}
                              >
                                <Img
                                  src="https://assets.avenueticketing.com/email-template/ticket.png"
                                  alt="Ticket icon"
                                  width="16"
                                  height="16"
                                />
                              </td>
                              <td style={{ verticalAlign: "middle" }}>
                                <Text className="text-white text-[16px] font-medium text-medium-responsive">
                                  {ticket.type}
                                </Text>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td
                          style={{
                            width: "25%",
                            padding: "0 8px",
                            verticalAlign: "middle",
                          }}
                        >
                          <Text className="text-white text-[16px] text-medium-responsive my-1">
                            {ticket.row}
                          </Text>
                        </td>
                        <td
                          style={{
                            width: "25%",
                            padding: "0 8px",
                            verticalAlign: "middle",
                          }}
                        >
                          <Text className="text-white text-[16px] text-medium-responsive my-1">
                            {ticket.seat}
                          </Text>
                        </td>
                        <td
                          style={{
                            width: "25%",
                            padding: "0 0 0 8px",
                            verticalAlign: "middle",
                          }}
                        >
                          <Text className="text-white text-[16px] text-medium-responsive my-1">
                            {ticket.price}
                          </Text>
                        </td>
                      </tr>
                    </table>
                  </div>
                ))}
              </div>
            </Section>
            {/* Help Section */}
            <Section
              className="bg-[#0A0A0A] rounded-[12px] "
              style={{ border: "1px solid #FFFFFF13" }}
            >
              <div
                className=" flex items-center gap-[8px] p-3 rounded-t-[12px]"
                style={{
                  borderBottom: "1px solid #FFFFFF13",
                  backgroundColor: "#101010",
                }}
              >
                <Img
                  src="https://assets.avenueticketing.com/email-template/help.png"
                  alt="Help icon"
                  width="20"
                  height="20"
                  className="inline-block"
                />
                <Text className="text-white text-[18px] font-semibold m-0 text-large-responsive">
                  Need Help?
                </Text>
              </div>
              <div className="p-3">
                <Text className="text-white text-[16px] font-semibold mb-[4px] mt-[16px] text-medium-responsive">
                  We are here for you
                </Text>
                <Text className="text-gray-400 text-[14px] mb-[24px] mt-0 text-small-responsive">
                  Reach out to us over email or phone 24/7
                </Text>

                <Row className="contact-row">
                  <Column className="w-[50%] pr-[10px] contact-column">
                    <Text className="text-white text-[14px] mb-[8px] mt-0 text-small-responsive">
                      Phone number
                    </Text>
                    <div
                      style={{
                        border: "1px solid #FFFFFF13",
                        borderRadius: "25px",
                        padding: "12px",
                        textAlign: "center",
                      }}
                    >
                      <table style={{ width: "100%", margin: 0, padding: 0 }}>
                        <tr>
                          <td
                            style={{
                              textAlign: "center",
                              verticalAlign: "middle",
                            }}
                          >
                            <table
                              style={{
                                margin: "0 auto",
                                padding: 0,
                                borderSpacing: "0 0",
                              }}
                            >
                              <tr>
                                <td
                                  style={{
                                    verticalAlign: "middle",
                                    paddingRight: "8px",
                                  }}
                                >
                                  <Img
                                    src="https://assets.avenueticketing.com/email-template/Flag.png"
                                    alt="Phone icon"
                                    width="16"
                                    height="16"
                                  />
                                </td>
                                <td style={{ verticalAlign: "middle" }}>
                                  <Text className="text-white text-[15px] m-0 text-small-responsive">
                                    (555) 987 654
                                  </Text>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </Column>

                  <Column className="w-[50%] pl-[10px] contact-column">
                    <Text className="text-white text-[14px] mb-[8px] mt-0 text-small-responsive">
                      Email Address
                    </Text>
                    <div
                      style={{
                        border: "1px solid #FFFFFF13",
                        borderRadius: "25px",
                        padding: "12px",
                        textAlign: "center",
                      }}
                    >
                      <table style={{ width: "100%", margin: 0, padding: 0 }}>
                        <tr>
                          <td
                            style={{
                              textAlign: "center",
                              verticalAlign: "middle",
                            }}
                          >
                            <table
                              style={{
                                margin: "0 auto",
                                padding: 0,
                                borderSpacing: "0 0",
                              }}
                            >
                              <tr>
                                <td
                                  style={{
                                    verticalAlign: "middle",
                                    paddingRight: "8px",
                                  }}
                                >
                                  <Img
                                    src="https://assets.avenueticketing.com/email-template/mail.png"
                                    alt="Email icon"
                                    width="16"
                                    height="16"
                                  />
                                </td>
                                <td style={{ verticalAlign: "middle" }}>
                                  <Text className="text-white text-[15px] m-0 text-small-responsive">
                                    help@avenue.events
                                  </Text>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </Column>
                </Row>
              </div>
            </Section>
            {/* QR Code Section */}
            {/* QR Code Section */}
            <Section className="text-center mb-[32px]">
              <div className="bg-[#000000] border border-[#FFFFFF13] rounded-[12px] p-[24px] inline-block">
                <Img
                  src={qrCodeUrl}
                  alt="QR Code for ticket entry"
                  className="w-[200px] h-[200px] mx-auto mb-[12px]"
                />
              </div>

              {/* Wallet Buttons */}
              <div className="mt-[16px]">
                <div
                  className="bg-[#000000] rounded-[50px] p-[16px] mb-[8px] text-center"
                  style={{ border: "1px solid #FFFFFF13" }}
                >
                  <table style={{ width: "100%", margin: 0, padding: 0 }}>
                    <tr>
                      <td
                        style={{
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      >
                        <table
                          style={{
                            margin: "0 auto",
                            padding: 0,
                            borderSpacing: "0 0",
                          }}
                        >
                          <tr>
                            <td
                              style={{
                                verticalAlign: "middle",
                                paddingRight: "8px",
                              }}
                            >
                              <Img
                                src="https://assets.avenueticketing.com/email-template/apple.png"
                                alt="Apple Wallet icon"
                                width="20"
                                height="20"
                              />
                            </td>
                            <td style={{ verticalAlign: "middle" }}>
                              <Text className="text-white text-[16px] font-medium m-0 text-medium-responsive">
                                Add to Apple Wallet
                              </Text>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </div>

                <div
                  className="bg-[#000000] rounded-[50px] p-[16px] text-center"
                  style={{ border: "1px solid #FFFFFF13" }}
                >
                  <table style={{ width: "100%", margin: 0, padding: 0 }}>
                    <tr>
                      <td
                        style={{
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      >
                        <table
                          style={{
                            margin: "0 auto",
                            padding: 0,
                            borderSpacing: "0 0",
                          }}
                        >
                          <tr>
                            <td
                              style={{
                                verticalAlign: "middle",
                                paddingRight: "8px",
                              }}
                            >
                              <Img
                                src="https://assets.avenueticketing.com/email-template/google.png"
                                alt="Google Wallet icon"
                                width="20"
                                height="20"
                              />
                            </td>
                            <td style={{ verticalAlign: "middle" }}>
                              <Text className="text-white text-[16px] font-medium m-0 text-medium-responsive">
                                Add to Google Wallet
                              </Text>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </Section>
            {/* Footer */}
            <Section className="text-center pt-[40px]">
              <table style={{ margin: "0 auto", padding: 0 }}>
                <tr>
                  <td style={{ verticalAlign: "middle", paddingRight: "8px" }}>
                    <Img
                      src="https://assets.avenueticketing.com/email-template/avenueLogo.png"
                      alt="Avenue logo"
                      width="150"
                      height="25"
                    />
                  </td>
                </tr>
              </table>

              {/* Social Media Icons */}
              <div style={{ textAlign: "center", margin: "16px 0" }}>
                <table
                  style={{
                    margin: "0 auto",
                    padding: 0,
                    borderSpacing: "16px 0",
                  }}
                >
                  <tr>
                    <td style={{ textAlign: "center" }}>
                      <Link
                        href="https://www.instagram.com/avenueticket/"
                        style={{ textDecoration: "none" }}
                      >
                        <Img
                          src="https://assets.avenueticketing.com/email-template/instagram.png"
                          alt="Instagram"
                          width="24"
                          height="24"
                        />
                      </Link>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <Link
                        href="https://www.facebook.com/people/Avenue-Ticketing/61578022446260/#"
                        style={{ textDecoration: "none" }}
                      >
                        <Img
                          src="https://assets.avenueticketing.com/email-template/facebook.png"
                          alt="Facebook"
                          width="24"
                          height="24"
                        />
                      </Link>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <Link
                        href="https://x.com/avenueticketHQ"
                        style={{ textDecoration: "none" }}
                      >
                        <Img
                          src="https://assets.avenueticketing.com/email-template/twitter.png"
                          alt="Twitter"
                          width="20"
                          height="20"
                        />
                      </Link>
                    </td>
                  </tr>
                </table>
              </div>

              <Text className="text-gray-500 text-[14px] my-[8px] text-small-responsive">
                Avenue | 101 Ave, 10th Floor | Hawaii
              </Text>
              <Text className="text-gray-500 text-[14px] mt-[4px] mb-0 text-small-responsive">
                Copyright 2025 Avenue. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

eventPostpone.PreviewProps = {
  attendeeName: "John Doe",
  eventName: "Tech Conference 2024",
  eventDate: "December 15, 2024",
  eventTime: "9:00 AM - 6:00 PM IST",
  venue: "Convention Center, Sector 17, Chandigarh",
  ticketNumber: "TC2024-001234",
  ticketType: "General Admission",
  orderNumber: "ORD-789456123",
  qrCodeUrl:
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=TC2024-001234",
};

export default eventPostpone;
