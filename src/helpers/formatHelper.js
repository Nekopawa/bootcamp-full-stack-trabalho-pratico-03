const formatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

function formatSalary(value) {
  return formatter.format(value);
}

export { formatSalary };
