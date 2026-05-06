import {
  Bookmark,
  CalendarDays,
  Clapperboard,
  Eye,
  PenLine,
  Star,
  TimerReset,
  Trophy,
  type LucideIcon,
} from "lucide-react";

export type StatCard = {
  label: string;
  value: string;
  detail: string;
  icon: LucideIcon;
  colorClassName: string;
};

export type ReviewedMovie = {
  title: string;
  year: string;
  director: string;
  watchedOn: string;
  rating: string;
  mood: string;
  reviewTitle: string;
  review: string;
  posterClassName: string;
  posterMark: string;
};

export type DiaryEntry = {
  date: string;
  title: string;
  format: string;
  rating: string;
  note: string;
};

export type WatchlistMovie = {
  title: string;
  reason: string;
  runtime: string;
};

export const stats: StatCard[] = [
  {
    label: "Films logged",
    value: "184",
    detail: "+12 this month",
    icon: Eye,
    colorClassName: "bg-[#ffdf6e] text-[#4b3200]",
  },
  {
    label: "Reviews written",
    value: "73",
    detail: "41 with notes",
    icon: PenLine,
    colorClassName: "bg-[#8ee7d0] text-[#073d35]",
  },
  {
    label: "Average rating",
    value: "4.1",
    detail: "out of 5 stars",
    icon: Star,
    colorClassName: "bg-[#ff9eb5] text-[#641426]",
  },
  {
    label: "Current streak",
    value: "9",
    detail: "days in a row",
    icon: TimerReset,
    colorClassName: "bg-[#a9c7ff] text-[#14346b]",
  },
];

export const reviewedMovies: ReviewedMovie[] = [
  {
    title: "In the Mood for Love",
    year: "2000",
    director: "Wong Kar-wai",
    watchedOn: "May 4",
    rating: "5.0",
    mood: "Lush restraint",
    reviewTitle: "Every hallway feels like a secret.",
    review:
      "The movie keeps choosing silence where another film would explain itself. I loved how the repetition turns into rhythm instead of stasis.",
    posterClassName: "bg-[linear-gradient(135deg,#45123c_0%,#e83f6f_54%,#ffd166_100%)]",
    posterMark: "WK",
  },
  {
    title: "Perfect Days",
    year: "2023",
    director: "Wim Wenders",
    watchedOn: "May 2",
    rating: "4.5",
    mood: "Quiet ritual",
    reviewTitle: "A whole life organized by light.",
    review:
      "Small routines become cinematic without getting precious. The ending lands because the film has earned every unspoken feeling.",
    posterClassName: "bg-[linear-gradient(135deg,#fff7d6_0%,#72ddf7_50%,#3bb273_100%)]",
    posterMark: "PD",
  },
  {
    title: "Heat",
    year: "1995",
    director: "Michael Mann",
    watchedOn: "Apr 29",
    rating: "4.5",
    mood: "Nocturnal pressure",
    reviewTitle: "Architecture, obsession, consequence.",
    review:
      "The city has weight in every scene. Even the quiet conversations feel engineered like action sequences.",
    posterClassName: "bg-[linear-gradient(135deg,#1b1b3a_0%,#3a86ff_48%,#ffbe0b_100%)]",
    posterMark: "LA",
  },
];

export const diaryEntries: DiaryEntry[] = [
  {
    date: "May 5",
    title: "The Apartment",
    format: "Criterion Blu-ray",
    rating: "4.0",
    note: "Sharper and sadder than I remembered.",
  },
  {
    date: "May 3",
    title: "Decision to Leave",
    format: "Streaming",
    rating: "4.5",
    note: "Editing is doing emotional close-up work.",
  },
  {
    date: "May 1",
    title: "Thief",
    format: "35mm repertory",
    rating: "4.0",
    note: "Metal, neon, and professional doom.",
  },
];

export const watchlist: WatchlistMovie[] = [
  {
    title: "Yi Yi",
    reason: "Weekend long-watch",
    runtime: "173 min",
  },
  {
    title: "All That Jazz",
    reason: "Musicals shelf",
    runtime: "123 min",
  },
  {
    title: "Cure",
    reason: "Late-night queue",
    runtime: "111 min",
  },
];

export const navigation = [
  { label: "Library", icon: Clapperboard, active: true },
  { label: "Diary", icon: CalendarDays, active: false },
  { label: "Watchlist", icon: Bookmark, active: false },
  { label: "Top Rated", icon: Trophy, active: false },
];
