/**
 * Turn a chapter's markdown-ish content into plain text that reads well aloud.
 * Tables read terribly, so each row is flattened to "cell, cell, cell."
 */
export function stripMarkdown(md: string): string {
  return (
    md
      // horizontal rules
      .replace(/^\s*---+\s*$/gm, "")
      // headings
      .replace(/^#{1,6}\s+/gm, "")
      // bold / italic markers
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/\*([^*]+)\*/g, "$1")
      .replace(/__([^_]+)__/g, "$1")
      .replace(/_([^_]+)_/g, "$1")
      // inline code
      .replace(/`([^`]+)`/g, "$1")
      // links -> just the text
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      // table separator rows (|---|---|) -> drop
      .replace(/^\s*\|[\s:|-]+\|\s*$/gm, "")
      // table rows -> comma-separated sentence
      .replace(/^\s*\|(.+)\|\s*$/gm, (_m, row: string) =>
        row
          .split("|")
          .map((c: string) => c.trim())
          .filter(Boolean)
          .join(", ") + ".",
      )
      // list markers
      .replace(/^\s*[-*+]\s+/gm, "")
      .replace(/^\s*\d+\.\s+/gm, "")
      // blockquotes
      .replace(/^\s*>\s?/gm, "")
      // collapse extra whitespace
      .replace(/\n{3,}/g, "\n\n")
      .trim()
  );
}
