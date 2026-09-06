const baseDescription = 'Product discovery, strategy, requirements, AI automation, and data-informed delivery by Thanchicha Hempichit.';

const metadata = {
  home: {
    title: 'Thanchicha Hempichit — Product & Business Portfolio',
    description: baseDescription,
  },
  cosaki: {
    title: 'Cosaki Case Study | Thanchicha Hempichit',
    description: 'Cosaki startup case study: product discovery, user validation, partner coordination, and business direction.',
  },
  smartprocure: {
    title: 'SmartProcure Case Study | Thanchicha Hempichit',
    description: 'AI-assisted requirements and procurement workflow exploration by Thanchicha Hempichit.',
  },
  'ai-investment-news-automation': {
    title: 'AI Investment News Automation | Thanchicha Hempichit',
    description: 'A personal prototype exploring APIs, AI summaries, and structured market-news analysis.',
  },
  'cp-axtra': {
    title: 'CP Axtra Innovation Challenge | Thanchicha Hempichit',
    description: 'Research and strategy case study using interviews, survey responses, and onsite observation.',
  },
};

function pageMetadata(key = 'home') {
  return metadata[key] || metadata.home;
}

export { pageMetadata };
