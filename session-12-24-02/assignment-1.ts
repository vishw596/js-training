// Create a type IsNumber<T> .
// Create a type ExtractEmail<T> that extracts email type if present.

type IsNumber<T> = T extends number ? true : false;

type A = IsNumber<"45">; //false
type B = IsNumber<43>; // true

const trueType: B = true;

type ExtractEmail<T> = T extends { email: infer U } ? U : never;
type Person = {
    name:string;
    email:string;
}
type PersonEmail = ExtractEmail<Person>
const email:PersonEmail = "alex132@gmail.com"
