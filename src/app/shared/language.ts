/** Polish is the primary language: it is what gets prerendered and indexed by search engines. */
export const DEFAULT_LANGUAGE = 'pl';
const STORAGE_KEY = 'language';

/** Language the visitor picked earlier, if any. Storage can be missing (prerender) or blocked (private mode). */
export function readStoredLanguage(): string | null {
  try {
    return typeof localStorage === 'undefined' ? null : localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export function storeLanguage(language: string): void {
  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch {
    // The choice just won't be remembered.
  }
}
