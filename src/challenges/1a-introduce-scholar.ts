interface Scholar {
  firstName: string;
  lastName: string;
  cohortNumber: number;
}

function introduceScholar(scholar: Scholar): string {
  const {firstName,lastName,cohortNumber} = scholar;
  return "${firstName} ${lastName} is an Academy Scholar in Cohort ${cohortNumber}";
}

export default introduceScholar;
