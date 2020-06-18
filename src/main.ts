interface DeviceInt{
    id:string;
    name:string;
    description:string;
    state:string;
    type:number;
}
// Clase principal de la estructura
class Main implements GETResponseListener, EventListenerObject, POSTResponseListener
{ 
    myf:MyFramework;
    view:ViewMainPage;

    handleEvent(evt:Event):void
    {
        let sw: HTMLElement = this.myf.getElementByEvent(evt);
        console.log("Device select:"+sw.id);
        // Se crea una request por cada device filtrado
        switch(sw.id)
        {
            case "button-lamp":
                this.myf.requestGET("devices?filter=0",this);
                break;
            case "button-blind":
                this.myf.requestGET("devices?filter=1",this);
                break;
            case "button-all":
                this.myf.requestGET("devices",this);
                break;
            default:
                let data:object = {"id":sw.id , "state":this.view.getSwitchStateById(sw.id)};
                this.myf.requestPOST("devices",data,this);

        }

        let data:object = {"id":sw.id,"state":this.view.getSwitchStateById(sw.id)};
        console.log("Device:"+data);
        this.myf.requestPOST("devices",data,this);
    }

    handleGETResponse(status:number,response:string):void{
      if(status==200)
      {
          console.log(response);
          let data:DeviceInt[] = JSON.parse(response);
          console.log(data);
          this.view.showDevices(data);    
          
          for(let i in data)          
            this.myf.configClick(`dev_${data[i].id}`,this);  
          
      }
    }

    handlePOSTResponse(status:number,response:string):void{
        if(status==200)
        {
            console.log(response);
        }
    }

    main():void 
    { 
      this.myf = new MyFramework();
      this.view = new ViewMainPage(this.myf);
      // Lista de dispositovos
      this.myf.requestGET("devices",this);

      // Se crea la regla para cada ID
      this.myf.configClick("button-all",this);
      this.myf.configClick("button-lamp",this);
      this.myf.configClick("button-blind",this);
    } 
} 

// Al cargar la pantalla
window.onload = () => {
    let obj = new Main(); 
    obj.main();
};
 

