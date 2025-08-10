const StatisticsSection = () => {
  const stats = [
    { value: '3', label: 'Active Funds' },
    { value: '$50m', label: 'Assets Under Management' },
    { value: '12%', label: 'Annual Growth' },
  ];
  return (
    <section id="statistics" className="py-20 bg-section-charcoal">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-display text-primary mb-10">By the Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="p-8 bg-card border border-border/40 rounded-xl text-center">
              <div className="text-5xl font-display text-foreground mb-2">{s.value}</div>
              <div className="text-secondary">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
