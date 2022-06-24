# **Basics**

>## **TypeScript Basics**

        let name: string = "Piyush";
        let name: string;
        let age: number;
        let isStudent: boolean;
        let hobbies: string[];
        let role: [number , string] // tuple
        role = [26, "dash"];

>## **When defining an object we use the type keyword**

        type Person = {
        name: String;
        age?: number;  //? means that this property is now optional
        }

        let human: Person = {
        name: "pedro",
        age: 22,
        }

>## **Typing an array of objects**

        let lotsOfPeople : Person[];

>## **Working with functions**

        // Defining a function
        // let printName: Function; // or
        let printName: (name: string) => void; // returns undefined
        let printName: (name: string) => never; // returns nothing
        let printName: (name: string) => string;

        printName = (name:string) => {
          console.log(name);
          return name;
        }

        printName("John");

        let personName: unknown;

>## **Interface**

>### **Working with types and interfaces**

        type Animal = {
            name: string;
            sound?: string;
        }

        interface Car {
            name: string;
            sound?: string;
        }

> ## **Extending properties between types**

        type X = {
            a:string
            b:number
        }
<br>

> ## **To use the properties of X in Y, we use = X &**
        
        type Y = X & {
            c:string
            d:number
        }

> ## **wrong**

        - Type '{ c: string; d: number; }' is not assignable to type 'Y'.
        - Type '{ c: string; d: number; }' is missing the following properties from type 'X': a,b

        // let y: Y = {
        // c:"abdas",
        // d:42,
        // }
<br>

> ## **Now for interfaces**
        
        interface supercar extends Car{
                engine: string;
        }
<br>


> ## **Working with Hooks** 

> ### ***useState***

        const[todo, setTodo] = useState<string>("");

<br>

> ### <b>Destructuring Props in Components and setting their respective types<b> 

        interface Props{
                todo:string;
                setTodo: React.Dispatch<React.SetStateAction<string>>;
        }
        const InputField = ({todo, setTodo}: Props) => {
        return ()

        OR

        interface Props{
                todo:string;
                setTodo: React.Dispatch<React.SetStateAction<string>>;
        }
        const InputField:React.FC<Props> = ({todo, setTodo}) => {
        return ()

<br>
