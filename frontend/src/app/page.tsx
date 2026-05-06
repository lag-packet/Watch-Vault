import { ArrowRight, Boxes, Gauge, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const stackItems = [
  {
    title: "App foundation",
    description: "Next.js 15 app router, React 19, TypeScript, and Tailwind CSS.",
    icon: Boxes,
  },
  {
    title: "Data layer",
    description: "TanStack Query and Axios are ready for API integration.",
    icon: Gauge,
  },
  {
    title: "Quality checks",
    description: "Vitest, Testing Library, and Playwright are configured.",
    icon: ShieldCheck,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-12">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-normal text-muted-foreground">
            Watch Vault
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal text-foreground sm:text-5xl">
            Frontend foundation initialized.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
            A clean Next.js 15 workspace is ready with typed React components,
            shadcn/ui-style primitives, data fetching, icons, and test harnesses.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button>
              Start building
              <ArrowRight aria-hidden="true" />
            </Button>
            <Button variant="outline">Review stack</Button>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {stackItems.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <item.icon className="size-5 text-primary" aria-hidden="true" />
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-2 rounded-full bg-secondary">
                  <div className="h-2 w-2/3 rounded-full bg-primary" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
