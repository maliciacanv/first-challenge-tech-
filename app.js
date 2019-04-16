const arr = [
    { text: 'Hola :-)', color: '#fff', bgColor: 'pink' },
    { text: 'Cómo estás?', color: 'yellow', bgColor: 'green' },
    { text: 'Segura?', color: 'blue', bgColor: 'red' },
    { text: 'Fin', color: '#fff', bgColor: '#000' },
  ]
  
  const screenPrincipal = document.getElementById('screen')
  const button = document.getElementById('button')

  let countClick = -1;

  const count = () => {
    if(countClick >= 3) {
        return countClick= 0
    } else {
        return countClick += 1;
    }   
}; 
   
  button.addEventListener('click', () => {
    return createTemplate(arr,count()); 
  })

let template = '';  

const createTemplate = (arr,count) => {
  template = `
    <div class="template-screen" style="background-color: ${arr[count].bgColor};">
      <h1 style="color: ${arr[count].color};">${arr[count].text}</h1>
    </div>`;
  return screenPrincipal.innerHTML = template;
}  
    