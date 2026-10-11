// Podcast RSS feed for Apple Podcasts and Spotify. Only published episodes with audio are listed.
import { getCollection } from 'astro:content';
import { SITE, PODCAST } from '../site';

const x = (s = '') => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[c]!);

export async function GET({ site }: { site: URL }) {
  const base = site.href.replace(/\/$/, '');
  const eps = (await getCollection('episodes', (e) => e.data.status === 'published' && !!e.data.audioUrl))
    .sort((a, b) => b.data.number - a.data.number);
  const items = eps.map((e) => `
    <item>
      <title>${x(e.data.title)}</title>
      <description>${x(e.data.summary)}</description>
      <link>${base}/podcast/${e.id}/</link>
      <guid isPermaLink="false">${x(e.id)}</guid>
      ${e.data.date ? `<pubDate>${e.data.date.toUTCString()}</pubDate>` : ''}
      <enclosure url="${x(e.data.audioUrl)}" length="${e.data.audioBytes ?? 0}" type="audio/mpeg"/>
      <itunes:episode>${e.data.number}</itunes:episode>
      ${e.data.minutes ? `<itunes:duration>${e.data.minutes * 60}</itunes:duration>` : ''}
      <itunes:explicit>false</itunes:explicit>
    </item>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
  <channel>
    <title>${x(PODCAST.title)}</title>
    <link>${base}/podcast/</link>
    <language>en-us</language>
    <description>${x(PODCAST.tagline)} Independent; not affiliated with TypeSafe AI.</description>
    <itunes:author>${x(SITE.publisher)}</itunes:author>
    <itunes:category text="${x(PODCAST.category)}"/>
    <itunes:explicit>false</itunes:explicit>${items}
  </channel>
</rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
