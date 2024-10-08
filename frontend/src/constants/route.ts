import type { Route } from "next";

export const ROUTE: Record<string, URL | Route<string>> = {
  // Main pages
  home: "/",
  chat: "/chat",
  docs: process.env.NEXT_PUBLIC_DOCS_URL as string,

  // Integration pages in docs
  Docs: `${process.env.NEXT_PUBLIC_DOCS_URL}/integrations/google/docs` as string,
  Gmail:
    `${process.env.NEXT_PUBLIC_DOCS_URL}/integrations/google/gmail` as string,
  Calendar:
    `${process.env.NEXT_PUBLIC_DOCS_URL}/integrations/google/calendar` as string,
  Sheets:
    `${process.env.NEXT_PUBLIC_DOCS_URL}/integrations/google/sheets` as string,
  Slack: `${process.env.NEXT_PUBLIC_DOCS_URL}/integrations/slack` as string,
  Linear: `${process.env.NEXT_PUBLIC_DOCS_URL}/integrations/linear` as string,
  X: `${process.env.NEXT_PUBLIC_DOCS_URL}/integrations/x` as string,
};
