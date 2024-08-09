import React from "react";

import Background from "../assets/email.jpg";
import {
  Text,
  Grid,
  GridItem,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
} from "@chakra-ui/react";
import { NavButtons } from "../Components/Navigate/NavButtons.js"
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {

  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/home",
      },
      authorizationParams: {
        prompt: "login",
        screen_hint: "signup",
      },
    });
  };

  return (
    <div>
      <Grid
        templateAreas={`"header header"
                        "main main"
                        "footer footer"`}
        gridTemplateRows={"90px 1fr 90px"}
        gridTemplateColumns={"200px 1fr"}
        minH="100vh"
        gap="0"
      >
        <GridItem align="end" pl="2" bg="white" area={"header"}>
          <NavButtons/>
        </GridItem>

        <GridItem pl="2" area={"main"} display="flex" alignItems="center" justifyContent="center">
          <Card
            align="center"
            backgroundImage={`url(${Background})`}
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            w="100%"
            h="100%"
          >
            <CardHeader>
              <Heading size="md" color='white'>Welcome To the Mailbox!</Heading>
            </CardHeader>
            <CardBody>
              <Text color='white'>Let’s Get Started Get Ready for Mails to Roll In!</Text>
              
            </CardBody>
            <CardFooter>
              <Button colorScheme="blackAlpha" onClick={handleSignUp}>Get Started</Button>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem pl="2" bg="white" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </div>
  );
};

export default Dashboard;



