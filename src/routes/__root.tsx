import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-midnight px-4">
      <div className="max-w-md text-center text-ivory">
        <p className="eyebrow text-champagne">CINQ by Raghava</p>

        <h1 className="mt-4 font-display text-7xl font-medium">404</h1>

        <h2 className="mt-4 font-display text-3xl">Page not found</h2>

        <p className="mt-3 text-sm leading-7 text-ivory/60">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-champagne px-6 py-3 text-xs font-medium uppercase tracking-[.16em] text-midnight transition-opacity hover:opacity-90"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-midnight px-4">
      <div className="max-w-md text-center text-ivory">
        <p className="eyebrow text-champagne">CINQ by Raghava</p>

        <h1 className="mt-4 font-display text-4xl">This page didn't load</h1>

        <p className="mt-3 text-sm leading-7 text-ivory/60">
          Something went wrong on our end. You can try refreshing or return to the CINQ homepage.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-champagne px-6 py-3 text-xs font-medium uppercase tracking-[.16em] text-midnight transition-opacity hover:opacity-90"
          >
            Try Again
          </button>

          <Link
            to="/"
            className="inline-flex items-center justify-center border border-champagne/40 px-6 py-3 text-xs font-medium uppercase tracking-[.16em] text-champagne transition-colors hover:bg-champagne hover:text-midnight"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },

      /* Primary SEO */
      {
        title: "CINQ by Raghava | Luxury 4 BHK Residences in Financial District, Hyderabad",
      },
      {
        name: "description",
        content:
          "CINQ by Raghava presents luxury 4 BHK residences in Hyderabad's Financial District, featuring five majestic towers, 61 floors, 7.19 acres and thoughtfully curated amenities.",
      },
      {
        name: "author",
        content: "Mojo Realty",
      },
      {
        name: "robots",
        content: "index, follow",
      },

      /* Brand / Browser */
      {
        name: "theme-color",
        content: "#07111F",
      },

      /* Open Graph */
      {
        property: "og:site_name",
        content: "CINQ by Raghava",
      },
      {
        property: "og:title",
        content: "CINQ by Raghava | Luxury 4 BHK Residences in Financial District, Hyderabad",
      },
      {
        property: "og:description",
        content:
          "Discover CINQ by Raghava — five majestic towers, 61 floors and 7.19 acres of refined living in Hyderabad's Financial District.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:locale",
        content: "en_IN",
      },

      /* Twitter */
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "CINQ by Raghava | Luxury 4 BHK Residences in Hyderabad",
      },
      {
        name: "twitter:description",
        content:
          "Luxury 4 BHK residences in Hyderabad's Financial District. Five majestic towers across 7.19 acres.",
      },
    ],

    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },

      {
        rel: "icon",
        href: "/favicon.ico",
        type: "image/x-icon",
      },

      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },

      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },

      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=IBM+Plex+Mono:wght@400;500&family=Manrope:wght@400;500;600&display=swap",
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>

      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
