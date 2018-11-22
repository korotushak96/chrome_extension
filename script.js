let body = document.body,
    dictionary = {
        'Foo' : 'bar',
        "Cat" : "Dog",
        "Helo" : "hello",
        "heldp" : "help"
    };


body.addEventListener('keydown', (event) => {
    let target = event.target;
    if (target.tagName.contenteditable == false) return;
    if (event.keyCode != 32) return;
    for (let key in dictionary){
        if(target.value == key) target.value = dictionary[key];
    }
    
})
