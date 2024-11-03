/**
 * ende Initialisierung
 */
/**
 * test();
 */
/**
 * zerlege()
 */
function set_system(sname: string) {
    if (sname == "wolf") {
        basic.showString("W")
    }
}
function set_helligkeit(helligkeit: number, zch_pause: number) {
    strip_helligkeit = helligkeit
    strip_pause = zch_pause
    // console.log("helligkeit"+strip_helligkeit)
    for (let i = 0; i <= neo_strip_anzahl - 1; i++) {
        arr_neop_strips[i].setBrightness(strip_helligkeit)
    }
}
function loesche_matrix(snr: number) {
    arr_neop_strips[snr].clear()
    arr_neop_strips[snr].show()
}


function init_alphabet() {
    // bstreihenfolge einhalten
    bst_reihe = "? ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜäöü0123456789!?.,*+-=≠:%abcdefghijklmnopqrstuvwxyz#$&()/@;<>[]|{}~€"
    arr_zeichen = [
        [14, 17, 1, 2, 4, 0, 4, 0], //?
        [0, 0, 0, 0, 0, 0, 0, 0],
        [14, 17, 17, 31, 17, 17, 17, 0], //A
        [30, 17, 17, 30, 17, 17, 30, 0],
        [14, 17, 16, 16, 16, 17, 14, 0],
        [28, 18, 17, 17, 17, 18, 28, 0],
        [31, 16, 16, 30, 16, 16, 31, 0],
        [31, 16, 16, 30, 16, 16, 16, 0],
        [14, 17, 16, 23, 17, 17, 14, 0],
        [17, 17, 17, 31, 17, 17, 17, 0],
        [14, 4, 4, 4, 4, 4, 14, 0],
        [15, 2, 2, 2, 2, 18, 12, 0],
        [17, 18, 20, 24, 20, 18, 17, 0], //K
        [16, 16, 16, 16, 16, 16, 31, 0],
        [17, 27, 21, 21, 17, 17, 17, 0],
        [17, 17, 25, 21, 19, 17, 17, 0],
        [14, 17, 17, 17, 17, 17, 14, 0],
        [30, 17, 17, 30, 16, 16, 16, 0],
        [14, 17, 17, 17, 21, 18, 13, 0],
        [30, 17, 17, 30, 20, 18, 17, 0],
        [14, 17, 16, 14, 1, 17, 14, 0],
        [31, 4, 4, 4, 4, 4, 4, 0],       //T
        [17, 17, 17, 17, 17, 17, 14, 0],
        [17, 17, 17, 17, 17, 10, 4, 0],
        [17, 17, 17, 21, 21, 27, 17, 0],
        [17, 17, 10, 4, 10, 17, 17, 0],
        [17, 17, 10, 4, 4, 4, 4, 0],
        [31, 1, 2, 4, 8, 16, 31, 0], //Z
        [10, 0, 14, 17, 31, 17, 17, 0], //Ä
        [10, 0, 14, 17, 17, 17, 14, 0], //Ö
        [10, 0, 17, 17, 17, 17, 14, 0], //Ü
        [10, 0, 14, 1, 15, 17, 15, 0], //ä
        [0, 10, 0, 14, 17, 17, 14, 0], //ö
        [0, 10, 0, 17, 17, 17, 14, 0], //ü

        [14, 17, 19, 21, 25, 17, 14, 0], //0
        [4, 12, 4, 4, 4, 4, 14, 0],
        [14, 17, 1, 2, 4, 8, 31, 0],
        [31, 2, 4, 2, 1, 17, 14, 0],
        [2, 6, 10, 18, 31, 2, 2, 0],
        [31, 16, 30, 1, 1, 17, 14, 0],
        [6, 8, 16, 30, 17, 17, 14, 0],
        [31, 1, 2, 4, 4, 4, 4, 0],
        [14, 17, 17, 14, 17, 17, 14, 0],
        [14, 17, 17, 15, 1, 2, 12, 0],//9

        [4, 4, 4, 4, 4, 0, 4, 0], //!
        [14, 17, 1, 2, 4, 0, 4, 0], //?
        [0, 0, 0, 0, 0, 12, 12, 0], //.
        [0, 0, 0, 0, 0, 12, 12, 4], //,
        [0, 0, 4, 21, 14, 21, 4, 0], //*
        [0, 0, 4, 4, 31, 4, 4, 0], //+
        [0, 0, 0, 0, 31, 0, 0, 0], //-
        [0, 0, 0, 31, 0, 31, 0, 0], //=
        [1, 2, 31, 4, 31, 8, 16, 0], //
        [0, 0, 12, 12, 0, 12, 12, 0], //:
        [24, 25, 2, 4, 8, 19, 3, 0], //%

        [0, 0, 14, 1, 15, 17, 31, 0],//a
        [16, 16, 22, 25, 17, 17, 14, 0], //b
        [0, 0, 15, 16, 16, 16, 15, 0], //c
        [1, 1, 13, 19, 17, 17, 15, 0], //d
        [0, 0, 14, 17, 31, 16, 14, 0], //e
        [2, 5, 4, 14, 4, 4, 4, 4], //f
        [0, 0, 15, 17, 17, 15, 1, 14], //g
        [16, 16, 22, 25, 17, 17, 17, 0], //h
        [4, 0, 12, 4, 4, 4, 14, 0], //i
        [2, 0, 2, 2, 2, 2, 10, 4], //j
        [8, 8, 9, 10, 12, 10, 9, 0], //k
        [12, 4, 4, 4, 4, 4, 14, 0], //l
        [0, 0, 26, 21, 21, 21, 21, 0],//m
        [0, 0, 22, 25, 17, 17, 17, 0], //n
        [0, 0, 14, 17, 17, 17, 14, 0], //o
        [0, 0, 30, 17, 17, 30, 16, 16], //p
        [0, 0, 15, 17, 17, 15, 1, 1], //q
        [0, 0, 11, 12, 8, 8, 8, 0], //r
        [0, 0, 15, 16, 14, 1, 30, 0], //s
        [4, 14, 4, 4, 4, 5, 2, 0], //t
        [0, 0, 17, 17, 17, 19, 13, 0], //u
        [0, 0, 17, 17, 17, 10, 4, 0], //v
        [0, 0, 17, 17, 17, 21, 10, 0], //w
        [0, 0, 17, 10, 4, 10, 17, 0], //x
        [0, 0, 17, 9, 6, 4, 8, 16], //y
        [0, 0, 31, 2, 4, 8, 31, 0], //z
        [10, 10, 31, 10, 31, 10, 10, 0],
        [4, 15, 20, 14, 5, 30, 4, 0],
        [12, 18, 20, 8, 21, 18, 13, 0],
        [4, 8, 16, 16, 16, 8, 4, 0],
        [4, 2, 1, 1, 1, 2, 4, 0],
        [1, 2, 4, 8, 16, 0, 0, 0],
        [14, 17, 1, 9, 21, 21, 14, 0],
        [0, 12, 12, 0, 12, 4, 8, 0],
        [2, 4, 8, 16, 8, 4, 2, 0],
        [8, 4, 2, 1, 2, 4, 8, 0],
        [14, 8, 8, 8, 8, 8, 14, 0],
        [14, 2, 2, 2, 2, 2, 14, 0],
        [4, 4, 4, 4, 4, 4, 4, 0],
        [6, 8, 8, 16, 8, 8, 6, 0],
        [12, 2, 2, 1, 2, 2, 12, 0],
        [0, 0, 8, 21, 2, 0, 0, 0],
        [6, 9, 28, 8, 28, 9, 6, 0]
    ]


}

