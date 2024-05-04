import { Space, Stack, Input, Box } from "@mantine/core";
import "./styles/ContactCard.css";

const ContactCard = () => {
  const propsContainer = {
    h: 50,
    mt: "md",
  };
  return (
    <section>
      <Stack>
        <Box max={230} pos={"relative"}>
          <h1>Contactame</h1>
          <p>
            Por favor contáctame directamente a través de{" "}
            <a href="mailto:emiliano.meza.ochoa@icloud.com">
              emiliano.meza.ochoa@icloud.com
            </a>{" "}
            o usando este formulario.
          </p>
          <div className="dbmongo">
            <Input size="md" radius="md" placeholder="email" />
          </div>
        </Box>
      </Stack>
    </section>
  );
};

export default ContactCard;
