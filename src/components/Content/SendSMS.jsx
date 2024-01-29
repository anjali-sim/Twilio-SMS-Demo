import { useState } from "react";
import { Container, Input, Textarea, Button } from "./SendSMS.style";

const SendSMS = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const sendSMS = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/send-sms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ to: phoneNumber, body: message }),
      });

      const data = await response.json();

      if (data.success) {
        console.log("SMS sent successfully!");
      } else {
        console.error("Failed to send SMS:", data.error);
      }
    } catch (error) {
      console.error("Error sending SMS:", error);
    }
  };

  return (
    <Container>
      <Input
        type="tel"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button onClick={sendSMS}>Send SMS</Button>
    </Container>
  );
};


export default SendSMS;
