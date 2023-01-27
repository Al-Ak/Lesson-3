var num = 0;
var sam = 0; 
do{
num += sam; 
sam = parseInt(prompt('Введите число..... '));
}while (sam > 0);

console.log('Ответ.......', (-num));