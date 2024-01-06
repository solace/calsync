import * as config from './config';

export function ShouldCopy(summary: string, markedFree: boolean): boolean {
  const redact = summary && summary.includes(config.FORCE_REDACT_SIGN);
  return !redact && !markedFree;
}

export function NewSummary(summary: string, redactedSummary?: string): string {
  const redact = summary && summary.includes(config.FORCE_REDACT_SIGN);
  if (redact && redactedSummary) {
    return redactedSummary;
  } else {
    return summary;
  }
}
