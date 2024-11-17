class DateTimeUtils {
  getSubStringByKey = async (mainString: string, key: string) => {
    const indexOfFirst = mainString.indexOf(key);
    return mainString.slice(0, indexOfFirst);
  };

  addDaysYYY = async(date: Date, days: number) => {
    const dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() + days);
    const year = dateCopy.getFullYear();
    const month = String(dateCopy.getMonth() + 1).padStart(2, "0");
    const day = String(dateCopy.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };
  
  addDays = async(date: Date, days: number) => {
    const dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() + days);
    return dateCopy;
  }
  
  addDaysWithinMonth = async(date: Date, days: number) =>  {
    const dateCopy = new Date(date);
    const currentMonth = dateCopy.getMonth();
    const currentYear = dateCopy.getFullYear();
  
    dateCopy.setDate(date.getDate() + days);
  
    if (dateCopy.getMonth() !== currentMonth || dateCopy.getFullYear() !==currentYear){
      dateCopy.setMonth(currentMonth + 1);
      dateCopy.setDate(0);
    }
    if (dateCopy <= date) {
      throw new Error('The resulting date must be in the future.');
    }
    return dateCopy;
  }

  selectDate = async(date: Date, days: number) =>  {
    const dateCopy = new Date(date);
    const currentMonth = dateCopy.getMonth();
    const currentYear = dateCopy.getFullYear();
  
    dateCopy.setDate(date.getDate() + days);
  
    if (dateCopy.getMonth() !== currentMonth || dateCopy.getFullYear() !==currentYear){
      dateCopy.setMonth(currentMonth + 1);
      dateCopy.setDate(0);
    }
    if (dateCopy <= date) {
      throw new Error('The resulting date must be in the future.');
    }
    return dateCopy;
  }
  
}
export default new DateTimeUtils();
