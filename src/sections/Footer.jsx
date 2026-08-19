export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand & Tagline */}
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-foreground flex items-center justify-center">
                <div className="w-2 h-2 bg-background" />
              </div>
              <span className="text-xl display-serif tracking-tight text-foreground">FocusFlow</span>
            </div>
            <p className="text-sm body-mono text-muted-foreground leading-relaxed max-w-xs">
              Turn a busy day into a clear plan. FocusFlow brings your tasks, priorities, and daily goals into one focused workspace.
            </p>
          </div>
          
          {/* Links Grid */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm label-mono font-medium text-foreground">Product</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#product" className="text-sm body-mono text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
                  <li><a href="#how-it-works" className="text-sm body-mono text-muted-foreground hover:text-foreground transition-colors">How it works</a></li>
                  <li><a href="#" className="text-sm body-mono text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
                  <li><a href="#" className="text-sm body-mono text-muted-foreground hover:text-foreground transition-colors">Changelog</a></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm label-mono font-medium text-foreground">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#about" className="text-sm body-mono text-muted-foreground hover:text-foreground transition-colors">About us</a></li>
                  <li><a href="#" className="text-sm body-mono text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
                  <li><a href="#" className="text-sm body-mono text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
                  <li><a href="#" className="text-sm body-mono text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm label-mono font-medium text-foreground">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm body-mono text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-sm body-mono text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-sm body-mono text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm label-mono font-medium text-foreground">Connect</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm body-mono text-muted-foreground hover:text-foreground transition-colors">Twitter</a></li>
                  <li><a href="#" className="text-sm body-mono text-muted-foreground hover:text-foreground transition-colors">GitHub</a></li>
                  <li><a href="#" className="text-sm body-mono text-muted-foreground hover:text-foreground transition-colors">Discord</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 border-t border-border pt-8 sm:mt-20 md:flex md:items-center md:justify-between">
          <div className="flex items-center gap-4 md:order-2">
            <div className="flex items-center gap-2 text-xs body-mono text-muted-foreground">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               All systems operational
            </div>
          </div>
          <p className="mt-8 text-xs body-mono text-muted-foreground md:order-1 md:mt-0">
            &copy; 2026 FocusFlow, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
