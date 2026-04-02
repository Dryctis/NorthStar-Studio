import { navigationItems } from "@/data/site/navigation";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-card">
      <Container className="py-10 md:py-12">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          <div className="max-w-sm">
            <p className="text-sm font-semibold tracking-tight text-foreground">
              Northstar Studio
            </p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Sitios web y landing pages diseñados para ayudar a negocios de
              alto valor a presentar mejor su oferta y captar mejores
              oportunidades.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground">Navegación</p>
            <ul className="mt-4 space-y-3">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground">Contacto</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>hola@northstarstudio.dev</li>
              <li>Ciudad de Guatemala, Guatemala</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border/70 pt-6">
          <p className="text-xs text-muted-foreground">
            © 2026 Northstar Studio. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}