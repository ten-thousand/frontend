import { AnalyticsEvent } from './events';

const AMPLITUDE_API_KEY = '8706adb82e0da1d0bfd11ac460db5884';
const isBrowser = typeof window !== 'undefined';

export async function getAmplitude() {
  if (isBrowser) {
    const amplitude = await import('amplitude-js');
    return amplitude.getInstance();
  }
  return undefined;
}

export async function initialize() {
  const amplitude = await getAmplitude();
  amplitude?.init(AMPLITUDE_API_KEY);
}

export async function logEvent<TName extends keyof AnalyticsEvent>(
  name: TName,
  properties: AnalyticsEvent[TName] = undefined,
) {
  const eventProperties = {
    referrer: document.referrer || undefined,
    ...properties,
  };
  if (process.env.NODE_ENV !== 'production') {
    console.log('[Analytics]', name, eventProperties);
  }
  const amplitude = await getAmplitude();
  amplitude?.logEvent(name, eventProperties);
}
