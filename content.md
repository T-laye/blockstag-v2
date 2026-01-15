@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

:root {
  --background: #ffffff;
  --foreground: #211d1d;
}

.dark {
  --background: #0e0e0e;
  --foreground: #f5f5f5;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: #e04e1e;
  --color-secondary: #092c4c;
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Helvetica, sans-serif;
}

.landing-container {
  @apply max-w-300 mx-auto px-4 md:px-8;
}
.hero-bg {
  background-image: url("/images/hero-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.dark .hero-bg {
  background-image: url("/images/hero-bg-dark.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
