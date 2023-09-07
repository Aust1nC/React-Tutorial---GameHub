import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        onChange={toggleColorMode}
        isChecked={colorMode === "dark"}
        colorScheme="green"
      />
      <Text>{colorMode === "dark" ? "Dark Mode" : "Light Mode"}</Text>
    </HStack>
  );
};

export default ColorModeToggle;
