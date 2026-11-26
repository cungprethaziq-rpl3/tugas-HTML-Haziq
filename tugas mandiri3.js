const karakter = { 
nama: "Nana", 
level: 1, 
hp: 100, 
senjata: "Pedang Kayu" 
}; 
console.log(karakter.nama);        
console.log(karakter["hp"]);       
karakter.hp = 80;                  
karakter.level = 2; 
karakter.armor = "Perisai Perunggu"; 
console.log(karakter); 