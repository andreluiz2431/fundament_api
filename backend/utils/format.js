function formatPercent(value) {
  if (typeof value === 'string' && value.endsWith('%')) return value;
  return value + '%';
}

function formatCurrency(value) {
  if (typeof value === 'string' && value.includes('R$')) return value;
  return 'R$ ' + Number(value).toFixed(2).replace('.', ',');
}

module.exports = { formatPercent, formatCurrency }; 