import Container from "./shared/Container";
function Header() {
  return (
    <Container className="bg-foreground text-background py-2 sticky top-0 z-999">
      <div className="flex justify-between">
        <div className="font-bold font-space">SDIARS</div>
        <div className="font-bold font-mono">X</div>
      </div>
    </Container>
  );
}

export default Header;
