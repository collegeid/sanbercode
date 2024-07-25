function evenOdd(number) {
    if (number % 2 === 0) {
        console.log(number + " adalah angka genap.");
    } else {
        console.log(number + " adalah angka ganjil.");
    }
}

evenOdd(7); 
evenOdd(10); 

function printDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Hari ini adalah Senin.");
            break;
        case 2:
            console.log("Hari ini adalah Selasa.");
            break;
        case 3:
            console.log("Hari ini adalah Rabu.");
            break;
        case 4:
            console.log("Hari ini adalah Kamis.");
            break;
        case 5:
            console.log("Hari ini adalah Jumat.");
            break;
        case 6:
            console.log("Hari ini adalah Sabtu.");
            break;
        case 7:
            console.log("Hari ini adalah Minggu.");
            break;
        default:
            console.log("Nomor hari tidak valid.");
    }
}

printDayName(3); 
printDayName(8); 
