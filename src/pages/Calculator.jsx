import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Solar } from 'lunar-javascript';

// --- A. 日主性格字典 (保留之前的精华) ---
const DAY_MASTER_INFO = {
  '甲': { feature: '参天大树 (甲木)', desc: '正直仁慈，有上进心，但容易固执。' },
  '乙': { feature: '花草藤萝 (乙木)', desc: '性格柔顺，适应力强，善于以柔克刚。' },
  '丙': { feature: '太阳之火 (丙火)', desc: '热情开朗，充满活力，急躁但无心机。' },
  '丁': { feature: '灯烛之火 (丁火)', desc: '温和细腻，心思缜密，具有牺牲精神。' },
  '戊': { feature: '高山厚土 (戊土)', desc: '沉稳厚重，讲信用，但有时反应稍慢。' },
  '己': { feature: '田园湿土 (己土)', desc: '包容力强，多才多艺，内心稍微复杂。' },
  '庚': { feature: '刀剑之金 (庚金)', desc: '刚毅果断，讲义气，好胜心强。' },
  '辛': { feature: '珠玉之金 (辛金)', desc: '温润秀气，重感情，爱面子且细腻。' },
  '壬': { feature: '江河湖海 (壬水)', desc: '聪明机智，奔放豪迈，善于把握机会。' },
  '癸': { feature: '雨露之水 (癸水)', desc: '温柔内向，勤勉沉静，想象力丰富。' }
};

// --- B. 四柱科普字典 (新增：用于点击不同柱子时显示) ---
const PILLAR_EXPLANATIONS = {
  year: {
    title: '🌱 年柱 (根) - 祖荫与童年',
    range: '0 - 16岁',
    meaning: '这就好比树的根基。年柱代表你的祖上、父母长辈，以及你童年时期的生长环境。根深则叶茂，年柱好的人，通常早年运势较为平顺，能得长辈庇佑。'
  },
  month: {
    title: '🌿 月柱 (苗) - 事业与兄弟',
    range: '17 - 32岁',
    meaning: '这是树苗成长的阶段。月柱是八字的“提纲”，能量最强。它代表你的兄弟姐妹、朋友同辈，也掌管你青年时期的学业和事业起步。这里往往藏着你的社会属性。'
  },
  day: {
    title: '🌺 日柱 (花) - 自己与配偶',
    range: '33 - 48岁',
    meaning: '这是最核心的部分！日柱的天干（上面的字）代表“你自己”，地支（下面的字）代表你的“夫妻宫”。这是人生的中年黄金期，也是看婚姻感情最重要的地方。'
  },
  hour: {
    title: '🍎 时柱 (果) - 子女与晚运',
    range: '49岁 以后',
    meaning: '这是开花结果的阶段。时柱代表你的子女缘分、下属关系以及晚年的运势。时柱好，意味着晚年生活安逸，子女孝顺有成。'
  }
};

