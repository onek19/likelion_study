var button = document.getElementById('formBtn');
var input = document.getElementById('input');
var words = document.getElementById('words');
var lifecnt = document.getElementById('lifecnt');
var warning = document.getElementById('warning');

var wordlist = ['성균관대학교'] //단어가 쌓이는 곳

var life = 3

button.onclick = (event) => {
    event.preventDefault();
    warning.textContent="";
    var lastinput = wordlist[wordlist.length-1] // 초기 : lastinput = '성균관대학교'
    if (input.value[0] === lastinput[lastinput.length-1] && wordlist.indexOf(input.value) === -1) {    // wordlist에 입력 단어 추가
            wordlist.push(input.value)       
            var newword = document.createElement('span') // <span></span>
            newword.textContent = " -> " + input.value //<span>교직이수</span>
            words.appendChild(newword) //  appendchild 기능 사용해서 화면에 표시
    } else {
        warning.textContent = "잘못 입력하셨습니다 ! 새로고침하여 다시시작 "
        life = life-1;
        lifecnt.textContent = '💖'.repeat(life) + '💔'.repeat(3-life)
        }

    if (life === 0) {
       alert("Game over")
    } 
    input.value = ""
}