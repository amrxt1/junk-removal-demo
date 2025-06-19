import Container from "./shared/Container";
function Header() {
  return (
    <Container className="bg-foreground text-background py-2 sticky top-0 z-999 w-full">
      <div className="flex justify-between items-center">
        <div className="font-bold font-space flex items-center gap-2">
          <img src="icon.svg" alt="icon" className="w-12 h-12" />
          QuickMove Installations
        </div>
        <div className="font-bold font-mono">X</div>
      </div>
    </Container>
  );
}

export default Header;
