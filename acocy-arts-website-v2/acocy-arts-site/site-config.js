/* acocy arts — edit prices, status, and social handles here. */
window.ACOCY = {
  brand: 'acocy',
  subtitle: 'arts',
  commissionsOpen: true, // Change to false when the queue is full.
  slots: null, // e.g. 3; leave null to hide the number.
  instagram: '', // Instagram handle WITHOUT @, if confirmed (leave empty until ready).
  tiktok: '', // TikTok handle WITHOUT @, if confirmed (leave empty until ready).
  x: '', // X / Twitter handle WITHOUT @, optional.
  // The custom link-in-bio page (links.html) automatically shows the socials above.
  // Add more platforms below; leave the URL blank to hide a button.
  extraLinks: [
    { name:'YouTube', url:'', note:'videos & speedpaints' },
    { name:'Other platform', url:'', note:'find me here' },
  ],
  currency: 'EUR',
  rows: [
    { id:'bust', name:'Bust-up', description:'Head, shoulders & upper chest', prices: { sketch:12, flat:15, rendered:24 } },
    { id:'half', name:'Half-body', description:'Roughly waist-up', prices: { sketch:22, flat:26, rendered:30 } },
    { id:'full', name:'Full-body', description:'Head to toe', prices: { sketch:32, flat:36, rendered:40 } },
  ],
  styles: [
    { id:'sketch', name:'Sketch', blurb:'Expressive lines, light finish' },
    { id:'flat', name:'Flat colour', blurb:'Clean colour, simple shading' },
    { id:'rendered', name:'Rendered', blurb:'Extra depth, lighting & detail' },
  ],
  defaultSize: 'half',
  defaultStyle: 'rendered',
  includes: 'One character · simple or plain background · two sketch-stage revision requests',
  turnaround: 'Quoted individually before payment',
  contactInstructions: 'After copying, send your request to @acocy using her confirmed social account. Social links are added once she approves the handles.'
};
