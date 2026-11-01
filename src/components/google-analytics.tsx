import { GoogleAnalytics } from '@next/third-parties/google';

/** GA4 measurement ID from env. Empty when unset so analytics is a no-op. */
export const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? '';

/**
 * True only for the production deployment. On Vercel this is strictly
 * VERCEL_ENV==='production', so preview deployments (where NODE_ENV is still
 * 'production') never load analytics. Off Vercel we fall back to NODE_ENV so a
 * self-hosted production build still works, while localhost dev stays off.
 */
export const isProductionEnv = process.env.VERCEL_ENV
  ? process.env.VERCEL_ENV === 'production'
  : process.env.NODE_ENV === 'production';

export function OptionalGoogleAnalytics() {
  if (!isProductionEnv || !gaMeasurementId) return null;
  return <GoogleAnalytics gaId={gaMeasurementId} />;
}
