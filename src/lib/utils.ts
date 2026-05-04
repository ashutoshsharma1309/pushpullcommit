import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merge Tailwind utility classes and deduplicate conflicting values.
 *
 * This helper is used throughout the app for cleaner conditional class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}