// }
input.onButtonPressed(Button.A, function () {
    automat = !automat;
})

input.onButtonPressed(Button.B, function () {
    arr_neop_strips[sss].rotate(-16); arr_neop_strips[sss].show();
})

input.onButtonPressed(Button.AB, function () {
    let s = 0
    // for (let s=0;s<neo_strip_anz;s++) {
    arr_neop_strips[s].clear()
    arr_neop_strips[s].show()
})


// set_helligkeit(80, 5000)
// testbetrieb
function test(snr: number, txt: string) {
    // init_strip(0, 0, 0)
    // set_helligkeit(40, 1000)
    // neop_scroll_zch(0, "ABCDEFGHIJKLMNOabcdefgh", NeoPixelColors.Green, -3)
    // neop_schreibe_zch(0,"B CA",NeoPixelColors.Red)

    // basic.showNumber(neo_strip_anzahl)

    if (neo_strip_anzahl > 1) {
        neop_schreibe_zch(0, "AB", NeoPixelColors.Green)
    } else if (neo_strip_anzahl > 2) {
        neop_schreibe_zch(2, "12340", NeoPixelColors.Blue)
    } else {
        // neop_schreibe_zch(0, "AdefgÄÖÜäöü0a", NeoPixelColors.Green)
        // neop_schreibe_zch(0, txt, NeoPixelColors.Green)
        neop_schreibe_zch(1, txt, NeoPixelColors.Red)
    }
}

function init_strip(nrMatrix: number, hwMatrix: number, pin: number) {
    arr_neop_settings[nrMatrix].pin = pin;
    arr_neop_settings[nrMatrix].hwMatrix = arr_tech_matrix[hwMatrix];
    pixelAnzahl = arr_tech_matrix[nrMatrix][0] * arr_tech_matrix[nrMatrix][1]

    // pixelAnzahl = breite;
    let strip = neopixel.create(arr_tech_pin[pin], pixelAnzahl, NeoPixelMode.RGB)
    strip.setBrightness(strip_helligkeit)
    arr_neop_strips[nrMatrix] = strip

    strip.clear()
    strip.show()

    // neo_strip_anzahl = Math.max(nrMatrix + 1, neo_strip_anzahl)
    neo_strip_anzahl = 1;


}

// muss sein, damit der index nicht fehlläuft
function default_strip_data() {
    arr_neop_settings.push({ pin: arr_tech_pin[0], hwMatrix: arr_tech_matrix[0] })
    // arr_neop_settings.push({ pin: arr_tech_pin[1], hwMatrix: arr_tech_matrix[1] })
    // arr_neop_settings.push({ pin: arr_tech_pin[2], hwMatrix: arr_tech_matrix[1] })
}

