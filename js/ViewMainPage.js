// Separado del main del ejercicio_12 por comodidad
class ViewMainPage {
    constructor(myf) {
        this.myf = myf;
    }
    showDevices(list) {
        // cargo la lista de objetos en el DOM
        let devicesUl = this.myf.getElementById("devicesList");
        let items = "";
        for (let i in list) {
            let checkedStr = "";
            if (list[i].state == "1")
                checkedStr = "checked";
            switch (list[i].type) {
                // Caso para luces
                case 0:
                    items += "<li class='collection-item avatar'> \
                            <img src='images/lightbulb.png' alt='' class='circle'> \
                            <span class='title'>" + list[i].name + "</span> \
                            <p>" + list[i].description + "<br> \
                            </p> \
                            <a href='#!' class='secondary-content'> <div class='switch'> \
                            <label> \
                            Off \
                            <input type='checkbox' id='dev_" + list[i].id + "' " + checkedStr + "> \
                            <span class='lever'></span> \
                            On \
                            </label> \
                        </div></a> \
                        </li>";
                    break;
                // Ventanas  
                case 1:
                    items += "<li class='collection-item avatar'> \
                            <img src='images/window.png' alt='' class='circle'> \
                            <span class='title'>" + list[i].name + "</span> \
                            <p>" + list[i].description + "<br> \
                            </p> \
                            <a href='#!' class='secondary-content'> <div class='switch'> \
                            <label> \
                            Off \
                            <input type='checkbox' id='dev_" + list[i].id + "' " + checkedStr + "> \
                            <span class='lever'></span> \
                            On \
                            </label> \
                        </div></a> \
                        </li>";
                    break;
            }
        }
        devicesUl.innerHTML = items;
    }
    getSwitchStateById(id) {
        let el = this.myf.getElementById(id);
        return el.checked;
    }
}