export default function Calculator() {
  const today = new Date().toISOString().split('T')[0];
  const [date, setDate] = useState(today);
  const [time, setTime] = useState('12:00');
  const [bazi, setBazi] = useState(null);
  
  // 新增：默认选中 'day' (日柱)，因为它是核心
  const [selectedPillar, setSelectedPillar] = useState('day');

  const handleCalculate = () => {
    if (!date) return alert("请选择日期");
    const [year, month, day] = date.split('-').map(Number);
    const [hour, minute] = time.split(':').map(Number);
    
    const solar = Solar.fromYmdHms(year, month, day, hour, minute, 0);
    const lunar = solar.getLunar();
    const eightChar = lunar.getEightChar();
    const dayGan = eightChar.getDayGan();

    setBazi({
      year: { gan: eightChar.getYearGan(), zhi: eightChar.getYearZhi() },
      month: { gan: eightChar.getMonthGan(), zhi: eightChar.getMonthZhi() },
      day: { gan: dayGan, zhi: eightChar.getDayZhi() },
      hour: { gan: eightChar.getTimeGan(), zhi: eightChar.getTimeZhi() },
      info: `农历：${lunar.toString()} | 节气：${lunar.getJieQi() || '无'}`,
      interpretation: DAY_MASTER_INFO[dayGan] || { desc: '暂无详解' }
    });
    
    // 排盘后重置回日柱
    setSelectedPillar('day');
  };

  // 辅助函数：生成柱子的样式
  const getPillarStyle = (type) => {
    const isSelected = selectedPillar === type;
    return {
      border: isSelected ? '2px solid #8b4513' : '1px solid #ddd',
      backgroundColor: isSelected ? '#fff8e1' : '#fff',
      transform: isSelected ? 'scale(1.05)' : 'scale(1)',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      boxShadow: isSelected ? '0 4px 12px rgba(139, 69, 19, 0.2)' : 'none'
    };
  };

  return (
    <div>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ color: '#666' }}>← 返回科普首页</Link>
      </nav>

      <div className="card">
        <h2 style={{marginTop: 0}}>🗓️ 输入生辰信息</h2>
        <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} style={{padding: '10px'}} />
            <input type="time" value={time} onChange={e => setTime(e.target.value)} style={{padding: '10px'}} />
          </div>
          <button 
            onClick={handleCalculate} 
            style={{ width: '100%', marginTop: '15px', padding: '12px', background: '#8b4513' }}
          >
            🔮 开始排盘
          </button>
        </div>
      </div>

      {bazi && (
        <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
          
          {/* 1. 可交互的八字盘 */}
          <div className="card" style={{ marginTop: '20px' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '5px' }}>您的命盘结构</h3>
            <p style={{ textAlign: 'center', color: '#999', fontSize: '0.8rem', marginBottom: '20px' }}>
              👇 点击下方的四个格子，查看不同阶段的含义
            </p>
            
            <div className="bazi-chart">
              {/* 年柱 */}
              <div 
                className="pillar" 
                style={getPillarStyle('year')}
                onClick={() => setSelectedPillar('year')}
              >
                <h4>年柱 </h4>
                <div className="gan">{bazi.year.gan}</div>
                <div className="zhi">{bazi.year.zhi}</div>
              </div>

              {/* 月柱 */}
              <div 
                className="pillar" 
                style={getPillarStyle('month')}
                onClick={() => setSelectedPillar('month')}
              >
                <h4>月柱 </h4>
                <div className="gan">{bazi.month.gan}</div>
                <div className="zhi">{bazi.month.zhi}</div>
              </div>

              {/* 日柱 */}
              <div 
                className="pillar" 
                style={getPillarStyle('day')}
                onClick={() => setSelectedPillar('day')}
              >
                <h4>日柱 </h4>
                <div className="gan">{bazi.day.gan}</div>
                <div className="zhi">{bazi.day.zhi}</div>
              </div>

              {/* 时柱 */}
              <div 
                className="pillar" 
                style={getPillarStyle('hour')}
                onClick={() => setSelectedPillar('hour')}
              >
                <h4>时柱 </h4>
                <div className="gan">{bazi.hour.gan}</div>
                <div className="zhi">{bazi.hour.zhi}</div>
              </div>
            </div>
          </div>

          {/* 2. 动态解读区域 (根据 selectedPillar 变化) */}
          <div className="card" style={{ marginTop: '20px', background: '#333', color: '#fff', minHeight: '200px' }}>
            
            {/* 标题栏 */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #555', paddingBottom: '10px', marginBottom: '15px' }}>
              <h2 style={{ color: '#ffd700', margin: 0 }}>
                {PILLAR_EXPLANATIONS[selectedPillar].title}
              </h2>
              <span style={{ background: '#555', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>
                {PILLAR_EXPLANATIONS[selectedPillar].range}
              </span>
            </div>
            
            {/* 内容区 */}
            <div style={{ lineHeight: '1.8', fontSize: '1rem', color: '#ddd' }}>
              <p>{PILLAR_EXPLANATIONS[selectedPillar].meaning}</p>
              
              {/* 特殊逻辑：只有选中日柱时，才显示具体的性格分析 */}
              {selectedPillar === 'day' && (
                <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(255, 215, 0, 0.1)', borderLeft: '4px solid #ffd700', borderRadius: '0 4px 4px 0' }}>
                  <strong style={{ color: '#ffd700', fontSize: '1.1rem' }}>
                    你的核心特质：{bazi.interpretation.feature}
                  </strong>
                  <p style={{ marginTop: '10px', marginBottom: 0 }}>
                    {bazi.interpretation.desc}
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}