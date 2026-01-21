// 2.Gamma,undefined

const registry = {
  active: [{ id: 1, name: "Alpha" }],
  archived: []
};

function cloneAndModify(data) {
  // Goal: Create a copy so the original registry isn't changed
  const copy = { ...data };
  
  copy.active.push({ id: 2, name: "Beta" });
  copy.active[0].name = "Gamma";
  copy.version = 2.0;
  
  return copy;
}

const newRegistry = cloneAndModify(registry);

console.log(registry.active.length); //2 
console.log(registry.active[0].name); // Gamma
console.log(registry.version);       // undefined

// in this code first the reference of the registry object is passed to the cloneAndModify()
// and inside the cloneAndModify() the shallow copy of the object registry will be created which means a seperate copy for primitive data types like string,number will be created.

// but for non-primitive data types like array,object will still points to the original memory location in heap that is why modifying the active array inside the function also changes the active array in registry as two different references are pointing to same memory location.

// and registry.version logs undefined as there is no such property in the object

/* stack                    heap
 newRegistry->object#150    object#100->{           object#150->{            array#200             array#300{}
                            active: array#200,      active: array#200,       [obj1#400,obj2#200]
 registry->object#100       archived:array#300      archived: array#300,
                                                    version:2
                            }                      }                            */  