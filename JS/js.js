function task1() {
      let str=prompt("Введите URL адрес для проверки");
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