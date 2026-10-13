// Resources section — server component (no interactivity needed)

const resources = [
  {
    category: 'Emergency Hotlines 🇵🇭',
    items: [
      { name: 'PNP Women & Children Protection Center', contact: '(02) 8723-0401', type: 'hotline' },
      { name: 'PCW Women\'s Crisis Line (24/7)', contact: '1343', type: 'hotline' },
      { name: 'DSWD Hotline (AHON)', contact: '931 8101 / 8888', type: 'hotline' },
      { name: 'DOH Health Emergency', contact: '8-UGNAYAN (8-846-2926)', type: 'hotline' },
      { name: 'National Emergency Hotline', contact: '911', type: 'emergency' },
    ],
    color: '#dc2626',
    icon: '🆘',
  },
  {
    category: 'Legal Aid & Support',
    items: [
      { name: 'Public Attorney\'s Office (PAO)', contact: 'pao.gov.ph', type: 'website' },
      { name: 'Commission on Human Rights', contact: 'chr.gov.ph', type: 'website' },
      { name: 'Gabriela Women\'s Party (free legal aid)', contact: 'gabrielawomensparty.org', type: 'website' },
      { name: 'SALIGAN (Legal Aid for Women)', contact: 'saligan.ph', type: 'website' },
    ],
    color: '#7c3aed',
    icon: '⚖️',
  },
  {
    category: 'Shelter & Crisis Centers',
    items: [
      { name: 'Pananggalang Women\'s Crisis Center (NCR)', contact: '(02) 8732-1893', type: 'hotline' },
      { name: 'DSWD Center for Women (nationwide)', contact: 'dswd.gov.ph', type: 'website' },
      { name: 'Lihok Pilipina (Cebu)', contact: 'lihokpilipina.org', type: 'website' },
      { name: 'GABRIELA Davao', contact: 'Local DSWD', type: 'info' },
    ],
    color: '#db2777',
    icon: '🏡',
  },
  {
    category: 'Educational Resources',
    items: [
      { name: 'UN Women Philippines', contact: 'unwomen.org/philippines', type: 'website' },
      { name: 'Philippine Commission on Women', contact: 'pcw.gov.ph', type: 'website' },
      { name: 'WHO: Gender & Health', contact: 'who.int/gender', type: 'website' },
      { name: 'UN HeForShe Campaign', contact: 'heforshe.org', type: 'website' },
    ],
    color: '#0891b2',
    icon: '📖',
  },
];

const myths = [
  {
    myth: 'GBV only happens to women from poor backgrounds.',
    fact: 'GBV crosses all socioeconomic, educational, and cultural boundaries. It affects women from all walks of life.',
  },
  {
    myth: 'Victims stay because they enjoy the abuse.',
    fact: 'Survivors stay due to fear, economic dependency, love for children, lack of support, and threats from abusers. Leaving is often the most dangerous time.',
  },
  {
    myth: 'If it\'s not physical, it\'s not abuse.',
    fact: 'Psychological, economic, and digital abuse are all recognized forms of GBV under Philippine law (RA 9262) and cause severe trauma.',
  },
  {
    myth: 'It\'s a private matter — we shouldn\'t interfere.',
    fact: 'GBV is a public health crisis and human rights violation. Community intervention and support are essential for ending it.',
  },
  {
    myth: 'Men cannot be victims of GBV.',
    fact: 'While women are disproportionately affected, men and LGBTQIA+ individuals also experience GBV. RA 9262 also protects children.',
  },
];

export default function ResourcesSection() {
  return (
    <section id="resources" className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Myths vs Facts */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="inline-block bg-pink-100 text-pink-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
              🔍 Truth Check
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-indigo-950 mb-4">
              Myths vs.{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #7c3aed, #db2777)' }}
              >
                Facts
              </span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Misinformation enables violence. Let's set the record straight.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {myths.map((item, i) => (
              <div
                key={i}
                className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-md border border-gray-100"
              >
                <div className="bg-red-50 p-5 border-r border-gray-100">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">❌</span>
                    <div>
                      <div className="text-xs font-bold text-red-600 uppercase tracking-wide mb-1">Myth</div>
                      <p className="text-gray-700 text-sm">{item.myth}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">✅</span>
                    <div>
                      <div className="text-xs font-bold text-green-700 uppercase tracking-wide mb-1">Fact</div>
                      <p className="text-gray-700 text-sm">{item.fact}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="text-center mb-12">
          <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            📞 Get Help
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-indigo-950 mb-4">
            Resources &{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #7c3aed, #db2777)' }}
            >
              Hotlines
            </span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            If you or someone you know needs help, these organizations are here for you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((group) => (
            <div
              key={group.category}
              className="card-hover bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
            >
              <div
                className="p-4 text-white"
                style={{ background: `linear-gradient(135deg, ${group.color}, ${group.color}cc)` }}
              >
                <div className="text-2xl mb-1">{group.icon}</div>
                <h3 className="font-bold text-sm">{group.category}</h3>
              </div>
              <div className="p-4 space-y-3">
                {group.items.map((item) => (
                  <div key={item.name} className="border-b border-gray-50 pb-2 last:border-0 last:pb-0">
                    <div className="text-xs font-semibold text-gray-800 mb-0.5">{item.name}</div>
                    <div
                      className="text-xs font-mono"
                      style={{ color: group.color }}
                    >
                      {item.contact}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Emergency banner */}
        <div className="mt-10 bg-red-600 rounded-2xl p-6 text-center text-white shadow-xl">
          <p className="text-2xl font-black mb-1">🆘 In Immediate Danger?</p>
          <p className="text-red-100 mb-3">Call the National Emergency Hotline immediately</p>
          <div className="text-5xl font-black tracking-wider">9-1-1</div>
          <p className="text-red-200 text-sm mt-2">Available 24 hours, 7 days a week nationwide</p>
        </div>
      </div>
    </section>
  );
}
