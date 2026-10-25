import { GoogleAnalytics } from '@next/third-parties/google';

/** GA4 measurement ID from env. Empty when unset so analytics is a no-op. */
export const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? '';

export function OptionalGoogleAnalytics() {
  if (!gaMeasurementId) return null;
  return <GoogleAnalytics gaId={gaMeasurementId} />;
}