function zufallsFarbe(): number {
    let rot = Math.randomRange(0, 255)
    let gruen = Math.randomRange(0, 255)
    let blau = Math.randomRange(0, 255)
    return neopixel.rgb(rot, gruen, blau)
}

let sss = 0;
let automat = false;
let pixelAnzahl = 0
let neo_strip_anzahl = 0
let strip_pause = 0
let strip_helligkeit = 0
let arr_tech_matrix: number[][] = []

let arr_neop_settings: Array<neop> = []
let arr_neop_strips: Array<neopixel.Strip> = []
let shift: number = 0



function neop_schreibe_zch(snr: number, zch_str: string = "A", color: number) {
    let zeichen_matrix2: Array<number> = []

    let mx2 = arr_neop_settings[snr].hwMatrix[0];
    let my2 = arr_neop_settings[snr].hwMatrix[1];



    my2 = zch_str.length;
    arr_neop_settings[snr].hwMatrix[1] = my2 * 6;
    init_strip(0, 0, 1)
    arr_neop_strips[snr].showRainbow(1, 360)




    let is_type2 = 0; //buchstabe
    sss = snr;
    let zch_len2 = zch_str.length
    if (zch_len2 > 1) {
        is_type2 = 1; // wort
        let arr_split2 = zch_str.split(",")
        if (arr_split2.length > 2) {
            is_type2 = 2; //array 
            zeichen_matrix2 = arr_split2.map(wert => parseInt(wert));
            zch_len2 = 1;
        }
    }

    arr_neop_strips[snr].clear()
    arr_neop_strips[snr].show()
    let mycolor = zufallsFarbe();

    for (let o = 0; o < zch_len2; o++) {
        let zch2: string;
        if (is_type2 < 2) { //no array
            zch2 = zch_str[o]
            let found2 = bst_reihe.indexOf(zch2);
            if (found2 == -1) {
                found2 = 0;
            }
            zeichen_matrix2 = arr_zeichen[found2]
        }
        // arr_neop_strips[snr].clear()
        // arr_neop_strips[snr].show()


        // basic.showString(zch2)
        zeichen_matrix2.forEach(function (zahl, zeile) {
            for (let bit2 = 0; bit2 < mx2; bit2++) {
                // let z = zeile, c = bit2 //7- minus
                let c = zeile, z = bit2 //7- minus 2024
                //b=z, z=bit
                //b=z, z=mx-1-bit
                if (zahl & Math.pow(2, (bit2 + shift + mx2) % mx2)) {
                    // let px2 = z * mx2 + ((z % 2) ? (mx2 - 1 - c) : c)
                    let px2 = z * mx2 + ((z % 2) == 0 ? (mx2 - 1 - c) : c)
                    arr_neop_strips[snr].setPixelColor(px2, color);
                    // arr_neop_strips[snr].showRainbow(1, 360)
                    //    basic.showNumber(c)
                }
            }
        })
        // arr_neop_strips[snr].show()
        // arr_neop_strips[sss].show();
        if (is_type2 == 1) {
            // pause(strip_pause)
        }

        arr_neop_strips[sss].rotate(16 * 3);
        arr_neop_strips[sss].show();

        // arr_neop_strips[snr].rotate(0);
        // arr_neop_strips[snr].show();
    }
    automat = true;

}
interface neop {
    pin: number;
    hwMatrix: Array<number>;
}
// hardwareeinstellungen ########################### 3 Matriken
// entweder alte verdrahtung, dann 32 x 8 oder 68 x 32
arr_tech_matrix = [[8, 32], [8, 8], [5, 7], [16, 16]]
let arr_tech_pin = [
    DigitalPin.P0,
    DigitalPin.P1,
    DigitalPin.P2,
    DigitalPin.P3,
    DigitalPin.P4,
    DigitalPin.P5,
    DigitalPin.P6,
    DigitalPin.P7,
    DigitalPin.P8
]
// hardwareeinstellungen end ###########################
let bst_muster = [
    31,
    31,
    31,
    31
]
let bst_reihe: string = "";
strip_helligkeit = 25;
// aucha scrollspeed
strip_pause = 500
let arr_zeichen: number[][];
neo_strip_anzahl = 1
// ende variable
// beginn initialisierung ############################
init_alphabet()
default_strip_data()
basic.showIcon(IconNames.No)
// test();
const vers = 2021;
// test("ÄÖÜäöüabcdefghijklmnopqrstuvwxyz");
// test("fgjkpqyz");
// test("ABCabcöäü")
test(0, "Aber das ist falsch. ")
test(1, "Aber das ist falsch. ")
// test("Das ist eine gute Möglichkeite * ");

basic.forever(() => {
    if (automat) {
        arr_neop_strips[0].rotate(16 * 1);
        arr_neop_strips[0].show();

        arr_neop_strips[1].rotate(16 * 1);
        arr_neop_strips[1].show();


        basic.pause(strip_pause)
    }
})
