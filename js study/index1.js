function GreatGrandFather(){
    let car = 'toyota';
    console.log(car);
    function GrandFather(){
        let car= 'honda';
        console.log(car);
        function Father(){
            let car ='bmw';
            console.log(car);
            function child(){
                let car='ford';
                console.log(car);
            }
                function sibling(){
                    let car='chevy';
                
                    
                }
                child();
                sibling();
            
        }
        Father();
        function uncle(){
            let car='jeep';
        }
        
    }
    GrandFather();
    function greatuncle(){}
}
GreatGrandFather();
let arr1=[1,2,3];
arr1.push(5);
for(i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}
