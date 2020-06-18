// Separado del main del ejercicio_12 por comodidad

interface DeviceInt{
    id:string;
    name:string;
    description:string;
    state:string;
    type:number;
}
class ViewMainPage
{
    myf:MyFramework;

    constructor(myf:MyFramework)
    {
        this.myf = myf;    
    }

    showDevices(list:DeviceInt[]):void
    {
         // cargo la lista de objetos en el DOM
        let devicesUl:HTMLElement = this.myf.getElementById("devicesList");

        let items:string="";
        for(let i in list)
        {   
            let checkedStr="";
            if(list[i].state=="1")
                checkedStr="checked";

            switch(list[i].type)
            {
                // Caso para luces
                case 0:                     
                    items+="<li class='collection-item avatar'> \
                            <img src='images/lightbulb.png' alt='' class='circle'> \
                            <span class='title'>"+list[i].name+"</span> \
                            <p>"+list[i].description+"<br> \
                            </p> \
                            <a href='#!' class='secondary-content'> <div class='switch'> \
                            <label> \
                            Off \
                            <input type='checkbox' id='dev_"+list[i].id+"' "+checkedStr+"> \
                            <span class='lever'></span> \
                            On \
                            </label> \
                        </div></a> \
                        </li>";  
                    break;
                // Ventanas  
                case 1:                   
                    items+="<li class='collection-item avatar'> \
                            <img src='images/window.png' alt='' class='circle'> \
                            <span class='title'>"+list[i].name+"</span> \
                            <p>"+list[i].description+"<br> \
                            </p> \
                            <a href='#!' class='secondary-content'> <div class='switch'> \
                            <label> \
                            Off \
                            <input type='checkbox' id='dev_"+list[i].id+"' "+checkedStr+"> \
                            <span class='lever'></span> \
                            On \
                            </label> \
                        </div></a> \
                        </li>";  
                    break;                                                          
            }
        }

        devicesUl.innerHTML=items;
    }

    getSwitchStateById(id:string):boolean {
        let el:HTMLInputElement = <HTMLInputElement>this.myf.getElementById(id);       
        return el.checked;
    }
}
