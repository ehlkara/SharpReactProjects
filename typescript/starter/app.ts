let age: number = 29;
let firstname: string = 'Ehlullah';
let lastname: string = 'Karakurt';
let isUpdated: boolean = true;

function display(id: number, name: string) {
    console.log('ID:', id, 'Name:', name);
}

display(age, `${firstname} ${lastname}`);