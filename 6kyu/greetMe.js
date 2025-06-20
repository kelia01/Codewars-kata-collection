let greet = function(name) {
  let lower = name.toLowerCase().split('');
  let rem = lower.slice(1).join('');
  lower = (lower[0].toUpperCase() + rem);
  
  return `Hello ${lower}!`
};