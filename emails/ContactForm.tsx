import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";


export default function ContactForm(data) {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Text style={heading}>Hello, new message has been submitted using webariadne contact form.</Text>
          <Text style={paragraph}>https://nx.webariadne.com/contact-us</Text>
          <Text style={paragraph}>From: {data.fullName}</Text>
          <Text style={paragraph}>Email: {data.email}</Text>
          <Text style={paragraph}>Message: {data.message}</Text>
        </Container>
      </Section>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const heading = {
  fontSize: "20px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};