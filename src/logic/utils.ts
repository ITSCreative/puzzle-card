export const getStoredProgress = (): string[] | null => {
    const storedProgress = localStorage.getItem('progress');
    return storedProgress ? JSON.parse(storedProgress) : null;
  };
  
  export const resetProgress = () => {
    localStorage.removeItem('progress');
  };
  