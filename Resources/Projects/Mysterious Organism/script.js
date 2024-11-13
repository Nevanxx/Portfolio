// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory function for creating pAequor objects
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      let newBase;
      do {
        newBase = returnRandBase();
      } while (newBase === this.dna[randomIndex]);
      this.dna[randomIndex] = newBase;
      return this.dna;
    },
    compareDNA(otherPAequor) {
      let identicalBases = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherPAequor.dna[i]) {
          identicalBases++;
        }
      }
      const percentageCommon = ((identicalBases / this.dna.length) * 100).toFixed(2);
      console.log(`specimen #${this.specimenNum} and specimen #${otherPAequor.specimenNum} have ${percentageCommon}% DNA in common.`);
    },
    willLikelySurvive() {
      const cgBases = this.dna.filter(base => base === 'C' || base === 'G').length;
      const survivalRate = (cgBases / this.dna.length) * 100;
      return survivalRate >= 60;
    }
  };
};

// Generate 30 pAequor specimens likely to survive
const survivingSpecimens = [];
let specimenNumber = 1;
while (survivingSpecimens.length < 30) {
  const newSpecimen = pAequorFactory(specimenNumber, mockUpStrand());
  if (newSpecimen.willLikelySurvive()) {
    survivingSpecimens.push(newSpecimen);
  }
  specimenNumber++;
}

// Select container and populate it with specimen cards
const specimensContainer = document.getElementById('specimens-container');

const createSpecimenCard = (specimen) => {
  const specimenCard = document.createElement('div');
  specimenCard.classList.add('specimen-card');

  // Specimen Number
  const title = document.createElement('h2');
  title.textContent = `Specimen #${specimen.specimenNum}`;
  specimenCard.appendChild(title);

  // DNA Sequence
  const dnaSequence = document.createElement('p');
  dnaSequence.classList.add('dna-sequence');
  dnaSequence.textContent = `DNA Sequence: ${specimen.dna.join('')}`;
  specimenCard.appendChild(dnaSequence);

  // Survival Status
  const survivalStatus = document.createElement('p');
  survivalStatus.textContent = "Survival Status: Likely to Survive";
  specimenCard.appendChild(survivalStatus);

  return specimenCard;
};

// Render each surviving specimen
survivingSpecimens.forEach(specimen => {
  specimensContainer.appendChild(createSpecimenCard(specimen));
});
