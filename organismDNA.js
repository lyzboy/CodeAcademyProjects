// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
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

// factory function
const pAequorFactory = (id, dnaArr) => {
  return {
    _specimenNum: id,
    _dna: dnaArr,
    get specimenNum(){
      return this._specimenNum;
    },
    get dna() {
      return this._dna;
    },
    mutate() {
      const randIndex = Math.floor(Math.random() * 15);
      let mutatedBase = returnRandBase();
      while (this._dna[randIndex] === mutatedBase) {
        mutatedBase = returnRandBase();
      }
      this._dna.splice(randIndex, 1, mutatedBase);
      return this._dna;
    },
    compareDNA(otherSpecimen) {
      // create array of specimen that are similar within the two arrays
      const similarDNA = this._dna.filter((element, index) => element === otherSpecimen.dna[index]);
      // get percentage of similar elements
      const similarPercentage = getPercentage(similarDNA.length, this._dna.length);
      // log similar message
      console.log(`specimen #${this._specimenNum} and specimen #${otherSpecimen.specimenNum} have ${similarPercentage}% DNA in common`);
    },
    willLikelySurvive(){
      return getPercentage(this._dna.filter(element=> element === 'C' || element === 'G').length, this._dna.length) >= 60 ? true : false;
    },
  };
};

// Helper function to return round percentage
const getPercentage = (divisor, dividend) => ((divisor / dividend) * 100).toFixed(0);

// Helper function to generate batch of survivalable specimen code which can be copied from console.log
const generateSurvivableSpecimenArray = () => {
  const survivableSpecimen = [];
  // use these two vars to generate a unique id, add count due to Date.now() would be the same for all ids
  const id = Date.now();
  let count = 0;
  while(survivableSpecimen.length < 30){
    let specimen = pAequorFactory(id + count, mockUpStrand());
    if(specimen.willLikelySurvive()) {
      survivableSpecimen.push(specimen);
      count++;
    }
  }
  // generate string that can be used as code
  let generatedCode = "const survivableArray = [\n";
  survivableSpecimen.forEach(specimen=> {
    generatedCode += 'pAequorFactory(';
   generatedCode +=  specimen.specimenNum+',['; 
   specimen.dna.forEach((char, index, array)=>{
    generatedCode += `'${char}'`;
    if(index != array.length-1) generatedCode += ',';
   })
   generatedCode += ']),\n';
  })
  generatedCode += "];"
  console.log(generatedCode)
}

// Array of specimen that are likely to survive. Generated using generateSurvivableSpecimenArray()
const survivableArray = [
  pAequorFactory(1698016827211,['T','C','G','A','T','T','C','G','C','C','T','G','C','G','C']),
  pAequorFactory(1698016827212,['G','G','C','A','A','G','A','A','C','C','G','T','G','C','A']),
  pAequorFactory(1698016827213,['G','A','C','C','A','A','C','A','G','C','G','A','G','A','C']),
  pAequorFactory(1698016827214,['G','C','G','G','T','C','C','A','A','A','C','G','C','C','A']),
  pAequorFactory(1698016827215,['G','T','G','A','C','A','G','C','G','G','C','C','G','C','A']),
  pAequorFactory(1698016827216,['G','G','G','A','C','C','C','T','A','A','C','T','G','G','A']),
  pAequorFactory(1698016827217,['C','G','G','G','G','C','T','C','G','G','T','C','G','T','C']),
  pAequorFactory(1698016827218,['A','A','C','C','G','C','G','G','A','C','C','T','A','A','G']),
  pAequorFactory(1698016827219,['C','T','G','G','G','G','C','T','G','C','A','G','T','A','A']),
  pAequorFactory(1698016827220,['C','G','T','G','G','G','C','C','T','G','C','T','A','T','A']),
  pAequorFactory(1698016827221,['G','C','G','G','G','T','C','A','C','C','A','G','A','G','A']),
  pAequorFactory(1698016827222,['C','T','G','C','G','C','G','C','G','A','G','T','C','A','G']),
  pAequorFactory(1698016827223,['C','C','C','C','T','C','A','C','A','T','G','C','G','G','A']),
  pAequorFactory(1698016827224,['G','G','G','G','C','T','A','C','A','G','C','C','A','T','A']),
  pAequorFactory(1698016827225,['G','G','A','C','T','A','T','G','G','T','A','C','C','G','C']),
  pAequorFactory(1698016827226,['A','A','G','C','C','G','T','C','G','A','G','G','T','G','A']),
  pAequorFactory(1698016827227,['G','C','A','G','T','C','C','C','T','C','A','C','A','C','C']),
  pAequorFactory(1698016827228,['T','G','A','A','G','G','C','G','A','C','C','T','C','T','C']),
  pAequorFactory(1698016827229,['T','C','G','C','T','G','T','C','C','C','C','C','G','A','T']),
  pAequorFactory(1698016827230,['A','C','C','T','T','T','G','G','G','C','G','T','C','A','C']),
  pAequorFactory(1698016827231,['C','G','G','G','C','T','G','T','C','C','T','A','C','G','T']),
  pAequorFactory(1698016827232,['G','G','A','C','C','G','C','G','C','C','G','C','G','G','T']),
  pAequorFactory(1698016827233,['G','T','G','T','G','C','C','A','G','G','G','A','G','T','C']),
  pAequorFactory(1698016827234,['T','A','C','C','G','C','A','C','T','C','T','G','T','G','C']),
  pAequorFactory(1698016827235,['A','G','G','A','A','G','T','C','G','C','G','C','G','C','C']),
  pAequorFactory(1698016827236,['T','C','T','G','A','T','G','G','A','G','G','G','G','C','C']),
  pAequorFactory(1698016827237,['T','C','G','G','A','G','C','G','G','T','C','G','A','C','G']),
  pAequorFactory(1698016827238,['C','T','G','G','C','T','C','C','G','C','A','T','C','C','T']),
  pAequorFactory(1698016827239,['C','C','A','C','A','G','A','C','C','C','G','G','T','G','T']),
  pAequorFactory(1698016827240,['T','G','G','A','C','G','C','T','A','C','G','C','A','G','A']),
];

//Tests
const item = pAequorFactory(123, mockUpStrand());
console.log(item);
console.log('********')
console.log(`Mutated specimen #${item.specimenNum} DNA: ${item.mutate()}`);
console.log('********')
survivableArray[Math.floor(Math.random() * 15)].compareDNA(survivableArray[Math.floor(Math.random() * 15)]);
