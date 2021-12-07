export function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

 // setter upućuje na neku setFunkciju
 
export function checkWin(correct, wrong, word) {
  let status = 'win'; // ako smo pobedili

  // Check for win
  word.split('').forEach(letter => {
    if(!correct.includes(letter)){
      status = ''; //ne znači ni da smo pobedili, niti izgubili
    }
  });
  
  // Check for lose
  if(wrong.length === 6) status = 'lose'; // ako smo izgubilisi

  return status
}