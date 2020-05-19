
    const inputTag = document.getElementById('input');
    const resultDiv = document.getElementById('result');
    const formBtn = document.getElementById('formbtn');
    const displayLife = document.getElementById('lifecnt');
    const lvlinfo = document.getElementById('lvlinfo');
    const info = document.getElementById('info');

    let lvl = 1;
    let life = 10;

    function setanswer(num) {
        const range = num;
        const answer = Math.ceil(Math.random()*range)
        console.log(answer)
        return answer
    }

    var answers = [0,];
    var boundary = [30,50,100];

    answers[1] = setanswer(30);
    answers[2] = setanswer(50);
    answers[3] = setanswer(100);

    formBtn.onclick = (event) => {
        life -= 1;
        displayLife.textContent = '🌝'.repeat(life) + '🌚'.repeat(10-life);
        const userInput = Number(inputTag.value);
        const result = document.createElement('h2');
        result.textContent = userInput + " 👉 ";

        if (userInput === answers[lvl]) {
            event.preventDefault();
            result.textContent += "Answer";

            if(lvl > 2) {
                alert("YOU WIN");
            } else{
                alert("Correct ! Go to next Level");
                lvl +=1;
                lvlinfo.textContent = "* Lv." + lvl + " *"
                info.textContent = "number between 1 ~ " + boundary[lvl-1];
            }

        }
        else{
            if(life>0) {
                event.preventDefault();
                (userInput>answers[lvl]) ? (result.textContent += "Down") : (result.textContent += "Up"); // 삼항연산자 표기
                inputTag.focus();
            }
            else {
                alert("Fail ! The answer is "+ answers[lvl])
            }
        }
        resultDiv.append(result);
        inputTag.value = ' ';
    }