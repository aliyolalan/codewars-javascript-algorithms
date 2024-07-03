// Successfully working...
function DNAtoRNA(codeDNA) {
  const arrayCodeDNA = codeDNA.split('');

  for (let index = 0; index < arrayCodeDNA.length; index++) {
    const molecule = arrayCodeDNA[index];
    if (molecule == 'T') arrayCodeDNA[index] = 'U';
  }

  return arrayCodeDNA.join('');
}
