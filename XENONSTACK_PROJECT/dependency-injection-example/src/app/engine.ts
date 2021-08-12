

export class carEngine
{

     private myCarEngine = ['xeno','mahindra','nexa'];

     getCarEngine = () =>
     {
 
        return this.myCarEngine[ Math.floor(Math.random() * this.myCarEngine.length ) ];

     }

     insertMyNewCar = (data : string) =>
     {

        this.myCarEngine.push(data);

     }

}