import { Box } from "./styles";

const BoxComponent = ({ children, padding = 0, spacing = 0, border, align = 'start' }: any) => {
  return (
    <Box
      css={{
        padding: `${padding}`,
        margin: `${spacing}`,
        border: border ? `2px solid #2A2A2A` : "none",
        alignItems: `${align}`
      }}
    >
      {children}
    </Box>
  );
};

export default BoxComponent;
