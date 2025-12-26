export default function Learn() {
  return (
    <div className="card">
      <h2>📖 基础知识：什么是八字？</h2>
      <p>八字，即生辰八字，是一个人出生时的干支历日期。</p>
      
      <h3>1. 四柱</h3>
      <ul>
        <li><strong>年柱：</strong> 代表祖上、父母（早年）。</li>
        <li><strong>月柱：</strong> 代表兄弟姐妹、父母（青年）。</li>
        <li><strong>日柱：</strong> 日干代表自己（日元），日支代表配偶（中年）。</li>
        <li><strong>时柱：</strong> 代表子女、晚运（晚年）。</li>
      </ul>

      <h3>2. 天干与地支</h3>
      <div style={{display: 'flex', gap: '20px', marginTop: '10px'}}>
        <div style={{flex: 1, padding: '10px', background: '#f0f8ff'}}>
          <strong>🔟 十天干：</strong><br/>
          甲、乙、丙、丁、戊、己、庚、辛、壬、癸
        </div>
        <div style={{flex: 1, padding: '10px', background: '#fff0f5'}}>
          <strong>🕛 十二地支：</strong><br/>
          子、丑、寅、卯、辰、巳、午、未、申、酉、戌、亥
        </div>
      </div>
    </div>
  );
}