function task1() {
      let str=prompt("Введите URL адрес для проверки");
      console.log(`Введенная строка: ${str}`);
      if (isPredl(str))
            console.log("Введенная строка является URL адресом");
      else
            console.log("Введенная строка не является URL адресом");

      function isPredl(str)
      {
            let re= /^(((http(s)?|ftp):\/\/)?(\w+(-\w+)*\.)+[a-z]{2,}((\/[\w\.#:\?\+=&%!\-]*)*)?)$/;

            // Проверка протокола (http/https/ftp/отсутствие протокола): ((http(s)?|ftp):\/\/)?

            // Проверка домена (буквы или цифры, после которых может следовать(или нет) дефис с буквами или цифрами, после обязательно идет точка. Всё это может повторяться несколько раз, а после в конце идет домен первого уровня состоящий только из латинских символов (ru/com/net и т.д.): (\w+(-\w+)?\.)+[a-z]{2,} 

            //Проверка необязательных файлов или каталогов. Здесь идут любые латинские и прочие (?,#,_,% и т.д.) символы: (\/[\w\.#:\?\+=&%!\-]*)?

            let flag=re.test(str);
            return flag;
      }

      // Примеры, на которых проверялась работоспособность:
      /*
      https://github.com/NastinNN/JS_Arrays/blob/main/task10.html (true)
      https://docs.google.com/presentation/d/1fyvQPjM869lxYRh_YALhnoPBn9cBnCWe/edit#slide=id.p10 (true)
      https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D0%B3%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D1%8B%D0%B5_%D0%B2%D1%8B%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F (true)
      https://github.com/NastinNN/ (true)
      https://githu324-ub-rrt.com/NastinNN/ (true)
      github.com/NastinNN/ (true)
      https://git#%hu324-ub-r&?rt.com/NastinNN/ (false)
      https://github.c45om/NastinNN/ (false)
       */
}

function task2() {
      let str=prompt("Введите название переменной JS");
      console.log(`Введенная строка: ${str}`);
      if (isPredl(str))
            console.log(`Введенное название "${str}" подходит для переменной JS`);
      else
            console.log(`Введенное название "${str}" не подходит для переменной JS`);

      function isPredl(str)
      {
            let re= /^[A-Za-z\_][\w\$]*$/;

            // Имя переменной должно содержать только буквы, цифры или символы $ и _.
            // Первый символ в имени не должен быть цифрой.

            let flag=re.test(str);
            return flag;
      }
}

function task3() {
      let str=prompt("Введите строку");
      console.log(`Введенная строка: ${str}`);
      if (isPredl(str))
            console.log("Введенная строка состоит только из букв и цифр");
      else
            console.log("Введенная строка состоит не только из букв и цифр");

      function isPredl(str)
      {
            let re= /^[A-Za-z0-9]+$/;
            // Не использовала \w потому что он содержит также и нижнее подчеркивание
            let flag=re.test(str);
            return flag;
      }
}

function task4() {
      let str=prompt("Введите строку");
      console.log(`Введенная строка: ${str}`);
      if (isPredl(str))
            console.log("Введенная строка не содержит цифры и спецсимволы и содержит больше 10 символов");
      else
      console.log("Введенная строка содержит цифры и спецсимволы или длина строки меньше 10");

      function isPredl(str)
      {
            let re= /^[A-za-z\s]{10,}$/;
            // Строка может содержать только буквы латинского алфавита и пробелы, а также должна быть длиной от 10 символов
            let flag=re.test(str);
            return flag;
      }
}

function task5() {
      // Первый способ
      let str=prompt("Введите строку");
      console.log(`Введенная строка: ${str}`);
      let regNum=/\d/g;
      let checkNum=str.match(regNum);
      let regLet=/[a-z]/gi;
      let checkLet=str.match(regLet);
      console.log(`Количество цифр в веденной строке: ${checkNum.length}`);
      console.log(`Количество букв в веденной строке: ${checkLet.length}`);

      // Второй способ (filter+test)
      let strArr=str.split('');
      let regNum2=/\d/;
      let regLet2=/[a-z]/i;
      let newArrNum=strArr.filter((elem) => (regNum2.test(elem)));
      let newArrLet=strArr.filter((elem) => (regLet2.test(elem)));
      console.log("_______");
      console.log("Второй способ решения (filter+test)")
      console.log(`Количество цифр в веденной строке ${newArrNum.length}`);
      console.log(`Количество букв в веденной строке:${newArrLet.length}`);
}
