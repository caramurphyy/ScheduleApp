function getDate() {
    var theDate = new Date();
    var dd = theDate.getDay();
    var mm = theDate.getMonth() + 1; //As January is 0.

    var theDay = document.getElementById("date");
    theDay.textContent = "" + mm + '/' + dd;
    theDay.innerText = "" + mm + '/' + dd;
    theDay.setAttribute = "" + mm + '/' + dd;

    setTimeout("getDate()", 1000);
}
getDate();
/*

function draggingEvents() {
    const event = document.querySelector('.event');

    event.forEach(event => {
        event.addEventListener('dragstart', dragStart);
        event.addEventListener('dragenter', dragEnter)
        event.addEventListener('dragover', dragOver);
        event.addEventListener('dragleave', dragLeave);
        event.addEventListener('drop', drop);
    });

    function dragStart(e) {
        console.log('drag starts...');
        e.dataTransfer.setData('text/plain', e.target.id);
        e.target.classList.add('hide');
    }

    function dragEnter(e) {
        e.preventDefault();
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragLeave(e) {
    }

    function drop(e) {
        e.target.classList.remove('drag-over');

        // get the draggable element
        const id = e.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(id);

        // add it to the drop target
        e.target.appendChild(draggable);
    }
}

draggingEvents();*/
