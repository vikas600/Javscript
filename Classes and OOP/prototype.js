// let myName= "hitesh      "

// console.log(myName.truelength)


let myHeros =["thor" , "spiderMan"]

let heroPower = {
    thor: "hammer",
    spiderMan: "sling",


    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderMan}`);
        
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`)
}

Array.prototype.heyHitesh = function(){
    console.log(`hitesh says hello`);
    
}

// heroPower.hitesh()

myHeros.hitesh()
myHeros.heyHitesh();
// heroPower.heyHitesh()


// inheritance

const user ={
    name:"user",
    email: "chai@gmail.com"
}

const Teacher = {
    makeVideo: true

}

const TeachingSupport ={
    isAvailable :false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,

    __proto__:TeachingSupport
}

Teacher.__proto__ = user

// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername= "ChaiAurCode    "

String.prototype.trueLength= function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`)
    
}

anotherUsername.trueLength();
"hitesh".trueLength();
"iceTea".trueLength()
