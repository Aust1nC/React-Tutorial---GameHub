import { HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import ColorModeToggle from "./ColorModeToggle";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={Logo} boxSize="50px" />
      <ColorModeToggle />
    </HStack>
  );
};

export default NavBar;
