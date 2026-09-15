import { visualThemes } from '../content/visuals';

export default function ProjectVisual({ project, className = '' }) {
  const theme = visualThemes[project.slug] || { color: '#8876aa', background: '#eee8f4', label: project.title, kind: 'catalog' };
  const imageUrl = project.coverImage?.imageUrl;
  return <figure className={`project-visual ${className}`} style={{ '--visual-color': theme.color, '--visual-background': theme.background }}>
    {imageUrl ? <img src={imageUrl} alt={project.coverImage.alt || project.title} loading="lazy" /> : <svg viewBox="0 0 600 370" role="img" aria-label={`Illustrative mockup for ${project.title}; original project image to follow`}>
      <rect width="600" height="370" fill={theme.background} />
      <circle cx="528" cy="56" r="116" fill={theme.color} opacity=".1" /><circle cx="84" cy="320" r="88" fill={theme.color} opacity=".12" />
      <rect x="67" y="41" width="474" height="291" rx="15" fill={theme.color} opacity=".12" /><rect x="59" y="32" width="474" height="291" rx="15" fill="#fff" /><path d="M59 65H533" stroke="#e9e9ef" />
      {[76, 89, 102].map((cx) => <circle key={cx} cx={cx} cy="49" r="3.5" fill={theme.color} opacity=".45" />)}
      <rect x="136" y="44" width="232" height="11" rx="5.5" fill="#f2f3f7" /><rect x="59" y="65" width="87" height="243" fill={theme.color} opacity=".08" /><rect x="77" y="84" width="49" height="9" rx="4" fill={theme.color} />
      {[114, 140, 166, 192].map((y, i) => <rect key={y} x="77" y={y} width={i === 0 ? '52' : '39'} height="6" rx="3" fill={theme.color} opacity={i === 0 ? '.8' : '.3'} />)}
      <text x="165" y="96" fontFamily="sans-serif" fontWeight="700" fontSize="16" fill="#233044">{theme.label}</text><rect x="166" y="108" width="183" height="5" rx="2.5" fill="#d5d8e2" />
      {theme.kind === 'calendar' ? <>
        <rect x="166" y="132" width="343" height="164" rx="9" fill="#f5f6fc" />{Array.from({ length: 28 }, (_, i) => <rect key={i} x={178 + (i % 7) * 46} y={145 + Math.floor(i / 7) * 35} width="37" height="27" rx="5" fill={[9, 10, 16].includes(i) ? theme.color : '#fff'} />)}
      </> : theme.kind === 'workflow' ? <>
        {[146, 204, 262].map((y, i) => <g key={y}><rect x="166" y={y} width="343" height="39" rx="7" fill="#f3f7f6" /><circle cx="190" cy={y + 19} r="9" fill={theme.color} opacity=".25" /><path d={`M186 ${y + 19}l3 3 5-6`} fill="none" stroke={theme.color} strokeWidth="2" /><rect x="211" y={y + 11} width={120 + i * 20} height="5" rx="2" fill="#a7bdb8" /><rect x="211" y={y + 23} width="75" height="4" rx="2" fill="#d0ddd8" /><rect x="435" y={y + 10} width="56" height="17" rx="8" fill={theme.color} opacity=".2" /></g>)}
      </> : theme.kind === 'analytics' ? <>
        {[167, 283, 399].map((x, i) => <g key={x}><rect x={x} y="132" width="108" height="48" rx="8" fill={theme.background} /><rect x={x + 12} y="145" width="52" height="5" rx="2" fill={theme.color} opacity=".4" /><rect x={x + 12} y="157" width={30 + i * 8} height="9" rx="3" fill={theme.color} /></g>)}
        <rect x="166" y="194" width="343" height="102" rx="8" fill="#f7f8fb" /><path d="M184 277L232 258L274 268L324 227L368 242L414 213L490 207" fill="none" stroke={theme.color} strokeWidth="4" strokeLinejoin="round" /><path d="M184 277L232 258L274 268L324 227L368 242L414 213L490 207V286H184Z" fill={theme.color} opacity=".1" />
      </> : theme.kind === 'research' ? <>
        <rect x="166" y="132" width="343" height="164" rx="8" fill="#eef5ec" /><path d="M181 277C242 273 200 178 269 185S354 255 404 199 470 165 494 160" fill="none" stroke="#bbcdb5" strokeWidth="14" strokeLinecap="round" />{[{ x: 211, y: 234 }, { x: 322, y: 209 }, { x: 460, y: 181 }].map(({ x, y }) => <g key={x}><circle cx={x} cy={y} r="14" fill={theme.color} /><circle cx={x} cy={y} r="5" fill="#fff" /></g>)}
      </> : <>
        {[168, 283, 398].map((x, i) => <g key={x}><rect x={x} y="132" width="105" height="115" rx="9" fill={theme.background} />{project.slug === 'sun-sola' ? <g><rect x={x + 18} y="161" width="69" height="42" rx="3" fill={theme.color} /><path d={`M${x + 41} 161v42m23-42v42m-46-21h69`} stroke="#fff" opacity=".6" /><circle cx={x + 80} cy="148" r="8" fill="#ebc969" /></g> : <path d={`M${x + 33} 154l-16 12 11 15 8-5v45h34v-45l8 5 11-15-16-12-12 7-12-7Z`} fill={theme.color} opacity={.45 + i * .15} />}<rect x={x} y="260" width="76" height="6" rx="3" fill="#bec3ce" /><rect x={x} y="276" width="49" height="5" rx="2" fill={theme.color} opacity=".65" /></g>)}
      </>}
    </svg>}
    <figcaption>{imageUrl ? (project.coverImage.caption || project.title) : 'Illustrative mockup · original image to follow'}</figcaption>
  </figure>;
}
