// Centralized brunch dates configuration
// Update this file to add new brunch dates
// All dates should be in IST (Indian Standard Time) with timezone offset +05:30

export interface BrunchDate {
  date: string;      // ISO format with timezone
  value: string;     // YYYY-MM-DD format for form values
  label: string;     // Human-readable label
}

export const BRUNCH_DATES: BrunchDate[] = [
  { 
    date: '2026-01-18T12:30:00+05:30', 
    value: '2026-01-18', 
    label: '18th January, 2026' 
  },
  { 
    date: '2026-02-01T12:30:00+05:30', 
    value: '2026-02-01', 
    label: '1st February, 2026' 
  },
  { 
    date: '2026-02-15T12:30:00+05:30', 
    value: '2026-02-15', 
    label: '15th February, 2026' 
  },
  // Add more dates here following the pattern:
  // Usually: 2nd Sunday after the previous brunch
  // Sometimes: Skip 2 Sundays as needed
  // 
  // Example for future dates:
  // { 
  //   date: '2026-03-01T12:30:00+05:30', 
  //   value: '2026-03-01', 
  //   label: '1st March, 2026' 
  // },
];

/**
 * Get the next upcoming brunch date
 * @returns The next brunch date object, or the last date if all have passed
 */
export const getNextBrunchDate = (): BrunchDate => {
  const now = new Date();
  
  for (const brunch of BRUNCH_DATES) {
    const brunchDate = new Date(brunch.date);
    if (brunchDate.getTime() > now.getTime()) {
      return brunch;
    }
  }
  
  // If all dates have passed, return the last date
  return BRUNCH_DATES[BRUNCH_DATES.length - 1];
};

/**
 * Get the next two available brunch dates for the questionnaire
 * @returns Array of the next two upcoming brunch dates
 */
export const getNextTwoBrunchDates = (): BrunchDate[] => {
  const now = new Date();
  const upcomingDates = BRUNCH_DATES.filter(brunch => {
    const brunchDate = new Date(brunch.date);
    return brunchDate.getTime() > now.getTime();
  });
  
  // Return the next two upcoming dates
  if (upcomingDates.length >= 2) {
    return upcomingDates.slice(0, 2);
  } else if (upcomingDates.length === 1) {
    // If only one date is upcoming, return just that one
    return upcomingDates;
  } else {
    // If all dates have passed, return the last two dates
    return BRUNCH_DATES.slice(-2);
  }
};

