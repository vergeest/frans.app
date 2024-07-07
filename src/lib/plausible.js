import { browser } from '$app/environment';

export default function initAnaltytics(analyticsURL, siteDomain) {
	if (browser) {
		let location = window.location,
			document = window.document;

		if (
			/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(location.hostname) ||
			'file:' === location.protocol
		) {
			console.log('Plausible: Event Ignored');
			return;
		}

		try {
			if (window.localStorage.ignoreAnalytics === 'true') {
				return;
			}
		} catch (e) {}

		let event = {
			name: 'pageview',
			url: location.href,
			domain: siteDomain,
			referrer: document.referrer
		};

		navigator.sendBeacon(analyticsURL, JSON.stringify(event));
	}
}
