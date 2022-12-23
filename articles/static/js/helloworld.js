//alert('Input group!');


var groupmates = [
    {
    "name": "Александр", 
        "surname": "Иванов", 
        "exams": ["Информатика", "ЭЭиС", "Web"], 
        "group": "bst2001",
        "marks": [4, 3, 3]
    }, 
    { 
        "name": "Иван", 
        "surname": "Петров", 
        "exams": ["Информатика", "АиГ", "КТП"],
        "group": "bst2001",
        "marks": [4, 4, 4] 
    }, 
    { 
        "name": "Кирилл", 
        "surname": "Смирнов", 
        "exams": ["Философия", "ИС", "КТП"], 
        "group": "siss1803",
        "marks": [5, 5, 5]
    },
    {
        "name": "Александр",
        "surname": "Маркин",
        "exams": ["Информатика", "Физика", "Пивоведение"],
        "group": "bib2101",
        "marks": [4, 3, 5]
    },
    {
        "name": "Артур",
        "surname": "Кириенко",
        "exams": ["Информатика", "Физика", "Пивоведение"],
        "group": "bib2101",
        "marks": [4, 4, 4]
    },
    {
        "name": "Тимофей",
        "surname": "Катков",
        "exams": ["Социология", "Электротехника", "Мат.Анализ"],
        "group": "bib2002",
        "marks": [5, 4, 5]
    },
]

console.log(groupmates)

var rpad = function(str, length) {
    // js не поддерживает добавление нужного количества символов 
    // справа от строки, т.е. аналога ljust из Python здесь нет  
    str = str.toString(); // преобразование в строку 
    while (str.length < length) 
    str = str + ' '; // добавление пробела в конец строки return str; // когда все пробелы добавлены, возвратить строку 
}; 
    
     
    
var printStudents = function(students){  
    console.log( 
        rpad("Имя", 15), 
        rpad("Фамилия", 15), 
        rpad("Группа", 8), 
        rpad("Оценки", 20) 
    );  
    // был выведен заголовок таблицы 

    for (var i = 0; i<=students.length-1; i++){ 
    // в цикле выводится каждый экземпляр студента  
        console.log( 
            rpad(students[i]['name'], 15), 
            rpad(students[i]['surname'], 15), 
            rpad(students[i]['group'], 8), 
            rpad(students[i]['marks'], 20) 
        ); 
    }   
    //console.log('\n'); // добавляется пустая строка в конце вывода 
}; 

var filterByGroup = function() {
    var group = prompt();
    var result = [];
    for (var i = 0; i <= groupmates.length ; i++){
        var student = groupmates[i];
        if (student == 'group'){
            result.push(student);
        }
    }
    return result;
};

printStudents(groupmates);
printStudents(filterByGroup(groupmates));