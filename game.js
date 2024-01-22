// game.js
export const logs = [
    'Pikachu вспомнил что-то важное, но неожиданно Charmander, не помня себя от испуга, ударил в предплечье врага.',
    'Pikachu поперхнулся, и за это Charmander с испугу приложил прямой удар коленом в лоб врага.',
    'Pikachu забылся, но в это время наглый Charmander, приняв волевое решение, неслышно подойдя сзади, ударил.',
    'Pikachu пришел в себя, но неожиданно Charmander случайно нанес мощнейший удар.',
    'Pikachu поперхнулся, но в это время Charmander нехотя раздробил кулаком \<вырезанно цензурой\> противника.',
    'Pikachu удивился, а Charmander] пошатнувшись влепил подлый удар.',
    'Pikachu высморкался, но неожиданно Charmander провел дробящий удар.',
    'Pikachu пошатнулся, и внезапно наглый Charmander беспричинно ударил в ногу противника',
    'Pikachu расстроился, как вдруг, неожиданно Charmander случайно влепил стопой в живот соперника.',
    'Pikachu пытался что-то сказать, но вдруг, неожиданно Charmander со скуки, разбил бровь сопернику.',
  ];
  
  export function createClickCounter(button, maxClicks) {
    let clickCount = 0;
  
    function handleClick() {
      if (clickCount < maxClicks) {
        clickCount++;
        console.log(`Button "${button.innerText}" clicked: ${clickCount} clicks.`);
      } else {
        console.log(`Button "${button.innerText}" reached the maximum clicks (${maxClicks}).`);
        button.disabled = true;
      }
    }
  
    button.addEventListener("click", handleClick);
  
    return function setMaxClicks(newMaxClicks) {
      maxClicks = newMaxClicks;
      clickCount = 0;
      button.disabled = false;
      console.log(`Button "${button.innerText}" limit updated to ${newMaxClicks}.`);
    }
  }
  