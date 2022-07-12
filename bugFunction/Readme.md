# stage1_task5-npm_typescript
### added eslint, pretter, husky and pre-commit

### Мысли на счет багонутой функции до запуска

```javascript
function summ(a) {

    const x = Object.keys(a).map((k) => {	
        const elem = a[k]; 

        if (typeof elem === undefined) return 2021;
        if (typeof elem.cvalue === 'String') return +elem.cvalue || '2021';
        if (elem.cvalue.isBigObject !== undefined) return summ(elem);

        return elem.сvalue;
    });

    let sum = 0;
    for (let i = 0; i < x.lenght; i++) {
        sum += x[i].cvalue;
    }

    return summ;
}
```
***Визуальный анализ***
1. **'String'** -> 'string', надо с маленькой
2. **lenght** -> length
3. в результате если будет исполнено первых два условия то в массиве будет два значения: число и/или (возможно)строка, и потом в цикле суммирования будет ошибка.
4. **sum += x[i].cvalue;** - думаю что должно быть без ...cvalue, так как это массив - sum += x[i]
5. Надобы ло бы на входе проверку на значение summ поставить, если пришло undefined то дальше иддти смысла нет.
6. В цикле тоже проверку надо на тип, иначе сломаться может
7. isBigObject - из названия похоже возвращает или объект или undefined 
8. В общем еще каких то проверок точно не хватает, но каких пока не пойму.

***В программе***
1. **'String'** -> 'string'
2. **lenght** -> length
<<<<<<< HEAD
3. тип у параметра а - неявный тип any. надо как то это исправлять, чтобы не все что попало можно принимать
>>>>>>> 8807c03af1a5d52c9690aeaa688b3d8bbe9a8e38
