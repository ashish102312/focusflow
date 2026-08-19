export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center md:order-2 gap-x-8">
          <a href="#product" className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors">
            Product
          </a>
          <a href="#how-it-works" className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors">
            How it works
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0 flex items-center justify-center gap-2">
          <div className="w-5 h-5 rounded-[4px] bg-foreground flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-background" />
          </div>
          <p className="text-center text-sm leading-5 text-muted-foreground font-medium tracking-tight">
            &copy; 2026 FocusFlow
          </p>
        </div>
      </div>
    </footer>
  );
}
