import {
  BookmarkPlus,
  CalendarDays,
  ChevronDown,
  Film,
  Library,
  ListFilter,
  PenLine,
  Plus,
  Popcorn,
  Search,
  SlidersHorizontal,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  diaryEntries,
  navigation,
  reviewedMovies,
  stats,
  watchlist,
} from "@/lib/movie-data";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="grid min-h-screen lg:grid-cols-[256px_minmax(0,1fr)]">
        <aside className="border-b border-border bg-card/90 px-5 py-5 shadow-[inset_-1px_0_0_hsl(var(--border))] backdrop-blur lg:border-b-0 lg:border-r">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-sm">
              <Film className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-normal text-foreground">
                Watch Vault
              </p>
              <p className="text-xs text-muted-foreground">Movie nights, remembered</p>
            </div>
          </div>

          <nav className="mt-8 grid gap-1" aria-label="Primary navigation">
            {navigation.map((item) => (
              <button
                key={item.label}
                className={cn(
                  "flex h-10 items-center gap-3 rounded-md px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
                  item.active && "bg-primary text-primary-foreground shadow-sm hover:bg-primary hover:text-primary-foreground",
                )}
                type="button"
              >
                <item.icon className="size-4" aria-hidden="true" />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-8 rounded-lg border bg-accent/70 p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">May movie party</p>
              <Popcorn className="size-4 text-primary" aria-hidden="true" />
            </div>
            <div className="mt-4 h-2 rounded-full bg-secondary">
              <div className="h-2 w-[62%] rounded-full bg-primary shadow-sm" />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
              <span>12 watched</span>
              <span>20 target</span>
            </div>
          </div>
        </aside>

        <section className="px-4 py-5 sm:px-6 lg:px-8">
          <header className="rounded-lg border bg-card/85 p-5 shadow-sm backdrop-blur xl:flex xl:items-center xl:justify-between">
            <div>
              <p className="flex items-center gap-2 text-sm font-medium text-primary">
                <Library className="size-4" aria-hidden="true" />
                Tonight&apos;s shelf is open
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-normal sm:text-4xl">
                Your Watch Vault
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                Track the films you watched, keep the tiny memories, and build a library that feels like yours.
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center xl:mt-0">
              <div className="flex h-10 min-w-0 items-center gap-2 rounded-md border bg-background/80 px-3 text-sm text-muted-foreground sm:w-72">
                <Search className="size-4 shrink-0" aria-hidden="true" />
                <span className="truncate">Search films, directors, reviews</span>
              </div>
              <Button variant="outline">
                <BookmarkPlus aria-hidden="true" />
                Add to watchlist
              </Button>
              <Button>
                <Plus aria-hidden="true" />
                Log watched
              </Button>
            </div>
          </header>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="overflow-hidden shadow-sm">
                <CardHeader className="flex-row items-center justify-between space-y-0 p-4">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </CardTitle>
                  <div className={cn("flex size-8 items-center justify-center rounded-md", stat.colorClassName)}>
                    <stat.icon className="size-4" aria-hidden="true" />
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-3xl font-semibold tracking-normal">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
            <section aria-labelledby="reviewed-heading">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 id="reviewed-heading" className="text-xl font-semibold tracking-normal">
                    Recently reviewed
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Fresh notes from the films that stuck around after the credits.
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <ListFilter aria-hidden="true" />
                    Rating
                    <ChevronDown aria-hidden="true" />
                  </Button>
                  <Button variant="outline" size="icon" aria-label="Adjust review filters">
                    <SlidersHorizontal aria-hidden="true" />
                  </Button>
                </div>
              </div>

              <div className="mt-4 grid gap-4 lg:grid-cols-3">
                {reviewedMovies.map((movie) => (
                  <article
                    key={movie.title}
                    className="overflow-hidden rounded-lg border bg-card shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div
                      className={cn(
                        "relative flex aspect-[3/4] flex-col justify-between overflow-hidden p-4 text-white",
                        movie.posterClassName,
                      )}
                      aria-label={`${movie.title} poster artwork`}
                    >
                      <div className="absolute left-4 right-4 top-1/2 h-px bg-white/25" />
                      <div className="absolute -left-10 top-10 size-24 rounded-full bg-white/20" />
                      <div className="absolute -right-12 bottom-16 size-28 rounded-full bg-white/20" />
                      <div className="flex items-center justify-between text-xs uppercase tracking-normal text-white/80">
                        <span>{movie.year}</span>
                        <span>{movie.posterMark}</span>
                      </div>
                      <div>
                        <div className="mb-4 h-px w-full bg-white/50" />
                        <p className="max-w-[11rem] text-3xl font-semibold leading-tight tracking-normal">
                          {movie.title}
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <h3 className="font-semibold">{movie.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {movie.director} | {movie.watchedOn}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-sm font-semibold">
                          <Star className="size-3.5 fill-primary text-primary" aria-hidden="true" />
                          {movie.rating}
                        </div>
                      </div>
                      <p className="mt-3 text-sm font-medium">{movie.reviewTitle}</p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {movie.review}
                      </p>
                      <div className="mt-4 flex items-center justify-between border-t pt-3 text-xs text-muted-foreground">
                        <span>{movie.mood}</span>
                        <Button variant="ghost" size="sm">
                          <PenLine aria-hidden="true" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <aside className="grid gap-6">
              <section aria-labelledby="diary-heading">
                <div className="mb-3 flex items-center justify-between">
                  <h2 id="diary-heading" className="text-xl font-semibold tracking-normal">
                    Diary
                  </h2>
                  <CalendarDays className="size-5 text-primary" aria-hidden="true" />
                </div>
                <div className="divide-y rounded-lg border bg-card shadow-sm">
                  {diaryEntries.map((entry) => (
                    <article key={`${entry.date}-${entry.title}`} className="p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs font-medium uppercase tracking-normal text-muted-foreground">
                            {entry.date}
                          </p>
                          <h3 className="mt-1 font-semibold">{entry.title}</h3>
                          <p className="text-sm text-muted-foreground">{entry.format}</p>
                        </div>
                        <span className="rounded-md bg-accent px-2 py-1 text-sm font-semibold text-accent-foreground">
                          {entry.rating}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">{entry.note}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section aria-labelledby="watchlist-heading">
                <div className="mb-3 flex items-center justify-between">
                  <h2 id="watchlist-heading" className="text-xl font-semibold tracking-normal">
                    Up next
                  </h2>
                  <Button variant="outline" size="sm">
                    <Plus aria-hidden="true" />
                    Add
                  </Button>
                </div>
                <div className="grid gap-3">
                  {watchlist.map((movie, index) => (
                    <div
                      key={movie.title}
                      className="grid grid-cols-[40px_minmax(0,1fr)_auto] items-center gap-3 rounded-lg border bg-card p-3 shadow-sm"
                    >
                      <div className="flex size-10 items-center justify-center rounded-md bg-secondary text-sm font-semibold text-secondary-foreground">
                        {index + 1}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate font-medium">{movie.title}</p>
                        <p className="truncate text-sm text-muted-foreground">{movie.reason}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{movie.runtime}</span>
                    </div>
                  ))}
                </div>
              </section>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}
